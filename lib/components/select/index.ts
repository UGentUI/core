
import SlSelect from "@shoelace-style/shoelace/dist/components/select/select.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-select")
export class UgSelect extends SlSelect {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-select": UgSelect;
  }
}
