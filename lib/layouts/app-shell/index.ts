import { css, html, LitElement, PropertyValueMap } from 'lit';
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
import { UgNavigationBar } from '../navigation/navigation-bar';
import { ResponsiveBreakpointLogger } from '../responsive-breakpoint-logger';

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
    'ug-divider': UgDivider,
    'ug-nav-bar': UgNavigationBar,
    'ug-breakpoint-logger': ResponsiveBreakpointLogger
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

  /**
   * Tells whether the sidebar is shown in full width or not.
   * Note that this property is only relevant in case
   */
  @property({ type: Boolean, attribute: 'sidebar-expanded' })
  sidebarExpanded!: boolean;

  @property({ type: String, attribute: 'app-title' })
  appTitle: string | undefined;

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

  @state()
  private topNavigationRendersInDrawer: boolean = false;

  slottedSearch: HTMLElement | null = null;

  doNotHideElements: string[] = ['UG-DIVIDER'];

  public toggleDesktopSidebar = () => {
    this.sidebarExpanded = !this.sidebarExpanded;
    this.handleSidbarSlotElements();
  };

  /**
   * elements in the slot 'side' can be rendered in 3 modes:
   * <ul>
   *   <li>large screen, sidebar expanded: Here sidebar elements are fully rendered</li>
   *   <li>large screen, sidebar collapsed: Here the sidebar elements are rendered in compact mode (label is hidden)</li>
   *   <li>small screen: </li>
   * </ul>
   * @private
   */
  handleSidbarSlotElements = () => {
    // Find the slot
    const slot: HTMLSlotElement | null = this.renderRoot.querySelector('slot[name="side"]');
    if (slot) {
      // Get assigned nodes
      const assignedNodes = slot.assignedNodes({ flatten: true });
      //
      let renderInCompactMode = !this.sidebarExpanded && this.sideNavigationUsesSidebar;

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
            // console.debug('No compactable elements found, so hiding the node in sidebar.', node);
          } else {
            (node as HTMLElement).classList.remove('hidden');
          }
        }
      }
    } else {
      console.error('No slot found with name "side"');
    }
  };
  /**
   * Elements in the slot 'topnavigation' are screens md or larger rendered at the top in a <ug-nav-bar>.
   * On sm screens, those elements are rendered in the drawer.
   * This
   * @private
   */
  handleNavigationSlotElements = () => {
    // Find the slot
    const navbar: HTMLElement | null = this.renderRoot.querySelector('ug-nav-bar');
    if (navbar) {
      let computedStyle = window.getComputedStyle(navbar);
      this.topNavigationRendersInDrawer = computedStyle.display === 'none';
    }
    console.info('Navbar renders in drawer: ', this.topNavigationRendersInDrawer);
  };

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

  render() {
    // console.info("searchusesdialog: ", this.searchUsesDialog);
    return html`
      <div class="antialiased bg-neutral-50 h-screen w-screen flex flex-col overflow-hidden">
        <!-- Mobile Drawer -->
        <div
          id="drawer-backdrop"
          class="bg-neutral-900/50 fixed inset-0 z-40 hidden lg:hidden"
          @click="${this.closeDrawer}"
        ></div>
        <ug-drawer id="drawer" no-header placement="start">
          <!-- Mobile Navigation Content -->
          <nav>
            <ug-icon-button
              library="fa"
              name="xmark-large"
              label="Close"
              @click="${this.closeDrawer}"
              class="absolute top-4 right-3 z-40 -m-1"
            ></ug-icon-button>
            ${this.topNavigationRendersInDrawer ? html`
              <slot slot="navigation" name="navigation"></slot>` : ''}
            ${!this.sideNavigationUsesSidebar ? html`
              <slot class="flex flex-col gap-1" name="side"></slot> ` : ''}
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
            <ug-nav-bar class="pl-2 flex-1 hidden md:block">
              ${this.topNavigationRendersInDrawer ? html`` : html`
                <slot slot="navigation" name="navigation"></slot> `}
            </ug-nav-bar>

            <!-- Right Section: Search and Actions -->
            <div class="flex items-center h-8">
              ${this.searchUsesDialog
                ? html`
                  <ug-icon-button
                    @click="${this.triggerSearch}"
                    library="fa"
                    name="magnifying-glass"
                    label="Search"
                  ></ug-icon-button>
                  <ug-dialog id="searchDialog" title="Search" class="w-full" no-header>
                    <slot name="search" @slotchange="${this.slottedSearchChanged}"></slot>
                  </ug-dialog>
                `
                : html`
                  <slot name="search" @slotchange="${this.slottedSearchChanged}" class="w-64 mr-4"></slot> `}
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
          <aside
            id="desktopSidebar"
            class="hidden lg:flex  bg-white border-r border-neutral-200 relative ${classMap({
              'w-64': this.sidebarExpanded,
              'w-16': !this.sidebarExpanded
            })} "
            aria-label="Sidenav"
          >
            ${this.sideNavigationUsesSidebar
              ? html`
                <slot
                  name="side"
                  class="flex-1 flex flex-col gap-1 p-3 overflow-y-auto overflow-x-hidden"
                ></slot>`
              : ''}

            <div class="flex-0">
              <button
                type="button"
                @click="${this.toggleDesktopSidebar}"
                class="absolute -right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-white border border-neutral-200 hover:bg-neutral-50 z-10"
                aria-label="Toggle sidebar"
              >
                <ug-icon
                  library="fa"
                  name="chevron-left"
                  class="text-sm text-neutral-400  ${classMap({ 'rotate-180': !this.sidebarExpanded })}"
                ></ug-icon>
              </button>
            </div>
          </aside>

          <!-- Main Content Area -->
          <main id="main" class="flex-1 p-4 overflow-y-auto ">
            <!--            <ug-breakpoint-logger></ug-breakpoint-logger>-->
            <slot name="main"></slot>
          </main>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    setTimeout(() => {
      this.recalculateSideNavigationUsesSidebar();
      this.handleSidbarSlotElements();
      this.handleNavigationSlotElements();
    });
  }

  updated(changedProperties: PropertyValueMap<AppShell>) {
    super.updated(changedProperties);
    if (changedProperties.has('sidebarExpanded')) {
      this.handleSidbarSlotElements();
    }
  }

  /**
   * the fact if the drawer is used or not is defined by the responsive classes
   * on desktopSidebar: it is hidden by default and becomes visible on lg screens (classes: hidden lg:flex)
   * To know in which case we are, we compute the style.display. (if it differs from none, the
   * sidebar is used. Otherwise the drawer is used.)
   *
   * The state param searchUsesDialog is now also based on sideNavigationUsesSidebar (inverse)
   */
  recalculateSideNavigationUsesSidebar = () => {
    const style = window.getComputedStyle(this.desktopSidebar);

    let previousSidebarVisible = this.sideNavigationUsesSidebar;
    let newSidebarVisible = style.display !== 'none';
    if (newSidebarVisible !== previousSidebarVisible) {
      //the sidebarVisible did change
      this.sideNavigationUsesSidebar = newSidebarVisible;
    }
    this.searchUsesDialog = !this.sideNavigationUsesSidebar;
  };

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('resize', this.recalculateSideNavigationUsesSidebar);
    window.addEventListener('resize', this.handleSidbarSlotElements);
    window.addEventListener('resize', this.handleNavigationSlotElements);
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
