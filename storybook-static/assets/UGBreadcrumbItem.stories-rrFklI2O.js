import{i as g,k as o}from"./lit-element-CPYlYYac.js";import{H as _}from"./chunk.NYIIDP5N-BF-xModZ.js";import{w as y}from"./chunk.CCJUT23E-CIcXkUoC.js";import{c as x}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as a,n as b,S as v,t as w}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as C}from"./class-map-Bm7ZJXTF.js";import{t as d}from"./if-defined-4GS2c12S.js";import{r as S}from"./state-LdesfBTP.js";import{e as T}from"./query-DXShiZ7f.js";import"./directive-Ctav8iJK.js";import"./base-DIkkzJ-c.js";var $=g`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--ug-font-sans);
    font-size: var(--ug-font-size-small);
    font-weight: var(--ug-font-weight-semibold);
    color: var(--ug-color-neutral-600);
    line-height: var(--ug-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--ug-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--ug-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--ug-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--ug-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--ug-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--ug-focus-ring);
    outline-offset: var(--ug-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--ug-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--ug-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--ug-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,e=class extends v{constructor(){super(...arguments),this.hasSlotController=new _(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const i=this.defaultSlot.assignedElements({flatten:!0}).filter(t=>t.tagName.toLowerCase()==="ug-dropdown").length>0;if(this.href){this.renderType="link";return}if(i){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return o`
      <div
        part="base"
        class=${C({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?o`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${d(this.target?this.target:void 0)}"
                rel=${d(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?o`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?o`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};e.styles=[x,$];a([T("slot:not([name])")],e.prototype,"defaultSlot",2);a([S()],e.prototype,"renderType",2);a([b()],e.prototype,"href",2);a([b()],e.prototype,"target",2);a([b()],e.prototype,"rel",2);a([y("href",{waitUntilFirstUpdate:!0})],e.prototype,"hrefChanged",1);var B=Object.defineProperty,I=Object.getOwnPropertyDescriptor,O=(i,t,l,s)=>{for(var r=s>1?void 0:s?I(t,l):t,m=i.length-1,u;m>=0;m--)(u=i[m])&&(r=(s?u(t,l,r):u(r))||r);return s&&r&&B(t,l,r),r};let c=class extends e{};c=O([w("ug-breadcrumb-item")],c);const N={title:"Components/BreadcrumbItem",component:"ug-breadcrumb-item"},n={render:i=>o`<ug-breadcrumb>
      <ug-breadcrumb-item>
        <ug-icon slot="prefix" name="house"></ug-icon>
        Home
      </ug-breadcrumb-item>
      <ug-breadcrumb-item>Clothing</ug-breadcrumb-item>
      <ug-breadcrumb-item>Shirts</ug-breadcrumb-item>
    </ug-breadcrumb>`};var p,f,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-breadcrumb>
      <ug-breadcrumb-item>
        <ug-icon slot="prefix" name="house"></ug-icon>
        Home
      </ug-breadcrumb-item>
      <ug-breadcrumb-item>Clothing</ug-breadcrumb-item>
      <ug-breadcrumb-item>Shirts</ug-breadcrumb-item>
    </ug-breadcrumb>\`;
  }
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const q=["BreadcrumbItem"];export{n as BreadcrumbItem,q as __namedExportsOrder,N as default};
