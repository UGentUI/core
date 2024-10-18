
import SlProgressBar from "@shoelace-style/shoelace/dist/components/progress-bar/progress-bar.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-progress-bar")
export class UgProgressBar extends SlProgressBar {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-progress-bar": UgProgressBar;
  }
}
