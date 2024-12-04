import SlVisuallyHidden from '@shoelace-style/shoelace/dist/components/visually-hidden/visually-hidden.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-visually-hidden')
export class UgVisuallyHidden extends SlVisuallyHidden {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-visually-hidden': UgVisuallyHidden;
  }
}
