import { S as y } from "../../chunks/chunk.3HB7VQL2.js";
import { s as h, g as p, a as m, b as f } from "../../chunks/chunk.3EPZX5HE.js";
import { w as g } from "../../chunks/chunk.B4BZKR24.js";
import { L as T } from "../../chunks/chunk.WLV3FVBR.js";
import { H as C } from "../../chunks/chunk.NYIIDP5N.js";
import { i as A, S as I, x as c, _ as a, n as s, t as x } from "../../chunks/chunk.UYAO2JRR.js";
import { w as _ } from "../../chunks/chunk.CCJUT23E.js";
import { c as H } from "../../chunks/chunk.TUVJKY7S.js";
import { e as v } from "../../chunks/class-map.js";
import { r as k } from "../../chunks/state.js";
import { e as b } from "../../chunks/query.js";
import "../../chunks/chunk.E6QAPUBK.js";
var $ = A`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--ug-panel-background-color);
    border: solid var(--ug-panel-border-width) var(--ug-panel-border-color);
    border-top-width: calc(var(--ug-panel-border-width) * 3);
    border-radius: var(--ug-border-radius-medium);
    font-family: var(--ug-font-sans);
    font-size: var(--ug-font-size-small);
    font-weight: var(--ug-font-weight-normal);
    line-height: 1.6;
    color: var(--ug-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--ug-font-size-large);
    padding-inline-start: var(--ug-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--ug-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--ug-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--ug-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--ug-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--ug-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--ug-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--ug-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--ug-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--ug-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--ug-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--ug-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--ug-font-size-medium);
    padding-inline-end: var(--ug-spacing-medium);
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--ug-panel-border-width) * 3);
    background-color: var(--ug-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--ug-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--ug-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--ug-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--ug-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--ug-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`, i = Object.assign(document.createElement("div"), { className: "ug-toast-stack" }), t = class extends I {
  constructor() {
    super(...arguments), this.hasSlotController = new C(this, "icon", "suffix"), this.localize = new T(this), this.open = !1, this.closable = !1, this.variant = "primary", this.duration = 1 / 0, this.remainingTime = this.duration;
  }
  firstUpdated() {
    this.base.hidden = !this.open;
  }
  restartAutoHide() {
    this.handleCountdownChange(), clearTimeout(this.autoHideTimeout), clearInterval(this.remainingTimeInterval), this.open && this.duration < 1 / 0 && (this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration), this.remainingTime = this.duration, this.remainingTimeInterval = window.setInterval(() => {
      this.remainingTime -= 100;
    }, 100));
  }
  pauseAutoHide() {
    var e;
    (e = this.countdownAnimation) == null || e.pause(), clearTimeout(this.autoHideTimeout), clearInterval(this.remainingTimeInterval);
  }
  resumeAutoHide() {
    var e;
    this.duration < 1 / 0 && (this.autoHideTimeout = window.setTimeout(() => this.hide(), this.remainingTime), this.remainingTimeInterval = window.setInterval(() => {
      this.remainingTime -= 100;
    }, 100), (e = this.countdownAnimation) == null || e.play());
  }
  handleCountdownChange() {
    if (this.open && this.duration < 1 / 0 && this.countdown) {
      const { countdownElement: e } = this, r = "100%", n = "0";
      this.countdownAnimation = e.animate([{ width: r }, { width: n }], {
        duration: this.duration,
        easing: "linear"
      });
    }
  }
  handleCloseClick() {
    this.hide();
  }
  async handleOpenChange() {
    if (this.open) {
      this.emit("ug-show"), this.duration < 1 / 0 && this.restartAutoHide(), await h(this.base), this.base.hidden = !1;
      const { keyframes: e, options: r } = p(this, "alert.show", { dir: this.localize.dir() });
      await m(this.base, e, r), this.emit("ug-after-show");
    } else {
      this.emit("ug-hide"), clearTimeout(this.autoHideTimeout), clearInterval(this.remainingTimeInterval), await h(this.base);
      const { keyframes: e, options: r } = p(this, "alert.hide", { dir: this.localize.dir() });
      await m(this.base, e, r), this.base.hidden = !0, this.emit("ug-after-hide");
    }
  }
  handleDurationChange() {
    this.restartAutoHide();
  }
  /** Shows the alert. */
  async show() {
    if (!this.open)
      return this.open = !0, g(this, "ug-after-show");
  }
  /** Hides the alert */
  async hide() {
    if (this.open)
      return this.open = !1, g(this, "ug-after-hide");
  }
  /**
   * Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
   * dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
   * calling this method again. The returned promise will resolve after the alert is hidden.
   */
  async toast() {
    return new Promise((e) => {
      this.handleCountdownChange(), i.parentElement === null && document.body.append(i), i.appendChild(this), requestAnimationFrame(() => {
        this.clientWidth, this.show();
      }), this.addEventListener(
        "ug-after-hide",
        () => {
          i.removeChild(this), e(), i.querySelector("ug-alert") === null && i.remove();
        },
        { once: !0 }
      );
    });
  }
  render() {
    return c`
      <div
        part="base"
        class=${v({
      alert: !0,
      "alert--open": this.open,
      "alert--closable": this.closable,
      "alert--has-countdown": !!this.countdown,
      "alert--has-icon": this.hasSlotController.test("icon"),
      "alert--primary": this.variant === "primary",
      "alert--success": this.variant === "success",
      "alert--neutral": this.variant === "neutral",
      "alert--warning": this.variant === "warning",
      "alert--danger": this.variant === "danger"
    })}
        role="alert"
        aria-hidden=${this.open ? "false" : "true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable ? c`
              <ug-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></ug-icon-button>
            ` : ""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown ? c`
              <div
                class=${v({
      alert__countdown: !0,
      "alert__countdown--ltr": this.countdown === "ltr"
    })}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            ` : ""}
      </div>
    `;
  }
};
t.styles = [H, $];
t.dependencies = { "ug-icon-button": y };
a([
  b('[part~="base"]')
], t.prototype, "base", 2);
a([
  b(".alert__countdown-elapsed")
], t.prototype, "countdownElement", 2);
a([
  s({ type: Boolean, reflect: !0 })
], t.prototype, "open", 2);
a([
  s({ type: Boolean, reflect: !0 })
], t.prototype, "closable", 2);
a([
  s({ reflect: !0 })
], t.prototype, "variant", 2);
a([
  s({ type: Number })
], t.prototype, "duration", 2);
a([
  s({ type: String, reflect: !0 })
], t.prototype, "countdown", 2);
a([
  k()
], t.prototype, "remainingTime", 2);
a([
  _("open", { waitUntilFirstUpdate: !0 })
], t.prototype, "handleOpenChange", 1);
a([
  _("duration")
], t.prototype, "handleDurationChange", 1);
f("alert.show", {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 250, easing: "ease" }
});
f("alert.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 }
  ],
  options: { duration: 250, easing: "ease" }
});
var z = Object.defineProperty, S = Object.getOwnPropertyDescriptor, E = (e, r, n, l) => {
  for (var o = l > 1 ? void 0 : l ? S(r, n) : r, d = e.length - 1, u; d >= 0; d--)
    (u = e[d]) && (o = (l ? u(r, n, o) : u(o)) || o);
  return l && o && z(r, n, o), o;
};
let w = class extends t {
};
w = E([
  x("ug-alert")
], w);
export {
  w as UgAlert
};
