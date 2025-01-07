import SlRating from '@shoelace-style/shoelace/dist/components/rating/rating.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-rating')
export class UgRating extends SlRating {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-rating': UgRating;
  }
}
