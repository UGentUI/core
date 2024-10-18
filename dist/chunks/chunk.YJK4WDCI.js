import { i, _ as r, n as l, S as o, k as n } from "./chunk.NLWS5DN7.js";
import { w as d } from "./chunk.CCJUT23E.js";
import { c as h } from "./chunk.TUVJKY7S.js";
var b = i`
  :host {
    display: contents;
  }
`, t = class extends o {
  constructor() {
    super(...arguments), this.observedElements = [], this.disabled = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.resizeObserver = new ResizeObserver((e) => {
      this.emit("ug-resize", { detail: { entries: e } });
    }), this.disabled || this.startObserver();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.stopObserver();
  }
  handleSlotChange() {
    this.disabled || this.startObserver();
  }
  startObserver() {
    const e = this.shadowRoot.querySelector("slot");
    if (e !== null) {
      const a = e.assignedElements({ flatten: !0 });
      this.observedElements.forEach((s) => this.resizeObserver.unobserve(s)), this.observedElements = [], a.forEach((s) => {
        this.resizeObserver.observe(s), this.observedElements.push(s);
      });
    }
  }
  stopObserver() {
    this.resizeObserver.disconnect();
  }
  handleDisabledChange() {
    this.disabled ? this.stopObserver() : this.startObserver();
  }
  render() {
    return n` <slot @slotchange=${this.handleSlotChange}></slot> `;
  }
};
t.styles = [h, b];
r([
  l({ type: Boolean, reflect: !0 })
], t.prototype, "disabled", 2);
r([
  d("disabled", { waitUntilFirstUpdate: !0 })
], t.prototype, "handleDisabledChange", 1);
export {
  t as S
};
