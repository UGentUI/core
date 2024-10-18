
import SlQrCode from "@shoelace-style/shoelace/dist/components/qr-code/qr-code.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-qr-code")
export class UgQrCode extends SlQrCode {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-qr-code": UgQrCode;
  }
}
