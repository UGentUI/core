import{S as m}from"./chunk.R2T2D3TO-B7K_Sxkv.js";import{F as b,v as y}from"./chunk.2RCF7SLU-CB9V1Wsb.js";import{b as v}from"./chunk.MAQXLKQ7-CBa5hNL1.js";import{H as g}from"./chunk.NYIIDP5N-BF-xModZ.js";import{L as C}from"./chunk.WLV3FVBR-BTBv_Sfe.js";import{S as $}from"./chunk.O7VCMB7W-quwE6Eft.js";import{w as B}from"./chunk.CCJUT23E-CIcXkUoC.js";import{c as _}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as e,n as o,S as x,t as S}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as w}from"./class-map-Bm7ZJXTF.js";import{e as d,k as p}from"./static-DHppwan5.js";import{t as r}from"./if-defined-4GS2c12S.js";import{r as c}from"./state-LdesfBTP.js";import{e as F}from"./query-DXShiZ7f.js";import"./lit-element-CPYlYYac.js";var t=class extends x{constructor(){super(...arguments),this.formControlController=new b(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new g(this,"[default]","prefix","suffix"),this.localize=new C(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:y}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("ug-blur")}handleFocus(){this.hasFocus=!0,this.emit("ug-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(i){this.button.focus(i)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(i){this.isButton()&&(this.button.setCustomValidity(i),this.formControlController.updateValidity())}render(){const i=this.isLink(),s=i?d`a`:d`button`;return p`
      <${s}
        part="base"
        class=${w({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${r(i?void 0:this.disabled)}
        type=${r(i?void 0:this.type)}
        title=${this.title}
        name=${r(i?void 0:this.name)}
        value=${r(i?void 0:this.value)}
        href=${r(i&&!this.disabled?this.href:void 0)}
        target=${r(i?this.target:void 0)}
        download=${r(i?this.download:void 0)}
        rel=${r(i?this.rel:void 0)}
        role=${r(i?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?p` <ug-icon part="caret" class="button__caret" library="system" name="caret"></ug-icon> `:""}
        ${this.loading?p`<ug-spinner part="spinner"></ug-spinner>`:""}
      </${s}>
    `}};t.styles=[_,v];t.dependencies={"ug-icon":$,"ug-spinner":m};e([F(".button")],t.prototype,"button",2);e([c()],t.prototype,"hasFocus",2);e([c()],t.prototype,"invalid",2);e([o()],t.prototype,"title",2);e([o({reflect:!0})],t.prototype,"variant",2);e([o({reflect:!0})],t.prototype,"size",2);e([o({type:Boolean,reflect:!0})],t.prototype,"caret",2);e([o({type:Boolean,reflect:!0})],t.prototype,"disabled",2);e([o({type:Boolean,reflect:!0})],t.prototype,"loading",2);e([o({type:Boolean,reflect:!0})],t.prototype,"outline",2);e([o({type:Boolean,reflect:!0})],t.prototype,"pill",2);e([o({type:Boolean,reflect:!0})],t.prototype,"circle",2);e([o()],t.prototype,"type",2);e([o()],t.prototype,"name",2);e([o()],t.prototype,"value",2);e([o()],t.prototype,"href",2);e([o()],t.prototype,"target",2);e([o()],t.prototype,"rel",2);e([o()],t.prototype,"download",2);e([o()],t.prototype,"form",2);e([o({attribute:"formaction"})],t.prototype,"formAction",2);e([o({attribute:"formenctype"})],t.prototype,"formEnctype",2);e([o({attribute:"formmethod"})],t.prototype,"formMethod",2);e([o({attribute:"formnovalidate",type:Boolean})],t.prototype,"formNoValidate",2);e([o({attribute:"formtarget"})],t.prototype,"formTarget",2);e([B("disabled",{waitUntilFirstUpdate:!0})],t.prototype,"handleDisabledChange",1);var V=Object.defineProperty,k=Object.getOwnPropertyDescriptor,z=(i,s,n,a)=>{for(var l=a>1?void 0:a?k(s,n):s,u=i.length-1,h;u>=0;u--)(h=i[u])&&(l=(a?h(s,n,l):h(l))||l);return a&&l&&V(s,n,l),l};let f=class extends t{};f=z([S("ug-button")],f);