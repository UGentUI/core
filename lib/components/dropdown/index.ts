import SlDropdown from '@shoelace-style/shoelace/dist/components/dropdown/dropdown.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-dropdown')
export class UgDropdown extends SlDropdown {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-dropdown': UgDropdown;
  }
}
