
import SlResizeObserver from "@shoelace-style/shoelace/dist/components/resize-observer/resize-observer.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-resize-observer")
export class UgResizeObserver extends SlResizeObserver {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-resize-observer": UgResizeObserver;
  }
}
