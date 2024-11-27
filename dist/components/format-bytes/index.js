import { L as h } from "../../chunks/chunk.WLV3FVBR.js";
import { _ as n, S as c, n as p, t as m } from "../../chunks/chunk.UYAO2JRR.js";
var o = class extends c {
  constructor() {
    super(...arguments), this.localize = new h(this), this.value = 0, this.unit = "byte", this.display = "short";
  }
  render() {
    if (isNaN(this.value))
      return "";
    const i = ["", "kilo", "mega", "giga", "tera"], s = ["", "kilo", "mega", "giga", "tera", "peta"], r = this.unit === "bit" ? i : s, e = Math.max(0, Math.min(Math.floor(Math.log10(this.value) / 3), r.length - 1)), t = r[e] + this.unit, a = parseFloat((this.value / Math.pow(1e3, e)).toPrecision(3));
    return this.localize.number(a, {
      style: "unit",
      unit: t,
      unitDisplay: this.display
    });
  }
};
n([
  p({ type: Number })
], o.prototype, "value", 2);
n([
  p()
], o.prototype, "unit", 2);
n([
  p()
], o.prototype, "display", 2);
var y = Object.defineProperty, f = Object.getOwnPropertyDescriptor, v = (i, s, r, e) => {
  for (var t = e > 1 ? void 0 : e ? f(s, r) : s, a = i.length - 1, l; a >= 0; a--)
    (l = i[a]) && (t = (e ? l(s, r, t) : l(t)) || t);
  return e && t && y(s, r, t), t;
};
let u = class extends o {
};
u = v([
  m("ug-format-bytes")
], u);
export {
  u as UgFormatBytes
};
