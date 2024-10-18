
import SlBadge from "@shoelace-style/shoelace/dist/components/badge/badge.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-badge")
export class UgBadge extends SlBadge {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-badge": UgBadge;
  }
}
