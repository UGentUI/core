import{i as v,k as b}from"./lit-element-CPYlYYac.js";import{d as y}from"./chunk.GI7VDIWX-YQAxho_D.js";import{f as _}from"./chunk.SI4ACBFK-DRvXEN2_.js";import{F as C}from"./chunk.2RCF7SLU-CB9V1Wsb.js";import{H as z}from"./chunk.NYIIDP5N-BF-xModZ.js";import{w as h}from"./chunk.CCJUT23E-CIcXkUoC.js";import{c as w}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as r,n as a,S as k,t as $}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as p}from"./class-map-Bm7ZJXTF.js";import{t as l}from"./if-defined-4GS2c12S.js";import{F as T}from"./live-BkI6wUFM.js";import{r as F}from"./state-LdesfBTP.js";import{e as S}from"./query-DXShiZ7f.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-CHX3h6dV.js";import"./base-DIkkzJ-c.js";var V=v`
  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--ug-input-font-family);
    font-weight: var(--ug-input-font-weight);
    line-height: var(--ug-line-height-normal);
    letter-spacing: var(--ug-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--ug-transition-fast) color,
      var(--ug-transition-fast) border,
      var(--ug-transition-fast) box-shadow,
      var(--ug-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--ug-input-background-color);
    border: solid var(--ug-input-border-width) var(--ug-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--ug-input-background-color-hover);
    border-color: var(--ug-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--ug-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--ug-input-background-color-focus);
    border-color: var(--ug-input-border-color-focus);
    color: var(--ug-input-color-focus);
    box-shadow: 0 0 0 var(--ug-focus-ring-width) var(--ug-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--ug-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--ug-input-background-color-disabled);
    border-color: var(--ug-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--ug-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--ug-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--ug-input-filled-background-color);
    color: var(--ug-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--ug-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--ug-input-filled-background-color-focus);
    outline: var(--ug-focus-ring);
    outline-offset: var(--ug-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--ug-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--ug-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--ug-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--ug-input-border-radius-small);
    font-size: var(--ug-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--ug-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--ug-input-border-radius-medium);
    font-size: var(--ug-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--ug-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--ug-input-border-radius-large);
    font-size: var(--ug-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--ug-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,t=class extends k{constructor(){super(...arguments),this.formControlController=new C(this,{assumeInteractionOn:["ug-blur","ug-input"]}),this.hasSlotController=new z(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var e;super.disconnectedCallback(),this.input&&((e=this.resizeObserver)==null||e.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("ug-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("ug-change")}handleFocus(){this.hasFocus=!0,this.emit("ug-focus")}handleInput(){this.value=this.input.value,this.emit("ug-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,o,i="none"){this.input.setSelectionRange(e,o,i)}setRangeText(e,o,i,s="preserve"){const n=o??this.input.selectionStart,u=i??this.input.selectionEnd;this.input.setRangeText(e,n,u,s),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,s=this.helpText?!0:!!o;return b`
      <div
        part="form-control"
        class=${p({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${p({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${l(this.name)}
              .value=${T(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${l(this.placeholder)}
              rows=${l(this.rows)}
              minlength=${l(this.minlength)}
              maxlength=${l(this.maxlength)}
              autocapitalize=${l(this.autocapitalize)}
              autocorrect=${l(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${l(this.spellcheck)}
              enterkeyhint=${l(this.enterkeyhint)}
              inputmode=${l(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
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
    `}};t.styles=[w,_,V];r([S(".textarea__control")],t.prototype,"input",2);r([F()],t.prototype,"hasFocus",2);r([a()],t.prototype,"title",2);r([a()],t.prototype,"name",2);r([a()],t.prototype,"value",2);r([a({reflect:!0})],t.prototype,"size",2);r([a({type:Boolean,reflect:!0})],t.prototype,"filled",2);r([a()],t.prototype,"label",2);r([a({attribute:"help-text"})],t.prototype,"helpText",2);r([a()],t.prototype,"placeholder",2);r([a({type:Number})],t.prototype,"rows",2);r([a()],t.prototype,"resize",2);r([a({type:Boolean,reflect:!0})],t.prototype,"disabled",2);r([a({type:Boolean,reflect:!0})],t.prototype,"readonly",2);r([a({reflect:!0})],t.prototype,"form",2);r([a({type:Boolean,reflect:!0})],t.prototype,"required",2);r([a({type:Number})],t.prototype,"minlength",2);r([a({type:Number})],t.prototype,"maxlength",2);r([a()],t.prototype,"autocapitalize",2);r([a()],t.prototype,"autocorrect",2);r([a()],t.prototype,"autocomplete",2);r([a({type:Boolean})],t.prototype,"autofocus",2);r([a()],t.prototype,"enterkeyhint",2);r([a({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],t.prototype,"spellcheck",2);r([a()],t.prototype,"inputmode",2);r([y()],t.prototype,"defaultValue",2);r([h("disabled",{waitUntilFirstUpdate:!0})],t.prototype,"handleDisabledChange",1);r([h("rows",{waitUntilFirstUpdate:!0})],t.prototype,"handleRowsChange",1);r([h("value",{waitUntilFirstUpdate:!0})],t.prototype,"handleValueChange",1);var H=Object.defineProperty,O=Object.getOwnPropertyDescriptor,R=(e,o,i,s)=>{for(var n=s>1?void 0:s?O(o,i):o,u=e.length-1,c;u>=0;u--)(c=e[u])&&(n=(s?c(o,i,n):c(n))||n);return s&&n&&H(o,i,n),n};let f=class extends t{};f=R([$("ug-textarea")],f);const W={title:"Components/Textarea",component:"ug-textarea"},d={render:e=>b`<ug-textarea></ug-textarea>`};var g,m,x;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-textarea></ug-textarea>\`;
  }
}`,...(x=(m=d.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const X=["Textarea"];export{d as Textarea,X as __namedExportsOrder,W as default};
