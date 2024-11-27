import { i as p, S as d, x as m, t as c } from "../../chunks/chunk.UYAO2JRR.js";
import { c as h } from "../../chunks/chunk.TUVJKY7S.js";
var u = p`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`, l = class extends d {
  render() {
    return m` <slot></slot> `;
  }
};
l.styles = [h, u];
var f = Object.defineProperty, v = Object.getOwnPropertyDescriptor, _ = (s, e, i, r) => {
  for (var t = r > 1 ? void 0 : r ? v(e, i) : e, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (t = (r ? n(e, i, t) : n(t)) || t);
  return r && t && f(e, i, t), t;
};
let a = class extends l {
};
a = _([
  c("ug-visually-hidden")
], a);
export {
  a as UgVisuallyHidden
};
