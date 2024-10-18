import { i as y, _ as o, n as l, S as f, k as u, t as b } from "../../chunks/chunk.NLWS5DN7.js";
import { c as _ } from "../../chunks/chunk.HF7GESMZ.js";
import { S as $ } from "../../chunks/chunk.O7VCMB7W.js";
import { w as p } from "../../chunks/chunk.CCJUT23E.js";
import { c as V } from "../../chunks/chunk.TUVJKY7S.js";
import { R as c } from "../../chunks/class-map.js";
import { r as v } from "../../chunks/state.js";
import { t as M } from "../../chunks/event-options.js";
import { e as w } from "../../chunks/query.js";
import { s as g } from "../../chunks/style-map.js";
import { a as m } from "../../chunks/unsafe-html.js";
var H = y`
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
`, s = class extends f {
  constructor() {
    super(...arguments), this.hoverValue = 0, this.isHovering = !1, this.label = "", this.value = 0, this.max = 5, this.precision = 1, this.readonly = !1, this.disabled = !1, this.getSymbol = () => '<ug-icon name="star-fill" library="system"></ug-icon>';
  }
  getValueFromMousePosition(e) {
    return this.getValueFromXCoordinate(e.clientX);
  }
  getValueFromTouchPosition(e) {
    return this.getValueFromXCoordinate(e.touches[0].clientX);
  }
  getValueFromXCoordinate(e) {
    const r = this.matches(":dir(rtl)"), { left: t, right: i, width: a } = this.rating.getBoundingClientRect(), n = r ? this.roundToPrecision((i - e) / a * this.max, this.precision) : this.roundToPrecision((e - t) / a * this.max, this.precision);
    return _(n, 0, this.max);
  }
  handleClick(e) {
    this.disabled || (this.setValue(this.getValueFromMousePosition(e)), this.emit("ug-change"));
  }
  setValue(e) {
    this.disabled || this.readonly || (this.value = e === this.value ? 0 : e, this.isHovering = !1);
  }
  handleKeyDown(e) {
    const r = this.matches(":dir(ltr)"), t = this.matches(":dir(rtl)"), i = this.value;
    if (!(this.disabled || this.readonly)) {
      if (e.key === "ArrowDown" || r && e.key === "ArrowLeft" || t && e.key === "ArrowRight") {
        const a = e.shiftKey ? 1 : this.precision;
        this.value = Math.max(0, this.value - a), e.preventDefault();
      }
      if (e.key === "ArrowUp" || r && e.key === "ArrowRight" || t && e.key === "ArrowLeft") {
        const a = e.shiftKey ? 1 : this.precision;
        this.value = Math.min(this.max, this.value + a), e.preventDefault();
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
    const e = this.matches(":dir(rtl)"), r = Array.from(Array(this.max).keys());
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
s.styles = [V, H];
s.dependencies = { "ug-icon": $ };
o([
  w(".rating")
], s.prototype, "rating", 2);
o([
  v()
], s.prototype, "hoverValue", 2);
o([
  v()
], s.prototype, "isHovering", 2);
o([
  l()
], s.prototype, "label", 2);
o([
  l({ type: Number })
], s.prototype, "value", 2);
o([
  l({ type: Number })
], s.prototype, "max", 2);
o([
  l({ type: Number })
], s.prototype, "precision", 2);
o([
  l({ type: Boolean, reflect: !0 })
], s.prototype, "readonly", 2);
o([
  l({ type: Boolean, reflect: !0 })
], s.prototype, "disabled", 2);
o([
  l()
], s.prototype, "getSymbol", 2);
o([
  M({ passive: !0 })
], s.prototype, "handleTouchMove", 1);
o([
  p("hoverValue")
], s.prototype, "handleHoverValueChange", 1);
o([
  p("isHovering")
], s.prototype, "handleIsHoveringChange", 1);
var P = Object.defineProperty, S = Object.getOwnPropertyDescriptor, T = (e, r, t, i) => {
  for (var a = i > 1 ? void 0 : i ? S(r, t) : r, n = e.length - 1, h; n >= 0; n--)
    (h = e[n]) && (a = (i ? h(r, t, a) : h(a)) || a);
  return i && a && P(r, t, a), a;
};
let d = class extends s {
};
d = T([
  b("ug-rating")
], d);
export {
  d as UgRating
};
