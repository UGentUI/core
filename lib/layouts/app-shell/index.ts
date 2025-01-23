import { css, html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
// @ts-expect-error twlit genereert dit bestand, zonder declaration weliswaar.
import { TWStyles } from '../../styles/tw.js';
import { UgInput } from '../../components/input';
import { UgMenu } from '../../components/menu';
import { UgMenuItem } from '../../components/menu-item';
import { UgDropdown } from '../../components/dropdown';
import { UgTextarea } from '../../components/textarea';
import { UgIconButton } from '../../components/icon-button';
import { UgBadge } from '../../components/badge';
import { UgDrawer } from '../../components/drawer';
import { classMap } from 'lit/directives/class-map.js';
import { UgDivider } from '../../components/divider';
import { UgDialog } from '../../components/dialog';
import { ICompactable, isCompactable, UgNavigationItem } from '../navigation/navigation-item';

/**
 * finds recursively all elements with a writable property 'compact'
 * @param nodes
 */
export function findFlatWritableCompactableElements(nodes: Node[]) {
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (isCompactable(node)) {
      return node;
    } else {
      // Look into children nodes (goes deeply)
      if (node.childNodes && node.childNodes.length > 0) {
        return findFlatWritableCompactableElements(Array.from(node.childNodes));
      } else {
        return null;
      }
    }
  }
}

const shellStyle = css``;

@customElement('ug-app-shell')
export class AppShell extends LitElement {
  static styles = [TWStyles, shellStyle];

  static dependencies = {
    'ug-navigation-item': UgNavigationItem,
    'ug-drawer': UgDrawer,
    'ug-dialog': UgDialog,
    'ug-input': UgInput,
    'ug-icon': UgMenu,
    'ug-badge': UgBadge,
    'ug-menu-item': UgMenuItem,
    'ug-dropdown': UgDropdown,
    'ug-textarea': UgTextarea,
    'ug-icon-button': UgIconButton,
    'ug-divider': UgDivider
  };

  @query('#drawer')
  ugDrawer!: UgDrawer;

  @query('#searchDialog')
  searchDialog!: UgDialog;

  // @query('#sidebar')
  // ugDrawer!: UgDrawer;

  @query('#desktopSidebar')
  desktopSidebar!: HTMLElement;

  @query('#headerNavigation')
  headerNavigation!: HTMLElement;

  @query('slot[name=navigation]')
  headerNavigationSlot!: HTMLSlotElement;

  /**
   * Tells whether the sidebar is shown in full width or not.
   * Note that this property is only relevant in case
   */
  @property({ type: Boolean, attribute: 'sidebar-expanded' })
  sidebarExpanded!: boolean;

  @property({ type: String, attribute: 'app-title' })
  appTitle: string | undefined;

  // @query('slot')
  // private slot!: HTMLSlotElement;

  slottedSearch: HTMLElement | null = null;

  doNotHideElements: string[] = ['UG-DIVIDER'];

  public toggleDesktopSidebar = () => {
    this.sidebarExpanded = !this.sidebarExpanded;
    this.rerenderDesktopSidebar();
  };

  private rerenderDesktopSidebar() {
    // Find the slot
    const slot: HTMLSlotElement | null = this.renderRoot.querySelector('slot[name="side"]');
    if (slot) {
      // Get assigned nodes
      const assignedNodes = slot.assignedNodes({ flatten: true });
      let renderInCompactMode = !this.sidebarExpanded;

      for (let i = 0; i < assignedNodes.length; i++) {
        let node = assignedNodes[i];
        let compactableElement = findFlatWritableCompactableElements([node]);
        if (compactableElement) {
          (compactableElement as ICompactable).compact = renderInCompactMode;
        } else {
          if (renderInCompactMode) {
            let tagname = (node as HTMLElement).tagName;
            if (this.doNotHideElements.includes(tagname)) continue;

            //hide the element
            (node as HTMLElement).classList.add('hidden');
            console.trace('No compactable elements found, so hiding the node in sidebar.', node);
          } else {
            (node as HTMLElement).classList.remove('hidden');
          }
        }
      }
    } else {
      console.error('No slot found with name "side"');
    }
  }

  public showDrawer = () => {
    return this.ugDrawer.show();
  };

  public closeDrawer = () => {
    return this.ugDrawer.hide();
  };

  public slottedSearchChanged = (slotted: HTMLElement | null) => {
    // console.info('slottedSearchChanged', slotted);
    this.slottedSearch = slotted;
  };

  public triggerSearch = () => {
    return this.searchDialog.show().then(() => {
      // console.info('Shown !!!', this.slottedSearch);
    });
  };

  public closeSearch = () => {
    return this.searchDialog.hide();
  };

