import SlMenu from '@shoelace-style/shoelace/dist/components/menu/menu.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-menu')
export class UgMenu extends SlMenu {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-menu': UgMenu;
  }
}
