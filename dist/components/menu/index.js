import { i as m, _ as d, S as h, k as g, t as f } from "../../chunks/chunk.NLWS5DN7.js";
import { c as p } from "../../chunks/chunk.TUVJKY7S.js";
import { e as b } from "../../chunks/query.js";
var k = m`
  :host {
    display: block;
    position: relative;
    background: var(--ug-panel-background-color);
    border: solid var(--ug-panel-border-width) var(--ug-panel-border-color);
    border-radius: var(--ug-border-radius-medium);
    padding: var(--ug-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(ug-divider) {
    --spacing: var(--ug-spacing-x-small);
  }
`, u = class extends h {
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "menu");
  }
  handleClick(e) {
    const t = ["menuitem", "menuitemcheckbox"], s = e.composedPath(), r = s.find((o) => {
      var i;
      return t.includes(((i = o == null ? void 0 : o.getAttribute) == null ? void 0 : i.call(o, "role")) || "");
    });
    if (!r || s.find((o) => {
      var i;
      return ((i = o == null ? void 0 : o.getAttribute) == null ? void 0 : i.call(o, "role")) === "menu";
    }) !== this)
      return;
    const l = r;
    l.type === "checkbox" && (l.checked = !l.checked), this.emit("ug-select", { detail: { item: l } });
  }
  handleKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      const t = this.getCurrentItem();
      e.preventDefault(), e.stopPropagation(), t == null || t.click();
    } else if (["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
      const t = this.getAllItems(), s = this.getCurrentItem();
      let r = s ? t.indexOf(s) : 0;
      t.length > 0 && (e.preventDefault(), e.stopPropagation(), e.key === "ArrowDown" ? r++ : e.key === "ArrowUp" ? r-- : e.key === "Home" ? r = 0 : e.key === "End" && (r = t.length - 1), r < 0 && (r = t.length - 1), r > t.length - 1 && (r = 0), this.setCurrentItem(t[r]), t[r].focus());
    }
  }
  handleMouseDown(e) {
    const t = e.target;
    this.isMenuItem(t) && this.setCurrentItem(t);
  }
  handleSlotChange() {
    const e = this.getAllItems();
    e.length > 0 && this.setCurrentItem(e[0]);
  }
  isMenuItem(e) {
    var t;
    return e.tagName.toLowerCase() === "ug-menu-item" || ["menuitem", "menuitemcheckbox", "menuitemradio"].includes((t = e.getAttribute("role")) != null ? t : "");
  }
  /** @internal Gets all slotted menu items, ignoring dividers, headers, and other elements. */
  getAllItems() {
    return [...this.defaultSlot.assignedElements({ flatten: !0 })].filter((e) => !(e.inert || !this.isMenuItem(e)));
  }
  /**
   * @internal Gets the current menu item, which is the menu item that has `tabindex="0"` within the roving tab index.
   * The menu item may or may not have focus, but for keyboard interaction purposes it's considered the "active" item.
   */
  getCurrentItem() {
    return this.getAllItems().find((e) => e.getAttribute("tabindex") === "0");
  }
  /**
   * @internal Sets the current menu item to the specified element. This sets `tabindex="0"` on the target element and
   * `tabindex="-1"` to all other items. This method must be called prior to setting focus on a menu item.
   */
  setCurrentItem(e) {
    this.getAllItems().forEach((s) => {
      s.setAttribute("tabindex", s === e ? "0" : "-1");
    });
  }
  render() {
    return g`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `;
  }
};
u.styles = [p, k];
d([
  b("slot")
], u.prototype, "defaultSlot", 2);
var v = Object.defineProperty, w = Object.getOwnPropertyDescriptor, y = (e, t, s, r) => {
  for (var n = r > 1 ? void 0 : r ? w(t, s) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (n = (r ? l(t, s, n) : l(n)) || n);
  return r && n && v(t, s, n), n;
};
let c = class extends u {
};
c = y([
  f("ug-menu")
], c);
export {
  c as UgMenu
};