  recalculateTopNavigationVisibility = () => {
    let moreDropdown = this.headerNavigation.querySelector('#moreNavigationDropdown') as UgDropdown;
    let moreMenu = this.headerNavigation.querySelector('#moreNavigationDropdown > ug-menu') as UgMenu;

    // let availableWidth = this.headerNavigation.offsetWidth;
    // console.info('Available width: ', availableWidth);

    //at first: make all navigation items visible (display:block) but make visibility hidden. This way
    //we avoid that user can see the changes while we are moving items to the dropdown
    let nodes = this.headerNavigationSlot.assignedNodes({ flatten: true }) as HTMLElement[];
    nodes.forEach((element) => {
      element.classList.add('invisible');
      element.classList.remove('hidden');
    });

    let requiredWidth = this.calculateOccupiedTopWidthByTopNavigation();

    if (requiredWidth > this.headerNavigation.offsetWidth) {
      // console.info('required with > this.headerNavigation.offsetWidth');
      this.headerNavigation.classList.add('invisible');

      // console.info('availableWidth: ', availableWidth);

      //show dropdown
      moreDropdown.classList.remove('hidden');

      //since we are showing now a dropdown, the real available with is  headernavigation with - dropdownwith
      let availableWidth = this.headerNavigation.offsetWidth - moreDropdown.offsetWidth;

      //make a list of items ordered by priority. An item with a low priority moved to the more dropdown more likely
      let moreLikelyNodesToHideFirst = nodes.reverse();

      //clear the dropdown menu
      moreMenu.innerHTML = '';
      let i = 0;
      do {
        //hide the node from topNavigatino
        moreLikelyNodesToHideFirst[i].classList.add('hidden');

        //add it as menu item to the dropdown
        let ugMenuItem = document.createElement('ug-menu-item');
        ugMenuItem.innerHTML = moreLikelyNodesToHideFirst[i].innerHTML;
        moreMenu.prepend(ugMenuItem);

        requiredWidth = this.calculateOccupiedTopWidthByTopNavigation();
        i++;
      } while (requiredWidth > availableWidth && i < moreLikelyNodesToHideFirst.length);

      this.headerNavigation.classList.remove('invisible');
      //we are done: remove the invisible class
      nodes.forEach((element) => {
        element.classList.remove('invisible');
      });
    } else {
      moreDropdown.classList.add('hidden');
      moreMenu.innerHTML = '';

      let nodes = this.headerNavigationSlot.assignedNodes({ flatten: true }) as HTMLElement[];
      nodes.forEach((element) => {
        element.classList.remove('invisible');
        element.classList.remove('hidden');
      });
    }

    // console.info('total_with: ', requiredWidth);
  };

  private calculateOccupiedTopWidthByTopNavigation() {
    let nodes = this.headerNavigationSlot.assignedNodes({ flatten: true }) as HTMLElement[];
    let requiredWidth = 0;
    nodes.forEach((element) => {
      requiredWidth += element.offsetWidth;
    });
    return requiredWidth;
  }

