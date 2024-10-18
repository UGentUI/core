
import SlDialog from "@shoelace-style/shoelace/dist/components/dialog/dialog.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-dialog")
export class UgDialog extends SlDialog {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-dialog": UgDialog;
  }
}
