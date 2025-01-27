import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { UgMenu } from '../../../components/menu';
import { UgDropdown } from '../../../components/dropdown';
import { TWStyles } from '../../../styles/tw';
import { UgButton } from '../../../components/button';
import { UgResizeObserver } from '../../../components/resize-observer';

const shellStyle = css`
  :host {
    overflow: hidden;
    display: block;
  }
`;

@customElement('ug-nav-bar')
export class UgNavigationBar extends LitElement {
  static styles = [TWStyles, shellStyle];
  static dependencies = {
    'ug-dropdown': UgMenu,
    'ug-button': UgButton,
    'ug-menu': UgMenu,
    'ug-resize-observer': UgResizeObserver
  };

  @query('#headerNavigation')
  headerNavigation!: HTMLElement;

  @query('slot[name=navigation]')
  headerNavigationSlot!: HTMLSlotElement;

  connectedCallback(): void {
    super.connectedCallback();
    setTimeout(this.recalculateTopNavigationVisibility);
    window.addEventListener('resize', this.recalculateTopNavigationVisibility);
  }

  public recalculateTopNavigationVisibility = () => {
    let moreDropdown = this.headerNavigation.querySelector('#moreNavigationDropdown') as UgDropdown;
    let moreMenu = this.headerNavigation.querySelector('#moreNavigationDropdown > ug-menu') as UgMenu;

    // let availableWidth = this.headerNavigation.offsetWidth;
    // console.info('Available width: ', availableWidth);

    //at first: make all navigation items visible (display:block) but make visibility hidden. This way
    //we avoid that user can see the changes while we are moving items to the dropdown
    let nodes = this.headerNavigationSlot.assignedNodes({ flatten: true }) as HTMLElement[];
    nodes.forEach((element) => {
      if (element.classList) {
        element.classList.add('invisible');
        element.classList.remove('hidden');
      }
    });

    //calculate the required width
    let requiredWidth = this.calculateOccupiedTopWidthByTopNavigation();

    if (requiredWidth > this.headerNavigation.offsetWidth) {
      //we cannot fit everything in the available space, so move some items to the more... dropdown
      //while we're doing this, add invisible to the header, so this movement cannot be seen by the user
      // console.info('required with > this.headerNavigation.offsetWidth');
      this.headerNavigation.classList.add('invisible');

      //show dropdown
      moreDropdown.classList.remove('hidden');

      //since we are showing now a dropdown, the real available with is  headernavigation with - dropdownwith
      let availableWidth = this.headerNavigation.offsetWidth - moreDropdown.offsetWidth;

      //make a list of items ordered by priority. An item with a low priority (high number), is moved to the more dropdown more likely.
      //number 1 is the highest priority, so stays most likely in the navigationbar
      nodes.forEach((n) => {
        if (!n.hasAttribute('priority')) {
          n.setAttribute('priority', '' + Number.MAX_VALUE);
        }
      });

      let moreLikelyNodesToHideFirst = [...nodes].sort(
        (a, b) => Number(a.getAttribute('priority')) - Number(b.getAttribute('priority'))
      );

      //now move navigationItems to the dropdown until we have enough room.
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

      //all movement is done,
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
        if (element.classList) {
          element.classList.remove('invisible');
          element.classList.remove('hidden');
        }
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
      <ug-resize-observer @ug-resize=${this.recalculateTopNavigationVisibility}>
        <nav id="headerNavigation" class=" flex flex-1  items-center overflow-hidden">
          <slot name="navigation" class="flex  lg:flex items-center space-x-6">

          </slot>
          <ug-dropdown id="moreNavigationDropdown">
            <ug-button slot="trigger" variant="text" caret>Meer...</ug-button>
            <ug-menu>
            </ug-menu>
        </nav>
      </ug-resize-observer>
    `;
  }

  private hasNamedSlot(name: string) {
    return this.querySelector(`:scope > [slot="${name}"]`) !== null;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ug-nav-bar': UgNavigationBar;
  }
}
