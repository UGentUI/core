import SlSpinner from '@shoelace-style/shoelace/dist/components/spinner/spinner.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-spinner')
export class UgSpinner extends SlSpinner {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-spinner': UgSpinner;
  }
}
