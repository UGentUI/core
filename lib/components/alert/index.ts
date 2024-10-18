import SlAlert from "@shoelace-style/shoelace/dist/components/alert/alert.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-alert")
export class UgAlert extends SlAlert {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-alert": UgAlert;
  }
}
