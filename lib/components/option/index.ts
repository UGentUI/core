
import SlOption from "@shoelace-style/shoelace/dist/components/option/option.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-option")
export class UgOption extends SlOption {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-option": UgOption;
  }
}
