import{i as C,k as p}from"./lit-element-CPYlYYac.js";import{f as R}from"./chunk.SI4ACBFK-DRvXEN2_.js";import{S as _}from"./chunk.RBPP5PLA-yj1wnna0.js";import{F as V,c as x,a as w,v as S}from"./chunk.2RCF7SLU-CB9V1Wsb.js";import{H as k}from"./chunk.NYIIDP5N-BF-xModZ.js";import{w as y}from"./chunk.CCJUT23E-CIcXkUoC.js";import{c as A}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as s,n,S as E,t as M}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as q}from"./class-map-Bm7ZJXTF.js";import{r as c}from"./state-LdesfBTP.js";import{e as b}from"./query-DXShiZ7f.js";import"./directive-Ctav8iJK.js";import"./base-DIkkzJ-c.js";var G=C`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--ug-input-required-content);
    margin-inline-start: var(--ug-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,a=class extends E{constructor(){super(...arguments),this.formControlController=new V(this),this.hasSlotController=new k(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?x:t?w:S}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("ug-radio, ug-radio-button")]}handleRadioClick(t){const i=t.target.closest("ug-radio, ug-radio-button"),e=this.getAllRadios(),o=this.value;!i||i.disabled||(this.value=i.value,e.forEach(r=>r.checked=r===i),this.value!==o&&(this.emit("ug-change"),this.emit("ug-input")))}handleKeyDown(t){var i;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const e=this.getAllRadios().filter(u=>!u.disabled),o=(i=e.find(u=>u.checked))!=null?i:e[0],r=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,d=this.value;let l=e.indexOf(o)+r;l<0&&(l=e.length-1),l>e.length-1&&(l=0),this.getAllRadios().forEach(u=>{u.checked=!1,this.hasButtonGroup||u.setAttribute("tabindex","-1")}),this.value=e[l].value,e[l].checked=!0,this.hasButtonGroup?e[l].shadowRoot.querySelector("button").focus():(e[l].setAttribute("tabindex","0"),e[l].focus()),this.value!==d&&(this.emit("ug-change"),this.emit("ug-input")),t.preventDefault()}handleLabelClick(){const t=this.getAllRadios(),e=t.find(o=>o.checked)||t[0];e&&e.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,i;const e=this.getAllRadios();if(await Promise.all(e.map(async o=>{await o.updateComplete,o.checked=o.value===this.value,o.size=this.size})),this.hasButtonGroup=e.some(o=>o.tagName.toLowerCase()==="ug-radio-button"),e.length>0&&!e.some(o=>o.checked))if(this.hasButtonGroup){const o=(t=e[0].shadowRoot)==null?void 0:t.querySelector("button");o&&o.setAttribute("tabindex","0")}else e[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const o=(i=this.shadowRoot)==null?void 0:i.querySelector("ug-button-group");o&&(o.disableRole=!0)}}syncRadios(){if(customElements.get("ug-radio")&&customElements.get("ug-radio-button")){this.syncRadioElements();return}customElements.get("ug-radio")?this.syncRadioElements():customElements.whenDefined("ug-radio").then(()=>this.syncRadios()),customElements.get("ug-radio-button")?this.syncRadioElements():customElements.whenDefined("ug-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(i=>i.checked=i.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,i=this.customValidityMessage!=="";return t||i?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),e=this.label?!0:!!t,o=this.helpText?!0:!!i,r=p`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return p`
      <fieldset
        part="form-control"
        class=${q({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":e,"form-control--has-help-text":o})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${e?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?p`
                <ug-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${r}
                </ug-button-group>
              `:r}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};a.styles=[A,R,G];a.dependencies={"ug-button-group":_};s([b("slot:not([name])")],a.prototype,"defaultSlot",2);s([b(".radio-group__validation-input")],a.prototype,"validationInput",2);s([c()],a.prototype,"hasButtonGroup",2);s([c()],a.prototype,"errorMessage",2);s([c()],a.prototype,"defaultValue",2);s([n()],a.prototype,"label",2);s([n({attribute:"help-text"})],a.prototype,"helpText",2);s([n()],a.prototype,"name",2);s([n({reflect:!0})],a.prototype,"value",2);s([n({reflect:!0})],a.prototype,"size",2);s([n({reflect:!0})],a.prototype,"form",2);s([n({type:Boolean,reflect:!0})],a.prototype,"required",2);s([y("size",{waitUntilFirstUpdate:!0})],a.prototype,"handleSizeChange",1);s([y("value")],a.prototype,"handleValueChange",1);var $=Object.defineProperty,I=Object.getOwnPropertyDescriptor,O=(t,i,e,o)=>{for(var r=o>1?void 0:o?I(i,e):i,d=t.length-1,l;d>=0;d--)(l=t[d])&&(r=(o?l(i,e,r):l(r))||r);return o&&r&&$(i,e,r),r};let m=class extends a{};m=O([M("ug-radio-group")],m);const Q={title:"Components/RadioGroup",component:"ug-radio-group"},h={render:t=>p`<ug-radio-group label="Select an option" name="a" value="1">
      <ug-radio value="1">Option 1</ug-radio>
      <ug-radio value="2">Option 2</ug-radio>
      <ug-radio value="3">Option 3</ug-radio>
    </ug-radio-group>`};var g,f,v;h.parameters={...h.parameters,docs:{...(g=h.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-radio-group label="Select an option" name="a" value="1">
      <ug-radio value="1">Option 1</ug-radio>
      <ug-radio value="2">Option 2</ug-radio>
      <ug-radio value="3">Option 3</ug-radio>
    </ug-radio-group>\`;
  }
}`,...(v=(f=h.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const W=["RadioGroup"];export{h as RadioGroup,W as __namedExportsOrder,Q as default};
