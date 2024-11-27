import { i as g, S as y, x as h, _ as r, n as d, t as v } from "../../chunks/chunk.UYAO2JRR.js";
import { f as b } from "../../chunks/chunk.SI4ACBFK.js";
import { F as C, c as _, a as R, v as V } from "../../chunks/chunk.2RCF7SLU.js";
import { S as x } from "../../chunks/chunk.FAGP73PT.js";
import { H as w } from "../../chunks/chunk.NYIIDP5N.js";
import { w as m } from "../../chunks/chunk.CCJUT23E.js";
import { c as S } from "../../chunks/chunk.TUVJKY7S.js";
import { e as k } from "../../chunks/class-map.js";
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
`, a = class extends y {
  constructor() {
    super(...arguments), this.formControlController = new C(this), this.hasSlotController = new w(this, "help-text", "label"), this.customValidityMessage = "", this.hasButtonGroup = !1, this.errorMessage = "", this.defaultValue = "", this.label = "", this.helpText = "", this.name = "option", this.value = "", this.size = "medium", this.form = "", this.required = !1;
  }
  /** Gets the validity state object */
  get validity() {
    const t = this.required && !this.value;
    return this.customValidityMessage !== "" ? _ : t ? R : V;
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
    !i || i.disabled || (this.value = i.value, e.forEach((s) => s.checked = s === i), this.value !== o && (this.emit("ug-change"), this.emit("ug-input")));
  }
  handleKeyDown(t) {
    var i;
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(t.key))
      return;
    const e = this.getAllRadios().filter((u) => !u.disabled), o = (i = e.find((u) => u.checked)) != null ? i : e[0], s = t.key === " " ? 0 : ["ArrowUp", "ArrowLeft"].includes(t.key) ? -1 : 1, n = this.value;
    let l = e.indexOf(o) + s;
    l < 0 && (l = e.length - 1), l > e.length - 1 && (l = 0), this.getAllRadios().forEach((u) => {
      u.checked = !1, this.hasButtonGroup || u.setAttribute("tabindex", "-1");
    }), this.value = e[l].value, e[l].checked = !0, this.hasButtonGroup ? e[l].shadowRoot.querySelector("button").focus() : (e[l].setAttribute("tabindex", "0"), e[l].focus()), this.value !== n && (this.emit("ug-change"), this.emit("ug-input")), t.preventDefault();
  }
  handleLabelClick() {
    this.focus();
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
  /** Sets focus on the radio-group. */
  focus(t) {
    const i = this.getAllRadios(), e = i.find((n) => n.checked), o = i.find((n) => !n.disabled), s = e || o;
    s && s.focus(t);
  }
  render() {
    const t = this.hasSlotController.test("label"), i = this.hasSlotController.test("help-text"), e = this.label ? !0 : !!t, o = this.helpText ? !0 : !!i, s = h`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;
    return h`
      <fieldset
        part="form-control"
        class=${k({
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
                  ${s}
                </ug-button-group>
              ` : s}
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
a.styles = [S, b, A];
a.dependencies = { "ug-button-group": x };
r([
  f("slot:not([name])")
], a.prototype, "defaultSlot", 2);
r([
  f(".radio-group__validation-input")
], a.prototype, "validationInput", 2);
r([
  c()
], a.prototype, "hasButtonGroup", 2);
r([
  c()
], a.prototype, "errorMessage", 2);
r([
  c()
], a.prototype, "defaultValue", 2);
r([
  d()
], a.prototype, "label", 2);
r([
  d({ attribute: "help-text" })
], a.prototype, "helpText", 2);
r([
  d()
], a.prototype, "name", 2);
r([
  d({ reflect: !0 })
], a.prototype, "value", 2);
r([
  d({ reflect: !0 })
], a.prototype, "size", 2);
r([
  d({ reflect: !0 })
], a.prototype, "form", 2);
r([
  d({ type: Boolean, reflect: !0 })
], a.prototype, "required", 2);
r([
  m("size", { waitUntilFirstUpdate: !0 })
], a.prototype, "handleSizeChange", 1);
r([
  m("value")
], a.prototype, "handleValueChange", 1);
var E = Object.defineProperty, M = Object.getOwnPropertyDescriptor, q = (t, i, e, o) => {
  for (var s = o > 1 ? void 0 : o ? M(i, e) : i, n = t.length - 1, l; n >= 0; n--)
    (l = t[n]) && (s = (o ? l(i, e, s) : l(s)) || s);
  return o && s && E(i, e, s), s;
};
let p = class extends a {
};
p = q([
  v("ug-radio-group")
], p);
export {
  p as UgRadioGroup
};
