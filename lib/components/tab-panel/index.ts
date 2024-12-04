import SlTabPanel from '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-tab-panel')
export class UgTabPanel extends SlTabPanel {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-tab-panel': UgTabPanel;
  }
}
