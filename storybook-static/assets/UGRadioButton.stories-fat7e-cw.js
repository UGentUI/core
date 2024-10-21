import{i as m,k as g}from"./lit-element-CPYlYYac.js";import{b as _}from"./chunk.MAQXLKQ7-CBa5hNL1.js";import{H as v}from"./chunk.NYIIDP5N-BF-xModZ.js";import{w as y}from"./chunk.CCJUT23E-CIcXkUoC.js";import{c as x}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as e,n as a,S as k,t as C}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as w}from"./class-map-Bm7ZJXTF.js";import{k as $}from"./static-DHppwan5.js";import{t as O}from"./if-defined-4GS2c12S.js";import{r as S}from"./state-LdesfBTP.js";import{e as f}from"./query-DXShiZ7f.js";import"./directive-Ctav8iJK.js";import"./base-DIkkzJ-c.js";var B=m`
  ${_}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,t=class extends k{constructor(){super(...arguments),this.hasSlotController=new v(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("ug-blur")}handleClick(o){if(this.disabled){o.preventDefault(),o.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("ug-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(o){this.input.focus(o)}blur(){this.input.blur()}render(){return $`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${w({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${O(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};t.styles=[x,B];e([f(".button")],t.prototype,"input",2);e([f(".hidden-input")],t.prototype,"hiddenInput",2);e([S()],t.prototype,"hasFocus",2);e([a({type:Boolean,reflect:!0})],t.prototype,"checked",2);e([a()],t.prototype,"value",2);e([a({type:Boolean,reflect:!0})],t.prototype,"disabled",2);e([a({reflect:!0})],t.prototype,"size",2);e([a({type:Boolean,reflect:!0})],t.prototype,"pill",2);e([y("disabled",{waitUntilFirstUpdate:!0})],t.prototype,"handleDisabledChange",1);var F=Object.defineProperty,R=Object.getOwnPropertyDescriptor,z=(o,r,l,i)=>{for(var s=i>1?void 0:i?R(r,l):r,n=o.length-1,d;n>=0;n--)(d=o[n])&&(s=(i?d(r,l,s):d(s))||s);return i&&s&&F(r,l,s),s};let p=class extends t{};p=z([C("ug-radio-button")],p);const L={title:"Components/RadioButton",component:"ug-radio-button"},u={render:o=>g`<ug-radio-group label="Select an option" name="a" value="1">
      <ug-radio-button value="1">Option 1</ug-radio-button>
      <ug-radio-button value="2">Option 2</ug-radio-button>
      <ug-radio-button value="3">Option 3</ug-radio-button>
    </ug-radio-group>`};var h,c,b;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-radio-group label="Select an option" name="a" value="1">
      <ug-radio-button value="1">Option 1</ug-radio-button>
      <ug-radio-button value="2">Option 2</ug-radio-button>
      <ug-radio-button value="3">Option 3</ug-radio-button>
    </ug-radio-group>\`;
  }
}`,...(b=(c=u.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const M=["RadioButton"];export{u as RadioButton,M as __namedExportsOrder,L as default};
