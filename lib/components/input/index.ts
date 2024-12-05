import SlInput from '@shoelace-style/shoelace/dist/components/input/input.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-input')
export class UgInput extends SlInput {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-input': UgInput;
  }
}
