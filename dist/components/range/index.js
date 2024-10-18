import { i as b, _ as r, n as a, S as f, k as u, t as _ } from "../../chunks/chunk.NLWS5DN7.js";
import { d as y } from "../../chunks/chunk.GI7VDIWX.js";
import { f as k } from "../../chunks/chunk.SI4ACBFK.js";
import { F as x } from "../../chunks/chunk.2RCF7SLU.js";
import { H as w } from "../../chunks/chunk.NYIIDP5N.js";
import { L as $ } from "../../chunks/chunk.WLV3FVBR.js";
import { w as h } from "../../chunks/chunk.CCJUT23E.js";
import { c as C } from "../../chunks/chunk.TUVJKY7S.js";
import { R as d } from "../../chunks/class-map.js";
import { r as v } from "../../chunks/state.js";
import { t as z } from "../../chunks/event-options.js";
import { e as m } from "../../chunks/query.js";
import { t as c } from "../../chunks/if-defined.js";
import { F as T } from "../../chunks/live.js";
var F = b`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--ug-color-neutral-200);
    --track-color-inactive: var(--ug-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--ug-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--ug-color-primary-600);
    border: solid var(--ug-input-border-width) var(--ug-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--ug-color-primary-500);
    border-color: var(--ug-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--ug-focus-ring);
    outline-offset: var(--ug-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--ug-color-primary-500);
    border-color: var(--ug-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--ug-color-primary-600);
    border-color: var(--ug-color-primary-600);
    transition:
      var(--ug-transition-fast) border-color,
      var(--ug-transition-fast) background-color,
      var(--ug-transition-fast) color,
      var(--ug-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--ug-color-primary-500);
    border-color: var(--ug-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--ug-focus-ring);
    outline-offset: var(--ug-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--ug-color-primary-500);
    border-color: var(--ug-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--ug-z-index-tooltip);
    left: 0;
    border-radius: var(--ug-tooltip-border-radius);
    background-color: var(--ug-tooltip-background-color);
    font-family: var(--ug-tooltip-font-family);
    font-size: var(--ug-tooltip-font-size);
    font-weight: var(--ug-tooltip-font-weight);
    line-height: var(--ug-tooltip-line-height);
    color: var(--ug-tooltip-color);
    opacity: 0;
    padding: var(--ug-tooltip-padding);
    transition: var(--ug-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--ug-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--ug-tooltip-arrow-size) solid var(--ug-tooltip-background-color);
    border-left: var(--ug-tooltip-arrow-size) solid transparent;
    border-right: var(--ug-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--ug-tooltip-arrow-size) solid var(--ug-tooltip-background-color);
    border-left: var(--ug-tooltip-arrow-size) solid transparent;
    border-right: var(--ug-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`, o = class extends f {
  constructor() {
    super(...arguments), this.formControlController = new x(this), this.hasSlotController = new w(this, "help-text", "label"), this.localize = new $(this), this.hasFocus = !1, this.hasTooltip = !1, this.title = "", this.name = "", this.value = 0, this.label = "", this.helpText = "", this.disabled = !1, this.min = 0, this.max = 100, this.step = 1, this.tooltip = "top", this.tooltipFormatter = (t) => t.toString(), this.form = "", this.defaultValue = 0;
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  connectedCallback() {
    super.connectedCallback(), this.resizeObserver = new ResizeObserver(() => this.syncRange()), this.value < this.min && (this.value = this.min), this.value > this.max && (this.value = this.max), this.updateComplete.then(() => {
      this.syncRange(), this.resizeObserver.observe(this.input);
    });
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this.resizeObserver) == null || t.unobserve(this.input);
  }
  handleChange() {
    this.emit("ug-change");
  }
  handleInput() {
    this.value = parseFloat(this.input.value), this.emit("ug-input"), this.syncRange();
  }
  handleBlur() {
    this.hasFocus = !1, this.hasTooltip = !1, this.emit("ug-blur");
  }
  handleFocus() {
    this.hasFocus = !0, this.hasTooltip = !0, this.emit("ug-focus");
  }
  handleThumbDragStart() {
    this.hasTooltip = !0;
  }
  handleThumbDragEnd() {
    this.hasTooltip = !1;
  }
  syncProgress(t) {
    this.input.style.setProperty("--percent", `${t * 100}%`);
  }
  syncTooltip(t) {
    if (this.output !== null) {
      const i = this.input.offsetWidth, l = this.output.offsetWidth, e = getComputedStyle(this.input).getPropertyValue("--thumb-size"), s = this.matches(":dir(rtl)"), p = i * t;
      if (s) {
        const n = `${i - p}px + ${t} * ${e}`;
        this.output.style.translate = `calc((${n} - ${l / 2}px - ${e} / 2))`;
      } else {
        const n = `${p}px - ${t} * ${e}`;
        this.output.style.translate = `calc(${n} - ${l / 2}px + ${e} / 2)`;
      }
    }
  }
  handleValueChange() {
    this.formControlController.updateValidity(), this.input.value = this.value.toString(), this.value = parseFloat(this.input.value), this.syncRange();
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  syncRange() {
    const t = Math.max(0, (this.value - this.min) / (this.max - this.min));
    this.syncProgress(t), this.tooltip !== "none" && this.updateComplete.then(() => this.syncTooltip(t));
  }
  handleInvalid(t) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(t);
  }
  /** Sets focus on the range. */
  focus(t) {
    this.input.focus(t);
  }
  /** Removes focus from the range. */
  blur() {
    this.input.blur();
  }
  /** Increments the value of the range by the value of the step attribute. */
  stepUp() {
    this.input.stepUp(), this.value !== Number(this.input.value) && (this.value = Number(this.input.value));
  }
  /** Decrements the value of the range by the value of the step attribute. */
  stepDown() {
    this.input.stepDown(), this.value !== Number(this.input.value) && (this.value = Number(this.input.value));
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(t) {
    this.input.setCustomValidity(t), this.formControlController.updateValidity();
  }
  render() {
    const t = this.hasSlotController.test("label"), i = this.hasSlotController.test("help-text"), l = this.label ? !0 : !!t, e = this.helpText ? !0 : !!i;
    return u`
      <div
        part="form-control"
        class=${d({
      "form-control": !0,
      "form-control--medium": !0,
      // range only has one size
      "form-control--has-label": l,
      "form-control--has-help-text": e
    })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${l ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${d({
      range: !0,
      "range--disabled": this.disabled,
      "range--focused": this.hasFocus,
      "range--rtl": this.localize.dir() === "rtl",
      "range--tooltip-visible": this.hasTooltip,
      "range--tooltip-top": this.tooltip === "top",
      "range--tooltip-bottom": this.tooltip === "bottom"
    })}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${c(this.name)}
              ?disabled=${this.disabled}
              min=${c(this.min)}
              max=${c(this.max)}
              step=${c(this.step)}
              .value=${T(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip !== "none" && !this.disabled ? u`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter == "function" ? this.tooltipFormatter(this.value) : this.value}
                  </output>
                ` : ""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${e ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
o.styles = [C, k, F];
r([
  m(".range__control")
], o.prototype, "input", 2);
r([
  m(".range__tooltip")
], o.prototype, "output", 2);
r([
  v()
], o.prototype, "hasFocus", 2);
r([
  v()
], o.prototype, "hasTooltip", 2);
r([
  a()
], o.prototype, "title", 2);
r([
  a()
], o.prototype, "name", 2);
r([
  a({ type: Number })
], o.prototype, "value", 2);
r([
  a()
], o.prototype, "label", 2);
r([
  a({ attribute: "help-text" })
], o.prototype, "helpText", 2);
r([
  a({ type: Boolean, reflect: !0 })
], o.prototype, "disabled", 2);
r([
  a({ type: Number })
], o.prototype, "min", 2);
r([
  a({ type: Number })
], o.prototype, "max", 2);
r([
  a({ type: Number })
], o.prototype, "step", 2);
r([
  a()
], o.prototype, "tooltip", 2);
r([
  a({ attribute: !1 })
], o.prototype, "tooltipFormatter", 2);
r([
  a({ reflect: !0 })
], o.prototype, "form", 2);
r([
  y()
], o.prototype, "defaultValue", 2);
r([
  z({ passive: !0 })
], o.prototype, "handleThumbDragStart", 1);
r([
  h("value", { waitUntilFirstUpdate: !0 })
], o.prototype, "handleValueChange", 1);
r([
  h("disabled", { waitUntilFirstUpdate: !0 })
], o.prototype, "handleDisabledChange", 1);
r([
  h("hasTooltip", { waitUntilFirstUpdate: !0 })
], o.prototype, "syncRange", 1);
var S = Object.defineProperty, V = Object.getOwnPropertyDescriptor, D = (t, i, l, e) => {
  for (var s = e > 1 ? void 0 : e ? V(i, l) : i, p = t.length - 1, n; p >= 0; p--)
    (n = t[p]) && (s = (e ? n(i, l, s) : n(s)) || s);
  return e && s && S(i, l, s), s;
};
let g = class extends o {
};
g = D([
  _("ug-range")
], g);
export {
  g as UgRange
};
