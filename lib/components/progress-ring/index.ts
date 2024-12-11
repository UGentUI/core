import SlProgressRing from '@shoelace-style/shoelace/dist/components/progress-ring/progress-ring.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-progress-ring')
export class UgProgressRing extends SlProgressRing {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-progress-ring': UgProgressRing;
  }
}
