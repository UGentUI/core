const i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
let s, c = "ltr", d = "en";
const g = typeof MutationObserver < "u" && typeof document < "u" && typeof document.documentElement < "u";
if (g) {
  const o = new MutationObserver(f);
  c = document.documentElement.dir || "ltr", d = document.documentElement.lang || navigator.language, o.observe(document.documentElement, {
    attributes: !0,
    attributeFilter: ["dir", "lang"]
  });
}
function m(...o) {
  o.map((e) => {
    const t = e.$code.toLowerCase();
    a.has(t) ? a.set(t, Object.assign(Object.assign({}, a.get(t)), e)) : a.set(t, e), s || (s = e);
  }), f();
}
function f() {
  g && (c = document.documentElement.dir || "ltr", d = document.documentElement.lang || navigator.language), [...i.keys()].map((o) => {
    typeof o.requestUpdate == "function" && o.requestUpdate();
  });
}
let w = class {
  constructor(e) {
    this.host = e, this.host.addController(this);
  }
  hostConnected() {
    i.add(this.host);
  }
  hostDisconnected() {
    i.delete(this.host);
  }
  dir() {
    return `${this.host.dir || c}`.toLowerCase();
  }
  lang() {
    return `${this.host.lang || d}`.toLowerCase();
  }
  getTranslationData(e) {
    var t, r;
    const n = new Intl.Locale(e.replace(/_/g, "-")), l = n == null ? void 0 : n.language.toLowerCase(), u = (r = (t = n == null ? void 0 : n.region) === null || t === void 0 ? void 0 : t.toLowerCase()) !== null && r !== void 0 ? r : "", v = a.get(`${l}-${u}`), p = a.get(l);
    return { locale: n, language: l, region: u, primary: v, secondary: p };
  }
  exists(e, t) {
    var r;
    const { primary: n, secondary: l } = this.getTranslationData((r = t.lang) !== null && r !== void 0 ? r : this.lang());
    return t = Object.assign({ includeFallback: !1 }, t), !!(n && n[e] || l && l[e] || t.includeFallback && s && s[e]);
  }
  term(e, ...t) {
    const { primary: r, secondary: n } = this.getTranslationData(this.lang());
    let l;
    if (r && r[e])
      l = r[e];
    else if (n && n[e])
      l = n[e];
    else if (s && s[e])
      l = s[e];
    else
      return console.error(`No translation found for: ${String(e)}`), String(e);
    return typeof l == "function" ? l(...t) : l;
  }
  date(e, t) {
    return e = new Date(e), new Intl.DateTimeFormat(this.lang(), t).format(e);
  }
  number(e, t) {
    return e = Number(e), isNaN(e) ? "" : new Intl.NumberFormat(this.lang(), t).format(e);
  }
  relativeTime(e, t, r) {
    return new Intl.RelativeTimeFormat(this.lang(), r).format(e, t);
  }
};
var h = {
  $code: "en",
  $name: "English",
  $dir: "ltr",
  carousel: "Carousel",
  clearEntry: "Clear entry",
  close: "Close",
  copied: "Copied",
  copy: "Copy",
  currentValue: "Current value",
  error: "Error",
  goToSlide: (o, e) => `Go to slide ${o} of ${e}`,
  hidePassword: "Hide password",
  loading: "Loading",
  nextSlide: "Next slide",
  numOptionsSelected: (o) => o === 0 ? "No options selected" : o === 1 ? "1 option selected" : `${o} options selected`,
  previousSlide: "Previous slide",
  progress: "Progress",
  remove: "Remove",
  resize: "Resize",
  scrollToEnd: "Scroll to end",
  scrollToStart: "Scroll to start",
  selectAColorFromTheScreen: "Select a color from the screen",
  showPassword: "Show password",
  slideNum: (o) => `Slide ${o}`,
  toggleColorFormat: "Toggle color format"
};
m(h);
var C = h, $ = class extends w {
};
m(C);
export {
  $ as L
};