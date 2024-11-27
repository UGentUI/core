import { L as p } from "../../chunks/chunk.WLV3FVBR.js";
import { _ as r, S as v, x as d, n as m, t as f } from "../../chunks/chunk.UYAO2JRR.js";
import { r as h } from "../../chunks/state.js";
var T = [
  { max: 276e4, value: 6e4, unit: "minute" },
  // max 46 minutes
  { max: 72e6, value: 36e5, unit: "hour" },
  // max 20 hours
  { max: 5184e5, value: 864e5, unit: "day" },
  // max 6 days
  { max: 24192e5, value: 6048e5, unit: "week" },
  // max 28 days
  { max: 28512e6, value: 2592e6, unit: "month" },
  // max 11 months
  { max: 1 / 0, value: 31536e6, unit: "year" }
], o = class extends v {
  constructor() {
    super(...arguments), this.localize = new p(this), this.isoTime = "", this.relativeTime = "", this.date = /* @__PURE__ */ new Date(), this.format = "long", this.numeric = "auto", this.sync = !1;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), clearTimeout(this.updateTimeout);
  }
  render() {
    const n = /* @__PURE__ */ new Date(), t = new Date(this.date);
    if (isNaN(t.getMilliseconds()))
      return this.relativeTime = "", this.isoTime = "", "";
    const i = t.getTime() - n.getTime(), { unit: a, value: s } = T.find((e) => Math.abs(i) < e.max);
    if (this.isoTime = t.toISOString(), this.relativeTime = this.localize.relativeTime(Math.round(i / s), a, {
      numeric: this.numeric,
      style: this.format
    }), clearTimeout(this.updateTimeout), this.sync) {
      let e;
      a === "minute" ? e = l("second") : a === "hour" ? e = l("minute") : a === "day" ? e = l("hour") : e = l("day"), this.updateTimeout = window.setTimeout(() => this.requestUpdate(), e);
    }
    return d` <time datetime=${this.isoTime}>${this.relativeTime}</time> `;
  }
};
r([
  h()
], o.prototype, "isoTime", 2);
r([
  h()
], o.prototype, "relativeTime", 2);
r([
  m()
], o.prototype, "date", 2);
r([
  m()
], o.prototype, "format", 2);
r([
  m()
], o.prototype, "numeric", 2);
r([
  m({ type: Boolean })
], o.prototype, "sync", 2);
function l(n) {
  const i = { second: 1e3, minute: 6e4, hour: 36e5, day: 864e5 }[n];
  return i - Date.now() % i;
}
var y = Object.defineProperty, x = Object.getOwnPropertyDescriptor, w = (n, t, i, a) => {
  for (var s = a > 1 ? void 0 : a ? x(t, i) : t, e = n.length - 1, u; e >= 0; e--)
    (u = n[e]) && (s = (a ? u(t, i, s) : u(s)) || s);
  return a && s && y(t, i, s), s;
};
let c = class extends o {
};
c = w([
  f("ug-relative-time")
], c);
export {
  c as UgRelativeTime
};
