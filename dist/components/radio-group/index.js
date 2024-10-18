import { i as g, _ as r, n, S as y, k as h, t as v } from "../../chunks/chunk.NLWS5DN7.js";
import { f as b } from "../../chunks/chunk.SI4ACBFK.js";
import { S as C } from "../../chunks/chunk.RBPP5PLA.js";
import { F as _, c as R, a as V, v as x } from "../../chunks/chunk.2RCF7SLU.js";
import { H as w } from "../../chunks/chunk.NYIIDP5N.js";
import { w as m } from "../../chunks/chunk.CCJUT23E.js";
import { c as k } from "../../chunks/chunk.TUVJKY7S.js";
import { R as S } from "../../chunks/class-map.js";
import { r as c } from "../../chunks/state.js";
import { e as f } from "../../chunks/query.js";
var A = g`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--ug-input-required-content);
    margin-inline-start: var(--ug-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`, s = class extends y {
  constructor() {
    super(...arguments), this.formControlController = new _(this), this.hasSlotController = new w(this, "help-text", "label"), this.customValidityMessage = "", this.hasButtonGroup = !1, this.errorMessage = "", this.defaultValue = "", this.label = "", this.helpText = "", this.name = "option", this.value = "", this.size = "medium", this.form = "", this.required = !1;
  }
  /** Gets the validity state object */
  get validity() {
    const t = this.required && !this.value;
    return this.customValidityMessage !== "" ? R : t ? V : x;
  }
  /** Gets the validation message */
  get validationMessage() {
    const t = this.required && !this.value;
    return this.customValidityMessage !== "" ? this.customValidityMessage : t ? this.validationInput.validationMessage : "";
  }
  connectedCallback() {
    super.connectedCallback(), this.defaultValue = this.value;
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  getAllRadios() {
    return [...this.querySelectorAll("ug-radio, ug-radio-button")];
  }
  handleRadioClick(t) {
    const i = t.target.closest("ug-radio, ug-radio-button"), e = this.getAllRadios(), o = this.value;
    !i || i.disabled || (this.value = i.value, e.forEach((a) => a.checked = a === i), this.value !== o && (this.emit("ug-change"), this.emit("ug-input")));
  }
  handleKeyDown(t) {
    var i;
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(t.key))
      return;
    const e = this.getAllRadios().filter((d) => !d.disabled), o = (i = e.find((d) => d.checked)) != null ? i : e[0], a = t.key === " " ? 0 : ["ArrowUp", "ArrowLeft"].includes(t.key) ? -1 : 1, u = this.value;
    let l = e.indexOf(o) + a;
    l < 0 && (l = e.length - 1), l > e.length - 1 && (l = 0), this.getAllRadios().forEach((d) => {
      d.checked = !1, this.hasButtonGroup || d.setAttribute("tabindex", "-1");
    }), this.value = e[l].value, e[l].checked = !0, this.hasButtonGroup ? e[l].shadowRoot.querySelector("button").focus() : (e[l].setAttribute("tabindex", "0"), e[l].focus()), this.value !== u && (this.emit("ug-change"), this.emit("ug-input")), t.preventDefault();
  }
  handleLabelClick() {
    const t = this.getAllRadios(), e = t.find((o) => o.checked) || t[0];
    e && e.focus();
  }
  handleInvalid(t) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(t);
  }
  async syncRadioElements() {
    var t, i;
    const e = this.getAllRadios();
    if (await Promise.all(
      // Sync the checked state and size
      e.map(async (o) => {
        await o.updateComplete, o.checked = o.value === this.value, o.size = this.size;
      })
    ), this.hasButtonGroup = e.some((o) => o.tagName.toLowerCase() === "ug-radio-button"), e.length > 0 && !e.some((o) => o.checked))
      if (this.hasButtonGroup) {
        const o = (t = e[0].shadowRoot) == null ? void 0 : t.querySelector("button");
        o && o.setAttribute("tabindex", "0");
      } else
        e[0].setAttribute("tabindex", "0");
    if (this.hasButtonGroup) {
      const o = (i = this.shadowRoot) == null ? void 0 : i.querySelector("ug-button-group");
      o && (o.disableRole = !0);
    }
  }
  syncRadios() {
    if (customElements.get("ug-radio") && customElements.get("ug-radio-button")) {
      this.syncRadioElements();
      return;
    }
    customElements.get("ug-radio") ? this.syncRadioElements() : customElements.whenDefined("ug-radio").then(() => this.syncRadios()), customElements.get("ug-radio-button") ? this.syncRadioElements() : customElements.whenDefined("ug-radio-button").then(() => this.syncRadios());
  }
  updateCheckedRadio() {
    this.getAllRadios().forEach((i) => i.checked = i.value === this.value), this.formControlController.setValidity(this.validity.valid);
  }
  handleSizeChange() {
    this.syncRadios();
  }
  handleValueChange() {
    this.hasUpdated && this.updateCheckedRadio();
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    const t = this.required && !this.value, i = this.customValidityMessage !== "";
    return t || i ? (this.formControlController.emitInvalidEvent(), !1) : !0;
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    const t = this.validity.valid;
    return this.errorMessage = this.customValidityMessage || t ? "" : this.validationInput.validationMessage, this.formControlController.setValidity(t), this.validationInput.hidden = !0, clearTimeout(this.validationTimeout), t || (this.validationInput.hidden = !1, this.validationInput.reportValidity(), this.validationTimeout = setTimeout(() => this.validationInput.hidden = !0, 1e4)), t;
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(t = "") {
    this.customValidityMessage = t, this.errorMessage = t, this.validationInput.setCustomValidity(t), this.formControlController.updateValidity();
  }
  render() {
    const t = this.hasSlotController.test("label"), i = this.hasSlotController.test("help-text"), e = this.label ? !0 : !!t, o = this.helpText ? !0 : !!i, a = h`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;
    return h`
      <fieldset
        part="form-control"
        class=${S({
      "form-control": !0,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--radio-group": !0,
      "form-control--has-label": e,
      "form-control--has-help-text": o
    })}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${e ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup ? h`
                <ug-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${a}
                </ug-button-group>
              ` : a}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `;
  }
};
s.styles = [k, b, A];
s.dependencies = { "ug-button-group": C };
r([
  f("slot:not([name])")
], s.prototype, "defaultSlot", 2);
r([
  f(".radio-group__validation-input")
], s.prototype, "validationInput", 2);
r([
  c()
], s.prototype, "hasButtonGroup", 2);
r([
  c()
], s.prototype, "errorMessage", 2);
r([
  c()
], s.prototype, "defaultValue", 2);
r([
  n()
], s.prototype, "label", 2);
r([
  n({ attribute: "help-text" })
], s.prototype, "helpText", 2);
r([
  n()
], s.prototype, "name", 2);
r([
  n({ reflect: !0 })
], s.prototype, "value", 2);
r([
  n({ reflect: !0 })
], s.prototype, "size", 2);
r([
  n({ reflect: !0 })
], s.prototype, "form", 2);
r([
  n({ type: Boolean, reflect: !0 })
], s.prototype, "required", 2);
r([
  m("size", { waitUntilFirstUpdate: !0 })
], s.prototype, "handleSizeChange", 1);
r([
  m("value")
], s.prototype, "handleValueChange", 1);
var M = Object.defineProperty, E = Object.getOwnPropertyDescriptor, q = (t, i, e, o) => {
  for (var a = o > 1 ? void 0 : o ? E(i, e) : i, u = t.length - 1, l; u >= 0; u--)
    (l = t[u]) && (a = (o ? l(i, e, a) : l(a)) || a);
  return o && a && M(i, e, a), a;
};
let p = class extends s {
};
p = q([
  v("ug-radio-group")
], p);
export {
  p as UgRadioGroup
};
