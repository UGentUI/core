import { i as g, _ as a, n as h, S as y, k as w, t as x } from "../../chunks/chunk.NLWS5DN7.js";
import { c as p } from "../../chunks/chunk.HF7GESMZ.js";
import { L as P } from "../../chunks/chunk.WLV3FVBR.js";
import { w as c } from "../../chunks/chunk.CCJUT23E.js";
import { c as b } from "../../chunks/chunk.TUVJKY7S.js";
import { t as z } from "../../chunks/if-defined.js";
import { e as T } from "../../chunks/query.js";
var C = g`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--ug-color-neutral-200);
    color: var(--ug-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--ug-color-primary-600);
    color: var(--ug-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;
function $(i, e) {
  function s(t) {
    const d = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, l = d.left + n.scrollX, u = d.top + n.scrollY, m = t.pageX - l, f = t.pageY - u;
    e != null && e.onMove && e.onMove(m, f);
  }
  function r() {
    document.removeEventListener("pointermove", s), document.removeEventListener("pointerup", r), e != null && e.onStop && e.onStop();
  }
  document.addEventListener("pointermove", s, { passive: !0 }), document.addEventListener("pointerup", r), (e == null ? void 0 : e.initialEvent) instanceof PointerEvent && s(e.initialEvent);
}
var o = class extends y {
  constructor() {
    super(...arguments), this.localize = new P(this), this.position = 50, this.vertical = !1, this.disabled = !1, this.snapThreshold = 12;
  }
  connectedCallback() {
    super.connectedCallback(), this.resizeObserver = new ResizeObserver((i) => this.handleResize(i)), this.updateComplete.then(() => this.resizeObserver.observe(this)), this.detectSize(), this.cachedPositionInPixels = this.percentageToPixels(this.position);
  }
  disconnectedCallback() {
    var i;
    super.disconnectedCallback(), (i = this.resizeObserver) == null || i.unobserve(this);
  }
  detectSize() {
    const { width: i, height: e } = this.getBoundingClientRect();
    this.size = this.vertical ? e : i;
  }
  percentageToPixels(i) {
    return this.size * (i / 100);
  }
  pixelsToPercentage(i) {
    return i / this.size * 100;
  }
  handleDrag(i) {
    const e = this.matches(":dir(rtl)");
    this.disabled || (i.cancelable && i.preventDefault(), $(this, {
      onMove: (s, r) => {
        let t = this.vertical ? r : s;
        this.primary === "end" && (t = this.size - t), this.snap && this.snap.split(" ").forEach((n) => {
          let l;
          n.endsWith("%") ? l = this.size * (parseFloat(n) / 100) : l = parseFloat(n), e && !this.vertical && (l = this.size - l), t >= l - this.snapThreshold && t <= l + this.snapThreshold && (t = l);
        }), this.position = p(this.pixelsToPercentage(t), 0, 100);
      },
      initialEvent: i
    }));
  }
  handleKeyDown(i) {
    if (!this.disabled && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(i.key)) {
      let e = this.position;
      const s = (i.shiftKey ? 10 : 1) * (this.primary === "end" ? -1 : 1);
      i.preventDefault(), (i.key === "ArrowLeft" && !this.vertical || i.key === "ArrowUp" && this.vertical) && (e -= s), (i.key === "ArrowRight" && !this.vertical || i.key === "ArrowDown" && this.vertical) && (e += s), i.key === "Home" && (e = this.primary === "end" ? 100 : 0), i.key === "End" && (e = this.primary === "end" ? 0 : 100), this.position = p(e, 0, 100);
    }
  }
  handleResize(i) {
    const { width: e, height: s } = i[0].contentRect;
    this.size = this.vertical ? s : e, (isNaN(this.cachedPositionInPixels) || this.position === 1 / 0) && (this.cachedPositionInPixels = Number(this.getAttribute("position-in-pixels")), this.positionInPixels = Number(this.getAttribute("position-in-pixels")), this.position = this.pixelsToPercentage(this.positionInPixels)), this.primary && (this.position = this.pixelsToPercentage(this.cachedPositionInPixels));
  }
  handlePositionChange() {
    this.cachedPositionInPixels = this.percentageToPixels(this.position), this.positionInPixels = this.percentageToPixels(this.position), this.emit("ug-reposition");
  }
  handlePositionInPixelsChange() {
    this.position = this.pixelsToPercentage(this.positionInPixels);
  }
  handleVerticalChange() {
    this.detectSize();
  }
  render() {
    const i = this.vertical ? "gridTemplateRows" : "gridTemplateColumns", e = this.vertical ? "gridTemplateColumns" : "gridTemplateRows", s = this.matches(":dir(rtl)"), r = `
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `, t = "auto";
    return this.primary === "end" ? s && !this.vertical ? this.style[i] = `${r} var(--divider-width) ${t}` : this.style[i] = `${t} var(--divider-width) ${r}` : s && !this.vertical ? this.style[i] = `${t} var(--divider-width) ${r}` : this.style[i] = `${r} var(--divider-width) ${t}`, this.style[e] = "", w`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${z(this.disabled ? void 0 : "0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `;
  }
};
o.styles = [b, C];
a([
  T(".divider")
], o.prototype, "divider", 2);
a([
  h({ type: Number, reflect: !0 })
], o.prototype, "position", 2);
a([
  h({ attribute: "position-in-pixels", type: Number })
], o.prototype, "positionInPixels", 2);
a([
  h({ type: Boolean, reflect: !0 })
], o.prototype, "vertical", 2);
a([
  h({ type: Boolean, reflect: !0 })
], o.prototype, "disabled", 2);
a([
  h()
], o.prototype, "primary", 2);
a([
  h()
], o.prototype, "snap", 2);
a([
  h({ type: Number, attribute: "snap-threshold" })
], o.prototype, "snapThreshold", 2);
a([
  c("position")
], o.prototype, "handlePositionChange", 1);
a([
  c("positionInPixels")
], o.prototype, "handlePositionInPixelsChange", 1);
a([
  c("vertical")
], o.prototype, "handleVerticalChange", 1);
var I = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, D = (i, e, s, r) => {
  for (var t = r > 1 ? void 0 : r ? _(e, s) : e, d = i.length - 1, n; d >= 0; d--)
    (n = i[d]) && (t = (r ? n(e, s, t) : n(t)) || t);
  return r && t && I(e, s, t), t;
};
let v = class extends o {
};
v = D([
  x("ug-split-panel")
], v);
export {
  v as UgSplitPanel
};
