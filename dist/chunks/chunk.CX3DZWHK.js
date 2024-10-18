import { i as s, _ as t, n as i, S as h, k as c } from "./chunk.NLWS5DN7.js";
import { d } from "./chunk.GI7VDIWX.js";
import { f as u } from "./chunk.SI4ACBFK.js";
import { F as p } from "./chunk.2RCF7SLU.js";
import { H as m } from "./chunk.NYIIDP5N.js";
import { S as b } from "./chunk.O7VCMB7W.js";
import { w as n } from "./chunk.CCJUT23E.js";
import { c as k } from "./chunk.TUVJKY7S.js";
import { R as l } from "./class-map.js";
import { t as f } from "./if-defined.js";
import { F as a } from "./live.js";
import { r as g } from "./state.js";
import { e as x } from "./query.js";
var v = s`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--ug-input-font-family);
    font-weight: var(--ug-input-font-weight);
    color: var(--ug-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--ug-toggle-size-small);
    font-size: var(--ug-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--ug-toggle-size-medium);
    font-size: var(--ug-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--ug-toggle-size-large);
    font-size: var(--ug-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--ug-input-border-width) var(--ug-input-border-color);
    border-radius: 2px;
    background-color: var(--ug-input-background-color);
    color: var(--ug-color-neutral-0);
    transition:
      var(--ug-transition-fast) border-color,
      var(--ug-transition-fast) background-color,
      var(--ug-transition-fast) color,
      var(--ug-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--ug-input-border-color-hover);
    background-color: var(--ug-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--ug-focus-ring);
    outline-offset: var(--ug-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--ug-color-primary-600);
    background-color: var(--ug-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--ug-color-primary-500);
    background-color: var(--ug-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--ug-focus-ring);
    outline-offset: var(--ug-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--ug-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--ug-input-required-content);
    color: var(--ug-input-required-content-color);
    margin-inline-start: var(--ug-input-required-content-offset);
  }
`, e = class extends h {
  constructor() {
    super(...arguments), this.formControlController = new p(this, {
      value: (o) => o.checked ? o.value || "on" : void 0,
      defaultValue: (o) => o.defaultChecked,
      setValue: (o, r) => o.checked = r
    }), this.hasSlotController = new m(this, "help-text"), this.hasFocus = !1, this.title = "", this.name = "", this.size = "medium", this.disabled = !1, this.checked = !1, this.indeterminate = !1, this.defaultChecked = !1, this.form = "", this.required = !1, this.helpText = "";
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
  handleClick() {
    this.checked = !this.checked, this.indeterminate = !1, this.emit("ug-change");
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("ug-blur");
  }
  handleInput() {
    this.emit("ug-input");
  }
  handleInvalid(o) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(o);
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("ug-focus");
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  handleStateChange() {
    this.input.checked = this.checked, this.input.indeterminate = this.indeterminate, this.formControlController.updateValidity();
  }
  /** Simulates a click on the checkbox. */
  click() {
    this.input.click();
  }
  /** Sets focus on the checkbox. */
  focus(o) {
    this.input.focus(o);
  }
  /** Removes focus from the checkbox. */
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
  /**
   * Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
   * the custom validation message, call this method with an empty string.
   */
  setCustomValidity(o) {
    this.input.setCustomValidity(o), this.formControlController.updateValidity();
  }
  render() {
    const o = this.hasSlotController.test("help-text"), r = this.helpText ? !0 : !!o;
    return c`
      <div
        class=${l({
      "form-control": !0,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-help-text": r
    })}
      >
        <label
          part="base"
          class=${l({
      checkbox: !0,
      "checkbox--checked": this.checked,
      "checkbox--disabled": this.disabled,
      "checkbox--focused": this.hasFocus,
      "checkbox--indeterminate": this.indeterminate,
      "checkbox--small": this.size === "small",
      "checkbox--medium": this.size === "medium",
      "checkbox--large": this.size === "large"
    })}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${f(this.value)}
            .indeterminate=${a(this.indeterminate)}
            .checked=${a(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked ? "true" : "false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked ? " control--checked" : ""}${this.indeterminate ? " control--indeterminate" : ""}"
            class="checkbox__control"
          >
            ${this.checked ? c`
                  <ug-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></ug-icon>
                ` : ""}
            ${!this.checked && this.indeterminate ? c`
                  <ug-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></ug-icon>
                ` : ""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${r ? "false" : "true"}
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
e.styles = [k, u, v];
e.dependencies = { "ug-icon": b };
t([
  x('input[type="checkbox"]')
], e.prototype, "input", 2);
t([
  g()
], e.prototype, "hasFocus", 2);
t([
  i()
], e.prototype, "title", 2);
t([
  i()
], e.prototype, "name", 2);
t([
  i()
], e.prototype, "value", 2);
t([
  i({ reflect: !0 })
], e.prototype, "size", 2);
t([
  i({ type: Boolean, reflect: !0 })
], e.prototype, "disabled", 2);
t([
  i({ type: Boolean, reflect: !0 })
], e.prototype, "checked", 2);
t([
  i({ type: Boolean, reflect: !0 })
], e.prototype, "indeterminate", 2);
t([
  d("checked")
], e.prototype, "defaultChecked", 2);
t([
  i({ reflect: !0 })
], e.prototype, "form", 2);
t([
  i({ type: Boolean, reflect: !0 })
], e.prototype, "required", 2);
t([
  i({ attribute: "help-text" })
], e.prototype, "helpText", 2);
t([
  n("disabled", { waitUntilFirstUpdate: !0 })
], e.prototype, "handleDisabledChange", 1);
t([
  n(["checked", "indeterminate"], { waitUntilFirstUpdate: !0 })
], e.prototype, "handleStateChange", 1);
export {
  e as S
};
