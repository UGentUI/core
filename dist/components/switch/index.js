import { i as p, _ as r, n as i, S as g, k as m, t as f } from "../../chunks/chunk.NLWS5DN7.js";
import { d as v } from "../../chunks/chunk.GI7VDIWX.js";
import { f as w } from "../../chunks/chunk.SI4ACBFK.js";
import { F as b } from "../../chunks/chunk.2RCF7SLU.js";
import { H as _ } from "../../chunks/chunk.NYIIDP5N.js";
import { w as d } from "../../chunks/chunk.CCJUT23E.js";
import { c as k } from "../../chunks/chunk.TUVJKY7S.js";
import { R as n } from "../../chunks/class-map.js";
import { t as y } from "../../chunks/if-defined.js";
import { F as C } from "../../chunks/live.js";
import { r as z } from "../../chunks/state.js";
import { e as x } from "../../chunks/query.js";
var $ = p`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--ug-toggle-size-small);
    --thumb-size: calc(var(--ug-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--ug-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--ug-toggle-size-medium);
    --thumb-size: calc(var(--ug-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--ug-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--ug-toggle-size-large);
    --thumb-size: calc(var(--ug-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--ug-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--ug-input-font-family);
    font-size: inherit;
    font-weight: var(--ug-input-font-weight);
    color: var(--ug-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--ug-color-neutral-400);
    border: solid var(--ug-input-border-width) var(--ug-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--ug-transition-fast) border-color,
      var(--ug-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--ug-color-neutral-0);
    border-radius: 50%;
    border: solid var(--ug-input-border-width) var(--ug-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--ug-transition-fast) translate ease,
      var(--ug-transition-fast) background-color,
      var(--ug-transition-fast) border-color,
      var(--ug-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--ug-color-neutral-400);
    border-color: var(--ug-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--ug-color-neutral-0);
    border-color: var(--ug-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--ug-color-neutral-400);
    border-color: var(--ug-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--ug-color-neutral-0);
    border-color: var(--ug-color-primary-600);
    outline: var(--ug-focus-ring);
    outline-offset: var(--ug-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--ug-color-primary-600);
    border-color: var(--ug-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--ug-color-neutral-0);
    border-color: var(--ug-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--ug-color-primary-600);
    border-color: var(--ug-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--ug-color-neutral-0);
    border-color: var(--ug-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--ug-color-primary-600);
    border-color: var(--ug-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--ug-color-neutral-0);
    border-color: var(--ug-color-primary-600);
    outline: var(--ug-focus-ring);
    outline-offset: var(--ug-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--ug-input-required-content);
    color: var(--ug-input-required-content-color);
    margin-inline-start: var(--ug-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`, e = class extends g {
  constructor() {
    super(...arguments), this.formControlController = new b(this, {
      value: (t) => t.checked ? t.value || "on" : void 0,
      defaultValue: (t) => t.defaultChecked,
      setValue: (t, o) => t.checked = o
    }), this.hasSlotController = new _(this, "help-text"), this.hasFocus = !1, this.title = "", this.name = "", this.size = "medium", this.disabled = !1, this.checked = !1, this.defaultChecked = !1, this.form = "", this.required = !1, this.helpText = "";
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("ug-blur");
  }
  handleInput() {
    this.emit("ug-input");
  }
  handleInvalid(t) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(t);
  }
  handleClick() {
    this.checked = !this.checked, this.emit("ug-change");
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("ug-focus");
  }
  handleKeyDown(t) {
    t.key === "ArrowLeft" && (t.preventDefault(), this.checked = !1, this.emit("ug-change"), this.emit("ug-input")), t.key === "ArrowRight" && (t.preventDefault(), this.checked = !0, this.emit("ug-change"), this.emit("ug-input"));
  }
  handleCheckedChange() {
    this.input.checked = this.checked, this.formControlController.updateValidity();
  }
  handleDisabledChange() {
    this.formControlController.setValidity(!0);
  }
  /** Simulates a click on the switch. */
  click() {
    this.input.click();
  }
  /** Sets focus on the switch. */
  focus(t) {
    this.input.focus(t);
  }
  /** Removes focus from the switch. */
  blur() {
    this.input.blur();
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
    const t = this.hasSlotController.test("help-text"), o = this.helpText ? !0 : !!t;
    return m`
      <div
        class=${n({
      "form-control": !0,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-help-text": o
    })}
      >
        <label
          part="base"
          class=${n({
      switch: !0,
      "switch--checked": this.checked,
      "switch--disabled": this.disabled,
      "switch--focused": this.hasFocus,
      "switch--small": this.size === "small",
      "switch--medium": this.size === "medium",
      "switch--large": this.size === "large"
    })}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${y(this.value)}
            .checked=${C(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked ? "true" : "false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${o ? "false" : "true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
e.styles = [k, w, $];
r([
  x('input[type="checkbox"]')
], e.prototype, "input", 2);
r([
  z()
], e.prototype, "hasFocus", 2);
r([
  i()
], e.prototype, "title", 2);
r([
  i()
], e.prototype, "name", 2);
r([
  i()
], e.prototype, "value", 2);
r([
  i({ reflect: !0 })
], e.prototype, "size", 2);
r([
  i({ type: Boolean, reflect: !0 })
], e.prototype, "disabled", 2);
r([
  i({ type: Boolean, reflect: !0 })
], e.prototype, "checked", 2);
r([
  v("checked")
], e.prototype, "defaultChecked", 2);
r([
  i({ reflect: !0 })
], e.prototype, "form", 2);
r([
  i({ type: Boolean, reflect: !0 })
], e.prototype, "required", 2);
r([
  i({ attribute: "help-text" })
], e.prototype, "helpText", 2);
r([
  d("checked", { waitUntilFirstUpdate: !0 })
], e.prototype, "handleCheckedChange", 1);
r([
  d("disabled", { waitUntilFirstUpdate: !0 })
], e.prototype, "handleDisabledChange", 1);
var F = Object.defineProperty, V = Object.getOwnPropertyDescriptor, D = (t, o, a, l) => {
  for (var s = l > 1 ? void 0 : l ? V(o, a) : o, c = t.length - 1, h; c >= 0; c--)
    (h = t[c]) && (s = (l ? h(o, a, s) : h(s)) || s);
  return l && s && F(o, a, s), s;
};
let u = class extends e {
};
u = D([
  f("ug-switch")
], u);
export {
  u as UgSwitch
};
