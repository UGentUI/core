import { b as c, c as m } from "./chunk.NLWS5DN7.js";
var a = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakSet(), l = /* @__PURE__ */ new WeakMap(), y = class {
  constructor(e, i) {
    this.handleFormData = (t) => {
      const s = this.options.disabled(this.host), r = this.options.name(this.host), o = this.options.value(this.host), d = this.host.tagName.toLowerCase() === "ug-button";
      this.host.isConnected && !s && !d && typeof r == "string" && r.length > 0 && typeof o < "u" && (Array.isArray(o) ? o.forEach((p) => {
        t.formData.append(r, p.toString());
      }) : t.formData.append(r, o.toString()));
    }, this.handleFormSubmit = (t) => {
      var s;
      const r = this.options.disabled(this.host), o = this.options.reportValidity;
      this.form && !this.form.noValidate && ((s = a.get(this.form)) == null || s.forEach((d) => {
        this.setUserInteracted(d, !0);
      })), this.form && !this.form.noValidate && !r && !o(this.host) && (t.preventDefault(), t.stopImmediatePropagation());
    }, this.handleFormReset = () => {
      this.options.setValue(this.host, this.options.defaultValue(this.host)), this.setUserInteracted(this.host, !1), l.set(this.host, []);
    }, this.handleInteraction = (t) => {
      const s = l.get(this.host);
      s.includes(t.type) || s.push(t.type), s.length === this.options.assumeInteractionOn.length && this.setUserInteracted(this.host, !0);
    }, this.checkFormValidity = () => {
      if (this.form && !this.form.noValidate) {
        const t = this.form.querySelectorAll("*");
        for (const s of t)
          if (typeof s.checkValidity == "function" && !s.checkValidity())
            return !1;
      }
      return !0;
    }, this.reportFormValidity = () => {
      if (this.form && !this.form.noValidate) {
        const t = this.form.querySelectorAll("*");
        for (const s of t)
          if (typeof s.reportValidity == "function" && !s.reportValidity())
            return !1;
      }
      return !0;
    }, (this.host = e).addController(this), this.options = m({
      form: (t) => {
        const s = t.form;
        if (s) {
          const o = t.getRootNode().querySelector(`#${s}`);
          if (o)
            return o;
        }
        return t.closest("form");
      },
      name: (t) => t.name,
      value: (t) => t.value,
      defaultValue: (t) => t.defaultValue,
      disabled: (t) => {
        var s;
        return (s = t.disabled) != null ? s : !1;
      },
      reportValidity: (t) => typeof t.reportValidity == "function" ? t.reportValidity() : !0,
      checkValidity: (t) => typeof t.checkValidity == "function" ? t.checkValidity() : !0,
      setValue: (t, s) => t.value = s,
      assumeInteractionOn: ["ug-input"]
    }, i);
  }
  hostConnected() {
    const e = this.options.form(this.host);
    e && this.attachForm(e), l.set(this.host, []), this.options.assumeInteractionOn.forEach((i) => {
      this.host.addEventListener(i, this.handleInteraction);
    });
  }
  hostDisconnected() {
    this.detachForm(), l.delete(this.host), this.options.assumeInteractionOn.forEach((e) => {
      this.host.removeEventListener(e, this.handleInteraction);
    });
  }
  hostUpdated() {
    const e = this.options.form(this.host);
    e || this.detachForm(), e && this.form !== e && (this.detachForm(), this.attachForm(e)), this.host.hasUpdated && this.setValidity(this.host.validity.valid);
  }
  attachForm(e) {
    e ? (this.form = e, a.has(this.form) ? a.get(this.form).add(this.host) : a.set(this.form, /* @__PURE__ */ new Set([this.host])), this.form.addEventListener("formdata", this.handleFormData), this.form.addEventListener("submit", this.handleFormSubmit), this.form.addEventListener("reset", this.handleFormReset), h.has(this.form) || (h.set(this.form, this.form.reportValidity), this.form.reportValidity = () => this.reportFormValidity()), n.has(this.form) || (n.set(this.form, this.form.checkValidity), this.form.checkValidity = () => this.checkFormValidity())) : this.form = void 0;
  }
  detachForm() {
    if (!this.form)
      return;
    const e = a.get(this.form);
    e && (e.delete(this.host), e.size <= 0 && (this.form.removeEventListener("formdata", this.handleFormData), this.form.removeEventListener("submit", this.handleFormSubmit), this.form.removeEventListener("reset", this.handleFormReset), h.has(this.form) && (this.form.reportValidity = h.get(this.form), h.delete(this.form)), n.has(this.form) && (this.form.checkValidity = n.get(this.form), n.delete(this.form)), this.form = void 0));
  }
  setUserInteracted(e, i) {
    i ? f.add(e) : f.delete(e), e.requestUpdate();
  }
  doAction(e, i) {
    if (this.form) {
      const t = document.createElement("button");
      t.type = e, t.style.position = "absolute", t.style.width = "0", t.style.height = "0", t.style.clipPath = "inset(50%)", t.style.overflow = "hidden", t.style.whiteSpace = "nowrap", i && (t.name = i.name, t.value = i.value, ["formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"].forEach((s) => {
        i.hasAttribute(s) && t.setAttribute(s, i.getAttribute(s));
      })), this.form.append(t), t.click(), t.remove();
    }
  }
  /** Returns the associated `<form>` element, if one exists. */
  getForm() {
    var e;
    return (e = this.form) != null ? e : null;
  }
  /** Resets the form, restoring all the control to their default value */
  reset(e) {
    this.doAction("reset", e);
  }
  /** Submits the form, triggering validation and form data injection. */
  submit(e) {
    this.doAction("submit", e);
  }
  /**
   * Synchronously sets the form control's validity. Call this when you know the future validity but need to update
   * the host element immediately, i.e. before Lit updates the component in the next update.
   */
  setValidity(e) {
    const i = this.host, t = !!f.has(i), s = !!i.required;
    i.toggleAttribute("data-required", s), i.toggleAttribute("data-optional", !s), i.toggleAttribute("data-invalid", !e), i.toggleAttribute("data-valid", e), i.toggleAttribute("data-user-invalid", !e && t), i.toggleAttribute("data-user-valid", e && t);
  }
  /**
   * Updates the form control's validity based on the current value of `host.validity.valid`. Call this when anything
   * that affects constraint validation changes so the component receives the correct validity states.
   */
  updateValidity() {
    const e = this.host;
    this.setValidity(e.validity.valid);
  }
  /**
   * Dispatches a non-bubbling, cancelable custom event of type `ug-invalid`.
   * If the `ug-invalid` event will be cancelled then the original `invalid`
   * event (which may have been passed as argument) will also be cancelled.
   * If no original `invalid` event has been passed then the `ug-invalid`
   * event will be cancelled before being dispatched.
   */
  emitInvalidEvent(e) {
    const i = new CustomEvent("ug-invalid", {
      bubbles: !1,
      composed: !1,
      cancelable: !0,
      detail: {}
    });
    e || i.preventDefault(), this.host.dispatchEvent(i) || e == null || e.preventDefault();
  }
}, u = Object.freeze({
  badInput: !1,
  customError: !1,
  patternMismatch: !1,
  rangeOverflow: !1,
  rangeUnderflow: !1,
  stepMismatch: !1,
  tooLong: !1,
  tooShort: !1,
  typeMismatch: !1,
  valid: !0,
  valueMissing: !1
}), g = Object.freeze(c(m({}, u), {
  valid: !1,
  valueMissing: !0
})), V = Object.freeze(c(m({}, u), {
  valid: !1,
  customError: !0
}));
export {
  y as F,
  g as a,
  V as c,
  u as v
};
