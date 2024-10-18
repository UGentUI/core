import { L as u } from "../../chunks/chunk.WLV3FVBR.js";
import { _ as e, n as o, S as d, k as y, t as l } from "../../chunks/chunk.NLWS5DN7.js";
var t = class extends d {
  constructor() {
    super(...arguments), this.localize = new u(this), this.date = /* @__PURE__ */ new Date(), this.hourFormat = "auto";
  }
  render() {
    const a = new Date(this.date), i = this.hourFormat === "auto" ? void 0 : this.hourFormat === "12";
    if (!isNaN(a.getMilliseconds()))
      return y`
      <time datetime=${a.toISOString()}>
        ${this.localize.date(a, {
        weekday: this.weekday,
        era: this.era,
        year: this.year,
        month: this.month,
        day: this.day,
        hour: this.hour,
        minute: this.minute,
        second: this.second,
        timeZoneName: this.timeZoneName,
        timeZone: this.timeZone,
        hour12: i
      })}
      </time>
    `;
  }
};
e([
  o()
], t.prototype, "date", 2);
e([
  o()
], t.prototype, "weekday", 2);
e([
  o()
], t.prototype, "era", 2);
e([
  o()
], t.prototype, "year", 2);
e([
  o()
], t.prototype, "month", 2);
e([
  o()
], t.prototype, "day", 2);
e([
  o()
], t.prototype, "hour", 2);
e([
  o()
], t.prototype, "minute", 2);
e([
  o()
], t.prototype, "second", 2);
e([
  o({ attribute: "time-zone-name" })
], t.prototype, "timeZoneName", 2);
e([
  o({ attribute: "time-zone" })
], t.prototype, "timeZone", 2);
e([
  o({ attribute: "hour-format" })
], t.prototype, "hourFormat", 2);
var c = Object.defineProperty, f = Object.getOwnPropertyDescriptor, v = (a, i, n, s) => {
  for (var r = s > 1 ? void 0 : s ? f(i, n) : i, m = a.length - 1, p; m >= 0; m--)
    (p = a[m]) && (r = (s ? p(i, n, r) : p(r)) || r);
  return s && r && c(i, n, r), r;
};
let h = class extends t {
};
h = v([
  l("ug-format-date")
], h);
export {
  h as UgFormatDate
};
