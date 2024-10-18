import { i as w, _ as n, n as u, S as y, c as S, k as h, t as T } from "../../chunks/chunk.NLWS5DN7.js";
import { S as x } from "../../chunks/chunk.YJK4WDCI.js";
import { s as v } from "../../chunks/chunk.RWUUFNUL.js";
import { S as k } from "../../chunks/chunk.AYP3HPB7.js";
import { L as A } from "../../chunks/chunk.WLV3FVBR.js";
import { w as _ } from "../../chunks/chunk.CCJUT23E.js";
import { c as E } from "../../chunks/chunk.TUVJKY7S.js";
import { R as p } from "../../chunks/class-map.js";
import { r as g } from "../../chunks/state.js";
import { t as C } from "../../chunks/event-options.js";
import { e as b } from "../../chunks/query.js";
import "../../chunks/chunk.O7VCMB7W.js";
var $ = w`
  :host {
    --indicator-color: var(--ug-color-primary-600);
    --track-color: var(--ug-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--ug-transition-fast) translate ease,
      var(--ug-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--ug-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--ug-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(ug-tab-panel) {
    --padding: var(--ug-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(ug-tab-panel) {
    --padding: var(--ug-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(ug-tab-panel) {
    --padding: 0 var(--ug-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(ug-tab-panel) {
    --padding: 0 var(--ug-spacing-medium);
  }
`, i = class extends y {
  constructor() {
    super(...arguments), this.localize = new A(this), this.tabs = [], this.focusableTabs = [], this.panels = [], this.hasScrollControls = !1, this.shouldHideScrollStartButton = !1, this.shouldHideScrollEndButton = !1, this.placement = "top", this.activation = "auto", this.noScrollControls = !1, this.fixedScrollControls = !1, this.scrollOffset = 1;
  }
  connectedCallback() {
    const t = Promise.all([
      customElements.whenDefined("ug-tab"),
      customElements.whenDefined("ug-tab-panel")
    ]);
    super.connectedCallback(), this.resizeObserver = new ResizeObserver(() => {
      this.repositionIndicator(), this.updateScrollControls();
    }), this.mutationObserver = new MutationObserver((r) => {
      r.some((o) => !["aria-labelledby", "aria-controls"].includes(o.attributeName)) && setTimeout(() => this.setAriaLabels()), r.some((o) => o.attributeName === "disabled") && this.syncTabsAndPanels();
    }), this.updateComplete.then(() => {
      this.syncTabsAndPanels(), this.mutationObserver.observe(this, { attributes: !0, childList: !0, subtree: !0 }), this.resizeObserver.observe(this.nav), t.then(() => {
        new IntersectionObserver((o, a) => {
          var e;
          o[0].intersectionRatio > 0 && (this.setAriaLabels(), this.setActiveTab((e = this.getActiveTab()) != null ? e : this.tabs[0], { emitEvents: !1 }), a.unobserve(o[0].target));
        }).observe(this.tabGroup);
      });
    });
  }
  disconnectedCallback() {
    var t, r;
    super.disconnectedCallback(), (t = this.mutationObserver) == null || t.disconnect(), (r = this.resizeObserver) == null || r.unobserve(this.nav);
  }
  getAllTabs() {
    return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements();
  }
  getAllPanels() {
    return [...this.body.assignedElements()].filter((t) => t.tagName.toLowerCase() === "ug-tab-panel");
  }
  getActiveTab() {
    return this.tabs.find((t) => t.active);
  }
  handleClick(t) {
    const o = t.target.closest("ug-tab");
    (o == null ? void 0 : o.closest("ug-tab-group")) === this && o !== null && this.setActiveTab(o, { scrollBehavior: "smooth" });
  }
  handleKeyDown(t) {
    const o = t.target.closest("ug-tab");
    if ((o == null ? void 0 : o.closest("ug-tab-group")) === this && (["Enter", " "].includes(t.key) && o !== null && (this.setActiveTab(o, { scrollBehavior: "smooth" }), t.preventDefault()), ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(t.key))) {
      const e = this.tabs.find((c) => c.matches(":focus")), l = this.matches(":dir(rtl)");
      let s = null;
      if ((e == null ? void 0 : e.tagName.toLowerCase()) === "ug-tab") {
        if (t.key === "Home")
          s = this.focusableTabs[0];
        else if (t.key === "End")
          s = this.focusableTabs[this.focusableTabs.length - 1];
        else if (["top", "bottom"].includes(this.placement) && t.key === (l ? "ArrowRight" : "ArrowLeft") || ["start", "end"].includes(this.placement) && t.key === "ArrowUp") {
          const c = this.tabs.findIndex((d) => d === e);
          s = this.findNextFocusableTab(c, "backward");
        } else if (["top", "bottom"].includes(this.placement) && t.key === (l ? "ArrowLeft" : "ArrowRight") || ["start", "end"].includes(this.placement) && t.key === "ArrowDown") {
          const c = this.tabs.findIndex((d) => d === e);
          s = this.findNextFocusableTab(c, "forward");
        }
        if (!s)
          return;
        s.tabIndex = 0, s.focus({ preventScroll: !0 }), this.activation === "auto" ? this.setActiveTab(s, { scrollBehavior: "smooth" }) : this.tabs.forEach((c) => {
          c.tabIndex = c === s ? 0 : -1;
        }), ["top", "bottom"].includes(this.placement) && v(s, this.nav, "horizontal"), t.preventDefault();
      }
    }
  }
  handleScrollToStart() {
    this.nav.scroll({
      left: this.localize.dir() === "rtl" ? this.nav.scrollLeft + this.nav.clientWidth : this.nav.scrollLeft - this.nav.clientWidth,
      behavior: "smooth"
    });
  }
  handleScrollToEnd() {
    this.nav.scroll({
      left: this.localize.dir() === "rtl" ? this.nav.scrollLeft - this.nav.clientWidth : this.nav.scrollLeft + this.nav.clientWidth,
      behavior: "smooth"
    });
  }
  setActiveTab(t, r) {
    if (r = S({
      emitEvents: !0,
      scrollBehavior: "auto"
    }, r), t !== this.activeTab && !t.disabled) {
      const o = this.activeTab;
      this.activeTab = t, this.tabs.forEach((a) => {
        a.active = a === this.activeTab, a.tabIndex = a === this.activeTab ? 0 : -1;
      }), this.panels.forEach((a) => {
        var e;
        return a.active = a.name === ((e = this.activeTab) == null ? void 0 : e.panel);
      }), this.syncIndicator(), ["top", "bottom"].includes(this.placement) && v(this.activeTab, this.nav, "horizontal", r.scrollBehavior), r.emitEvents && (o && this.emit("ug-tab-hide", { detail: { name: o.panel } }), this.emit("ug-tab-show", { detail: { name: this.activeTab.panel } }));
    }
  }
  setAriaLabels() {
    this.tabs.forEach((t) => {
      const r = this.panels.find((o) => o.name === t.panel);
      r && (t.setAttribute("aria-controls", r.getAttribute("id")), r.setAttribute("aria-labelledby", t.getAttribute("id")));
    });
  }
  repositionIndicator() {
    const t = this.getActiveTab();
    if (!t)
      return;
    const r = t.clientWidth, o = t.clientHeight, a = this.matches(":dir(rtl)"), e = this.getAllTabs(), s = e.slice(0, e.indexOf(t)).reduce(
      (c, d) => ({
        left: c.left + d.clientWidth,
        top: c.top + d.clientHeight
      }),
      { left: 0, top: 0 }
    );
    switch (this.placement) {
      case "top":
      case "bottom":
        this.indicator.style.width = `${r}px`, this.indicator.style.height = "auto", this.indicator.style.translate = a ? `${-1 * s.left}px` : `${s.left}px`;
        break;
      case "start":
      case "end":
        this.indicator.style.width = "auto", this.indicator.style.height = `${o}px`, this.indicator.style.translate = `0 ${s.top}px`;
        break;
    }
  }
  // This stores tabs and panels so we can refer to a cache instead of calling querySelectorAll() multiple times.
  syncTabsAndPanels() {
    this.tabs = this.getAllTabs(), this.focusableTabs = this.tabs.filter((t) => !t.disabled), this.panels = this.getAllPanels(), this.syncIndicator(), this.updateComplete.then(() => this.updateScrollControls());
  }
  findNextFocusableTab(t, r) {
    let o = null;
    const a = r === "forward" ? 1 : -1;
    let e = t + a;
    for (; t < this.tabs.length; ) {
      if (o = this.tabs[e] || null, o === null) {
        r === "forward" ? o = this.focusableTabs[0] : o = this.focusableTabs[this.focusableTabs.length - 1];
        break;
      }
      if (!o.disabled)
        break;
      e += a;
    }
    return o;
  }
  updateScrollButtons() {
    this.hasScrollControls && !this.fixedScrollControls && (this.shouldHideScrollStartButton = this.scrollFromStart() <= this.scrollOffset, this.shouldHideScrollEndButton = this.isScrolledToEnd());
  }
  isScrolledToEnd() {
    return this.scrollFromStart() + this.nav.clientWidth >= this.nav.scrollWidth - this.scrollOffset;
  }
  scrollFromStart() {
    return this.localize.dir() === "rtl" ? -this.nav.scrollLeft : this.nav.scrollLeft;
  }
  updateScrollControls() {
    this.noScrollControls ? this.hasScrollControls = !1 : this.hasScrollControls = ["top", "bottom"].includes(this.placement) && this.nav.scrollWidth > this.nav.clientWidth + 1, this.updateScrollButtons();
  }
  syncIndicator() {
    this.getActiveTab() ? (this.indicator.style.display = "block", this.repositionIndicator()) : this.indicator.style.display = "none";
  }
  /** Shows the specified tab panel. */
  show(t) {
    const r = this.tabs.find((o) => o.panel === t);
    r && this.setActiveTab(r, { scrollBehavior: "smooth" });
  }
  render() {
    const t = this.matches(":dir(rtl)");
    return h`
      <div
        part="base"
        class=${p({
      "tab-group": !0,
      "tab-group--top": this.placement === "top",
      "tab-group--bottom": this.placement === "bottom",
      "tab-group--start": this.placement === "start",
      "tab-group--end": this.placement === "end",
      "tab-group--rtl": this.localize.dir() === "rtl",
      "tab-group--has-scroll-controls": this.hasScrollControls
    })}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls ? h`
                <ug-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${p({
      "tab-group__scroll-button": !0,
      "tab-group__scroll-button--start": !0,
      "tab-group__scroll-button--start--hidden": this.shouldHideScrollStartButton
    })}
                  name=${t ? "chevron-right" : "chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></ug-icon-button>
              ` : ""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <ug-resize-observer @ug-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </ug-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls ? h`
                <ug-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${p({
      "tab-group__scroll-button": !0,
      "tab-group__scroll-button--end": !0,
      "tab-group__scroll-button--end--hidden": this.shouldHideScrollEndButton
    })}
                  name=${t ? "chevron-left" : "chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></ug-icon-button>
              ` : ""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `;
  }
};
i.styles = [E, $];
i.dependencies = { "ug-icon-button": k, "ug-resize-observer": x };
n([
  b(".tab-group")
], i.prototype, "tabGroup", 2);
n([
  b(".tab-group__body")
], i.prototype, "body", 2);
n([
  b(".tab-group__nav")
], i.prototype, "nav", 2);
n([
  b(".tab-group__indicator")
], i.prototype, "indicator", 2);
n([
  g()
], i.prototype, "hasScrollControls", 2);
n([
  g()
], i.prototype, "shouldHideScrollStartButton", 2);
n([
  g()
], i.prototype, "shouldHideScrollEndButton", 2);
n([
  u()
], i.prototype, "placement", 2);
n([
  u()
], i.prototype, "activation", 2);
n([
  u({ attribute: "no-scroll-controls", type: Boolean })
], i.prototype, "noScrollControls", 2);
n([
  u({ attribute: "fixed-scroll-controls", type: Boolean })
], i.prototype, "fixedScrollControls", 2);
n([
  C({ passive: !0 })
], i.prototype, "updateScrollButtons", 1);
n([
  _("noScrollControls", { waitUntilFirstUpdate: !0 })
], i.prototype, "updateScrollControls", 1);
n([
  _("placement", { waitUntilFirstUpdate: !0 })
], i.prototype, "syncIndicator", 1);
var B = (t, r) => {
  let o = 0;
  return function(...a) {
    window.clearTimeout(o), o = window.setTimeout(() => {
      t.call(this, ...a);
    }, r);
  };
}, f = (t, r, o) => {
  const a = t[r];
  t[r] = function(...e) {
    a.call(this, ...e), o.call(this, a, ...e);
  };
}, L = "onscrollend" in window;
if (!L) {
  const t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new WeakMap(), o = (e) => {
    for (const l of e.changedTouches)
      t.add(l.identifier);
  }, a = (e) => {
    for (const l of e.changedTouches)
      t.delete(l.identifier);
  };
  document.addEventListener("touchstart", o, !0), document.addEventListener("touchend", a, !0), document.addEventListener("touchcancel", a, !0), f(EventTarget.prototype, "addEventListener", function(e, l) {
    if (l !== "scrollend")
      return;
    const s = B(() => {
      t.size ? s() : this.dispatchEvent(new Event("scrollend"));
    }, 100);
    e.call(this, "scroll", s, { passive: !0 }), r.set(this, s);
  }), f(EventTarget.prototype, "removeEventListener", function(e, l) {
    if (l !== "scrollend")
      return;
    const s = r.get(this);
    s && e.call(this, "scroll", s, { passive: !0 });
  });
}
var z = Object.defineProperty, O = Object.getOwnPropertyDescriptor, I = (t, r, o, a) => {
  for (var e = a > 1 ? void 0 : a ? O(r, o) : r, l = t.length - 1, s; l >= 0; l--)
    (s = t[l]) && (e = (a ? s(r, o, e) : s(e)) || e);
  return a && e && z(r, o, e), e;
};
let m = class extends i {
};
m = I([
  T("ug-tab-group")
], m);
export {
  m as UgTabGroup
};
