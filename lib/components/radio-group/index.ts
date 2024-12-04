import SlRadioGroup from '@shoelace-style/shoelace/dist/components/radio-group/radio-group.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-radio-group')
export class UgRadioGroup extends SlRadioGroup {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-radio-group': UgRadioGroup;
  }
}
