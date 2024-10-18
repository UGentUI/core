import { i as _, _ as i, n as o, S as x, k as d } from "./chunk.NLWS5DN7.js";
import { S as y } from "./chunk.CX3DZWHK.js";
import { S as v } from "./chunk.R2T2D3TO.js";
import { s as b, a as c, g as m, b as p, c as u } from "./chunk.3EPZX5HE.js";
import { L as C } from "./chunk.WLV3FVBR.js";
import { S as k } from "./chunk.O7VCMB7W.js";
import { w as a } from "./chunk.CCJUT23E.js";
import { c as z } from "./chunk.TUVJKY7S.js";
import { R as g } from "./class-map.js";
import { F as w } from "./live.js";
import { r as s } from "./state.js";
import { e as r } from "./query.js";
var S = _`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(ug-icon) {
    margin-inline-end: var(--ug-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--ug-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--ug-font-sans);
    font-size: var(--ug-font-size-medium);
    font-weight: var(--ug-font-weight-normal);
    line-height: var(--ug-line-height-dense);
    letter-spacing: var(--ug-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--ug-color-neutral-500);
    padding: var(--ug-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--ug-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--ug-focus-ring);
    outline-offset: var(--ug-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--ug-color-neutral-100);
    border-inline-start-color: var(--ug-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--ug-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--ug-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--ug-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function f(l, t, n) {
  return l ? t(l) : n == null ? void 0 : n(l);
}
var e = class h extends x {
  constructor() {
    super(...arguments), this.localize = new C(this), this.indeterminate = !1, this.isLeaf = !1, this.loading = !1, this.selectable = !1, this.expanded = !1, this.selected = !1, this.disabled = !1, this.lazy = !1;
  }
  static isTreeItem(t) {
    return t instanceof Element && t.getAttribute("role") === "treeitem";
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "treeitem"), this.setAttribute("tabindex", "-1"), this.isNestedItem() && (this.slot = "children");
  }
  firstUpdated() {
    this.childrenContainer.hidden = !this.expanded, this.childrenContainer.style.height = this.expanded ? "auto" : "0", this.isLeaf = !this.lazy && this.getChildrenItems().length === 0, this.handleExpandedChange();
  }
  async animateCollapse() {
    this.emit("ug-collapse"), await c(this.childrenContainer);
    const { keyframes: t, options: n } = m(this, "tree-item.collapse", { dir: this.localize.dir() });
    await p(
      this.childrenContainer,
      u(t, this.childrenContainer.scrollHeight),
      n
    ), this.childrenContainer.hidden = !0, this.emit("ug-after-collapse");
  }
  // Checks whether the item is nested into an item
  isNestedItem() {
    const t = this.parentElement;
    return !!t && h.isTreeItem(t);
  }
  handleChildrenSlotChange() {
    this.loading = !1, this.isLeaf = !this.lazy && this.getChildrenItems().length === 0;
  }
  willUpdate(t) {
    t.has("selected") && !t.has("indeterminate") && (this.indeterminate = !1);
  }
  async animateExpand() {
    this.emit("ug-expand"), await c(this.childrenContainer), this.childrenContainer.hidden = !1;
    const { keyframes: t, options: n } = m(this, "tree-item.expand", { dir: this.localize.dir() });
    await p(
      this.childrenContainer,
      u(t, this.childrenContainer.scrollHeight),
      n
    ), this.childrenContainer.style.height = "auto", this.emit("ug-after-expand");
  }
  handleLoadingChange() {
    this.setAttribute("aria-busy", this.loading ? "true" : "false"), this.loading || this.animateExpand();
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleSelectedChange() {
    this.setAttribute("aria-selected", this.selected ? "true" : "false");
  }
  handleExpandedChange() {
    this.isLeaf ? this.removeAttribute("aria-expanded") : this.setAttribute("aria-expanded", this.expanded ? "true" : "false");
  }
  handleExpandAnimation() {
    this.expanded ? this.lazy ? (this.loading = !0, this.emit("ug-lazy-load")) : this.animateExpand() : this.animateCollapse();
  }
  handleLazyChange() {
    this.emit("ug-lazy-change");
  }
  /** Gets all the nested tree items in this node. */
  getChildrenItems({ includeDisabled: t = !0 } = {}) {
    return this.childrenSlot ? [...this.childrenSlot.assignedElements({ flatten: !0 })].filter(
      (n) => h.isTreeItem(n) && (t || !n.disabled)
    ) : [];
  }
  render() {
    const t = this.matches(":dir(rtl)"), n = !this.loading && (!this.isLeaf || this.lazy);
    return d`
      <div
        part="base"
        class="${g({
      "tree-item": !0,
      "tree-item--expanded": this.expanded,
      "tree-item--selected": this.selected,
      "tree-item--disabled": this.disabled,
      "tree-item--leaf": this.isLeaf,
      "tree-item--has-expand-button": n,
      "tree-item--rtl": this.localize.dir() === "rtl"
    })}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled ? "item--disabled" : ""}
            ${this.expanded ? "item--expanded" : ""}
            ${this.indeterminate ? "item--indeterminate" : ""}
            ${this.selected ? "item--selected" : ""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${g({
      "tree-item__expand-button": !0,
      "tree-item__expand-button--visible": n
    })}
            aria-hidden="true"
          >
            ${f(
      this.loading,
      () => d` <ug-spinner part="spinner" exportparts="base:spinner__base"></ug-spinner> `
    )}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <ug-icon library="system" name=${t ? "chevron-left" : "chevron-right"}></ug-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <ug-icon library="system" name=${t ? "chevron-left" : "chevron-right"}></ug-icon>
            </slot>
          </div>

          ${f(
      this.selectable,
      () => d`
              <ug-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${w(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></ug-checkbox>
            `
    )}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `;
  }
};
e.styles = [z, S];
e.dependencies = {
  "ug-checkbox": y,
  "ug-icon": k,
  "ug-spinner": v
};
i([
  s()
], e.prototype, "indeterminate", 2);
i([
  s()
], e.prototype, "isLeaf", 2);
i([
  s()
], e.prototype, "loading", 2);
i([
  s()
], e.prototype, "selectable", 2);
i([
  o({ type: Boolean, reflect: !0 })
], e.prototype, "expanded", 2);
i([
  o({ type: Boolean, reflect: !0 })
], e.prototype, "selected", 2);
i([
  o({ type: Boolean, reflect: !0 })
], e.prototype, "disabled", 2);
i([
  o({ type: Boolean, reflect: !0 })
], e.prototype, "lazy", 2);
i([
  r("slot:not([name])")
], e.prototype, "defaultSlot", 2);
i([
  r("slot[name=children]")
], e.prototype, "childrenSlot", 2);
i([
  r(".tree-item__item")
], e.prototype, "itemElement", 2);
i([
  r(".tree-item__children")
], e.prototype, "childrenContainer", 2);
i([
  r(".tree-item__expand-button slot")
], e.prototype, "expandButtonSlot", 2);
i([
  a("loading", { waitUntilFirstUpdate: !0 })
], e.prototype, "handleLoadingChange", 1);
i([
  a("disabled")
], e.prototype, "handleDisabledChange", 1);
i([
  a("selected")
], e.prototype, "handleSelectedChange", 1);
i([
  a("expanded", { waitUntilFirstUpdate: !0 })
], e.prototype, "handleExpandedChange", 1);
i([
  a("expanded", { waitUntilFirstUpdate: !0 })
], e.prototype, "handleExpandAnimation", 1);
i([
  a("lazy", { waitUntilFirstUpdate: !0 })
], e.prototype, "handleLazyChange", 1);
var N = e;
b("tree-item.expand", {
  keyframes: [
    { height: "0", opacity: "0", overflow: "hidden" },
    { height: "auto", opacity: "1", overflow: "hidden" }
  ],
  options: { duration: 250, easing: "cubic-bezier(0.4, 0.0, 0.2, 1)" }
});
b("tree-item.collapse", {
  keyframes: [
    { height: "auto", opacity: "1", overflow: "hidden" },
    { height: "0", opacity: "0", overflow: "hidden" }
  ],
  options: { duration: 200, easing: "cubic-bezier(0.4, 0.0, 0.2, 1)" }
});
export {
  N as S
};
