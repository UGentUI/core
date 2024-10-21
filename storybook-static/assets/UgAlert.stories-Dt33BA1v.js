import{i as I,k as u}from"./lit-element-CPYlYYac.js";import{S as k}from"./chunk.AYP3HPB7-B1LDjdmr.js";import{s as C,a as p,g as m,b as g}from"./chunk.3EPZX5HE-DhHcnySa.js";import{w as v}from"./chunk.B4BZKR24-B0iVuGLD.js";import{H as x}from"./chunk.NYIIDP5N-BF-xModZ.js";import{L as H}from"./chunk.WLV3FVBR-BTBv_Sfe.js";import{w as T}from"./chunk.CCJUT23E-CIcXkUoC.js";import{c as S}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as a,n as s,S as z,t as $}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as f}from"./class-map-Bm7ZJXTF.js";import{r as E}from"./state-LdesfBTP.js";import{e as A}from"./query-DXShiZ7f.js";import"./chunk.O7VCMB7W-quwE6Eft.js";import"./static-DHppwan5.js";import"./if-defined-4GS2c12S.js";import"./directive-Ctav8iJK.js";import"./base-DIkkzJ-c.js";import"./chunk.3Y6SB6QS-B3KesEIx.js";import"./directive-helpers-CHX3h6dV.js";var O=I`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--ug-panel-background-color);
    border: solid var(--ug-panel-border-width) var(--ug-panel-border-color);
    border-top-width: calc(var(--ug-panel-border-width) * 3);
    border-radius: var(--ug-border-radius-medium);
    font-family: var(--ug-font-sans);
    font-size: var(--ug-font-size-small);
    font-weight: var(--ug-font-weight-normal);
    line-height: 1.6;
    color: var(--ug-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--ug-font-size-large);
    padding-inline-start: var(--ug-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--ug-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--ug-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--ug-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--ug-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--ug-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--ug-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--ug-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--ug-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--ug-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--ug-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--ug-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--ug-font-size-medium);
    padding-inline-end: var(--ug-spacing-medium);
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--ug-panel-border-width) * 3);
    background-color: var(--ug-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--ug-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--ug-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--ug-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--ug-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--ug-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,i=Object.assign(document.createElement("div"),{className:"ug-toast-stack"}),t=class extends z{constructor(){super(...arguments),this.hasSlotController=new x(this,"icon","suffix"),this.localize=new H(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:e}=this,r="100%",n="0";this.countdownAnimation=e.animate([{width:r},{width:n}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("ug-show"),this.duration<1/0&&this.restartAutoHide(),await p(this.base),this.base.hidden=!1;const{keyframes:e,options:r}=m(this,"alert.show",{dir:this.localize.dir()});await g(this.base,e,r),this.emit("ug-after-show")}else{this.emit("ug-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await p(this.base);const{keyframes:e,options:r}=m(this,"alert.hide",{dir:this.localize.dir()});await g(this.base,e,r),this.base.hidden=!0,this.emit("ug-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,v(this,"ug-after-show")}async hide(){if(this.open)return this.open=!1,v(this,"ug-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),i.parentElement===null&&document.body.append(i),i.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("ug-after-hide",()=>{i.removeChild(this),e(),i.querySelector("ug-alert")===null&&i.remove()},{once:!0})})}render(){return u`
      <div
        part="base"
        class=${f({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?u`
              <ug-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></ug-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?u`
              <div
                class=${f({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};t.styles=[S,O];t.dependencies={"ug-icon-button":k};a([A('[part~="base"]')],t.prototype,"base",2);a([A(".alert__countdown-elapsed")],t.prototype,"countdownElement",2);a([s({type:Boolean,reflect:!0})],t.prototype,"open",2);a([s({type:Boolean,reflect:!0})],t.prototype,"closable",2);a([s({reflect:!0})],t.prototype,"variant",2);a([s({type:Number})],t.prototype,"duration",2);a([s({type:String,reflect:!0})],t.prototype,"countdown",2);a([E()],t.prototype,"remainingTime",2);a([T("open",{waitUntilFirstUpdate:!0})],t.prototype,"handleOpenChange",1);a([T("duration")],t.prototype,"handleDurationChange",1);C("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});C("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var D=Object.defineProperty,P=Object.getOwnPropertyDescriptor,j=(e,r,n,l)=>{for(var o=l>1?void 0:l?P(r,n):r,d=e.length-1,h;d>=0;d--)(h=e[d])&&(o=(l?h(r,n,o):h(o))||o);return l&&o&&D(r,n,o),o};let w=class extends t{};w=j([$("ug-alert")],w);const re={title:"Components/Alert",component:"ug-alert"},c={render:e=>u`<ug-alert open
      ><ug-icon slot="icon" name="info-circle"></ug-icon>Alert</ug-alert
    >`};var _,b,y;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-alert open
      ><ug-icon slot="icon" name="info-circle"></ug-icon>Alert</ug-alert
    >\`;
  }
}`,...(y=(b=c.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const ae=["Alert"];export{c as Alert,ae as __namedExportsOrder,re as default};
