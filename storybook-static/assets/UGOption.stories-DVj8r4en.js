import{i as b,k as m}from"./lit-element-CPYlYYac.js";import{L as _}from"./chunk.WLV3FVBR-BTBv_Sfe.js";import{S as x}from"./chunk.O7VCMB7W-quwE6Eft.js";import{w as c}from"./chunk.CCJUT23E-CIcXkUoC.js";import{c as y}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as i,n as v,S as O,t as C}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as S}from"./class-map-Bm7ZJXTF.js";import{r as u}from"./state-LdesfBTP.js";import{e as L}from"./query-DXShiZ7f.js";import"./chunk.3Y6SB6QS-B3KesEIx.js";import"./directive-helpers-CHX3h6dV.js";import"./directive-Ctav8iJK.js";import"./base-DIkkzJ-c.js";var E=b`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--ug-font-sans);
    font-size: var(--ug-font-size-medium);
    font-weight: var(--ug-font-weight-normal);
    line-height: var(--ug-line-height-normal);
    letter-spacing: var(--ug-letter-spacing-normal);
    color: var(--ug-color-neutral-700);
    padding: var(--ug-spacing-x-small) var(--ug-spacing-medium) var(--ug-spacing-x-small) var(--ug-spacing-x-small);
    transition: var(--ug-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--ug-color-neutral-100);
    color: var(--ug-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--ug-color-primary-600);
    color: var(--ug-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--ug-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--ug-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--ug-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--ug-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,e=class extends O{constructor(){super(...arguments),this.localize=new _(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let a="";return[...t].forEach(o=>{o.nodeType===Node.ELEMENT_NODE&&(o.hasAttribute("slot")||(a+=o.textContent)),o.nodeType===Node.TEXT_NODE&&(a+=o.textContent)}),a.trim()}render(){return m`
      <div
        part="base"
        class=${S({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <ug-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></ug-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};e.styles=[y,E];e.dependencies={"ug-icon":x};i([L(".option__label")],e.prototype,"defaultSlot",2);i([u()],e.prototype,"current",2);i([u()],e.prototype,"selected",2);i([u()],e.prototype,"hasHover",2);i([v({reflect:!0})],e.prototype,"value",2);i([v({type:Boolean,reflect:!0})],e.prototype,"disabled",2);i([c("disabled")],e.prototype,"handleDisabledChange",1);i([c("selected")],e.prototype,"handleSelectedChange",1);i([c("value")],e.prototype,"handleValueChange",1);var T=Object.defineProperty,w=Object.getOwnPropertyDescriptor,k=(t,a,o,l)=>{for(var n=l>1?void 0:l?w(a,o):a,r=t.length-1,p;r>=0;r--)(p=t[r])&&(n=(l?p(a,o,n):p(n))||n);return l&&n&&T(a,o,n),n};let d=class extends e{};d=k([C("ug-option")],d);const U={title:"Components/Option",component:"ug-option"},s={render:t=>m`<ug-select label="Select one">
  <ug-option value="option-1">Option 1</ug-option>
  <ug-option value="option-2">Option 2</ug-option>
  <ug-option value="option-3">Option 3</ug-option>
</sl-select>`};var h,g,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-select label="Select one">
  <ug-option value="option-1">Option 1</ug-option>
  <ug-option value="option-2">Option 2</ug-option>
  <ug-option value="option-3">Option 3</ug-option>
</sl-select>\`;
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const X=["Option"];export{s as Option,X as __namedExportsOrder,U as default};
