import { M as w } from "../../chunks/chunk.5EJHXPFX.js";
import { l as f, u as m } from "../../chunks/chunk.RWUUFNUL.js";
import { i as x, _ as s, n as g, S as k, k as v, t as C } from "../../chunks/chunk.NLWS5DN7.js";
import { S as z } from "../../chunks/chunk.AYP3HPB7.js";
import { s as d, g as r, b as n, a as h } from "../../chunks/chunk.3EPZX5HE.js";
import { w as y } from "../../chunks/chunk.B4BZKR24.js";
import { H as S } from "../../chunks/chunk.NYIIDP5N.js";
import { L as P } from "../../chunks/chunk.WLV3FVBR.js";
import { w as A } from "../../chunks/chunk.CCJUT23E.js";
import { c as D } from "../../chunks/chunk.TUVJKY7S.js";
import { R as O } from "../../chunks/class-map.js";
import { t as _ } from "../../chunks/if-defined.js";
import { e as u } from "../../chunks/query.js";
import "../../chunks/chunk.O7VCMB7W.js";
var $ = x`
  :host {
    --width: 31rem;
    --header-spacing: var(--ug-spacing-large);
    --body-spacing: var(--ug-spacing-large);
    --footer-spacing: var(--ug-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--ug-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--ug-spacing-2x-large));
    max-height: calc(100% - var(--ug-spacing-2x-large));
    background-color: var(--ug-panel-background-color);
    border-radius: var(--ug-border-radius-medium);
    box-shadow: var(--ug-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--ug-font-size-large);
    line-height: var(--ug-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--ug-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions ug-icon-button,
  .dialog__header-actions ::slotted(ug-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--ug-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(ug-button:not(:first-of-type)) {
    margin-inline-start: var(--ug-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--ug-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--ug-color-neutral-0);
    }
  }
`, a = class extends k {
  constructor() {
    super(...arguments), this.hasSlotController = new S(this, "footer"), this.localize = new P(this), this.modal = new w(this), this.open = !1, this.label = "", this.noHeader = !1, this.handleDocumentKeyDown = (e) => {
      e.key === "Escape" && this.modal.isActive() && this.open && (e.stopPropagation(), this.requestClose("keyboard"));
    };
  }
  firstUpdated() {
    this.dialog.hidden = !this.open, this.open && (this.addOpenListeners(), this.modal.activate(), f(this));
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), this.modal.deactivate(), m(this), (e = this.closeWatcher) == null || e.destroy();
  }
  requestClose(e) {
    if (this.emit("ug-request-close", {
      cancelable: !0,
      detail: { source: e }
    }).defaultPrevented) {
      const t = r(this, "dialog.denyClose", { dir: this.localize.dir() });
      n(this.panel, t.keyframes, t.options);
      return;
    }
    this.hide();
  }
  addOpenListeners() {
    var e;
    "CloseWatcher" in window ? ((e = this.closeWatcher) == null || e.destroy(), this.closeWatcher = new CloseWatcher(), this.closeWatcher.onclose = () => this.requestClose("keyboard")) : document.addEventListener("keydown", this.handleDocumentKeyDown);
  }
  removeOpenListeners() {
    var e;
    (e = this.closeWatcher) == null || e.destroy(), document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  async handleOpenChange() {
    if (this.open) {
      this.emit("ug-show"), this.addOpenListeners(), this.originalTrigger = document.activeElement, this.modal.activate(), f(this);
      const e = this.querySelector("[autofocus]");
      e && e.removeAttribute("autofocus"), await Promise.all([h(this.dialog), h(this.overlay)]), this.dialog.hidden = !1, requestAnimationFrame(() => {
        this.emit("ug-initial-focus", { cancelable: !0 }).defaultPrevented || (e ? e.focus({ preventScroll: !0 }) : this.panel.focus({ preventScroll: !0 })), e && e.setAttribute("autofocus", "");
      });
      const o = r(this, "dialog.show", { dir: this.localize.dir() }), t = r(this, "dialog.overlay.show", { dir: this.localize.dir() });
      await Promise.all([
        n(this.panel, o.keyframes, o.options),
        n(this.overlay, t.keyframes, t.options)
      ]), this.emit("ug-after-show");
    } else {
      this.emit("ug-hide"), this.removeOpenListeners(), this.modal.deactivate(), await Promise.all([h(this.dialog), h(this.overlay)]);
      const e = r(this, "dialog.hide", { dir: this.localize.dir() }), o = r(this, "dialog.overlay.hide", { dir: this.localize.dir() });
      await Promise.all([
        n(this.overlay, o.keyframes, o.options).then(() => {
          this.overlay.hidden = !0;
        }),
        n(this.panel, e.keyframes, e.options).then(() => {
          this.panel.hidden = !0;
        })
      ]), this.dialog.hidden = !0, this.overlay.hidden = !1, this.panel.hidden = !1, m(this);
      const t = this.originalTrigger;
      typeof (t == null ? void 0 : t.focus) == "function" && setTimeout(() => t.focus()), this.emit("ug-after-hide");
    }
  }
  /** Shows the dialog. */
  async show() {
    if (!this.open)
      return this.open = !0, y(this, "ug-after-show");
  }
  /** Hides the dialog */
  async hide() {
    if (this.open)
      return this.open = !1, y(this, "ug-after-hide");
  }
  render() {
    return v`
      <div
        part="base"
        class=${O({
      dialog: !0,
      "dialog--open": this.open,
      "dialog--has-footer": this.hasSlotController.test("footer")
    })}
      >
        <div part="overlay" class="dialog__overlay" @click=${() => this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${_(this.noHeader ? this.label : void 0)}
          aria-labelledby=${_(this.noHeader ? void 0 : "title")}
          tabindex="-1"
        >
          ${this.noHeader ? "" : v`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length > 0 ? this.label : "\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <ug-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${() => this.requestClose("close-button")}"
                    ></ug-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
  }
};
a.styles = [D, $];
a.dependencies = {
  "ug-icon-button": z
};
s([
  u(".dialog")
], a.prototype, "dialog", 2);
s([
  u(".dialog__panel")
], a.prototype, "panel", 2);
s([
  u(".dialog__overlay")
], a.prototype, "overlay", 2);
s([
  g({ type: Boolean, reflect: !0 })
], a.prototype, "open", 2);
s([
  g({ reflect: !0 })
], a.prototype, "label", 2);
s([
  g({ attribute: "no-header", type: Boolean, reflect: !0 })
], a.prototype, "noHeader", 2);
s([
  A("open", { waitUntilFirstUpdate: !0 })
], a.prototype, "handleOpenChange", 1);
d("dialog.show", {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 250, easing: "ease" }
});
d("dialog.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 }
  ],
  options: { duration: 250, easing: "ease" }
});
d("dialog.denyClose", {
  keyframes: [{ scale: 1 }, { scale: 1.02 }, { scale: 1 }],
  options: { duration: 250 }
});
d("dialog.overlay.show", {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250 }
});
d("dialog.overlay.hide", {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 }
});
var q = Object.defineProperty, L = Object.getOwnPropertyDescriptor, E = (e, o, t, l) => {
  for (var i = l > 1 ? void 0 : l ? L(o, t) : o, c = e.length - 1, p; c >= 0; c--)
    (p = e[c]) && (i = (l ? p(o, t, i) : p(i)) || i);
  return l && i && q(o, t, i), i;
};
let b = class extends a {
};
b = E([
  C("ug-dialog")
], b);
export {
  b as UgDialog
};
