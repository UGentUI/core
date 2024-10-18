
import SlDrawer from "@shoelace-style/shoelace/dist/components/drawer/drawer.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-drawer")
export class UgDrawer extends SlDrawer {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-drawer": UgDrawer;
  }
}
