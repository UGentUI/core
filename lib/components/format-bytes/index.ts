import SlFormatBytes from "@shoelace-style/shoelace/dist/components/format-bytes/format-bytes.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-format-bytes")
export class UgFormatBytes extends SlFormatBytes {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-format-bytes": UgFormatBytes;
  }
}
