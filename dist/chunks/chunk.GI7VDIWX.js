import { u as c } from "./chunk.UYAO2JRR.js";
var C = (r = "value") => (l, s) => {
  const e = l.constructor, b = e.prototype.attributeChangedCallback;
  e.prototype.attributeChangedCallback = function(i, f, n) {
    var a;
    const t = e.getPropertyOptions(r), p = typeof t.attribute == "string" ? t.attribute : r;
    if (i === p) {
      const o = t.converter || c, u = (typeof o == "function" ? o : (a = o == null ? void 0 : o.fromAttribute) != null ? a : c.fromAttribute)(n, t.type);
      this[r] !== u && (this[s] = u);
    }
    b.call(this, i, f, n);
  };
};
export {
  C as d
};
