
import SlMutationObserver from "@shoelace-style/shoelace/dist/components/mutation-observer/mutation-observer.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-mutation-observer")
export class UgMutationObserver extends SlMutationObserver {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-mutation-observer": UgMutationObserver;
  }
}
