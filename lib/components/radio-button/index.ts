
import SlRadioButton from "@shoelace-style/shoelace/dist/components/radio-button/radio-button.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-radio-button")
export class UgRadioButton extends SlRadioButton {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-radio-button": UgRadioButton;
  }
}
