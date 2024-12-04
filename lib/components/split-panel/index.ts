import SlSplitPanel from '@shoelace-style/shoelace/dist/components/split-panel/split-panel.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-split-panel')
export class UgSplitPanel extends SlSplitPanel {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-split-panel': UgSplitPanel;
  }
}
