import { i as v, S as p, x as i, _ as t, n as s, t as g } from "../../chunks/chunk.UYAO2JRR.js";
import { S as u } from "../../chunks/chunk.E6QAPUBK.js";
import { w as m } from "../../chunks/chunk.CCJUT23E.js";
import { c as f } from "../../chunks/chunk.TUVJKY7S.js";
import { e as _ } from "../../chunks/class-map.js";
import { r as b } from "../../chunks/state.js";
var y = v`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--ug-color-neutral-400);
    font-family: var(--ug-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--ug-font-weight-normal);
    color: var(--ug-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--ug-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--ug-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`, a = class extends p {
  constructor() {
    super(...arguments), this.hasError = !1, this.image = "", this.label = "", this.initials = "", this.loading = "eager", this.shape = "circle";
  }
  handleImageChange() {
    this.hasError = !1;
  }
  handleImageLoadError() {
    this.hasError = !0, this.emit("ug-error");
  }
  render() {
    const o = i`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;
    let e = i``;
    return this.initials ? e = i`<div part="initials" class="avatar__initials">${this.initials}</div>` : e = i`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <ug-icon name="person-fill" library="system"></ug-icon>
          </slot>
        </div>
      `, i`
      <div
        part="base"
        class=${_({
      avatar: !0,
      "avatar--circle": this.shape === "circle",
      "avatar--rounded": this.shape === "rounded",
      "avatar--square": this.shape === "square"
    })}
        role="img"
        aria-label=${this.label}
      >
        ${this.image && !this.hasError ? o : e}
      </div>
    `;
  }
};
a.styles = [f, y];
a.dependencies = {
  "ug-icon": u
};
t([
  b()
], a.prototype, "hasError", 2);
t([
  s()
], a.prototype, "image", 2);
t([
  s()
], a.prototype, "label", 2);
t([
  s()
], a.prototype, "initials", 2);
t([
  s()
], a.prototype, "loading", 2);
t([
  s({ reflect: !0 })
], a.prototype, "shape", 2);
t([
  m("image")
], a.prototype, "handleImageChange", 1);
var w = Object.defineProperty, E = Object.getOwnPropertyDescriptor, $ = (o, e, n, l) => {
  for (var r = l > 1 ? void 0 : l ? E(e, n) : e, c = o.length - 1, h; c >= 0; c--)
    (h = o[c]) && (r = (l ? h(e, n, r) : h(r)) || r);
  return l && r && w(e, n, r), r;
};
let d = class extends a {
};
d = $([
  g("ug-avatar")
], d);
export {
  d as UgAvatar
};
