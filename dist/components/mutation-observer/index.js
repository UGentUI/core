import { i as u, _ as e, n as l, S as p, k as b, t as v } from "../../chunks/chunk.NLWS5DN7.js";
import { w as i } from "../../chunks/chunk.CCJUT23E.js";
import { c as O } from "../../chunks/chunk.TUVJKY7S.js";
var f = u`
  :host {
    display: contents;
  }
`, t = class extends p {
  constructor() {
    super(...arguments), this.attrOldValue = !1, this.charData = !1, this.charDataOldValue = !1, this.childList = !1, this.disabled = !1, this.handleMutation = (a) => {
      this.emit("ug-mutation", {
        detail: { mutationList: a }
      });
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.mutationObserver = new MutationObserver(this.handleMutation), this.disabled || this.startObserver();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.stopObserver();
  }
  startObserver() {
    const a = typeof this.attr == "string" && this.attr.length > 0, s = a && this.attr !== "*" ? this.attr.split(" ") : void 0;
    try {
      this.mutationObserver.observe(this, {
        subtree: !0,
        childList: this.childList,
        attributes: a,
        attributeFilter: s,
        attributeOldValue: this.attrOldValue,
        characterData: this.charData,
        characterDataOldValue: this.charDataOldValue
      });
    } catch {
    }
  }
  stopObserver() {
    this.mutationObserver.disconnect();
  }
  handleDisabledChange() {
    this.disabled ? this.stopObserver() : this.startObserver();
  }
  handleChange() {
    this.stopObserver(), this.startObserver();
  }
  render() {
    return b` <slot></slot> `;
  }
};
t.styles = [O, f];
e([
  l({ reflect: !0 })
], t.prototype, "attr", 2);
e([
  l({ attribute: "attr-old-value", type: Boolean, reflect: !0 })
], t.prototype, "attrOldValue", 2);
e([
  l({ attribute: "char-data", type: Boolean, reflect: !0 })
], t.prototype, "charData", 2);
e([
  l({ attribute: "char-data-old-value", type: Boolean, reflect: !0 })
], t.prototype, "charDataOldValue", 2);
e([
  l({ attribute: "child-list", type: Boolean, reflect: !0 })
], t.prototype, "childList", 2);
e([
  l({ type: Boolean, reflect: !0 })
], t.prototype, "disabled", 2);
e([
  i("disabled")
], t.prototype, "handleDisabledChange", 1);
e([
  i("attr", { waitUntilFirstUpdate: !0 }),
  i("attr-old-value", { waitUntilFirstUpdate: !0 }),
  i("char-data", { waitUntilFirstUpdate: !0 }),
  i("char-data-old-value", { waitUntilFirstUpdate: !0 }),
  i("childList", { waitUntilFirstUpdate: !0 })
], t.prototype, "handleChange", 1);
var y = Object.defineProperty, m = Object.getOwnPropertyDescriptor, _ = (a, s, o, h) => {
  for (var r = h > 1 ? void 0 : h ? m(s, o) : s, n = a.length - 1, d; n >= 0; n--)
    (d = a[n]) && (r = (h ? d(s, o, r) : d(r)) || r);
  return h && r && y(s, o, r), r;
};
let c = class extends t {
};
c = _([
  v("ug-mutation-observer")
], c);
export {
  c as UgMutationObserver
};
