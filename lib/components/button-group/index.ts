import SlButtonGroup from "@shoelace-style/shoelace/dist/components/button-group/button-group.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-button-group")
export class UgButtonGroup extends SlButtonGroup {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-button-group": UgButtonGroup;
  }
}
