import SlCheckbox from '@shoelace-style/shoelace/dist/components/checkbox/checkbox.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-checkbox')
export class UgCheckbox extends SlCheckbox {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-checkbox': UgCheckbox;
  }
}
