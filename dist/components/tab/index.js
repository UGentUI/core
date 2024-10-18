import { i as p, _ as e, n as s, S as h, k as b, t as f } from "../../chunks/chunk.NLWS5DN7.js";
import { S as g } from "../../chunks/chunk.AYP3HPB7.js";
import { L as v } from "../../chunks/chunk.WLV3FVBR.js";
import { w as u } from "../../chunks/chunk.CCJUT23E.js";
import { c as m } from "../../chunks/chunk.TUVJKY7S.js";
import { R as y } from "../../chunks/class-map.js";
import { e as _ } from "../../chunks/query.js";
import "../../chunks/chunk.O7VCMB7W.js";
var x = p`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--ug-font-sans);
    font-size: var(--ug-font-size-small);
    font-weight: var(--ug-font-weight-semibold);
    border-radius: var(--ug-border-radius-medium);
    color: var(--ug-color-neutral-600);
    padding: var(--ug-spacing-medium) var(--ug-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--ug-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible):not([disabled]) {
    color: var(--ug-color-primary-600);
  }

  :host(:focus-visible) {
    outline: var(--ug-focus-ring);
    outline-offset: calc(-1 * var(--ug-focus-ring-width) - var(--ug-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--ug-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--ug-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--ug-font-size-small);
    margin-inline-start: var(--ug-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--ug-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`, w = 0, t = class extends h {
  constructor() {
    super(...arguments), this.localize = new v(this), this.attrId = ++w, this.componentId = `ug-tab-${this.attrId}`, this.panel = "", this.active = !1, this.closable = !1, this.disabled = !1, this.tabIndex = 0;
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "tab");
  }
  handleCloseClick(o) {
    o.stopPropagation(), this.emit("ug-close");
  }
  handleActiveChange() {
    this.setAttribute("aria-selected", this.active ? "true" : "false");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false"), this.disabled && !this.active ? this.tabIndex = -1 : this.tabIndex = 0;
  }
  render() {
    return this.id = this.id.length > 0 ? this.id : this.componentId, b`
      <div
        part="base"
        class=${y({
      tab: !0,
      "tab--active": this.active,
      "tab--closable": this.closable,
      "tab--disabled": this.disabled
    })}
      >
        <slot></slot>
        ${this.closable ? b`
              <ug-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></ug-icon-button>
            ` : ""}
      </div>
    `;
  }
};
t.styles = [m, x];
t.dependencies = { "ug-icon-button": g };
e([
  _(".tab")
], t.prototype, "tab", 2);
e([
  s({ reflect: !0 })
], t.prototype, "panel", 2);
e([
  s({ type: Boolean, reflect: !0 })
], t.prototype, "active", 2);
e([
  s({ type: Boolean, reflect: !0 })
], t.prototype, "closable", 2);
e([
  s({ type: Boolean, reflect: !0 })
], t.prototype, "disabled", 2);
e([
  s({ type: Number, reflect: !0 })
], t.prototype, "tabIndex", 2);
e([
  u("active")
], t.prototype, "handleActiveChange", 1);
e([
  u("disabled")
], t.prototype, "handleDisabledChange", 1);
var C = Object.defineProperty, I = Object.getOwnPropertyDescriptor, z = (o, i, r, l) => {
  for (var a = l > 1 ? void 0 : l ? I(i, r) : i, n = o.length - 1, c; n >= 0; n--)
    (c = o[n]) && (a = (l ? c(i, r, a) : c(a)) || a);
  return l && a && C(i, r, a), a;
};
let d = class extends t {
};
d = z([
  f("ug-tab")
], d);
export {
  d as UgTab
};
