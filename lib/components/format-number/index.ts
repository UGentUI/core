import SlFormatNumber from '@shoelace-style/shoelace/dist/components/format-number/format-number.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-format-number')
export class UgFormatNumber extends SlFormatNumber {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-format-number': UgFormatNumber;
  }
}
