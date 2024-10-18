import { i as g, _ as h, n as I, S as y, k as b, t as x } from "../../chunks/chunk.NLWS5DN7.js";
import { S as u } from "../../chunks/chunk.IYEYDJ32.js";
import { c as w } from "../../chunks/chunk.HF7GESMZ.js";
import { w as v } from "../../chunks/chunk.CCJUT23E.js";
import { c as A } from "../../chunks/chunk.TUVJKY7S.js";
import { e as m } from "../../chunks/query.js";
import "../../chunks/chunk.CX3DZWHK.js";
import "../../chunks/chunk.SI4ACBFK.js";
import "../../chunks/chunk.R2T2D3TO.js";
import "../../chunks/chunk.2RCF7SLU.js";
import "../../chunks/chunk.WLV3FVBR.js";
import "../../chunks/chunk.O7VCMB7W.js";
var T = g`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--ug-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--ug-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;
function f(e, t = !1) {
  function s(n) {
    const l = n.getChildrenItems({ includeDisabled: !1 });
    if (l.length) {
      const d = l.every((c) => c.selected), a = l.every((c) => !c.selected && !c.indeterminate);
      n.selected = d, n.indeterminate = !d && !a;
    }
  }
  function i(n) {
    const l = n.parentElement;
    u.isTreeItem(l) && (s(l), i(l));
  }
  function o(n) {
    for (const l of n.getChildrenItems())
      l.selected = t ? n.selected || l.selected : !l.disabled && n.selected, o(l);
    t && s(n);
  }
  o(e), i(e);
}
var r = class extends y {
  constructor() {
    super(), this.selection = "single", this.clickTarget = null, this.initTreeItem = (e) => {
      e.selectable = this.selection === "multiple", ["expand", "collapse"].filter((t) => !!this.querySelector(`[slot="${t}-icon"]`)).forEach((t) => {
        const s = e.querySelector(`[slot="${t}-icon"]`), i = this.getExpandButtonIcon(t);
        i && (s === null ? e.append(i) : s.hasAttribute("data-default") && s.replaceWith(i));
      });
    }, this.handleTreeChanged = (e) => {
      for (const t of e) {
        const s = [...t.addedNodes].filter(u.isTreeItem), i = [...t.removedNodes].filter(u.isTreeItem);
        s.forEach(this.initTreeItem), this.lastFocusedItem && i.includes(this.lastFocusedItem) && (this.lastFocusedItem = null);
      }
    }, this.handleFocusOut = (e) => {
      const t = e.relatedTarget;
      (!t || !this.contains(t)) && (this.tabIndex = 0);
    }, this.handleFocusIn = (e) => {
      const t = e.target;
      e.target === this && this.focusItem(this.lastFocusedItem || this.getAllTreeItems()[0]), u.isTreeItem(t) && !t.disabled && (this.lastFocusedItem && (this.lastFocusedItem.tabIndex = -1), this.lastFocusedItem = t, this.tabIndex = -1, t.tabIndex = 0);
    }, this.addEventListener("focusin", this.handleFocusIn), this.addEventListener("focusout", this.handleFocusOut), this.addEventListener("ug-lazy-change", this.handleSlotChange);
  }
  async connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "tree"), this.setAttribute("tabindex", "0"), await this.updateComplete, this.mutationObserver = new MutationObserver(this.handleTreeChanged), this.mutationObserver.observe(this, { childList: !0, subtree: !0 });
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this.mutationObserver) == null || e.disconnect();
  }
  // Generates a clone of the expand icon element to use for each tree item
  getExpandButtonIcon(e) {
    const s = (e === "expand" ? this.expandedIconSlot : this.collapsedIconSlot).assignedElements({ flatten: !0 })[0];
    if (s) {
      const i = s.cloneNode(!0);
      return [i, ...i.querySelectorAll("[id]")].forEach((o) => o.removeAttribute("id")), i.setAttribute("data-default", ""), i.slot = `${e}-icon`, i;
    }
    return null;
  }
  selectItem(e) {
    const t = [...this.selectedItems];
    if (this.selection === "multiple")
      e.selected = !e.selected, e.lazy && (e.expanded = !0), f(e);
    else if (this.selection === "single" || e.isLeaf) {
      const i = this.getAllTreeItems();
      for (const o of i)
        o.selected = o === e;
    } else this.selection === "leaf" && (e.expanded = !e.expanded);
    const s = this.selectedItems;
    (t.length !== s.length || s.some((i) => !t.includes(i))) && Promise.all(s.map((i) => i.updateComplete)).then(() => {
      this.emit("ug-selection-change", { detail: { selection: s } });
    });
  }
  getAllTreeItems() {
    return [...this.querySelectorAll("ug-tree-item")];
  }
  focusItem(e) {
    e == null || e.focus();
  }
  handleKeyDown(e) {
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft", "Home", "End", "Enter", " "].includes(e.key) || e.composedPath().some((o) => {
      var n;
      return ["input", "textarea"].includes((n = o == null ? void 0 : o.tagName) == null ? void 0 : n.toLowerCase());
    }))
      return;
    const t = this.getFocusableItems(), s = this.matches(":dir(ltr)"), i = this.matches(":dir(rtl)");
    if (t.length > 0) {
      e.preventDefault();
      const o = t.findIndex((a) => a.matches(":focus")), n = t[o], l = (a) => {
        const c = t[w(a, 0, t.length - 1)];
        this.focusItem(c);
      }, d = (a) => {
        n.expanded = a;
      };
      e.key === "ArrowDown" ? l(o + 1) : e.key === "ArrowUp" ? l(o - 1) : s && e.key === "ArrowRight" || i && e.key === "ArrowLeft" ? !n || n.disabled || n.expanded || n.isLeaf && !n.lazy ? l(o + 1) : d(!0) : s && e.key === "ArrowLeft" || i && e.key === "ArrowRight" ? !n || n.disabled || n.isLeaf || !n.expanded ? l(o - 1) : d(!1) : e.key === "Home" ? l(0) : e.key === "End" ? l(t.length - 1) : (e.key === "Enter" || e.key === " ") && (n.disabled || this.selectItem(n));
    }
  }
  handleClick(e) {
    const t = e.target, s = t.closest("ug-tree-item"), i = e.composedPath().some((o) => {
      var n;
      return (n = o == null ? void 0 : o.classList) == null ? void 0 : n.contains("tree-item__expand-button");
    });
    !s || s.disabled || t !== this.clickTarget || (i ? s.expanded = !s.expanded : this.selectItem(s));
  }
  handleMouseDown(e) {
    this.clickTarget = e.target;
  }
  handleSlotChange() {
    this.getAllTreeItems().forEach(this.initTreeItem);
  }
  async handleSelectionChange() {
    const e = this.selection === "multiple", t = this.getAllTreeItems();
    this.setAttribute("aria-multiselectable", e ? "true" : "false");
    for (const s of t)
      s.selectable = e;
    e && (await this.updateComplete, [...this.querySelectorAll(":scope > ug-tree-item")].forEach(
      (s) => f(s, !0)
    ));
  }
  /** @internal Returns the list of tree items that are selected in the tree. */
  get selectedItems() {
    const e = this.getAllTreeItems(), t = (s) => s.selected;
    return e.filter(t);
  }
  /** @internal Gets focusable tree items in the tree. */
  getFocusableItems() {
    const e = this.getAllTreeItems(), t = /* @__PURE__ */ new Set();
    return e.filter((s) => {
      var i;
      if (s.disabled)
        return !1;
      const o = (i = s.parentElement) == null ? void 0 : i.closest("[role=treeitem]");
      return o && (!o.expanded || o.loading || t.has(o)) && t.add(s), !t.has(s);
    });
  }
  render() {
    return b`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `;
  }
};
r.styles = [A, T];
h([
  m("slot:not([name])")
], r.prototype, "defaultSlot", 2);
h([
  m("slot[name=expand-icon]")
], r.prototype, "expandedIconSlot", 2);
h([
  m("slot[name=collapse-icon]")
], r.prototype, "collapsedIconSlot", 2);
h([
  I()
], r.prototype, "selection", 2);
h([
  v("selection")
], r.prototype, "handleSelectionChange", 1);
var S = Object.defineProperty, k = Object.getOwnPropertyDescriptor, C = (e, t, s, i) => {
  for (var o = i > 1 ? void 0 : i ? k(t, s) : t, n = e.length - 1, l; n >= 0; n--)
    (l = e[n]) && (o = (i ? l(t, s, o) : l(o)) || o);
  return i && o && S(t, s, o), o;
};
let p = class extends r {
};
p = C([
  x("ug-tree")
], p);
export {
  p as UgTree
};
