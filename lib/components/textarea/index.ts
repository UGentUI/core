
import SlTextarea from "@shoelace-style/shoelace/dist/components/textarea/textarea.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-textarea")
export class UgTextarea extends SlTextarea {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-textarea": UgTextarea;
  }
}
