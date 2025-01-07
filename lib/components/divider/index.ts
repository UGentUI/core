import SlDivider from '@shoelace-style/shoelace/dist/components/divider/divider.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-divider')
export class UgDivider extends SlDivider {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-divider': UgDivider;
  }
}
