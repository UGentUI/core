import SlIconButton from '@shoelace-style/shoelace/dist/components/icon-button/icon-button.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-icon-button')
export class UgIconButton extends SlIconButton {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-icon-button': UgIconButton;
  }
}
