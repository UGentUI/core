import SlMenuLabel from '@shoelace-style/shoelace/dist/components/menu-label/menu-label.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-menu-label')
export class UgMenuLabel extends SlMenuLabel {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-menu-label': UgMenuLabel;
  }
}
