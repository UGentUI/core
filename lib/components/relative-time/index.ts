import SlRelativeTime from '@shoelace-style/shoelace/dist/components/relative-time/relative-time.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-relative-time')
export class UgRelativeTime extends SlRelativeTime {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-relative-time': UgRelativeTime;
  }
}
