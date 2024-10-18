import { i as h, _ as o, n as d, S as f, k as g, t as v } from "../../chunks/chunk.NLWS5DN7.js";
import { L as m } from "../../chunks/chunk.WLV3FVBR.js";
import { S as b } from "../../chunks/chunk.O7VCMB7W.js";
import { w as c } from "../../chunks/chunk.CCJUT23E.js";
import { c as _ } from "../../chunks/chunk.TUVJKY7S.js";
import { R as x } from "../../chunks/class-map.js";
import { r as p } from "../../chunks/state.js";
import { e as y } from "../../chunks/query.js";
var C = h`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--ug-font-sans);
    font-size: var(--ug-font-size-medium);
    font-weight: var(--ug-font-weight-normal);
    line-height: var(--ug-line-height-normal);
    letter-spacing: var(--ug-letter-spacing-normal);
    color: var(--ug-color-neutral-700);
    padding: var(--ug-spacing-x-small) var(--ug-spacing-medium) var(--ug-spacing-x-small) var(--ug-spacing-x-small);
    transition: var(--ug-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--ug-color-neutral-100);
    color: var(--ug-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--ug-color-primary-600);
    color: var(--ug-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--ug-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--ug-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--ug-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--ug-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`, e = class extends f {
  constructor() {
    super(...arguments), this.localize = new m(this), this.current = !1, this.selected = !1, this.hasHover = !1, this.value = "", this.disabled = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "option"), this.setAttribute("aria-selected", "false");
  }
  handleDefaultSlotChange() {
    const a = this.getTextLabel();
    if (typeof this.cachedTextLabel > "u") {
      this.cachedTextLabel = a;
      return;
    }
    a !== this.cachedTextLabel && (this.cachedTextLabel = a, this.emit("slotchange", { bubbles: !0, composed: !1, cancelable: !1 }));
  }
  handleMouseEnter() {
    this.hasHover = !0;
  }
  handleMouseLeave() {
    this.hasHover = !1;
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleSelectedChange() {
    this.setAttribute("aria-selected", this.selected ? "true" : "false");
  }
  handleValueChange() {
    typeof this.value != "string" && (this.value = String(this.value)), this.value.includes(" ") && (console.error("Option values cannot include a space. All spaces have been replaced with underscores.", this), this.value = this.value.replace(/ /g, "_"));
  }
  /** Returns a plain text label based on the option's content. */
  getTextLabel() {
    const a = this.childNodes;
    let i = "";
    return [...a].forEach((t) => {
      t.nodeType === Node.ELEMENT_NODE && (t.hasAttribute("slot") || (i += t.textContent)), t.nodeType === Node.TEXT_NODE && (i += t.textContent);
    }), i.trim();
  }
  render() {
    return g`
      <div
        part="base"
        class=${x({
      option: !0,
      "option--current": this.current,
      "option--disabled": this.disabled,
      "option--selected": this.selected,
      "option--hover": this.hasHover
    })}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <ug-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></ug-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `;
  }
};
e.styles = [_, C];
e.dependencies = { "ug-icon": b };
o([
  y(".option__label")
], e.prototype, "defaultSlot", 2);
o([
  p()
], e.prototype, "current", 2);
o([
  p()
], e.prototype, "selected", 2);
o([
  p()
], e.prototype, "hasHover", 2);
o([
  d({ reflect: !0 })
], e.prototype, "value", 2);
o([
  d({ type: Boolean, reflect: !0 })
], e.prototype, "disabled", 2);
o([
  c("disabled")
], e.prototype, "handleDisabledChange", 1);
o([
  c("selected")
], e.prototype, "handleSelectedChange", 1);
o([
  c("value")
], e.prototype, "handleValueChange", 1);
var L = Object.defineProperty, S = Object.getOwnPropertyDescriptor, T = (a, i, t, s) => {
  for (var l = s > 1 ? void 0 : s ? S(i, t) : i, n = a.length - 1, r; n >= 0; n--)
    (r = a[n]) && (l = (s ? r(i, t, l) : r(l)) || l);
  return s && l && L(i, t, l), l;
};
let u = class extends e {
};
u = T([
  v("ug-option")
], u);
export {
  u as UgOption
};
