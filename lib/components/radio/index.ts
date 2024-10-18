
import SlRadio from "@shoelace-style/shoelace/dist/components/radio/radio.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-radio")
export class UgRadio extends SlRadio {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-radio": UgRadio;
  }
}
