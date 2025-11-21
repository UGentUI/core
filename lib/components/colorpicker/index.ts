import SlColorPicker from '@shoelace-style/shoelace/dist/components/color-picker/color-picker.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-color-picker')
export class UgColorPicker extends SlColorPicker {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-color-picker': UgColorPicker;
  }
}
