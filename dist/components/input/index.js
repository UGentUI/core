import { i as m, S as f, x as p, _ as i, n as o, t as b } from "../../chunks/chunk.UYAO2JRR.js";
import { d as v } from "../../chunks/chunk.GI7VDIWX.js";
import { f as _ } from "../../chunks/chunk.SI4ACBFK.js";
import { F as y } from "../../chunks/chunk.2RCF7SLU.js";
import { L as w } from "../../chunks/chunk.WLV3FVBR.js";
import { H as x } from "../../chunks/chunk.NYIIDP5N.js";
import { S as k } from "../../chunks/chunk.E6QAPUBK.js";
import { w as h } from "../../chunks/chunk.CCJUT23E.js";
import { c as C } from "../../chunks/chunk.TUVJKY7S.js";
import { e as c } from "../../chunks/class-map.js";
import { o as n } from "../../chunks/if-defined.js";
import { l as $ } from "../../chunks/live.js";
import { r as V } from "../../chunks/state.js";
import { e as z } from "../../chunks/query.js";
var I = m`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--ug-input-font-family);
    font-weight: var(--ug-input-font-weight);
    letter-spacing: var(--ug-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--ug-transition-fast) color,
      var(--ug-transition-fast) border,
      var(--ug-transition-fast) box-shadow,
      var(--ug-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--ug-input-background-color);
    border: solid var(--ug-input-border-width) var(--ug-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--ug-input-background-color-hover);
    border-color: var(--ug-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--ug-input-background-color-focus);
    border-color: var(--ug-input-border-color-focus);
    box-shadow: 0 0 0 var(--ug-focus-ring-width) var(--ug-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--ug-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--ug-input-background-color-disabled);
    border-color: var(--ug-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--ug-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--ug-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--ug-input-filled-background-color);
    color: var(--ug-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--ug-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--ug-input-filled-background-color-focus);
    outline: var(--ug-focus-ring);
    outline-offset: var(--ug-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--ug-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--ug-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--ug-input-height-large) var(--ug-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--ug-color-primary-500);
    caret-color: var(--ug-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--ug-input-height-large) var(--ug-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--ug-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--ug-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(ug-icon),
  .input__suffix ::slotted(ug-icon) {
    color: var(--ug-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--ug-input-border-radius-small);
    font-size: var(--ug-input-font-size-small);
    height: var(--ug-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--ug-input-height-small) - var(--ug-input-border-width) * 2);
    padding: 0 var(--ug-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--ug-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--ug-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--ug-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--ug-input-border-radius-medium);
    font-size: var(--ug-input-font-size-medium);
    height: var(--ug-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--ug-input-height-medium) - var(--ug-input-border-width) * 2);
    padding: 0 var(--ug-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--ug-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--ug-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--ug-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--ug-input-border-radius-large);
    font-size: var(--ug-input-font-size-large);
    height: var(--ug-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--ug-input-height-large) - var(--ug-input-border-width) * 2);
    padding: 0 var(--ug-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--ug-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--ug-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--ug-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--ug-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--ug-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--ug-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--ug-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--ug-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--ug-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`, t = class extends f {
  constructor() {
    super(...arguments), this.formControlController = new y(this, {
      assumeInteractionOn: ["ug-blur", "ug-input"]
    }), this.hasSlotController = new x(this, "help-text", "label"), this.localize = new w(this), this.hasFocus = !1, this.title = "", this.__numberInput = Object.assign(document.createElement("input"), { type: "number" }), this.__dateInput = Object.assign(document.createElement("input"), { type: "date" }), this.type = "text", this.name = "", this.value = "", this.defaultValue = "", this.size = "medium", this.filled = !1, this.pill = !1, this.label = "", this.helpText = "", this.clearable = !1, this.disabled = !1, this.placeholder = "", this.readonly = !1, this.passwordToggle = !1, this.passwordVisible = !1, this.noSpinButtons = !1, this.form = "", this.required = !1, this.spellcheck = !0;
  }
  //
  // NOTE: We use an in-memory input for these getters/setters instead of the one in the template because the properties
  // can be set before the component is rendered.
  //
  /**
   * Gets or sets the current value as a `Date` object. Returns `null` if the value can't be converted. This will use the native `<input type="{{type}}">` implementation and may result in an error.
   */
  get valueAsDate() {
    var e;
    return this.__dateInput.type = this.type, this.__dateInput.value = this.value, ((e = this.input) == null ? void 0 : e.valueAsDate) || this.__dateInput.valueAsDate;
  }
  set valueAsDate(e) {
    this.__dateInput.type = this.type, this.__dateInput.valueAsDate = e, this.value = this.__dateInput.value;
  }
  /** Gets or sets the current value as a number. Returns `NaN` if the value can't be converted. */
  get valueAsNumber() {
    var e;
    return this.__numberInput.value = this.value, ((e = this.input) == null ? void 0 : e.valueAsNumber) || this.__numberInput.valueAsNumber;
  }
  set valueAsNumber(e) {
    this.__numberInput.valueAsNumber = e, this.value = this.__numberInput.value;
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
  handleChange() {
    this.value = this.input.value, this.emit("ug-change");
  }
  handleClearClick(e) {
    e.preventDefault(), this.value !== "" && (this.value = "", this.emit("ug-clear"), this.emit("ug-input"), this.emit("ug-change")), this.input.focus();
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("ug-focus");
  }
  handleInput() {
    this.value = this.input.value, this.formControlController.updateValidity(), this.emit("ug-input");
  }
  handleInvalid(e) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(e);
  }
  handleKeyDown(e) {
    const r = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
    e.key === "Enter" && !r && setTimeout(() => {
      !e.defaultPrevented && !e.isComposing && this.formControlController.submit();
    });
  }
  handlePasswordToggle() {
    this.passwordVisible = !this.passwordVisible;
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  handleStepChange() {
    this.input.step = String(this.step), this.formControlController.updateValidity();
  }
  async handleValueChange() {
    await this.updateComplete, this.formControlController.updateValidity();
  }
  /** Sets focus on the input. */
  focus(e) {
    this.input.focus(e);
  }
  /** Removes focus from the input. */
  blur() {
    this.input.blur();
  }
  /** Selects all the text in the input. */
  select() {
    this.input.select();
  }
  /** Sets the start and end positions of the text selection (0-based). */
  setSelectionRange(e, r, l = "none") {
    this.input.setSelectionRange(e, r, l);
  }
  /** Replaces a range of text with a new string. */
  setRangeText(e, r, l, s = "preserve") {
    const a = r ?? this.input.selectionStart, u = l ?? this.input.selectionEnd;
    this.input.setRangeText(e, a, u, s), this.value !== this.input.value && (this.value = this.input.value);
  }
  /** Displays the browser picker for an input element (only works if the browser supports it for the input type). */
  showPicker() {
    "showPicker" in HTMLInputElement.prototype && this.input.showPicker();
  }
  /** Increments the value of a numeric input type by the value of the step attribute. */
  stepUp() {
    this.input.stepUp(), this.value !== this.input.value && (this.value = this.input.value);
  }
  /** Decrements the value of a numeric input type by the value of the step attribute. */
  stepDown() {
    this.input.stepDown(), this.value !== this.input.value && (this.value = this.input.value);
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
  setCustomValidity(e) {
    this.input.setCustomValidity(e), this.formControlController.updateValidity();
  }
  render() {
    const e = this.hasSlotController.test("label"), r = this.hasSlotController.test("help-text"), l = this.label ? !0 : !!e, s = this.helpText ? !0 : !!r, u = this.clearable && !this.disabled && !this.readonly && (typeof this.value == "number" || this.value.length > 0);
    return p`
      <div
        part="form-control"
        class=${c({
      "form-control": !0,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": l,
      "form-control--has-help-text": s
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
            class=${c({
      input: !0,
      // Sizes
      "input--small": this.size === "small",
      "input--medium": this.size === "medium",
      "input--large": this.size === "large",
      // States
      "input--pill": this.pill,
      "input--standard": !this.filled,
      "input--filled": this.filled,
      "input--disabled": this.disabled,
      "input--focused": this.hasFocus,
      "input--empty": !this.value,
      "input--no-spin-buttons": this.noSpinButtons
    })}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type === "password" && this.passwordVisible ? "text" : this.type}
              title=${this.title}
              name=${n(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${n(this.placeholder)}
              minlength=${n(this.minlength)}
              maxlength=${n(this.maxlength)}
              min=${n(this.min)}
              max=${n(this.max)}
              step=${n(this.step)}
              .value=${$(this.value)}
              autocapitalize=${n(this.autocapitalize)}
              autocomplete=${n(this.autocomplete)}
              autocorrect=${n(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${n(this.pattern)}
              enterkeyhint=${n(this.enterkeyhint)}
              inputmode=${n(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${u ? p`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <ug-icon name="x-circle-fill" library="system"></ug-icon>
                    </slot>
                  </button>
                ` : ""}
            ${this.passwordToggle && !this.disabled ? p`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible ? "hidePassword" : "showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible ? p`
                          <slot name="show-password-icon">
                            <ug-icon name="eye-slash" library="system"></ug-icon>
                          </slot>
                        ` : p`
                          <slot name="hide-password-icon">
                            <ug-icon name="eye" library="system"></ug-icon>
                          </slot>
                        `}
                  </button>
                ` : ""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
t.styles = [C, _, I];
t.dependencies = { "ug-icon": k };
i([
  z(".input__control")
], t.prototype, "input", 2);
i([
  V()
], t.prototype, "hasFocus", 2);
i([
  o()
], t.prototype, "title", 2);
i([
  o({ reflect: !0 })
], t.prototype, "type", 2);
i([
  o()
], t.prototype, "name", 2);
i([
  o()
], t.prototype, "value", 2);
i([
  v()
], t.prototype, "defaultValue", 2);
i([
  o({ reflect: !0 })
], t.prototype, "size", 2);
i([
  o({ type: Boolean, reflect: !0 })
], t.prototype, "filled", 2);
i([
  o({ type: Boolean, reflect: !0 })
], t.prototype, "pill", 2);
i([
  o()
], t.prototype, "label", 2);
i([
  o({ attribute: "help-text" })
], t.prototype, "helpText", 2);
i([
  o({ type: Boolean })
], t.prototype, "clearable", 2);
i([
  o({ type: Boolean, reflect: !0 })
], t.prototype, "disabled", 2);
i([
  o()
], t.prototype, "placeholder", 2);
i([
  o({ type: Boolean, reflect: !0 })
], t.prototype, "readonly", 2);
i([
  o({ attribute: "password-toggle", type: Boolean })
], t.prototype, "passwordToggle", 2);
i([
  o({ attribute: "password-visible", type: Boolean })
], t.prototype, "passwordVisible", 2);
i([
  o({ attribute: "no-spin-buttons", type: Boolean })
], t.prototype, "noSpinButtons", 2);
i([
  o({ reflect: !0 })
], t.prototype, "form", 2);
i([
  o({ type: Boolean, reflect: !0 })
], t.prototype, "required", 2);
i([
  o()
], t.prototype, "pattern", 2);
i([
  o({ type: Number })
], t.prototype, "minlength", 2);
i([
  o({ type: Number })
], t.prototype, "maxlength", 2);
i([
  o()
], t.prototype, "min", 2);
i([
  o()
], t.prototype, "max", 2);
i([
  o()
], t.prototype, "step", 2);
i([
  o()
], t.prototype, "autocapitalize", 2);
i([
  o()
], t.prototype, "autocorrect", 2);
i([
  o()
], t.prototype, "autocomplete", 2);
i([
  o({ type: Boolean })
], t.prototype, "autofocus", 2);
i([
  o()
], t.prototype, "enterkeyhint", 2);
i([
  o({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: (e) => !(!e || e === "false"),
      toAttribute: (e) => e ? "true" : "false"
    }
  })
], t.prototype, "spellcheck", 2);
i([
  o()
], t.prototype, "inputmode", 2);
i([
  h("disabled", { waitUntilFirstUpdate: !0 })
], t.prototype, "handleDisabledChange", 1);
i([
  h("step", { waitUntilFirstUpdate: !0 })
], t.prototype, "handleStepChange", 1);
i([
  h("value", { waitUntilFirstUpdate: !0 })
], t.prototype, "handleValueChange", 1);
var S = Object.defineProperty, B = Object.getOwnPropertyDescriptor, T = (e, r, l, s) => {
  for (var a = s > 1 ? void 0 : s ? B(r, l) : r, u = e.length - 1, d; u >= 0; u--)
    (d = e[u]) && (a = (s ? d(r, l, a) : d(a)) || a);
  return s && a && S(r, l, a), a;
};
let g = class extends t {
};
g = T([
  b("ug-input")
], g);
export {
  g as UgInput
};
