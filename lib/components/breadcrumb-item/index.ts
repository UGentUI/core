import SlBreadcrumbItem from '@shoelace-style/shoelace/dist/components/breadcrumb-item/breadcrumb-item.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-breadcrumb-item')
export class UgBreadcrumbItem extends SlBreadcrumbItem {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-breadcrumb-item': UgBreadcrumbItem;
  }
}
