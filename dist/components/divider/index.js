import { i as v, _ as n, n as p, S as d, t as h } from "../../chunks/chunk.NLWS5DN7.js";
import { w as u } from "../../chunks/chunk.CCJUT23E.js";
import { c as g } from "../../chunks/chunk.TUVJKY7S.js";
var f = v`
  :host {
    --color: var(--ug-panel-border-color);
    --width: var(--ug-panel-border-width);
    --spacing: var(--ug-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`, a = class extends d {
  constructor() {
    super(...arguments), this.vertical = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "separator");
  }
  handleVerticalChange() {
    this.setAttribute("aria-orientation", this.vertical ? "vertical" : "horizontal");
  }
};
a.styles = [g, f];
n([
  p({ type: Boolean, reflect: !0 })
], a.prototype, "vertical", 2);
n([
  u("vertical")
], a.prototype, "handleVerticalChange", 1);
var m = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, b = (s, r, o, t) => {
  for (var e = t > 1 ? void 0 : t ? _(r, o) : r, i = s.length - 1, l; i >= 0; i--)
    (l = s[i]) && (e = (t ? l(r, o, e) : l(e)) || e);
  return t && e && m(r, o, e), e;
};
let c = class extends a {
};
c = b([
  h("ug-divider")
], c);
export {
  c as UgDivider
};
