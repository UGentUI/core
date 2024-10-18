import { i as k, _ as i, n as h, S as C, k as y, t as z } from "../../chunks/chunk.NLWS5DN7.js";
import { M as S } from "../../chunks/chunk.5EJHXPFX.js";
import { l as f, u as m } from "../../chunks/chunk.RWUUFNUL.js";
import { S as A } from "../../chunks/chunk.AYP3HPB7.js";
import { s as o, g as l, b as d, a as c } from "../../chunks/chunk.3EPZX5HE.js";
import { w as g } from "../../chunks/chunk.B4BZKR24.js";
import { H as $ } from "../../chunks/chunk.NYIIDP5N.js";
import { L as D } from "../../chunks/chunk.WLV3FVBR.js";
import { w as x } from "../../chunks/chunk.CCJUT23E.js";
import { c as O } from "../../chunks/chunk.TUVJKY7S.js";
import { R as P } from "../../chunks/class-map.js";
import { t as v } from "../../chunks/if-defined.js";
import { e as w } from "../../chunks/query.js";
import "../../chunks/chunk.O7VCMB7W.js";
var q = k`
  :host {
    --size: 25rem;
    --header-spacing: var(--ug-spacing-large);
    --body-spacing: var(--ug-spacing-large);
    --footer-spacing: var(--ug-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--ug-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--ug-panel-background-color);
    box-shadow: var(--ug-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--ug-font-size-large);
    line-height: var(--ug-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--ug-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions ug-icon-button,
  .drawer__header-actions ::slotted(ug-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--ug-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(ug-button:not(:last-of-type)) {
    margin-inline-end: var(--ug-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--ug-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--ug-color-neutral-0);
    }
  }
`;
function _(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var a = class extends C {
  constructor() {
    super(...arguments), this.hasSlotController = new $(this, "footer"), this.localize = new D(this), this.modal = new S(this), this.open = !1, this.label = "", this.placement = "end", this.contained = !1, this.noHeader = !1, this.handleDocumentKeyDown = (e) => {
      this.contained || e.key === "Escape" && this.modal.isActive() && this.open && (e.stopImmediatePropagation(), this.requestClose("keyboard"));
    };
  }
  firstUpdated() {
    this.drawer.hidden = !this.open, this.open && (this.addOpenListeners(), this.contained || (this.modal.activate(), f(this)));
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), m(this), (e = this.closeWatcher) == null || e.destroy();
  }
  requestClose(e) {
    if (this.emit("ug-request-close", {
      cancelable: !0,
      detail: { source: e }
    }).defaultPrevented) {
      const t = l(this, "drawer.denyClose", { dir: this.localize.dir() });
      d(this.panel, t.keyframes, t.options);
      return;
    }
    this.hide();
  }
  addOpenListeners() {
    var e;
    "CloseWatcher" in window ? ((e = this.closeWatcher) == null || e.destroy(), this.contained || (this.closeWatcher = new CloseWatcher(), this.closeWatcher.onclose = () => this.requestClose("keyboard"))) : document.addEventListener("keydown", this.handleDocumentKeyDown);
  }
  removeOpenListeners() {
    var e;
    document.removeEventListener("keydown", this.handleDocumentKeyDown), (e = this.closeWatcher) == null || e.destroy();
  }
  async handleOpenChange() {
    if (this.open) {
      this.emit("ug-show"), this.addOpenListeners(), this.originalTrigger = document.activeElement, this.contained || (this.modal.activate(), f(this));
      const e = this.querySelector("[autofocus]");
      e && e.removeAttribute("autofocus"), await Promise.all([c(this.drawer), c(this.overlay)]), this.drawer.hidden = !1, requestAnimationFrame(() => {
        this.emit("ug-initial-focus", { cancelable: !0 }).defaultPrevented || (e ? e.focus({ preventScroll: !0 }) : this.panel.focus({ preventScroll: !0 })), e && e.setAttribute("autofocus", "");
      });
      const r = l(this, `drawer.show${_(this.placement)}`, {
        dir: this.localize.dir()
      }), t = l(this, "drawer.overlay.show", { dir: this.localize.dir() });
      await Promise.all([
        d(this.panel, r.keyframes, r.options),
        d(this.overlay, t.keyframes, t.options)
      ]), this.emit("ug-after-show");
    } else {
      this.emit("ug-hide"), this.removeOpenListeners(), this.contained || (this.modal.deactivate(), m(this)), await Promise.all([c(this.drawer), c(this.overlay)]);
      const e = l(this, `drawer.hide${_(this.placement)}`, {
        dir: this.localize.dir()
      }), r = l(this, "drawer.overlay.hide", { dir: this.localize.dir() });
      await Promise.all([
        d(this.overlay, r.keyframes, r.options).then(() => {
          this.overlay.hidden = !0;
        }),
        d(this.panel, e.keyframes, e.options).then(() => {
          this.panel.hidden = !0;
        })
      ]), this.drawer.hidden = !0, this.overlay.hidden = !1, this.panel.hidden = !1;
      const t = this.originalTrigger;
      typeof (t == null ? void 0 : t.focus) == "function" && setTimeout(() => t.focus()), this.emit("ug-after-hide");
    }
  }
  handleNoModalChange() {
    this.open && !this.contained && (this.modal.activate(), f(this)), this.open && this.contained && (this.modal.deactivate(), m(this));
  }
  /** Shows the drawer. */
  async show() {
    if (!this.open)
      return this.open = !0, g(this, "ug-after-show");
  }
  /** Hides the drawer */
  async hide() {
    if (this.open)
      return this.open = !1, g(this, "ug-after-hide");
  }
  render() {
    return y`
      <div
        part="base"
        class=${P({
      drawer: !0,
      "drawer--open": this.open,
      "drawer--top": this.placement === "top",
      "drawer--end": this.placement === "end",
      "drawer--bottom": this.placement === "bottom",
      "drawer--start": this.placement === "start",
      "drawer--contained": this.contained,
      "drawer--fixed": !this.contained,
      "drawer--rtl": this.localize.dir() === "rtl",
      "drawer--has-footer": this.hasSlotController.test("footer")
    })}
      >
        <div part="overlay" class="drawer__overlay" @click=${() => this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${v(this.noHeader ? this.label : void 0)}
          aria-labelledby=${v(this.noHeader ? void 0 : "title")}
          tabindex="0"
        >
          ${this.noHeader ? "" : y`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length > 0 ? this.label : "\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <ug-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${() => this.requestClose("close-button")}
                    ></ug-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
  }
};
a.styles = [O, q];
a.dependencies = { "ug-icon-button": A };
i([
  w(".drawer")
], a.prototype, "drawer", 2);
i([
  w(".drawer__panel")
], a.prototype, "panel", 2);
i([
  w(".drawer__overlay")
], a.prototype, "overlay", 2);
i([
  h({ type: Boolean, reflect: !0 })
], a.prototype, "open", 2);
i([
  h({ reflect: !0 })
], a.prototype, "label", 2);
i([
  h({ reflect: !0 })
], a.prototype, "placement", 2);
i([
  h({ type: Boolean, reflect: !0 })
], a.prototype, "contained", 2);
i([
  h({ attribute: "no-header", type: Boolean, reflect: !0 })
], a.prototype, "noHeader", 2);
i([
  x("open", { waitUntilFirstUpdate: !0 })
], a.prototype, "handleOpenChange", 1);
i([
  x("contained", { waitUntilFirstUpdate: !0 })
], a.prototype, "handleNoModalChange", 1);
o("drawer.showTop", {
  keyframes: [
    { opacity: 0, translate: "0 -100%" },
    { opacity: 1, translate: "0 0" }
  ],
  options: { duration: 250, easing: "ease" }
});
o("drawer.hideTop", {
  keyframes: [
    { opacity: 1, translate: "0 0" },
    { opacity: 0, translate: "0 -100%" }
  ],
  options: { duration: 250, easing: "ease" }
});
o("drawer.showEnd", {
  keyframes: [
    { opacity: 0, translate: "100%" },
    { opacity: 1, translate: "0" }
  ],
  rtlKeyframes: [
    { opacity: 0, translate: "-100%" },
    { opacity: 1, translate: "0" }
  ],
  options: { duration: 250, easing: "ease" }
});
o("drawer.hideEnd", {
  keyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "100%" }
  ],
  rtlKeyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "-100%" }
  ],
  options: { duration: 250, easing: "ease" }
});
o("drawer.showBottom", {
  keyframes: [
    { opacity: 0, translate: "0 100%" },
    { opacity: 1, translate: "0 0" }
  ],
  options: { duration: 250, easing: "ease" }
});
o("drawer.hideBottom", {
  keyframes: [
    { opacity: 1, translate: "0 0" },
    { opacity: 0, translate: "0 100%" }
  ],
  options: { duration: 250, easing: "ease" }
});
o("drawer.showStart", {
  keyframes: [
    { opacity: 0, translate: "-100%" },
    { opacity: 1, translate: "0" }
  ],
  rtlKeyframes: [
    { opacity: 0, translate: "100%" },
    { opacity: 1, translate: "0" }
  ],
  options: { duration: 250, easing: "ease" }
});
o("drawer.hideStart", {
  keyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "-100%" }
  ],
  rtlKeyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "100%" }
  ],
  options: { duration: 250, easing: "ease" }
});
o("drawer.denyClose", {
  keyframes: [{ scale: 1 }, { scale: 1.01 }, { scale: 1 }],
  options: { duration: 250 }
});
o("drawer.overlay.show", {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250 }
});
o("drawer.overlay.hide", {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 }
});
var L = Object.defineProperty, B = Object.getOwnPropertyDescriptor, E = (e, r, t, n) => {
  for (var s = n > 1 ? void 0 : n ? B(r, t) : r, p = e.length - 1, u; p >= 0; p--)
    (u = e[p]) && (s = (n ? u(r, t, s) : u(s)) || s);
  return n && s && L(r, t, s), s;
};
let b = class extends a {
};
b = E([
  z("ug-drawer")
], b);
export {
  b as UgDrawer
};
