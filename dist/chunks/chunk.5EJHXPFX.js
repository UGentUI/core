import { g as u } from "./chunk.LXDTFLWU.js";
import { a as d } from "./chunk.NLWS5DN7.js";
function* h(e = document.activeElement) {
  e != null && (yield e, "shadowRoot" in e && e.shadowRoot && e.shadowRoot.mode !== "closed" && (yield* d(h(e.shadowRoot.activeElement))));
}
function b() {
  return [...h()].pop();
}
var o = [], m = class {
  constructor(e) {
    this.tabDirection = "forward", this.handleFocusIn = () => {
      this.isActive() && this.checkFocus();
    }, this.handleKeyDown = (i) => {
      var r;
      if (i.key !== "Tab" || this.isExternalActivated || !this.isActive())
        return;
      const t = b();
      if (this.previousFocus = t, this.previousFocus && this.possiblyHasTabbableChildren(this.previousFocus))
        return;
      i.shiftKey ? this.tabDirection = "backward" : this.tabDirection = "forward";
      const a = u(this.element);
      let s = a.findIndex((n) => n === t);
      this.previousFocus = this.currentFocus;
      const c = this.tabDirection === "forward" ? 1 : -1;
      for (; ; ) {
        s + c >= a.length ? s = 0 : s + c < 0 ? s = a.length - 1 : s += c, this.previousFocus = this.currentFocus;
        const n = (
          /** @type {HTMLElement} */
          a[s]
        );
        if (this.tabDirection === "backward" && this.previousFocus && this.possiblyHasTabbableChildren(this.previousFocus) || n && this.possiblyHasTabbableChildren(n))
          return;
        i.preventDefault(), this.currentFocus = n, (r = this.currentFocus) == null || r.focus({ preventScroll: !1 });
        const l = [...h()];
        if (l.includes(this.currentFocus) || !l.includes(this.previousFocus))
          break;
      }
      setTimeout(() => this.checkFocus());
    }, this.handleKeyUp = () => {
      this.tabDirection = "forward";
    }, this.element = e, this.elementsWithTabbableControls = ["iframe"];
  }
  /** Activates focus trapping. */
  activate() {
    o.push(this.element), document.addEventListener("focusin", this.handleFocusIn), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("keyup", this.handleKeyUp);
  }
  /** Deactivates focus trapping. */
  deactivate() {
    o = o.filter((e) => e !== this.element), this.currentFocus = null, document.removeEventListener("focusin", this.handleFocusIn), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("keyup", this.handleKeyUp);
  }
  /** Determines if this modal element is currently active or not. */
  isActive() {
    return o[o.length - 1] === this.element;
  }
  /** Activates external modal behavior and temporarily disables focus trapping. */
  activateExternal() {
    this.isExternalActivated = !0;
  }
  /** Deactivates external modal behavior and re-enables focus trapping. */
  deactivateExternal() {
    this.isExternalActivated = !1;
  }
  checkFocus() {
    if (this.isActive() && !this.isExternalActivated) {
      const e = u(this.element);
      if (!this.element.matches(":focus-within")) {
        const i = e[0], r = e[e.length - 1], t = this.tabDirection === "forward" ? i : r;
        typeof (t == null ? void 0 : t.focus) == "function" && (this.currentFocus = t, t.focus({ preventScroll: !1 }));
      }
    }
  }
  possiblyHasTabbableChildren(e) {
    return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase()) || e.hasAttribute("controls");
  }
};
export {
  m as M
};
