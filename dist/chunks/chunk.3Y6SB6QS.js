var s = "";
function n(t) {
  s = t;
}
function o(t = "") {
  if (!s) {
    const a = [...document.getElementsByTagName("script")], c = a.find((e) => e.hasAttribute("data-shoelace"));
    if (c)
      n(c.getAttribute("data-shoelace"));
    else {
      const e = a.find((r) => /shoelace(\.min)?\.js($|\?)/.test(r.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));
      let i = "";
      e && (i = e.getAttribute("src")), n(i.split("/").slice(0, -1).join("/"));
    }
  }
  return s.replace(/\/$/, "") + (t ? `/${t.replace(/^\//, "")}` : "");
}
export {
  o as g,
  n as s
};
