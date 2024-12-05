import SlTabGroup from '@shoelace-style/shoelace/dist/components/tab-group/tab-group.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-tab-group')
export class UgTabGroup extends SlTabGroup {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-tab-group': UgTabGroup;
  }
}
