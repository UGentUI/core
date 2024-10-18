
import SlSkeleton from "@shoelace-style/shoelace/dist/components/skeleton/skeleton.component.js";
import { customElement } from "lit/decorators.js";

@customElement("ug-skeleton")
export class UgSkeleton extends SlSkeleton {}

declare global {
  interface HTMLElementTagNameMap {
    "ug-skeleton": UgSkeleton;
  }
}
