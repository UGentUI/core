import SlAnimation from '@shoelace-style/shoelace/dist/components/animation/animation.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-animation')
export class UgAnimation extends SlAnimation {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-animation': UgAnimation;
  }
}