  render() {
    return html`

      <div class="antialiased bg-neutral-50 h-screen w-screen flex flex-col overflow-hidden">
        <!-- Mobile Drawer -->
        <div id="drawer-backdrop" class="bg-neutral-900/50 fixed inset-0 z-40 hidden lg:hidden"
             @click="${this.closeDrawer}">
        </div>
        <ug-drawer id="drawer" no-header placement="start" class="lg:hidden">
          <!-- Mobile Navigation Content -->
          <nav>
            <ug-icon-button library="fa" name="xmark-large" label="Close" @click="${this.closeDrawer}"
                            class="absolute top-4 right-3 z-40 -m-1"></ug-icon-button>
            ${!this.sideNavigationUsesSidebar ? html` <slot class="flex flex-col gap-1" name="side"></slot> ` : ''}

          </nav>
        </ug-drawer>

        <!-- Main Navigation Bar -->
        <section class="bg-white border-b border-neutral-200 p-4  left-0 right-0 top-0 z-30">
          <div class="flex items-center justify-between">
            <!-- Left Section -->
            <div class="flex items-center h-8">
              <button type="button" @click="${this.showDrawer}" class="lg:hidden text-neutral-700 rounded-lg">
                <ug-icon library="fa" name="bars" class="h-5 w-5"></ug-icon>
              </button>
              <ug-divider vertical class="lg:hidden"></ug-divider>
              <a href="#" class=" items-center hidden md:flex">
                <ug-icon src="/lib/assets/brand/logo-ugent.svg" class="w-8 h-8 mr-2"></ug-icon>
                <span class="self-center text-2xl font-semibold whitespace-nowrap">${this.appTitle}</span>
              </a>
            </div>

            <!-- Optional Page Links -->
            <nav id="headerNavigation" class=" flex flex-1  items-center overflow-hidden">
              <slot name="navigation" class="flex  lg:flex items-center space-x-6">
              </slot>
              <ug-dropdown id="moreNavigationDropdown">
                <ug-button slot="trigger" variant="text" caret>Meer...</ug-button>
                <ug-menu>
                  <ug-menu-item>Dropdown Item 1</ug-menu-item>
                  <ug-menu-item>Dropdown Item 2
                    <ug-icon slot="prefix" library="fa" name="house">2</ug-icon>
                    <ug-badge slot="suffix">2</ug-badge>
                  </ug-menu-item>
                </ug-menu>
            </nav>


            <!-- Right Section: Search and Actions -->
            <div class="flex items-center h-8">
              ${
                this.searchUsesDialog
                  ? html`
                      <ug-icon-button
                        @click="${this.triggerSearch}"
                        library="fa"
                        name="magnifying-glass"
                        label="Search"
                      ></ug-icon-button>
                      <ug-dialog id="searchDialog" title="Search" class=" w-full" no-header>
                        <slot name="search" @slotchange="${this.slottedSearchChanged}"></slot>
                      </ug-dialog>
                    `
                  : html` <slot name="search" @slotchange="${this.slottedSearchChanged}" class="w-64 mr-4"></slot> `
              }
              <div class="flex items-center flex-1 ">
                <slot name="action"></slot>
              </div>

              <ug-divider vertical class="mx-4" ?hidden="${!this.hasNamedSlot('user')}"></ug-divider>

              <slot name="user"></slot>

            </div>
          </div>
        </section>

        <!-- Page Layout -->
        <div class="flex-1  flex overflow-hidden">
          <!-- Desktop Sidebar -->
          <aside id="desktopSidebar" class="flex hidden lg:flex  bg-white border-r border-neutral-200 relative ${classMap({ 'w-64': this.sidebarExpanded, 'w-16': !this.sidebarExpanded })} "
                 aria-label="Sidenav">


            ${
              this.sideNavigationUsesSidebar
                ? html` <slot
                    name="side"
                    class="flex-1 flex flex-col gap-1 p-3 overflow-y-auto overflow-x-hidden"
                  ></slot>`
                : ''
            }

            <div class="flex-0">
              <button type="button" @click="${this.toggleDesktopSidebar}"
                      class="absolute -right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-white border border-neutral-200 hover:bg-neutral-50 z-10"
                      aria-label="Toggle sidebar">
                <ug-icon library="fa" name="chevron-left" class="text-sm text-neutral-400  ${classMap({ 'rotate-180': !this.sidebarExpanded })}"></ug-icon>
              </button>
            </div>


          </aside>

          <!-- Main Content Area -->
          <main id="main" class="flex-1 p-4 overflow-y-auto ">
            <slot name="main"></slot>
          </main>
        </div>
      </div>
    `;
  }

  /**
   * If true, the sidebar is used for rendering the side navigation.
   * This sidebar can hove 2 modi:
   * expanded: show the navigation items with icon, label and optionally a right slot (badge)
   * not expanded: show only the icons of the navigation items
   *
   * If false, the navigation items are rendered in a drawer.
   * @private
   */
  @state()
  private sideNavigationUsesSidebar: boolean = false;

  @state()
  private searchUsesDialog: boolean = false;

  firstUpdated() {
    setTimeout(() => {
      this.recalculateSideNavigationUsesSidebar();
      this.recalculateTopNavigationVisibility();
      this.rerenderDesktopSidebar();
    });
  }

  /**
   * the fact if the drawer is used or not is defined by the responsive classes
   * on desktopSidebar. (it is hidden by default and becomes hidden lg:flex on lg screens)
   * To know in which case we are, compote the style.display. (if it differs from none, the
   * sidebar is used. Otherwise the drawer is ued.)
   */
  recalculateSideNavigationUsesSidebar = () => {
    const style = window.getComputedStyle(this.desktopSidebar);
    console.info('desktopsidebar style: ', style.display);

    let previousSidebarVisible = this.sideNavigationUsesSidebar;
    let newSidebarVisible = style.display !== 'none';
    if (newSidebarVisible !== previousSidebarVisible) {
      //the sidebarVisible did change
      this.sideNavigationUsesSidebar = newSidebarVisible;
      this.searchUsesDialog = !this.sideNavigationUsesSidebar;
    }
  };

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('resize', this.recalculateSideNavigationUsesSidebar);
    window.addEventListener('resize', this.recalculateTopNavigationVisibility);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  private hasNamedSlot(name: string) {
    return this.querySelector(`:scope > [slot="${name}"]`) !== null;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ug-app-shell': AppShell;
  }
}
