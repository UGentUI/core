import { i as o, S as i, x as t, _ as a, n as e } from "./chunk.UYAO2JRR.js";
import { S as l } from "./chunk.3HB7VQL2.js";
import { L as n } from "./chunk.WLV3FVBR.js";
import { c as g } from "./chunk.TUVJKY7S.js";
import { e as s } from "./class-map.js";
var u = o`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--ug-color-primary-50);
    border-color: var(--ug-color-primary-200);
    color: var(--ug-color-primary-800);
  }

  .tag--primary:active > ug-icon-button {
    color: var(--ug-color-primary-600);
  }

  .tag--success {
    background-color: var(--ug-color-success-50);
    border-color: var(--ug-color-success-200);
    color: var(--ug-color-success-800);
  }

  .tag--success:active > ug-icon-button {
    color: var(--ug-color-success-600);
  }

  .tag--neutral {
    background-color: var(--ug-color-neutral-50);
    border-color: var(--ug-color-neutral-200);
    color: var(--ug-color-neutral-800);
  }

  .tag--neutral:active > ug-icon-button {
    color: var(--ug-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--ug-color-warning-50);
    border-color: var(--ug-color-warning-200);
    color: var(--ug-color-warning-800);
  }

  .tag--warning:active > ug-icon-button {
    color: var(--ug-color-warning-600);
  }

  .tag--danger {
    background-color: var(--ug-color-danger-50);
    border-color: var(--ug-color-danger-200);
    color: var(--ug-color-danger-800);
  }

  .tag--danger:active > ug-icon-button {
    color: var(--ug-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--ug-button-font-size-small);
    height: calc(var(--ug-input-height-small) * 0.8);
    line-height: calc(var(--ug-input-height-small) - var(--ug-input-border-width) * 2);
    border-radius: var(--ug-input-border-radius-small);
    padding: 0 var(--ug-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--ug-button-font-size-medium);
    height: calc(var(--ug-input-height-medium) * 0.8);
    line-height: calc(var(--ug-input-height-medium) - var(--ug-input-border-width) * 2);
    border-radius: var(--ug-input-border-radius-medium);
    padding: 0 var(--ug-spacing-small);
  }

  .tag--large {
    font-size: var(--ug-button-font-size-large);
    height: calc(var(--ug-input-height-large) * 0.8);
    line-height: calc(var(--ug-input-height-large) - var(--ug-input-border-width) * 2);
    border-radius: var(--ug-input-border-radius-large);
    padding: 0 var(--ug-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--ug-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--ug-border-radius-pill);
  }
`, r = class extends i {
  constructor() {
    super(...arguments), this.localize = new n(this), this.variant = "neutral", this.size = "medium", this.pill = !1, this.removable = !1;
  }
  handleRemoveClick() {
    this.emit("ug-remove");
  }
  render() {
    return t`
      <span
        part="base"
        class=${s({
      tag: !0,
      // Types
      "tag--primary": this.variant === "primary",
      "tag--success": this.variant === "success",
      "tag--neutral": this.variant === "neutral",
      "tag--warning": this.variant === "warning",
      "tag--danger": this.variant === "danger",
      "tag--text": this.variant === "text",
      // Sizes
      "tag--small": this.size === "small",
      "tag--medium": this.size === "medium",
      "tag--large": this.size === "large",
      // Modifiers
      "tag--pill": this.pill,
      "tag--removable": this.removable
    })}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable ? t`
              <ug-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></ug-icon-button>
            ` : ""}
      </span>
    `;
  }
};
r.styles = [g, u];
r.dependencies = { "ug-icon-button": l };
a([
  e({ reflect: !0 })
], r.prototype, "variant", 2);
a([
  e({ reflect: !0 })
], r.prototype, "size", 2);
a([
  e({ type: Boolean, reflect: !0 })
], r.prototype, "pill", 2);
a([
  e({ type: Boolean })
], r.prototype, "removable", 2);
export {
  r as S
};