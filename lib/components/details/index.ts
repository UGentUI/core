
import SlDetails from "@shoelace-style/shoelace/dist/components/details/details.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-details")
export class UgDetails extends SlDetails {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-details": UgDetails;
  }
}
