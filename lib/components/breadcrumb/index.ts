import SlBreadcrumb from '@shoelace-style/shoelace/dist/components/breadcrumb/breadcrumb.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-breadcrumb')
export class UgBreadcrumb extends SlBreadcrumb {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-breadcrumb': UgBreadcrumb;
  }
}
