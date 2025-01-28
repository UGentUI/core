import SlFormatDate from '@shoelace-style/shoelace/dist/components/format-date/format-date.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-format-date')
export class UgFormatDate extends SlFormatDate {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-format-date': UgFormatDate;
  }
}
