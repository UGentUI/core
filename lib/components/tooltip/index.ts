
import SlTooltip from "@shoelace-style/shoelace/dist/components/tooltip/tooltip.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-tooltip")
export class UgTooltip extends SlTooltip {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-tooltip": UgTooltip;
  }
}
