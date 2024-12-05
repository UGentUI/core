import SlTreeItem from '@shoelace-style/shoelace/dist/components/tree-item/tree-item.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-tree-item')
export class UgTreeItem extends SlTreeItem {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-tree-item': UgTreeItem;
  }
}
