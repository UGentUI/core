import{i as v,k as f}from"./lit-element-CPYlYYac.js";import{d as b}from"./chunk.GI7VDIWX-YQAxho_D.js";import{f as _}from"./chunk.SI4ACBFK-DRvXEN2_.js";import{F as k}from"./chunk.2RCF7SLU-CB9V1Wsb.js";import{H as y}from"./chunk.NYIIDP5N-BF-xModZ.js";import{w}from"./chunk.CCJUT23E-CIcXkUoC.js";import{c as C}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as r,n as i,S as x,t as z}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as u}from"./class-map-Bm7ZJXTF.js";import{t as $}from"./if-defined-4GS2c12S.js";import{F}from"./live-BkI6wUFM.js";import{r as S}from"./state-LdesfBTP.js";import{e as V}from"./query-DXShiZ7f.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-CHX3h6dV.js";import"./base-DIkkzJ-c.js";var D=v`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--ug-toggle-size-small);
    --thumb-size: calc(var(--ug-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--ug-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--ug-toggle-size-medium);
    --thumb-size: calc(var(--ug-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--ug-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--ug-toggle-size-large);
    --thumb-size: calc(var(--ug-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--ug-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--ug-input-font-family);
    font-size: inherit;
    font-weight: var(--ug-input-font-weight);
    color: var(--ug-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--ug-color-neutral-400);
    border: solid var(--ug-input-border-width) var(--ug-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--ug-transition-fast) border-color,
      var(--ug-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--ug-color-neutral-0);
    border-radius: 50%;
    border: solid var(--ug-input-border-width) var(--ug-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--ug-transition-fast) translate ease,
      var(--ug-transition-fast) background-color,
      var(--ug-transition-fast) border-color,
      var(--ug-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--ug-color-neutral-400);
    border-color: var(--ug-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--ug-color-neutral-0);
    border-color: var(--ug-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--ug-color-neutral-400);
    border-color: var(--ug-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--ug-color-neutral-0);
    border-color: var(--ug-color-primary-600);
    outline: var(--ug-focus-ring);
    outline-offset: var(--ug-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--ug-color-primary-600);
    border-color: var(--ug-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--ug-color-neutral-0);
    border-color: var(--ug-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--ug-color-primary-600);
    border-color: var(--ug-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--ug-color-neutral-0);
    border-color: var(--ug-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--ug-color-primary-600);
    border-color: var(--ug-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--ug-color-neutral-0);
    border-color: var(--ug-color-primary-600);
    outline: var(--ug-focus-ring);
    outline-offset: var(--ug-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--ug-input-required-content);
    color: var(--ug-input-required-content-color);
    margin-inline-start: var(--ug-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,e=class extends x{constructor(){super(...arguments),this.formControlController=new k(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,o)=>t.checked=o}),this.hasSlotController=new y(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("ug-blur")}handleInput(){this.emit("ug-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("ug-change")}handleFocus(){this.hasFocus=!0,this.emit("ug-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("ug-change"),this.emit("ug-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("ug-change"),this.emit("ug-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),o=this.helpText?!0:!!t;return f`
      <div
        class=${u({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":o})}
      >
        <label
          part="base"
          class=${u({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${$(this.value)}
            .checked=${F(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${o?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};e.styles=[C,_,D];r([V('input[type="checkbox"]')],e.prototype,"input",2);r([S()],e.prototype,"hasFocus",2);r([i()],e.prototype,"title",2);r([i()],e.prototype,"name",2);r([i()],e.prototype,"value",2);r([i({reflect:!0})],e.prototype,"size",2);r([i({type:Boolean,reflect:!0})],e.prototype,"disabled",2);r([i({type:Boolean,reflect:!0})],e.prototype,"checked",2);r([b("checked")],e.prototype,"defaultChecked",2);r([i({reflect:!0})],e.prototype,"form",2);r([i({type:Boolean,reflect:!0})],e.prototype,"required",2);r([i({attribute:"help-text"})],e.prototype,"helpText",2);r([w("checked",{waitUntilFirstUpdate:!0})],e.prototype,"handleCheckedChange",1);r([w("disabled",{waitUntilFirstUpdate:!0})],e.prototype,"handleDisabledChange",1);var q=Object.defineProperty,T=Object.getOwnPropertyDescriptor,B=(t,o,c,l)=>{for(var s=l>1?void 0:l?T(o,c):o,h=t.length-1,n;h>=0;h--)(n=t[h])&&(s=(l?n(o,c,s):n(s))||s);return l&&s&&q(o,c,s),s};let d=class extends e{};d=B([z("ug-switch")],d);const W={title:"Components/Switch",component:"ug-switch"},a={render:t=>f`<ug-switch>Switch</ug-switch>`};var p,g,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-switch>Switch</ug-switch>\`;
  }
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const X=["Switch"];export{a as Switch,X as __namedExportsOrder,W as default};
