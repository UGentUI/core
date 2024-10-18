
import SlTab from "@shoelace-style/shoelace/dist/components/tab/tab.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-tab")
export class UgTab extends SlTab {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-tab": UgTab;
  }
}
