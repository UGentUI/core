import{i as g,k as i}from"./lit-element-CPYlYYac.js";import{S as f}from"./chunk.O7VCMB7W-quwE6Eft.js";import{w as _}from"./chunk.CCJUT23E-CIcXkUoC.js";import{c as b}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as t,n as o,S as y,t as w}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as E}from"./class-map-Bm7ZJXTF.js";import{r as $}from"./state-LdesfBTP.js";import"./chunk.3Y6SB6QS-B3KesEIx.js";import"./directive-helpers-CHX3h6dV.js";import"./directive-Ctav8iJK.js";var x=g`
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
`,a=class extends y{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("ug-error")}render(){const s=i`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let r=i``;return this.initials?r=i`<div part="initials" class="avatar__initials">${this.initials}</div>`:r=i`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <ug-icon name="person-fill" library="system"></ug-icon>
          </slot>
        </div>
      `,i`
      <div
        part="base"
        class=${E({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?s:r}
      </div>
    `}};a.styles=[b,x];a.dependencies={"ug-icon":f};t([$()],a.prototype,"hasError",2);t([o()],a.prototype,"image",2);t([o()],a.prototype,"label",2);t([o()],a.prototype,"initials",2);t([o()],a.prototype,"loading",2);t([o({reflect:!0})],a.prototype,"shape",2);t([_("image")],a.prototype,"handleImageChange",1);var I=Object.defineProperty,S=Object.getOwnPropertyDescriptor,j=(s,r,c,n)=>{for(var e=n>1?void 0:n?S(r,c):r,d=s.length-1,m;d>=0;d--)(m=s[d])&&(e=(n?m(r,c,e):m(e))||e);return n&&e&&I(r,c,e),e};let p=class extends a{};p=j([w("ug-avatar")],p);const U={title:"Components/Avatar",component:"ug-avatar"},l={render:s=>i`<ug-avatar></ug-avatar>`};var v,h,u;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-avatar></ug-avatar>\`;
  }
}`,...(u=(h=l.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const k=["Avatar"];export{l as Avatar,k as __namedExportsOrder,U as default};
