import { S as m } from "../../chunks/chunk.TLKDQ5JG.js";
import { F as b, v as y } from "../../chunks/chunk.2RCF7SLU.js";
import { b as v } from "../../chunks/chunk.MAQXLKQ7.js";
import { L as g } from "../../chunks/chunk.WLV3FVBR.js";
import { H as C } from "../../chunks/chunk.NYIIDP5N.js";
import { S as $ } from "../../chunks/chunk.E6QAPUBK.js";
import { w as _ } from "../../chunks/chunk.CCJUT23E.js";
import { c as B } from "../../chunks/chunk.TUVJKY7S.js";
import { S as x, _ as e, n as o, t as S } from "../../chunks/chunk.UYAO2JRR.js";
import { e as w } from "../../chunks/class-map.js";
import { i as d, u as p } from "../../chunks/static.js";
import { o as r } from "../../chunks/if-defined.js";
import { r as c } from "../../chunks/state.js";
import { e as F } from "../../chunks/query.js";
var t = class extends x {
  constructor() {
    super(...arguments), this.formControlController = new b(this, {
      assumeInteractionOn: ["click"]
    }), this.hasSlotController = new C(this, "[default]", "prefix", "suffix"), this.localize = new g(this), this.hasFocus = !1, this.invalid = !1, this.title = "", this.variant = "default", this.size = "medium", this.caret = !1, this.disabled = !1, this.loading = !1, this.outline = !1, this.pill = !1, this.circle = !1, this.type = "button", this.name = "", this.value = "", this.href = "", this.rel = "noreferrer noopener";
  }
  /** Gets the validity state object */
  get validity() {
    return this.isButton() ? this.button.validity : y;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.isButton() ? this.button.validationMessage : "";
  }
  firstUpdated() {
    this.isButton() && this.formControlController.updateValidity();
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("ug-blur");
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("ug-focus");
  }
  handleClick() {
    this.type === "submit" && this.formControlController.submit(this), this.type === "reset" && this.formControlController.reset(this);
  }
  handleInvalid(i) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(i);
  }
  isButton() {
    return !this.href;
  }
  isLink() {
    return !!this.href;
  }
  handleDisabledChange() {
    this.isButton() && this.formControlController.setValidity(this.disabled);
  }
  /** Simulates a click on the button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the button. */
  focus(i) {
    this.button.focus(i);
  }
  /** Removes focus from the button. */
  blur() {
    this.button.blur();
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.isButton() ? this.button.checkValidity() : !0;
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.isButton() ? this.button.reportValidity() : !0;
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(i) {
    this.isButton() && (this.button.setCustomValidity(i), this.formControlController.updateValidity());
  }
  render() {
    const i = this.isLink(), s = i ? d`a` : d`button`;
    return p`
      <${s}
        part="base"
        class=${w({
      button: !0,
      "button--default": this.variant === "default",
      "button--primary": this.variant === "primary",
      "button--success": this.variant === "success",
      "button--neutral": this.variant === "neutral",
      "button--warning": this.variant === "warning",
      "button--danger": this.variant === "danger",
      "button--text": this.variant === "text",
      "button--small": this.size === "small",
      "button--medium": this.size === "medium",
      "button--large": this.size === "large",
      "button--caret": this.caret,
      "button--circle": this.circle,
      "button--disabled": this.disabled,
      "button--focused": this.hasFocus,
      "button--loading": this.loading,
      "button--standard": !this.outline,
      "button--outline": this.outline,
      "button--pill": this.pill,
      "button--rtl": this.localize.dir() === "rtl",
      "button--has-label": this.hasSlotController.test("[default]"),
      "button--has-prefix": this.hasSlotController.test("prefix"),
      "button--has-suffix": this.hasSlotController.test("suffix")
    })}
        ?disabled=${r(i ? void 0 : this.disabled)}
        type=${r(i ? void 0 : this.type)}
        title=${this.title}
        name=${r(i ? void 0 : this.name)}
        value=${r(i ? void 0 : this.value)}
        href=${r(i && !this.disabled ? this.href : void 0)}
        target=${r(i ? this.target : void 0)}
        download=${r(i ? this.download : void 0)}
        rel=${r(i ? this.rel : void 0)}
        role=${r(i ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton() ? this.handleInvalid : null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret ? p` <ug-icon part="caret" class="button__caret" library="system" name="caret"></ug-icon> ` : ""}
        ${this.loading ? p`<ug-spinner part="spinner"></ug-spinner>` : ""}
      </${s}>
    `;
  }
};
t.styles = [B, v];
t.dependencies = {
  "ug-icon": $,
  "ug-spinner": m
};
e([
  F(".button")
], t.prototype, "button", 2);
e([
  c()
], t.prototype, "hasFocus", 2);
e([
  c()
], t.prototype, "invalid", 2);
e([
  o()
], t.prototype, "title", 2);
e([
  o({ reflect: !0 })
], t.prototype, "variant", 2);
e([
  o({ reflect: !0 })
], t.prototype, "size", 2);
e([
  o({ type: Boolean, reflect: !0 })
], t.prototype, "caret", 2);
e([
  o({ type: Boolean, reflect: !0 })
], t.prototype, "disabled", 2);
e([
  o({ type: Boolean, reflect: !0 })
], t.prototype, "loading", 2);
e([
  o({ type: Boolean, reflect: !0 })
], t.prototype, "outline", 2);
e([
  o({ type: Boolean, reflect: !0 })
], t.prototype, "pill", 2);
e([
  o({ type: Boolean, reflect: !0 })
], t.prototype, "circle", 2);
e([
  o()
], t.prototype, "type", 2);
e([
  o()
], t.prototype, "name", 2);
e([
  o()
], t.prototype, "value", 2);
e([
  o()
], t.prototype, "href", 2);
e([
  o()
], t.prototype, "target", 2);
e([
  o()
], t.prototype, "rel", 2);
e([
  o()
], t.prototype, "download", 2);
e([
  o()
], t.prototype, "form", 2);
e([
  o({ attribute: "formaction" })
], t.prototype, "formAction", 2);
e([
  o({ attribute: "formenctype" })
], t.prototype, "formEnctype", 2);
e([
  o({ attribute: "formmethod" })
], t.prototype, "formMethod", 2);
e([
  o({ attribute: "formnovalidate", type: Boolean })
], t.prototype, "formNoValidate", 2);
e([
  o({ attribute: "formtarget" })
], t.prototype, "formTarget", 2);
e([
  _("disabled", { waitUntilFirstUpdate: !0 })
], t.prototype, "handleDisabledChange", 1);
var V = Object.defineProperty, z = Object.getOwnPropertyDescriptor, k = (i, s, n, a) => {
  for (var l = a > 1 ? void 0 : a ? z(s, n) : s, u = i.length - 1, h; u >= 0; u--)
    (h = i[u]) && (l = (a ? h(s, n, l) : h(l)) || l);
  return a && l && V(s, n, l), l;
};
let f = class extends t {
};
f = k([
  S("ug-button")
], f);
export {
  f as UgButton
};
