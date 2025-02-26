import SlIcon from '@shoelace-style/shoelace/dist/components/icon/icon.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-icon')
export class UgIcon extends SlIcon {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-icon': UgIcon;
  }
}
