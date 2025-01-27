import { css, html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { UgMenu } from '../../components/menu';
import { UgMenuItem } from '../../components/menu-item';
import { UgDropdown } from '../../components/dropdown';
import { UgBadge } from '../../components/badge';
import { UgDivider } from '../../components/divider';
import { UgAvatar } from '../../components/avatar';
import { TWStyles } from '../../styles/tw';

const shellStyle = css`
    ug-avatar {
        --size: var(--ug-spacing-x-large);
    }
 }
`;

@customElement('ug-app-shell-user')
export class AppShellUSer extends LitElement {
  static styles = [TWStyles, shellStyle];
  static dependencies = {
    'ug-avatar': UgAvatar,
    'ug-icon': UgMenu,
    'ug-badge': UgBadge,
    'ug-menu-item': UgMenuItem,
    'ug-dropdown': UgDropdown,
    'ug-divider': UgDivider
  };

  @query('#drawer')
  ugDropdown!: UgDropdown;

  @property({ type: String, attribute: 'display-name' })
  displayName: string;


  render() {
    return html`
      <ug-dropdown id="dropdown" slot="user" placement="bottom-end" distance="10">
        <a slot="trigger" href="#" class="flex items-center">
          <ug-avatar label="User avatar" size="small" class="mr-2"></ug-avatar>
          <span class="mr-2 font-semibold text-sm hidden md:block" >${this.displayName}</span>
          <ug-icon name="chevron-down" class="text-xs hidden md:block"></ug-icon>
        </a>
        <ug-menu class="border">
          <ug-menu-item disabled class="block md:hidden">${this.displayName}</ug-menu-item>
          <slot name="menu-item"></slot>
        </ug-menu>
      </ug-dropdown>


    `;
  }

  private hasNamedSlot(name: string) {
    return this.querySelector(`:scope > [slot="${name}"]`) !== null;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ug-app-shell-user': AppShellUSer;
  }
}
