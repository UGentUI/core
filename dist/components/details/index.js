import { i as g, _ as i, n as h, S as _, k as w, t as v } from "../../chunks/chunk.NLWS5DN7.js";
import { s as b, a as p, g as u, b as c, c as m } from "../../chunks/chunk.3EPZX5HE.js";
import { w as y } from "../../chunks/chunk.B4BZKR24.js";
import { L as k } from "../../chunks/chunk.WLV3FVBR.js";
import { S as x } from "../../chunks/chunk.O7VCMB7W.js";
import { w as D } from "../../chunks/chunk.CCJUT23E.js";
import { c as S } from "../../chunks/chunk.TUVJKY7S.js";
import { R as O } from "../../chunks/class-map.js";
import { e as l } from "../../chunks/query.js";
var $ = g`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--ug-color-neutral-200);
    border-radius: var(--ug-border-radius-medium);
    background-color: var(--ug-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--ug-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--ug-focus-ring);
    outline-offset: calc(1px + var(--ug-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--ug-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--ug-spacing-medium);
  }
`, s = class extends _ {
  constructor() {
    super(...arguments), this.localize = new k(this), this.open = !1, this.disabled = !1;
  }
  firstUpdated() {
    this.body.style.height = this.open ? "auto" : "0", this.open && (this.details.open = !0), this.detailsObserver = new MutationObserver((e) => {
      for (const t of e)
        t.type === "attributes" && t.attributeName === "open" && (this.details.open ? this.show() : this.hide());
    }), this.detailsObserver.observe(this.details, { attributes: !0 });
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this.detailsObserver) == null || e.disconnect();
  }
  handleSummaryClick(e) {
    e.preventDefault(), this.disabled || (this.open ? this.hide() : this.show(), this.header.focus());
  }
  handleSummaryKeyDown(e) {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), this.open ? this.hide() : this.show()), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (e.preventDefault(), this.hide()), (e.key === "ArrowDown" || e.key === "ArrowRight") && (e.preventDefault(), this.show());
  }
  async handleOpenChange() {
    if (this.open) {
      if (this.details.open = !0, this.emit("ug-show", { cancelable: !0 }).defaultPrevented) {
        this.open = !1, this.details.open = !1;
        return;
      }
      await p(this.body);
      const { keyframes: t, options: a } = u(this, "details.show", { dir: this.localize.dir() });
      await c(this.body, m(t, this.body.scrollHeight), a), this.body.style.height = "auto", this.emit("ug-after-show");
    } else {
      if (this.emit("ug-hide", { cancelable: !0 }).defaultPrevented) {
        this.details.open = !0, this.open = !0;
        return;
      }
      await p(this.body);
      const { keyframes: t, options: a } = u(this, "details.hide", { dir: this.localize.dir() });
      await c(this.body, m(t, this.body.scrollHeight), a), this.body.style.height = "auto", this.details.open = !1, this.emit("ug-after-hide");
    }
  }
  /** Shows the details. */
  async show() {
    if (!(this.open || this.disabled))
      return this.open = !0, y(this, "ug-after-show");
  }
  /** Hides the details */
  async hide() {
    if (!(!this.open || this.disabled))
      return this.open = !1, y(this, "ug-after-hide");
  }
  render() {
    const e = this.matches(":dir(rtl)");
    return w`
      <details
        part="base"
        class=${O({
      details: !0,
      "details--open": this.open,
      "details--disabled": this.disabled,
      "details--rtl": e
    })}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open ? "true" : "false"}
          aria-controls="content"
          aria-disabled=${this.disabled ? "true" : "false"}
          tabindex=${this.disabled ? "-1" : "0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <ug-icon library="system" name=${e ? "chevron-left" : "chevron-right"}></ug-icon>
            </slot>
            <slot name="collapse-icon">
              <ug-icon library="system" name=${e ? "chevron-left" : "chevron-right"}></ug-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `;
  }
};
s.styles = [S, $];
s.dependencies = {
  "ug-icon": x
};
i([
  l(".details")
], s.prototype, "details", 2);
i([
  l(".details__header")
], s.prototype, "header", 2);
i([
  l(".details__body")
], s.prototype, "body", 2);
i([
  l(".details__expand-icon-slot")
], s.prototype, "expandIconSlot", 2);
i([
  h({ type: Boolean, reflect: !0 })
], s.prototype, "open", 2);
i([
  h()
], s.prototype, "summary", 2);
i([
  h({ type: Boolean, reflect: !0 })
], s.prototype, "disabled", 2);
i([
  D("open", { waitUntilFirstUpdate: !0 })
], s.prototype, "handleOpenChange", 1);
b("details.show", {
  keyframes: [
    { height: "0", opacity: "0" },
    { height: "auto", opacity: "1" }
  ],
  options: { duration: 250, easing: "linear" }
});
b("details.hide", {
  keyframes: [
    { height: "auto", opacity: "1" },
    { height: "0", opacity: "0" }
  ],
  options: { duration: 250, easing: "linear" }
});
var C = Object.defineProperty, A = Object.getOwnPropertyDescriptor, P = (e, t, a, r) => {
  for (var o = r > 1 ? void 0 : r ? A(t, a) : t, n = e.length - 1, d; n >= 0; n--)
    (d = e[n]) && (o = (r ? d(t, a, o) : d(o)) || o);
  return r && o && C(t, a, o), o;
};
let f = class extends s {
};
f = P([
  v("ug-details")
], f);
export {
  f as UgDetails
};
