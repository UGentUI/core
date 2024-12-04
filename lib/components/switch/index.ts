import SlSwitch from '@shoelace-style/shoelace/dist/components/switch/switch.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-switch')
export class UgSwitch extends SlSwitch {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-switch': UgSwitch;
  }
}
