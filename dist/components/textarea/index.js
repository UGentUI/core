import { i as f, _ as e, n as a, S as g, k as m, t as b } from "../../chunks/chunk.NLWS5DN7.js";
import { d as x } from "../../chunks/chunk.GI7VDIWX.js";
import { f as v } from "../../chunks/chunk.SI4ACBFK.js";
import { F as y } from "../../chunks/chunk.2RCF7SLU.js";
import { H as _ } from "../../chunks/chunk.NYIIDP5N.js";
import { w as h } from "../../chunks/chunk.CCJUT23E.js";
import { c as C } from "../../chunks/chunk.TUVJKY7S.js";
import { R as c } from "../../chunks/class-map.js";
import { t as l } from "../../chunks/if-defined.js";
import { F as z } from "../../chunks/live.js";
import { r as w } from "../../chunks/state.js";
import { e as k } from "../../chunks/query.js";
var $ = f`
  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--ug-input-font-family);
    font-weight: var(--ug-input-font-weight);
    line-height: var(--ug-line-height-normal);
    letter-spacing: var(--ug-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--ug-transition-fast) color,
      var(--ug-transition-fast) border,
      var(--ug-transition-fast) box-shadow,
      var(--ug-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--ug-input-background-color);
    border: solid var(--ug-input-border-width) var(--ug-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--ug-input-background-color-hover);
    border-color: var(--ug-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--ug-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--ug-input-background-color-focus);
    border-color: var(--ug-input-border-color-focus);
    color: var(--ug-input-color-focus);
    box-shadow: 0 0 0 var(--ug-focus-ring-width) var(--ug-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--ug-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--ug-input-background-color-disabled);
    border-color: var(--ug-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--ug-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--ug-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--ug-input-filled-background-color);
    color: var(--ug-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--ug-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--ug-input-filled-background-color-focus);
    outline: var(--ug-focus-ring);
    outline-offset: var(--ug-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--ug-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--ug-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--ug-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--ug-input-border-radius-small);
    font-size: var(--ug-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--ug-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--ug-input-border-radius-medium);
    font-size: var(--ug-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--ug-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--ug-input-border-radius-large);
    font-size: var(--ug-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--ug-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`, t = class extends g {
  constructor() {
    super(...arguments), this.formControlController = new y(this, {
      assumeInteractionOn: ["ug-blur", "ug-input"]
    }), this.hasSlotController = new _(this, "help-text", "label"), this.hasFocus = !1, this.title = "", this.name = "", this.value = "", this.size = "medium", this.filled = !1, this.label = "", this.helpText = "", this.placeholder = "", this.rows = 4, this.resize = "vertical", this.disabled = !1, this.readonly = !1, this.form = "", this.required = !1, this.spellcheck = !0, this.defaultValue = "";
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
    super.connectedCallback(), this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight()), this.updateComplete.then(() => {
      this.setTextareaHeight(), this.resizeObserver.observe(this.input);
    });
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  disconnectedCallback() {
    var r;
    super.disconnectedCallback(), this.input && ((r = this.resizeObserver) == null || r.unobserve(this.input));
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("ug-blur");
  }
  handleChange() {
    this.value = this.input.value, this.setTextareaHeight(), this.emit("ug-change");
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("ug-focus");
  }
  handleInput() {
    this.value = this.input.value, this.emit("ug-input");
  }
  handleInvalid(r) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(r);
  }
  setTextareaHeight() {
    this.resize === "auto" ? (this.input.style.height = "auto", this.input.style.height = `${this.input.scrollHeight}px`) : this.input.style.height = void 0;
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  handleRowsChange() {
    this.setTextareaHeight();
  }
  async handleValueChange() {
    await this.updateComplete, this.formControlController.updateValidity(), this.setTextareaHeight();
  }
  /** Sets focus on the textarea. */
  focus(r) {
    this.input.focus(r);
  }
  /** Removes focus from the textarea. */
  blur() {
    this.input.blur();
  }
  /** Selects all the text in the textarea. */
  select() {
    this.input.select();
  }
  /** Gets or sets the textarea's scroll position. */
  scrollPosition(r) {
    if (r) {
      typeof r.top == "number" && (this.input.scrollTop = r.top), typeof r.left == "number" && (this.input.scrollLeft = r.left);
      return;
    }
    return {
      top: this.input.scrollTop,
      left: this.input.scrollTop
    };
  }
  /** Sets the start and end positions of the text selection (0-based). */
  setSelectionRange(r, o, i = "none") {
    this.input.setSelectionRange(r, o, i);
  }
  /** Replaces a range of text with a new string. */
  setRangeText(r, o, i, s = "preserve") {
    const n = o ?? this.input.selectionStart, u = i ?? this.input.selectionEnd;
    this.input.setRangeText(r, n, u, s), this.value !== this.input.value && (this.value = this.input.value, this.setTextareaHeight());
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
  setCustomValidity(r) {
    this.input.setCustomValidity(r), this.formControlController.updateValidity();
  }
  render() {
    const r = this.hasSlotController.test("label"), o = this.hasSlotController.test("help-text"), i = this.label ? !0 : !!r, s = this.helpText ? !0 : !!o;
    return m`
      <div
        part="form-control"
        class=${c({
      "form-control": !0,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": i,
      "form-control--has-help-text": s
    })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${c({
      textarea: !0,
      "textarea--small": this.size === "small",
      "textarea--medium": this.size === "medium",
      "textarea--large": this.size === "large",
      "textarea--standard": !this.filled,
      "textarea--filled": this.filled,
      "textarea--disabled": this.disabled,
      "textarea--focused": this.hasFocus,
      "textarea--empty": !this.value,
      "textarea--resize-none": this.resize === "none",
      "textarea--resize-vertical": this.resize === "vertical",
      "textarea--resize-auto": this.resize === "auto"
    })}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${l(this.name)}
              .value=${z(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${l(this.placeholder)}
              rows=${l(this.rows)}
              minlength=${l(this.minlength)}
              maxlength=${l(this.maxlength)}
              autocapitalize=${l(this.autocapitalize)}
              autocorrect=${l(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${l(this.spellcheck)}
              enterkeyhint=${l(this.enterkeyhint)}
              inputmode=${l(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
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
t.styles = [C, v, $];
e([
  k(".textarea__control")
], t.prototype, "input", 2);
e([
  w()
], t.prototype, "hasFocus", 2);
e([
  a()
], t.prototype, "title", 2);
e([
  a()
], t.prototype, "name", 2);
e([
  a()
], t.prototype, "value", 2);
e([
  a({ reflect: !0 })
], t.prototype, "size", 2);
e([
  a({ type: Boolean, reflect: !0 })
], t.prototype, "filled", 2);
e([
  a()
], t.prototype, "label", 2);
e([
  a({ attribute: "help-text" })
], t.prototype, "helpText", 2);
e([
  a()
], t.prototype, "placeholder", 2);
e([
  a({ type: Number })
], t.prototype, "rows", 2);
e([
  a()
], t.prototype, "resize", 2);
e([
  a({ type: Boolean, reflect: !0 })
], t.prototype, "disabled", 2);
e([
  a({ type: Boolean, reflect: !0 })
], t.prototype, "readonly", 2);
e([
  a({ reflect: !0 })
], t.prototype, "form", 2);
e([
  a({ type: Boolean, reflect: !0 })
], t.prototype, "required", 2);
e([
  a({ type: Number })
], t.prototype, "minlength", 2);
e([
  a({ type: Number })
], t.prototype, "maxlength", 2);
e([
  a()
], t.prototype, "autocapitalize", 2);
e([
  a()
], t.prototype, "autocorrect", 2);
e([
  a()
], t.prototype, "autocomplete", 2);
e([
  a({ type: Boolean })
], t.prototype, "autofocus", 2);
e([
  a()
], t.prototype, "enterkeyhint", 2);
e([
  a({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: (r) => !(!r || r === "false"),
      toAttribute: (r) => r ? "true" : "false"
    }
  })
], t.prototype, "spellcheck", 2);
e([
  a()
], t.prototype, "inputmode", 2);
e([
  x()
], t.prototype, "defaultValue", 2);
e([
  h("disabled", { waitUntilFirstUpdate: !0 })
], t.prototype, "handleDisabledChange", 1);
e([
  h("rows", { waitUntilFirstUpdate: !0 })
], t.prototype, "handleRowsChange", 1);
e([
  h("value", { waitUntilFirstUpdate: !0 })
], t.prototype, "handleValueChange", 1);
var T = Object.defineProperty, F = Object.getOwnPropertyDescriptor, V = (r, o, i, s) => {
  for (var n = s > 1 ? void 0 : s ? F(o, i) : o, u = r.length - 1, d; u >= 0; u--)
    (d = r[u]) && (n = (s ? d(o, i, n) : d(n)) || n);
  return s && n && T(o, i, n), n;
};
let p = class extends t {
};
p = V([
  b("ug-textarea")
], p);
export {
  p as UgTextarea
};
