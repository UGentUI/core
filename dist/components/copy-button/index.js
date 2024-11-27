import { S as m } from "../../chunks/chunk.UZSA65CO.js";
import { i as d, S as f, x as g, _ as s, n, t as _ } from "../../chunks/chunk.UYAO2JRR.js";
import { g as u, b as h } from "../../chunks/chunk.3EPZX5HE.js";
import { L as v } from "../../chunks/chunk.WLV3FVBR.js";
import { S as w } from "../../chunks/chunk.E6QAPUBK.js";
import { c as L } from "../../chunks/chunk.TUVJKY7S.js";
import { e as C } from "../../chunks/class-map.js";
import { r as b } from "../../chunks/state.js";
import { e as p } from "../../chunks/query.js";
import "../../chunks/chunk.5J7BMMD5.js";
var x = d`
  :host {
    --error-color: var(--ug-color-danger-600);
    --success-color: var(--ug-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--ug-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--ug-spacing-x-small);
    cursor: pointer;
    transition: var(--ug-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--ug-focus-ring);
    outline-offset: var(--ug-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`, t = class extends f {
  constructor() {
    super(...arguments), this.localize = new v(this), this.isCopying = !1, this.status = "rest", this.value = "", this.from = "", this.disabled = !1, this.copyLabel = "", this.successLabel = "", this.errorLabel = "", this.feedbackDuration = 1e3, this.tooltipPlacement = "top", this.hoist = !1;
  }
  async handleCopy() {
    if (this.disabled || this.isCopying)
      return;
    this.isCopying = !0;
    let e = this.value;
    if (this.from) {
      const a = this.getRootNode(), l = this.from.includes("."), c = this.from.includes("[") && this.from.includes("]");
      let o = this.from, i = "";
      l ? [o, i] = this.from.trim().split(".") : c && ([o, i] = this.from.trim().replace(/\]$/, "").split("["));
      const r = "getElementById" in a ? a.getElementById(o) : null;
      r ? c ? e = r.getAttribute(i) || "" : l ? e = r[i] || "" : e = r.textContent || "" : (this.showStatus("error"), this.emit("ug-error"));
    }
    if (!e)
      this.showStatus("error"), this.emit("ug-error");
    else
      try {
        await navigator.clipboard.writeText(e), this.showStatus("success"), this.emit("ug-copy", {
          detail: {
            value: e
          }
        });
      } catch {
        this.showStatus("error"), this.emit("ug-error");
      }
  }
  async showStatus(e) {
    const a = this.copyLabel || this.localize.term("copy"), l = this.successLabel || this.localize.term("copied"), c = this.errorLabel || this.localize.term("error"), o = e === "success" ? this.successIcon : this.errorIcon, i = u(this, "copy.in", { dir: "ltr" }), r = u(this, "copy.out", { dir: "ltr" });
    this.tooltip.content = e === "success" ? l : c, await this.copyIcon.animate(r.keyframes, r.options).finished, this.copyIcon.hidden = !0, this.status = e, o.hidden = !1, await o.animate(i.keyframes, i.options).finished, setTimeout(async () => {
      await o.animate(r.keyframes, r.options).finished, o.hidden = !0, this.status = "rest", this.copyIcon.hidden = !1, await this.copyIcon.animate(i.keyframes, i.options).finished, this.tooltip.content = a, this.isCopying = !1;
    }, this.feedbackDuration);
  }
  render() {
    const e = this.copyLabel || this.localize.term("copy");
    return g`
      <ug-tooltip
        class=${C({
      "copy-button": !0,
      "copy-button--success": this.status === "success",
      "copy-button--error": this.status === "error"
    })}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <ug-icon library="system" name="copy"></ug-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <ug-icon library="system" name="check"></ug-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <ug-icon library="system" name="x-lg"></ug-icon>
          </slot>
        </button>
      </ug-tooltip>
    `;
  }
};
t.styles = [L, x];
t.dependencies = {
  "ug-icon": w,
  "ug-tooltip": m
};
s([
  p('slot[name="copy-icon"]')
], t.prototype, "copyIcon", 2);
s([
  p('slot[name="success-icon"]')
], t.prototype, "successIcon", 2);
s([
  p('slot[name="error-icon"]')
], t.prototype, "errorIcon", 2);
s([
  p("ug-tooltip")
], t.prototype, "tooltip", 2);
s([
  b()
], t.prototype, "isCopying", 2);
s([
  b()
], t.prototype, "status", 2);
s([
  n()
], t.prototype, "value", 2);
s([
  n()
], t.prototype, "from", 2);
s([
  n({ type: Boolean, reflect: !0 })
], t.prototype, "disabled", 2);
s([
  n({ attribute: "copy-label" })
], t.prototype, "copyLabel", 2);
s([
  n({ attribute: "success-label" })
], t.prototype, "successLabel", 2);
s([
  n({ attribute: "error-label" })
], t.prototype, "errorLabel", 2);
s([
  n({ attribute: "feedback-duration", type: Number })
], t.prototype, "feedbackDuration", 2);
s([
  n({ attribute: "tooltip-placement" })
], t.prototype, "tooltipPlacement", 2);
s([
  n({ type: Boolean })
], t.prototype, "hoist", 2);
h("copy.in", {
  keyframes: [
    { scale: ".25", opacity: ".25" },
    { scale: "1", opacity: "1" }
  ],
  options: { duration: 100 }
});
h("copy.out", {
  keyframes: [
    { scale: "1", opacity: "1" },
    { scale: ".25", opacity: "0" }
  ],
  options: { duration: 100 }
});
var S = Object.defineProperty, I = Object.getOwnPropertyDescriptor, $ = (e, a, l, c) => {
  for (var o = c > 1 ? void 0 : c ? I(a, l) : a, i = e.length - 1, r; i >= 0; i--)
    (r = e[i]) && (o = (c ? r(a, l, o) : r(o)) || o);
  return c && o && S(a, l, o), o;
};
let y = class extends t {
};
y = $([
  _("ug-copy-button")
], y);
export {
  y as UgCopyButton
};
