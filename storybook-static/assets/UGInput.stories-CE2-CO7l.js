import{i as _,k as p}from"./lit-element-CPYlYYac.js";import{d as y}from"./chunk.GI7VDIWX-YQAxho_D.js";import{f as w}from"./chunk.SI4ACBFK-DRvXEN2_.js";import{F as x}from"./chunk.2RCF7SLU-CB9V1Wsb.js";import{H as k}from"./chunk.NYIIDP5N-BF-xModZ.js";import{L as C}from"./chunk.WLV3FVBR-BTBv_Sfe.js";import{S as $}from"./chunk.O7VCMB7W-quwE6Eft.js";import{w as h}from"./chunk.CCJUT23E-CIcXkUoC.js";import{c as I}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as i,n as o,S as V,t as z}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as g}from"./class-map-Bm7ZJXTF.js";import{t as n}from"./if-defined-4GS2c12S.js";import{F as S}from"./live-BkI6wUFM.js";import{r as F}from"./state-LdesfBTP.js";import{e as B}from"./query-DXShiZ7f.js";import"./chunk.3Y6SB6QS-B3KesEIx.js";import"./directive-helpers-CHX3h6dV.js";import"./directive-Ctav8iJK.js";import"./base-DIkkzJ-c.js";var T=_`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--ug-input-font-family);
    font-weight: var(--ug-input-font-weight);
    letter-spacing: var(--ug-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--ug-transition-fast) color,
      var(--ug-transition-fast) border,
      var(--ug-transition-fast) box-shadow,
      var(--ug-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--ug-input-background-color);
    border: solid var(--ug-input-border-width) var(--ug-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--ug-input-background-color-hover);
    border-color: var(--ug-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--ug-input-background-color-focus);
    border-color: var(--ug-input-border-color-focus);
    box-shadow: 0 0 0 var(--ug-focus-ring-width) var(--ug-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--ug-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--ug-input-background-color-disabled);
    border-color: var(--ug-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--ug-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--ug-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--ug-input-filled-background-color);
    color: var(--ug-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--ug-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--ug-input-filled-background-color-focus);
    outline: var(--ug-focus-ring);
    outline-offset: var(--ug-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--ug-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--ug-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--ug-input-height-large) var(--ug-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--ug-color-primary-500);
    caret-color: var(--ug-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--ug-input-height-large) var(--ug-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--ug-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--ug-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(ug-icon),
  .input__suffix ::slotted(ug-icon) {
    color: var(--ug-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--ug-input-border-radius-small);
    font-size: var(--ug-input-font-size-small);
    height: var(--ug-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--ug-input-height-small) - var(--ug-input-border-width) * 2);
    padding: 0 var(--ug-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--ug-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--ug-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--ug-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--ug-input-border-radius-medium);
    font-size: var(--ug-input-font-size-medium);
    height: var(--ug-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--ug-input-height-medium) - var(--ug-input-border-width) * 2);
    padding: 0 var(--ug-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--ug-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--ug-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--ug-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--ug-input-border-radius-large);
    font-size: var(--ug-input-font-size-large);
    height: var(--ug-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--ug-input-height-large) - var(--ug-input-border-width) * 2);
    padding: 0 var(--ug-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--ug-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--ug-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--ug-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--ug-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--ug-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--ug-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--ug-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--ug-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--ug-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,e=class extends V{constructor(){super(...arguments),this.formControlController=new x(this,{assumeInteractionOn:["ug-blur","ug-input"]}),this.hasSlotController=new k(this,"help-text","label"),this.localize=new C(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("ug-blur")}handleChange(){this.value=this.input.value,this.emit("ug-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("ug-clear"),this.emit("ug-input"),this.emit("ug-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("ug-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("ug-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const r=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!r&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,r,l="none"){this.input.setSelectionRange(t,r,l)}setRangeText(t,r,l,s="preserve"){const a=r??this.input.selectionStart,u=l??this.input.selectionEnd;this.input.setRangeText(t,a,u,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),r=this.hasSlotController.test("help-text"),l=this.label?!0:!!t,s=this.helpText?!0:!!r,u=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return p`
      <div
        part="form-control"
        class=${g({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":l,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${l?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${g({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${n(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${n(this.placeholder)}
              minlength=${n(this.minlength)}
              maxlength=${n(this.maxlength)}
              min=${n(this.min)}
              max=${n(this.max)}
              step=${n(this.step)}
              .value=${S(this.value)}
              autocapitalize=${n(this.autocapitalize)}
              autocomplete=${n(this.autocomplete)}
              autocorrect=${n(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${n(this.pattern)}
              enterkeyhint=${n(this.enterkeyhint)}
              inputmode=${n(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${u?p`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <ug-icon name="x-circle-fill" library="system"></ug-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?p`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?p`
                          <slot name="show-password-icon">
                            <ug-icon name="eye-slash" library="system"></ug-icon>
                          </slot>
                        `:p`
                          <slot name="hide-password-icon">
                            <ug-icon name="eye" library="system"></ug-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};e.styles=[I,w,T];e.dependencies={"ug-icon":$};i([B(".input__control")],e.prototype,"input",2);i([F()],e.prototype,"hasFocus",2);i([o()],e.prototype,"title",2);i([o({reflect:!0})],e.prototype,"type",2);i([o()],e.prototype,"name",2);i([o()],e.prototype,"value",2);i([y()],e.prototype,"defaultValue",2);i([o({reflect:!0})],e.prototype,"size",2);i([o({type:Boolean,reflect:!0})],e.prototype,"filled",2);i([o({type:Boolean,reflect:!0})],e.prototype,"pill",2);i([o()],e.prototype,"label",2);i([o({attribute:"help-text"})],e.prototype,"helpText",2);i([o({type:Boolean})],e.prototype,"clearable",2);i([o({type:Boolean,reflect:!0})],e.prototype,"disabled",2);i([o()],e.prototype,"placeholder",2);i([o({type:Boolean,reflect:!0})],e.prototype,"readonly",2);i([o({attribute:"password-toggle",type:Boolean})],e.prototype,"passwordToggle",2);i([o({attribute:"password-visible",type:Boolean})],e.prototype,"passwordVisible",2);i([o({attribute:"no-spin-buttons",type:Boolean})],e.prototype,"noSpinButtons",2);i([o({reflect:!0})],e.prototype,"form",2);i([o({type:Boolean,reflect:!0})],e.prototype,"required",2);i([o()],e.prototype,"pattern",2);i([o({type:Number})],e.prototype,"minlength",2);i([o({type:Number})],e.prototype,"maxlength",2);i([o()],e.prototype,"min",2);i([o()],e.prototype,"max",2);i([o()],e.prototype,"step",2);i([o()],e.prototype,"autocapitalize",2);i([o()],e.prototype,"autocorrect",2);i([o()],e.prototype,"autocomplete",2);i([o({type:Boolean})],e.prototype,"autofocus",2);i([o()],e.prototype,"enterkeyhint",2);i([o({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],e.prototype,"spellcheck",2);i([o()],e.prototype,"inputmode",2);i([h("disabled",{waitUntilFirstUpdate:!0})],e.prototype,"handleDisabledChange",1);i([h("step",{waitUntilFirstUpdate:!0})],e.prototype,"handleStepChange",1);i([h("value",{waitUntilFirstUpdate:!0})],e.prototype,"handleValueChange",1);var D=Object.defineProperty,P=Object.getOwnPropertyDescriptor,A=(t,r,l,s)=>{for(var a=s>1?void 0:s?P(r,l):r,u=t.length-1,c;u>=0;u--)(c=t[u])&&(a=(s?c(r,l,a):c(a))||a);return s&&a&&D(r,l,a),a};let m=class extends e{};m=A([z("ug-input")],m);const et={title:"Components/Input",component:"ug-input"},d={render:t=>p`<ug-input></ug-input>`};var f,b,v;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-input></ug-input>\`;
  }
}`,...(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const it=["Input"];export{d as Input,it as __namedExportsOrder,et as default};
