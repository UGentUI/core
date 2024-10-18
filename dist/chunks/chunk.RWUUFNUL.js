function g(o, t) {
  return {
    top: Math.round(o.getBoundingClientRect().top - t.getBoundingClientRect().top),
    left: Math.round(o.getBoundingClientRect().left - t.getBoundingClientRect().left)
  };
}
var n = /* @__PURE__ */ new Set();
function m() {
  const o = document.documentElement.clientWidth;
  return Math.abs(window.innerWidth - o);
}
function p() {
  const o = Number(getComputedStyle(document.body).paddingRight.replace(/px/, ""));
  return isNaN(o) || !o ? 0 : o;
}
function h(o) {
  if (n.add(o), !document.documentElement.classList.contains("ug-scroll-lock")) {
    const t = m() + p();
    let l = getComputedStyle(document.documentElement).scrollbarGutter;
    (!l || l === "auto") && (l = "stable"), t < 2 && (l = ""), document.documentElement.style.setProperty("--ug-scroll-lock-gutter", l), document.documentElement.classList.add("ug-scroll-lock"), document.documentElement.style.setProperty("--ug-scroll-lock-size", `${t}px`);
  }
}
function y(o) {
  n.delete(o), n.size === 0 && (document.documentElement.classList.remove("ug-scroll-lock"), document.documentElement.style.removeProperty("--ug-scroll-lock-size"));
}
function a(o, t, l = "vertical", e = "smooth") {
  const u = g(o, t), s = u.top + t.scrollTop, c = u.left + t.scrollLeft, d = t.scrollLeft, i = t.scrollLeft + t.offsetWidth, f = t.scrollTop, r = t.scrollTop + t.offsetHeight;
  (l === "horizontal" || l === "both") && (c < d ? t.scrollTo({ left: c, behavior: e }) : c + o.clientWidth > i && t.scrollTo({ left: c - t.offsetWidth + o.clientWidth, behavior: e })), (l === "vertical" || l === "both") && (s < f ? t.scrollTo({ top: s, behavior: e }) : s + o.clientHeight > r && t.scrollTo({ top: s - t.offsetHeight + o.clientHeight, behavior: e }));
}
export {
  h as l,
  a as s,
  y as u
};
