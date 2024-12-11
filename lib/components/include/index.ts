import SlInclude from '@shoelace-style/shoelace/dist/components/include/include.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-include')
export class UgInclude extends SlInclude {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-include': UgInclude;
  }
}
