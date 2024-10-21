import{i as h,k as p}from"./lit-element-CPYlYYac.js";import{L as f}from"./chunk.WLV3FVBR-BTBv_Sfe.js";import{S}from"./chunk.O7VCMB7W-quwE6Eft.js";import{c as v}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as m,n as _,S as C,t as y}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{e as g}from"./query-DXShiZ7f.js";import"./chunk.3Y6SB6QS-B3KesEIx.js";import"./chunk.CCJUT23E-CIcXkUoC.js";import"./directive-helpers-CHX3h6dV.js";import"./state-LdesfBTP.js";import"./base-DIkkzJ-c.js";var w=h`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,o=class extends C{constructor(){super(...arguments),this.localize=new f(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(a=>a.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="ug-breadcrumb-item");t.forEach((e,a)=>{const r=e.querySelector('[slot="separator"]');r===null?e.append(this.getSeparator()):r.hasAttribute("data-default")&&r.replaceWith(this.getSeparator()),a===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),p`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <ug-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></ug-icon>
        </slot>
      </span>
    `}};o.styles=[v,w];o.dependencies={"ug-icon":S};m([g("slot")],o.prototype,"defaultSlot",2);m([g('slot[name="separator"]')],o.prototype,"separatorSlot",2);m([_()],o.prototype,"label",2);var x=Object.defineProperty,z=Object.getOwnPropertyDescriptor,A=(t,e,a,r)=>{for(var s=r>1?void 0:r?z(e,a):e,l=t.length-1,u;l>=0;l--)(u=t[l])&&(s=(r?u(e,a,s):u(s))||s);return r&&s&&x(e,a,s),s};let n=class extends o{};n=A([y("ug-breadcrumb")],n);const T={title:"Components/Breadcrumb",component:"ug-breadcrumb"},i={render:t=>p`<ug-breadcrumb>
      <ug-breadcrumb-item>Catalog</ug-breadcrumb-item>
      <ug-breadcrumb-item>Clothing</ug-breadcrumb-item>
      <ug-breadcrumb-item>Women's</ug-breadcrumb-item>
      <ug-breadcrumb-item>Shirts &amp; Tops</ug-breadcrumb-item>
    </ug-breadcrumb>`};var c,b,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-breadcrumb>
      <ug-breadcrumb-item>Catalog</ug-breadcrumb-item>
      <ug-breadcrumb-item>Clothing</ug-breadcrumb-item>
      <ug-breadcrumb-item>Women's</ug-breadcrumb-item>
      <ug-breadcrumb-item>Shirts &amp; Tops</ug-breadcrumb-item>
    </ug-breadcrumb>\`;
  }
}`,...(d=(b=i.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};const I=["Breadcrumb"];export{i as Breadcrumb,I as __namedExportsOrder,T as default};
