import { i as y, S as f, x as u, _ as a, n as l, t as b } from "../../chunks/chunk.UYAO2JRR.js";
import { c as _ } from "../../chunks/chunk.HF7GESMZ.js";
import { L as $ } from "../../chunks/chunk.WLV3FVBR.js";
import { S as V } from "../../chunks/chunk.E6QAPUBK.js";
import { w as p } from "../../chunks/chunk.CCJUT23E.js";
import { c as M } from "../../chunks/chunk.TUVJKY7S.js";
import { e as c } from "../../chunks/class-map.js";
import { r as v } from "../../chunks/state.js";
import { t as w } from "../../chunks/event-options.js";
import { e as H } from "../../chunks/query.js";
import { o as g } from "../../chunks/style-map.js";
import { o as m } from "../../chunks/unsafe-html.js";
var P = y`
  :host {
    --symbol-color: var(--ug-color-neutral-300);
    --symbol-color-active: var(--ug-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--ug-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--ug-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--ug-focus-ring);
    outline-offset: var(--ug-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--ug-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`, o = class extends f {
  constructor() {
    super(...arguments), this.localize = new $(this), this.hoverValue = 0, this.isHovering = !1, this.label = "", this.value = 0, this.max = 5, this.precision = 1, this.readonly = !1, this.disabled = !1, this.getSymbol = () => '<ug-icon name="star-fill" library="system"></ug-icon>';
  }
  getValueFromMousePosition(e) {
    return this.getValueFromXCoordinate(e.clientX);
  }
  getValueFromTouchPosition(e) {
    return this.getValueFromXCoordinate(e.touches[0].clientX);
  }
  getValueFromXCoordinate(e) {
    const r = this.localize.dir() === "rtl", { left: t, right: i, width: s } = this.rating.getBoundingClientRect(), n = r ? this.roundToPrecision((i - e) / s * this.max, this.precision) : this.roundToPrecision((e - t) / s * this.max, this.precision);
    return _(n, 0, this.max);
  }
  handleClick(e) {
    this.disabled || (this.setValue(this.getValueFromMousePosition(e)), this.emit("ug-change"));
  }
  setValue(e) {
    this.disabled || this.readonly || (this.value = e === this.value ? 0 : e, this.isHovering = !1);
  }
  handleKeyDown(e) {
    const r = this.localize.dir() === "ltr", t = this.localize.dir() === "rtl", i = this.value;
    if (!(this.disabled || this.readonly)) {
      if (e.key === "ArrowDown" || r && e.key === "ArrowLeft" || t && e.key === "ArrowRight") {
        const s = e.shiftKey ? 1 : this.precision;
        this.value = Math.max(0, this.value - s), e.preventDefault();
      }
      if (e.key === "ArrowUp" || r && e.key === "ArrowRight" || t && e.key === "ArrowLeft") {
        const s = e.shiftKey ? 1 : this.precision;
        this.value = Math.min(this.max, this.value + s), e.preventDefault();
      }
      e.key === "Home" && (this.value = 0, e.preventDefault()), e.key === "End" && (this.value = this.max, e.preventDefault()), this.value !== i && this.emit("ug-change");
    }
  }
  handleMouseEnter(e) {
    this.isHovering = !0, this.hoverValue = this.getValueFromMousePosition(e);
  }
  handleMouseMove(e) {
    this.hoverValue = this.getValueFromMousePosition(e);
  }
  handleMouseLeave() {
    this.isHovering = !1;
  }
  handleTouchStart(e) {
    this.isHovering = !0, this.hoverValue = this.getValueFromTouchPosition(e), e.preventDefault();
  }
  handleTouchMove(e) {
    this.hoverValue = this.getValueFromTouchPosition(e);
  }
  handleTouchEnd(e) {
    this.isHovering = !1, this.setValue(this.hoverValue), this.emit("ug-change"), e.preventDefault();
  }
  roundToPrecision(e, r = 0.5) {
    const t = 1 / r;
    return Math.ceil(e * t) / t;
  }
  handleHoverValueChange() {
    this.emit("ug-hover", {
      detail: {
        phase: "move",
        value: this.hoverValue
      }
    });
  }
  handleIsHoveringChange() {
    this.emit("ug-hover", {
      detail: {
        phase: this.isHovering ? "start" : "end",
        value: this.hoverValue
      }
    });
  }
  /** Sets focus on the rating. */
  focus(e) {
    this.rating.focus(e);
  }
  /** Removes focus from the rating. */
  blur() {
    this.rating.blur();
  }
  render() {
    const e = this.localize.dir() === "rtl", r = Array.from(Array(this.max).keys());
    let t = 0;
    return this.disabled || this.readonly ? t = this.value : t = this.isHovering ? this.hoverValue : this.value, u`
      <div
        part="base"
        class=${c({
      rating: !0,
      "rating--readonly": this.readonly,
      "rating--disabled": this.disabled,
      "rating--rtl": e
    })}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-readonly=${this.readonly ? "true" : "false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled ? "-1" : "0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${r.map((i) => t > i && t < i + 1 ? u`
                <span
                  class=${c({
      rating__symbol: !0,
      "rating__partial-symbol-container": !0,
      "rating__symbol--hover": this.isHovering && Math.ceil(t) === i + 1
    })}
                  role="presentation"
                >
                  <div
                    style=${g({
      clipPath: e ? `inset(0 ${(t - i) * 100}% 0 0)` : `inset(0 0 0 ${(t - i) * 100}%)`
    })}
                  >
                    ${m(this.getSymbol(i + 1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${g({
      clipPath: e ? `inset(0 0 0 ${100 - (t - i) * 100}%)` : `inset(0 ${100 - (t - i) * 100}% 0 0)`
    })}
                  >
                    ${m(this.getSymbol(i + 1))}
                  </div>
                </span>
              ` : u`
              <span
                class=${c({
      rating__symbol: !0,
      "rating__symbol--hover": this.isHovering && Math.ceil(t) === i + 1,
      "rating__symbol--active": t >= i + 1
    })}
                role="presentation"
              >
                ${m(this.getSymbol(i + 1))}
              </span>
            `)}
        </span>
      </div>
    `;
  }
};
o.styles = [M, P];
o.dependencies = { "ug-icon": V };
a([
  H(".rating")
], o.prototype, "rating", 2);
a([
  v()
], o.prototype, "hoverValue", 2);
a([
  v()
], o.prototype, "isHovering", 2);
a([
  l()
], o.prototype, "label", 2);
a([
  l({ type: Number })
], o.prototype, "value", 2);
a([
  l({ type: Number })
], o.prototype, "max", 2);
a([
  l({ type: Number })
], o.prototype, "precision", 2);
a([
  l({ type: Boolean, reflect: !0 })
], o.prototype, "readonly", 2);
a([
  l({ type: Boolean, reflect: !0 })
], o.prototype, "disabled", 2);
a([
  l()
], o.prototype, "getSymbol", 2);
a([
  w({ passive: !0 })
], o.prototype, "handleTouchMove", 1);
a([
  p("hoverValue")
], o.prototype, "handleHoverValueChange", 1);
a([
  p("isHovering")
], o.prototype, "handleIsHoveringChange", 1);
var C = Object.defineProperty, S = Object.getOwnPropertyDescriptor, T = (e, r, t, i) => {
  for (var s = i > 1 ? void 0 : i ? S(r, t) : r, n = e.length - 1, h; n >= 0; n--)
    (h = e[n]) && (s = (i ? h(r, t, s) : h(s)) || s);
  return i && s && C(r, t, s), s;
};
let d = class extends o {
};
d = T([
  b("ug-rating")
], d);
export {
  d as UgRating
};
