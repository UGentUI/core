import SlButton from '@shoelace-style/shoelace/dist/components/button/button.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-button')
export class UgButton extends SlButton {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-button': UgButton;
  }
}
