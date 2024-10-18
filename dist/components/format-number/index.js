import { L as c } from "../../chunks/chunk.WLV3FVBR.js";
import { _ as t, n as e, S as g, t as y } from "../../chunks/chunk.NLWS5DN7.js";
var i = class extends g {
  constructor() {
    super(...arguments), this.localize = new c(this), this.value = 0, this.type = "decimal", this.noGrouping = !1, this.currency = "USD", this.currencyDisplay = "symbol";
  }
  render() {
    return isNaN(this.value) ? "" : this.localize.number(this.value, {
      style: this.type,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      useGrouping: !this.noGrouping,
      minimumIntegerDigits: this.minimumIntegerDigits,
      minimumFractionDigits: this.minimumFractionDigits,
      maximumFractionDigits: this.maximumFractionDigits,
      minimumSignificantDigits: this.minimumSignificantDigits,
      maximumSignificantDigits: this.maximumSignificantDigits
    });
  }
};
t([
  e({ type: Number })
], i.prototype, "value", 2);
t([
  e()
], i.prototype, "type", 2);
t([
  e({ attribute: "no-grouping", type: Boolean })
], i.prototype, "noGrouping", 2);
t([
  e()
], i.prototype, "currency", 2);
t([
  e({ attribute: "currency-display" })
], i.prototype, "currencyDisplay", 2);
t([
  e({ attribute: "minimum-integer-digits", type: Number })
], i.prototype, "minimumIntegerDigits", 2);
t([
  e({ attribute: "minimum-fraction-digits", type: Number })
], i.prototype, "minimumFractionDigits", 2);
t([
  e({ attribute: "maximum-fraction-digits", type: Number })
], i.prototype, "maximumFractionDigits", 2);
t([
  e({ attribute: "minimum-significant-digits", type: Number })
], i.prototype, "minimumSignificantDigits", 2);
t([
  e({ attribute: "maximum-significant-digits", type: Number })
], i.prototype, "maximumSignificantDigits", 2);
var l = Object.defineProperty, D = Object.getOwnPropertyDescriptor, h = (o, m, s, n) => {
  for (var r = n > 1 ? void 0 : n ? D(m, s) : m, u = o.length - 1, a; u >= 0; u--)
    (a = o[u]) && (r = (n ? a(m, s, r) : a(r)) || r);
  return n && r && l(m, s, r), r;
};
let p = class extends i {
};
p = h([
  y("ug-format-number")
], p);
export {
  p as UgFormatNumber
};
