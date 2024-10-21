import{i as f,k as c}from"./lit-element-CPYlYYac.js";import{S as k}from"./chunk.O7VCMB7W-quwE6Eft.js";import{w as b}from"./chunk.CCJUT23E-CIcXkUoC.js";import{c as _}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as r,n as u,S as y,t as z}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as C}from"./class-map-Bm7ZJXTF.js";import{r as v}from"./state-LdesfBTP.js";import"./chunk.3Y6SB6QS-B3KesEIx.js";import"./directive-helpers-CHX3h6dV.js";import"./directive-Ctav8iJK.js";var w=f`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--ug-input-font-family);
    font-size: var(--ug-input-font-size-medium);
    font-weight: var(--ug-input-font-weight);
    color: var(--ug-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--ug-toggle-size-small);
    font-size: var(--ug-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--ug-toggle-size-medium);
    font-size: var(--ug-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--ug-toggle-size-large);
    font-size: var(--ug-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--ug-input-border-width) var(--ug-input-border-color);
    border-radius: 50%;
    background-color: var(--ug-input-background-color);
    color: transparent;
    transition:
      var(--ug-transition-fast) border-color,
      var(--ug-transition-fast) background-color,
      var(--ug-transition-fast) color,
      var(--ug-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--ug-input-border-color-hover);
    background-color: var(--ug-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--ug-color-neutral-0);
    border-color: var(--ug-color-primary-600);
    background-color: var(--ug-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--ug-color-primary-500);
    background-color: var(--ug-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--ug-focus-ring);
    outline-offset: var(--ug-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--ug-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,e=class extends y{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("ug-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("ug-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return c`
      <span
        part="base"
        class=${C({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?c` <ug-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></ug-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};e.styles=[_,w];e.dependencies={"ug-icon":k};r([v()],e.prototype,"checked",2);r([v()],e.prototype,"hasFocus",2);r([u()],e.prototype,"value",2);r([u({reflect:!0})],e.prototype,"size",2);r([u({type:Boolean,reflect:!0})],e.prototype,"disabled",2);r([b("checked")],e.prototype,"handleCheckedChange",1);r([b("disabled",{waitUntilFirstUpdate:!0})],e.prototype,"handleDisabledChange",1);var x=Object.defineProperty,O=Object.getOwnPropertyDescriptor,A=(s,i,l,t)=>{for(var o=t>1?void 0:t?O(i,l):i,d=s.length-1,n;d>=0;d--)(n=s[d])&&(o=(t?n(i,l,o):n(o))||o);return t&&o&&x(i,l,o),o};let g=class extends e{};g=A([z("ug-radio")],g);const L={title:"Components/Radio",component:"ug-radio"},a={render:s=>c`<ug-radio-group label="Select an option" name="a" value="1">
      <ug-radio value="1">Option 1</ug-radio>
      <ug-radio value="2">Option 2</ug-radio>
      <ug-radio value="3">Option 3</ug-radio>
    </ug-radio-group>`};var h,p,m;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-radio-group label="Select an option" name="a" value="1">
      <ug-radio value="1">Option 1</ug-radio>
      <ug-radio value="2">Option 2</ug-radio>
      <ug-radio value="3">Option 3</ug-radio>
    </ug-radio-group>\`;
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const U=["Radio"];export{a as Radio,U as __namedExportsOrder,L as default};
