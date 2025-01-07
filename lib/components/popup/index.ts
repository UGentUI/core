import SlPopup from '@shoelace-style/shoelace/dist/components/popup/popup.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-popup')
export class UgPopup extends SlPopup {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-popup': UgPopup;
  }
}
