import SlMenuItem from "@shoelace-style/shoelace/dist/components/menu-item/menu-item.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-menu-item")
export class UgMenuItem extends SlMenuItem {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-menu-item": UgMenuItem;
  }
}
