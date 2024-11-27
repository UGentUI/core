import { i as p, S as b, x as c, _ as i, n as d, t as f } from "../../chunks/chunk.UYAO2JRR.js";
import { S as v } from "../../chunks/chunk.E6QAPUBK.js";
import { w as h } from "../../chunks/chunk.CCJUT23E.js";
import { c as m } from "../../chunks/chunk.TUVJKY7S.js";
import { e as k } from "../../chunks/class-map.js";
import { r as g } from "../../chunks/state.js";
var _ = p`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--ug-input-font-family);
    font-size: var(--ug-input-font-size-medium);
    font-weight: var(--ug-input-font-weight);
    color: var(--ug-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--ug-toggle-size-small);
    font-size: var(--ug-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--ug-toggle-size-medium);
    font-size: var(--ug-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--ug-toggle-size-large);
    font-size: var(--ug-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--ug-input-border-width) var(--ug-input-border-color);
    border-radius: 50%;
    background-color: var(--ug-input-background-color);
    color: transparent;
    transition:
      var(--ug-transition-fast) border-color,
      var(--ug-transition-fast) background-color,
      var(--ug-transition-fast) color,
      var(--ug-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--ug-input-border-color-hover);
    background-color: var(--ug-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--ug-color-neutral-0);
    border-color: var(--ug-color-primary-600);
    background-color: var(--ug-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--ug-color-primary-500);
    background-color: var(--ug-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--ug-focus-ring);
    outline-offset: var(--ug-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--ug-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`, e = class extends b {
  constructor() {
    super(), this.checked = !1, this.hasFocus = !1, this.size = "medium", this.disabled = !1, this.handleBlur = () => {
      this.hasFocus = !1, this.emit("ug-blur");
    }, this.handleClick = () => {
      this.disabled || (this.checked = !0);
    }, this.handleFocus = () => {
      this.hasFocus = !0, this.emit("ug-focus");
    }, this.addEventListener("blur", this.handleBlur), this.addEventListener("click", this.handleClick), this.addEventListener("focus", this.handleFocus);
  }
  connectedCallback() {
    super.connectedCallback(), this.setInitialAttributes();
  }
  setInitialAttributes() {
    this.setAttribute("role", "radio"), this.setAttribute("tabindex", "-1"), this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleCheckedChange() {
    this.setAttribute("aria-checked", this.checked ? "true" : "false"), this.setAttribute("tabindex", this.checked ? "0" : "-1");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  render() {
    return c`
      <span
        part="base"
        class=${k({
      radio: !0,
      "radio--checked": this.checked,
      "radio--disabled": this.disabled,
      "radio--focused": this.hasFocus,
      "radio--small": this.size === "small",
      "radio--medium": this.size === "medium",
      "radio--large": this.size === "large"
    })}
      >
        <span part="${`control${this.checked ? " control--checked" : ""}`}" class="radio__control">
          ${this.checked ? c` <ug-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></ug-icon> ` : ""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `;
  }
};
e.styles = [m, _];
e.dependencies = { "ug-icon": v };
i([
  g()
], e.prototype, "checked", 2);
i([
  g()
], e.prototype, "hasFocus", 2);
i([
  d()
], e.prototype, "value", 2);
i([
  d({ reflect: !0 })
], e.prototype, "size", 2);
i([
  d({ type: Boolean, reflect: !0 })
], e.prototype, "disabled", 2);
i([
  h("checked")
], e.prototype, "handleCheckedChange", 1);
i([
  h("disabled", { waitUntilFirstUpdate: !0 })
], e.prototype, "handleDisabledChange", 1);
var y = Object.defineProperty, z = Object.getOwnPropertyDescriptor, C = (n, t, a, r) => {
  for (var o = r > 1 ? void 0 : r ? z(t, a) : t, s = n.length - 1, l; s >= 0; s--)
    (l = n[s]) && (o = (r ? l(t, a, o) : l(o)) || o);
  return r && o && y(t, a, o), o;
};
let u = class extends e {
};
u = C([
  f("ug-radio")
], u);
export {
  u as UgRadio
};
