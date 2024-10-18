
import SlCard from "@shoelace-style/shoelace/dist/components/card/card.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-card")
export class UgCard extends SlCard {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-card": UgCard;
  }
}
