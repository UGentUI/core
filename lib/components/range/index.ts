import SlRange from '@shoelace-style/shoelace/dist/components/range/range.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-range')
export class UgRange extends SlRange {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-range': UgRange;
  }
}
