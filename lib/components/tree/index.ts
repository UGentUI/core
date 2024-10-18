
import SlTree from "@shoelace-style/shoelace/dist/components/tree/tree.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-tree")
export class UgTree extends SlTree {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-tree": UgTree;
  }
}
