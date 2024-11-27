import { i as w, S as y, x as v, _ as s, n as r, t as b } from "../../chunks/chunk.UYAO2JRR.js";
import { a as _ } from "../../chunks/chunk.LXDTFLWU.js";
import { S as E } from "../../chunks/chunk.5J7BMMD5.js";
import { s as h, g as c, a as u, b as f } from "../../chunks/chunk.3EPZX5HE.js";
import { w as g } from "../../chunks/chunk.B4BZKR24.js";
import { L as k } from "../../chunks/chunk.WLV3FVBR.js";
import { w as D } from "../../chunks/chunk.CCJUT23E.js";
import { c as C } from "../../chunks/chunk.TUVJKY7S.js";
import { e as O } from "../../chunks/class-map.js";
import { o as T } from "../../chunks/if-defined.js";
import { e as l } from "../../chunks/query.js";
var L = w`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--ug-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--ug-font-sans);
    font-size: var(--ug-font-size-medium);
    font-weight: var(--ug-font-weight-normal);
    box-shadow: var(--ug-shadow-large);
    border-radius: var(--ug-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(ug-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`, i = class extends y {
  constructor() {
    super(...arguments), this.localize = new k(this), this.open = !1, this.placement = "bottom-start", this.disabled = !1, this.stayOpenOnSelect = !1, this.distance = 0, this.skidding = 0, this.hoist = !1, this.sync = void 0, this.handleKeyDown = (e) => {
      this.open && e.key === "Escape" && (e.stopPropagation(), this.hide(), this.focusOnTrigger());
    }, this.handleDocumentKeyDown = (e) => {
      var t;
      if (e.key === "Escape" && this.open && !this.closeWatcher) {
        e.stopPropagation(), this.focusOnTrigger(), this.hide();
        return;
      }
      if (e.key === "Tab") {
        if (this.open && ((t = document.activeElement) == null ? void 0 : t.tagName.toLowerCase()) === "ug-menu-item") {
          e.preventDefault(), this.hide(), this.focusOnTrigger();
          return;
        }
        setTimeout(() => {
          var o, a, n;
          const p = ((o = this.containingElement) == null ? void 0 : o.getRootNode()) instanceof ShadowRoot ? (n = (a = document.activeElement) == null ? void 0 : a.shadowRoot) == null ? void 0 : n.activeElement : document.activeElement;
          (!this.containingElement || (p == null ? void 0 : p.closest(this.containingElement.tagName.toLowerCase())) !== this.containingElement) && this.hide();
        });
      }
    }, this.handleDocumentMouseDown = (e) => {
      const t = e.composedPath();
      this.containingElement && !t.includes(this.containingElement) && this.hide();
    }, this.handlePanelSelect = (e) => {
      const t = e.target;
      !this.stayOpenOnSelect && t.tagName.toLowerCase() === "ug-menu" && (this.hide(), this.focusOnTrigger());
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.containingElement || (this.containingElement = this);
  }
  firstUpdated() {
    this.panel.hidden = !this.open, this.open && (this.addOpenListeners(), this.popup.active = !0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeOpenListeners(), this.hide();
  }
  focusOnTrigger() {
    const e = this.trigger.assignedElements({ flatten: !0 })[0];
    typeof (e == null ? void 0 : e.focus) == "function" && e.focus();
  }
  getMenu() {
    return this.panel.assignedElements({ flatten: !0 }).find((e) => e.tagName.toLowerCase() === "ug-menu");
  }
  handleTriggerClick() {
    this.open ? this.hide() : (this.show(), this.focusOnTrigger());
  }
  async handleTriggerKeyDown(e) {
    if ([" ", "Enter"].includes(e.key)) {
      e.preventDefault(), this.handleTriggerClick();
      return;
    }
    const t = this.getMenu();
    if (t) {
      const o = t.getAllItems(), a = o[0], n = o[o.length - 1];
      ["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key) && (e.preventDefault(), this.open || (this.show(), await this.updateComplete), o.length > 0 && this.updateComplete.then(() => {
        (e.key === "ArrowDown" || e.key === "Home") && (t.setCurrentItem(a), a.focus()), (e.key === "ArrowUp" || e.key === "End") && (t.setCurrentItem(n), n.focus());
      }));
    }
  }
  handleTriggerKeyUp(e) {
    e.key === " " && e.preventDefault();
  }
  handleTriggerSlotChange() {
    this.updateAccessibleTrigger();
  }
  //
  // Slotted triggers can be arbitrary content, but we need to link them to the dropdown panel with `aria-haspopup` and
  // `aria-expanded`. These must be applied to the "accessible trigger" (the tabbable portion of the trigger element
  // that gets slotted in) so screen readers will understand them. The accessible trigger could be the slotted element,
  // a child of the slotted element, or an element in the slotted element's shadow root.
  //
  // For example, the accessible trigger of an <ug-button> is a <button> located inside its shadow root.
  //
  // To determine this, we assume the first tabbable element in the trigger slot is the "accessible trigger."
  //
  updateAccessibleTrigger() {
    const t = this.trigger.assignedElements({ flatten: !0 }).find((a) => _(a).start);
    let o;
    if (t) {
      switch (t.tagName.toLowerCase()) {
        case "ug-button":
        case "ug-icon-button":
          o = t.button;
          break;
        default:
          o = t;
      }
      o.setAttribute("aria-haspopup", "true"), o.setAttribute("aria-expanded", this.open ? "true" : "false");
    }
  }
  /** Shows the dropdown panel. */
  async show() {
    if (!this.open)
      return this.open = !0, g(this, "ug-after-show");
  }
  /** Hides the dropdown panel */
  async hide() {
    if (this.open)
      return this.open = !1, g(this, "ug-after-hide");
  }
  /**
   * Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
   * is activated.
   */
  reposition() {
    this.popup.reposition();
  }
  addOpenListeners() {
    var e;
    this.panel.addEventListener("ug-select", this.handlePanelSelect), "CloseWatcher" in window ? ((e = this.closeWatcher) == null || e.destroy(), this.closeWatcher = new CloseWatcher(), this.closeWatcher.onclose = () => {
      this.hide(), this.focusOnTrigger();
    }) : this.panel.addEventListener("keydown", this.handleKeyDown), document.addEventListener("keydown", this.handleDocumentKeyDown), document.addEventListener("mousedown", this.handleDocumentMouseDown);
  }
  removeOpenListeners() {
    var e;
    this.panel && (this.panel.removeEventListener("ug-select", this.handlePanelSelect), this.panel.removeEventListener("keydown", this.handleKeyDown)), document.removeEventListener("keydown", this.handleDocumentKeyDown), document.removeEventListener("mousedown", this.handleDocumentMouseDown), (e = this.closeWatcher) == null || e.destroy();
  }
  async handleOpenChange() {
    if (this.disabled) {
      this.open = !1;
      return;
    }
    if (this.updateAccessibleTrigger(), this.open) {
      this.emit("ug-show"), this.addOpenListeners(), await h(this), this.panel.hidden = !1, this.popup.active = !0;
      const { keyframes: e, options: t } = c(this, "dropdown.show", { dir: this.localize.dir() });
      await u(this.popup.popup, e, t), this.emit("ug-after-show");
    } else {
      this.emit("ug-hide"), this.removeOpenListeners(), await h(this);
      const { keyframes: e, options: t } = c(this, "dropdown.hide", { dir: this.localize.dir() });
      await u(this.popup.popup, e, t), this.panel.hidden = !0, this.popup.active = !1, this.emit("ug-after-hide");
    }
  }
  render() {
    return v`
      <ug-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${T(this.sync ? this.sync : void 0)}
        class=${O({
      dropdown: !0,
      "dropdown--open": this.open
    })}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open ? "false" : "true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </ug-popup>
    `;
  }
};
i.styles = [C, L];
i.dependencies = { "ug-popup": E };
s([
  l(".dropdown")
], i.prototype, "popup", 2);
s([
  l(".dropdown__trigger")
], i.prototype, "trigger", 2);
s([
  l(".dropdown__panel")
], i.prototype, "panel", 2);
s([
  r({ type: Boolean, reflect: !0 })
], i.prototype, "open", 2);
s([
  r({ reflect: !0 })
], i.prototype, "placement", 2);
s([
  r({ type: Boolean, reflect: !0 })
], i.prototype, "disabled", 2);
s([
  r({ attribute: "stay-open-on-select", type: Boolean, reflect: !0 })
], i.prototype, "stayOpenOnSelect", 2);
s([
  r({ attribute: !1 })
], i.prototype, "containingElement", 2);
s([
  r({ type: Number })
], i.prototype, "distance", 2);
s([
  r({ type: Number })
], i.prototype, "skidding", 2);
s([
  r({ type: Boolean })
], i.prototype, "hoist", 2);
s([
  r({ reflect: !0 })
], i.prototype, "sync", 2);
s([
  D("open", { waitUntilFirstUpdate: !0 })
], i.prototype, "handleOpenChange", 1);
f("dropdown.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
f("dropdown.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});
var S = Object.defineProperty, z = Object.getOwnPropertyDescriptor, A = (e, t, o, a) => {
  for (var n = a > 1 ? void 0 : a ? z(t, o) : t, p = e.length - 1, d; p >= 0; p--)
    (d = e[p]) && (n = (a ? d(t, o, n) : d(n)) || n);
  return a && n && S(t, o, n), n;
};
let m = class extends i {
};
m = A([
  b("ug-dropdown")
], m);
export {
  m as UgDropdown
};
