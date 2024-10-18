import SlCopyButton from "@shoelace-style/shoelace/dist/components/copy-button/copy-button.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-copy-button")
export class UgCopyButton extends SlCopyButton {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-copy-button": UgCopyButton;
  }
}
