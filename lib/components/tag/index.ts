
import SlTag from "@shoelace-style/shoelace/dist/components/tag/tag.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-tag")
export class UgTag extends SlTag {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-tag": UgTag;
  }
}
