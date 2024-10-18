
import SlAvatar from "@shoelace-style/shoelace/dist/components/avatar/avatar.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-avatar")
export class UgAvatar extends SlAvatar {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-avatar": UgAvatar;
  }
}
