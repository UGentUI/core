import { i as S, E as v, x as c, S as C, _ as r, n as d, t as k } from "../../chunks/chunk.UYAO2JRR.js";
import { f as $ } from "../../chunks/directive-helpers.js";
import { i as w, t as A, e as L } from "../../chunks/directive.js";
import { S as E } from "../../chunks/chunk.5J7BMMD5.js";
import { S as P } from "../../chunks/chunk.TLKDQ5JG.js";
import { L as M } from "../../chunks/chunk.WLV3FVBR.js";
import { H as T, g as R } from "../../chunks/chunk.NYIIDP5N.js";
import { S as z } from "../../chunks/chunk.E6QAPUBK.js";
import { w as b } from "../../chunks/chunk.CCJUT23E.js";
import { c as D } from "../../chunks/chunk.TUVJKY7S.js";
import { e as O } from "../../chunks/class-map.js";
import { e as x } from "../../chunks/query.js";
var Y = S`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--ug-font-sans);
    font-size: var(--ug-font-size-medium);
    font-weight: var(--ug-font-weight-normal);
    line-height: var(--ug-line-height-normal);
    letter-spacing: var(--ug-letter-spacing-normal);
    color: var(--ug-color-neutral-700);
    padding: var(--ug-spacing-2x-small) var(--ug-spacing-2x-small);
    transition: var(--ug-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(ug-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading ug-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--ug-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--ug-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--ug-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--ug-color-neutral-100);
    color: var(--ug-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--ug-color-primary-600);
    color: var(--ug-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  ug-popup::part(popup) {
    box-shadow: var(--ug-shadow-large);
    z-index: var(--ug-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl ug-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(ug-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const h = (t, s) => {
  var i;
  const e = t._$AN;
  if (e === void 0) return !1;
  for (const n of e) (i = n._$AO) == null || i.call(n, s, !1), h(n, s);
  return !0;
}, m = (t) => {
  let s, e;
  do {
    if ((s = t._$AM) === void 0) break;
    e = s._$AN, e.delete(t), t = s;
  } while ((e == null ? void 0 : e.size) === 0);
}, _ = (t) => {
  for (let s; s = t._$AM; t = s) {
    let e = s._$AN;
    if (e === void 0) s._$AN = e = /* @__PURE__ */ new Set();
    else if (e.has(t)) break;
    e.add(t), N(s);
  }
};
function H(t) {
  this._$AN !== void 0 ? (m(this), this._$AM = t, _(this)) : this._$AM = t;
}
function I(t, s = !1, e = 0) {
  const i = this._$AH, n = this._$AN;
  if (n !== void 0 && n.size !== 0) if (s) if (Array.isArray(i)) for (let o = e; o < i.length; o++) h(i[o], !1), m(i[o]);
  else i != null && (h(i, !1), m(i));
  else h(this, t);
}
const N = (t) => {
  t.type == A.CHILD && (t._$AP ?? (t._$AP = I), t._$AQ ?? (t._$AQ = H));
};
class U extends w {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(s, e, i) {
    super._$AT(s, e, i), _(this), this.isConnected = s._$AU;
  }
  _$AO(s, e = !0) {
    var i, n;
    s !== this.isConnected && (this.isConnected = s, s ? (i = this.reconnected) == null || i.call(this) : (n = this.disconnected) == null || n.call(this)), e && (h(this, s), m(this));
  }
  setValue(s) {
    if ($(this._$Ct)) this._$Ct._$AI(s, this);
    else {
      const e = [...this._$Ct._$AH];
      e[this._$Ci] = s, this._$Ct._$AI(e, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const V = () => new q();
class q {
}
const f = /* @__PURE__ */ new WeakMap(), B = L(class extends U {
  render(t) {
    return v;
  }
  update(t, [s]) {
    var i;
    const e = s !== this.Y;
    return e && this.Y !== void 0 && this.rt(void 0), (e || this.lt !== this.ct) && (this.Y = s, this.ht = (i = t.options) == null ? void 0 : i.host, this.rt(this.ct = t.element)), v;
  }
  rt(t) {
    if (this.isConnected || (t = void 0), typeof this.Y == "function") {
      const s = this.ht ?? globalThis;
      let e = f.get(s);
      e === void 0 && (e = /* @__PURE__ */ new WeakMap(), f.set(s, e)), e.get(this.Y) !== void 0 && this.Y.call(this.ht, void 0), e.set(this.Y, t), t !== void 0 && this.Y.call(this.ht, t);
    } else this.Y.value = t;
  }
  get lt() {
    var t, s;
    return typeof this.Y == "function" ? (t = f.get(this.ht ?? globalThis)) == null ? void 0 : t.get(this.Y) : (s = this.Y) == null ? void 0 : s.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});
var j = class {
  constructor(t, s) {
    this.popupRef = V(), this.enableSubmenuTimer = -1, this.isConnected = !1, this.isPopupConnected = !1, this.skidding = 0, this.submenuOpenDelay = 100, this.handleMouseMove = (e) => {
      this.host.style.setProperty("--safe-triangle-cursor-x", `${e.clientX}px`), this.host.style.setProperty("--safe-triangle-cursor-y", `${e.clientY}px`);
    }, this.handleMouseOver = () => {
      this.hasSlotController.test("submenu") && this.enableSubmenu();
    }, this.handleKeyDown = (e) => {
      switch (e.key) {
        case "Escape":
        case "Tab":
          this.disableSubmenu();
          break;
        case "ArrowLeft":
          e.target !== this.host && (e.preventDefault(), e.stopPropagation(), this.host.focus(), this.disableSubmenu());
          break;
        case "ArrowRight":
        case "Enter":
        case " ":
          this.handleSubmenuEntry(e);
          break;
      }
    }, this.handleClick = (e) => {
      var i;
      e.target === this.host ? (e.preventDefault(), e.stopPropagation()) : e.target instanceof Element && (e.target.tagName === "ug-menu-item" || (i = e.target.role) != null && i.startsWith("menuitem")) && this.disableSubmenu();
    }, this.handleFocusOut = (e) => {
      e.relatedTarget && e.relatedTarget instanceof Element && this.host.contains(e.relatedTarget) || this.disableSubmenu();
    }, this.handlePopupMouseover = (e) => {
      e.stopPropagation();
    }, this.handlePopupReposition = () => {
      const e = this.host.renderRoot.querySelector("slot[name='submenu']"), i = e == null ? void 0 : e.assignedElements({ flatten: !0 }).filter((p) => p.localName === "ug-menu")[0], n = getComputedStyle(this.host).direction === "rtl";
      if (!i)
        return;
      const { left: o, top: l, width: u, height: g } = i.getBoundingClientRect();
      this.host.style.setProperty("--safe-triangle-submenu-start-x", `${n ? o + u : o}px`), this.host.style.setProperty("--safe-triangle-submenu-start-y", `${l}px`), this.host.style.setProperty("--safe-triangle-submenu-end-x", `${n ? o + u : o}px`), this.host.style.setProperty("--safe-triangle-submenu-end-y", `${l + g}px`);
    }, (this.host = t).addController(this), this.hasSlotController = s;
  }
  hostConnected() {
    this.hasSlotController.test("submenu") && !this.host.disabled && this.addListeners();
  }
  hostDisconnected() {
    this.removeListeners();
  }
  hostUpdated() {
    this.hasSlotController.test("submenu") && !this.host.disabled ? (this.addListeners(), this.updateSkidding()) : this.removeListeners();
  }
  addListeners() {
    this.isConnected || (this.host.addEventListener("mousemove", this.handleMouseMove), this.host.addEventListener("mouseover", this.handleMouseOver), this.host.addEventListener("keydown", this.handleKeyDown), this.host.addEventListener("click", this.handleClick), this.host.addEventListener("focusout", this.handleFocusOut), this.isConnected = !0), this.isPopupConnected || this.popupRef.value && (this.popupRef.value.addEventListener("mouseover", this.handlePopupMouseover), this.popupRef.value.addEventListener("ug-reposition", this.handlePopupReposition), this.isPopupConnected = !0);
  }
  removeListeners() {
    this.isConnected && (this.host.removeEventListener("mousemove", this.handleMouseMove), this.host.removeEventListener("mouseover", this.handleMouseOver), this.host.removeEventListener("keydown", this.handleKeyDown), this.host.removeEventListener("click", this.handleClick), this.host.removeEventListener("focusout", this.handleFocusOut), this.isConnected = !1), this.isPopupConnected && this.popupRef.value && (this.popupRef.value.removeEventListener("mouseover", this.handlePopupMouseover), this.popupRef.value.removeEventListener("ug-reposition", this.handlePopupReposition), this.isPopupConnected = !1);
  }
  handleSubmenuEntry(t) {
    const s = this.host.renderRoot.querySelector("slot[name='submenu']");
    if (!s) {
      console.error("Cannot activate a submenu if no corresponding menuitem can be found.", this);
      return;
    }
    let e = null;
    for (const i of s.assignedElements())
      if (e = i.querySelectorAll("ug-menu-item, [role^='menuitem']"), e.length !== 0)
        break;
    if (!(!e || e.length === 0)) {
      e[0].setAttribute("tabindex", "0");
      for (let i = 1; i !== e.length; ++i)
        e[i].setAttribute("tabindex", "-1");
      this.popupRef.value && (t.preventDefault(), t.stopPropagation(), this.popupRef.value.active ? e[0] instanceof HTMLElement && e[0].focus() : (this.enableSubmenu(!1), this.host.updateComplete.then(() => {
        e[0] instanceof HTMLElement && e[0].focus();
      }), this.host.requestUpdate()));
    }
  }
  setSubmenuState(t) {
    this.popupRef.value && this.popupRef.value.active !== t && (this.popupRef.value.active = t, this.host.requestUpdate());
  }
  // Shows the submenu. Supports disabling the opening delay, e.g. for keyboard events that want to set the focus to the
  // newly opened menu.
  enableSubmenu(t = !0) {
    t ? (window.clearTimeout(this.enableSubmenuTimer), this.enableSubmenuTimer = window.setTimeout(() => {
      this.setSubmenuState(!0);
    }, this.submenuOpenDelay)) : this.setSubmenuState(!0);
  }
  disableSubmenu() {
    window.clearTimeout(this.enableSubmenuTimer), this.setSubmenuState(!1);
  }
  // Calculate the space the top of a menu takes-up, for aligning the popup menu-item with the activating element.
  updateSkidding() {
    var t;
    if (!((t = this.host.parentElement) != null && t.computedStyleMap))
      return;
    const s = this.host.parentElement.computedStyleMap(), i = ["padding-top", "border-top-width", "margin-top"].reduce((n, o) => {
      var l;
      const u = (l = s.get(o)) != null ? l : new CSSUnitValue(0, "px"), p = (u instanceof CSSUnitValue ? u : new CSSUnitValue(0, "px")).to("px");
      return n - p.value;
    }, 0);
    this.skidding = i;
  }
  isExpanded() {
    return this.popupRef.value ? this.popupRef.value.active : !1;
  }
  renderSubmenu() {
    const t = getComputedStyle(this.host).direction === "rtl";
    return this.isConnected ? c`
      <ug-popup
        ${B(this.popupRef)}
        placement=${t ? "left-start" : "right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </ug-popup>
    ` : c` <slot name="submenu" hidden></slot> `;
  }
}, a = class extends C {
  constructor() {
    super(...arguments), this.localize = new M(this), this.type = "normal", this.checked = !1, this.value = "", this.loading = !1, this.disabled = !1, this.hasSlotController = new T(this, "submenu"), this.submenuController = new j(this, this.hasSlotController), this.handleHostClick = (t) => {
      this.disabled && (t.preventDefault(), t.stopImmediatePropagation());
    }, this.handleMouseOver = (t) => {
      this.focus(), t.stopPropagation();
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("click", this.handleHostClick), this.addEventListener("mouseover", this.handleMouseOver);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("click", this.handleHostClick), this.removeEventListener("mouseover", this.handleMouseOver);
  }
  handleDefaultSlotChange() {
    const t = this.getTextLabel();
    if (typeof this.cachedTextLabel > "u") {
      this.cachedTextLabel = t;
      return;
    }
    t !== this.cachedTextLabel && (this.cachedTextLabel = t, this.emit("slotchange", { bubbles: !0, composed: !1, cancelable: !1 }));
  }
  handleCheckedChange() {
    if (this.checked && this.type !== "checkbox") {
      this.checked = !1, console.error('The checked attribute can only be used on menu items with type="checkbox"', this);
      return;
    }
    this.type === "checkbox" ? this.setAttribute("aria-checked", this.checked ? "true" : "false") : this.removeAttribute("aria-checked");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleTypeChange() {
    this.type === "checkbox" ? (this.setAttribute("role", "menuitemcheckbox"), this.setAttribute("aria-checked", this.checked ? "true" : "false")) : (this.setAttribute("role", "menuitem"), this.removeAttribute("aria-checked"));
  }
  /** Returns a text label based on the contents of the menu item's default slot. */
  getTextLabel() {
    return R(this.defaultSlot);
  }
  isSubmenu() {
    return this.hasSlotController.test("submenu");
  }
  render() {
    const t = this.localize.dir() === "rtl", s = this.submenuController.isExpanded();
    return c`
      <div
        id="anchor"
        part="base"
        class=${O({
      "menu-item": !0,
      "menu-item--rtl": t,
      "menu-item--checked": this.checked,
      "menu-item--disabled": this.disabled,
      "menu-item--loading": this.loading,
      "menu-item--has-submenu": this.isSubmenu(),
      "menu-item--submenu-expanded": s
    })}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!s}"
      >
        <span part="checked-icon" class="menu-item__check">
          <ug-icon name="check" library="system" aria-hidden="true"></ug-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <ug-icon name=${t ? "chevron-left" : "chevron-right"} library="system" aria-hidden="true"></ug-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading ? c` <ug-spinner part="spinner" exportparts="base:spinner__base"></ug-spinner> ` : ""}
      </div>
    `;
  }
};
a.styles = [D, Y];
a.dependencies = {
  "ug-icon": z,
  "ug-popup": E,
  "ug-spinner": P
};
r([
  x("slot:not([name])")
], a.prototype, "defaultSlot", 2);
r([
  x(".menu-item")
], a.prototype, "menuItem", 2);
r([
  d()
], a.prototype, "type", 2);
r([
  d({ type: Boolean, reflect: !0 })
], a.prototype, "checked", 2);
r([
  d()
], a.prototype, "value", 2);
r([
  d({ type: Boolean, reflect: !0 })
], a.prototype, "loading", 2);
r([
  d({ type: Boolean, reflect: !0 })
], a.prototype, "disabled", 2);
r([
  b("checked")
], a.prototype, "handleCheckedChange", 1);
r([
  b("disabled")
], a.prototype, "handleDisabledChange", 1);
r([
  b("type")
], a.prototype, "handleTypeChange", 1);
var F = Object.defineProperty, K = Object.getOwnPropertyDescriptor, W = (t, s, e, i) => {
  for (var n = i > 1 ? void 0 : i ? K(s, e) : s, o = t.length - 1, l; o >= 0; o--)
    (l = t[o]) && (n = (i ? l(s, e, n) : l(n)) || n);
  return i && n && F(s, e, n), n;
};
let y = class extends a {
};
y = W([
  k("ug-menu-item")
], y);
export {
  y as UgMenuItem
};
