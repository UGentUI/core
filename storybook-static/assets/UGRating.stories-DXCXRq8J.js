import{i as $,k as u}from"./lit-element-CPYlYYac.js";import{c as V}from"./chunk.HF7GESMZ-CNy7Hbrd.js";import{S as M}from"./chunk.O7VCMB7W-quwE6Eft.js";import{w as b}from"./chunk.CCJUT23E-CIcXkUoC.js";import{c as w}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as o,n as l,S as H,t as P}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as m}from"./class-map-Bm7ZJXTF.js";import{r as _}from"./state-LdesfBTP.js";import{t as R}from"./event-options-CNZcgQm4.js";import{e as S}from"./query-DXShiZ7f.js";import{s as p}from"./style-map-0RSG7iKa.js";import{a as g}from"./unsafe-html-Baikcvwa.js";import"./chunk.3Y6SB6QS-B3KesEIx.js";import"./directive-helpers-CHX3h6dV.js";import"./directive-Ctav8iJK.js";import"./base-DIkkzJ-c.js";var C=$`
  :host {
    --symbol-color: var(--ug-color-neutral-300);
    --symbol-color-active: var(--ug-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--ug-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--ug-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--ug-focus-ring);
    outline-offset: var(--ug-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--ug-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`,r=class extends H{constructor(){super(...arguments),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<ug-icon name="star-fill" library="system"></ug-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const a=this.matches(":dir(rtl)"),{left:t,right:i,width:s}=this.rating.getBoundingClientRect(),n=a?this.roundToPrecision((i-e)/s*this.max,this.precision):this.roundToPrecision((e-t)/s*this.max,this.precision);return V(n,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("ug-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const a=this.matches(":dir(ltr)"),t=this.matches(":dir(rtl)"),i=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||a&&e.key==="ArrowLeft"||t&&e.key==="ArrowRight"){const s=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-s),e.preventDefault()}if(e.key==="ArrowUp"||a&&e.key==="ArrowRight"||t&&e.key==="ArrowLeft"){const s=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+s),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==i&&this.emit("ug-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("ug-change"),e.preventDefault()}roundToPrecision(e,a=.5){const t=1/a;return Math.ceil(e*t)/t}handleHoverValueChange(){this.emit("ug-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("ug-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.matches(":dir(rtl)"),a=Array.from(Array(this.max).keys());let t=0;return this.disabled||this.readonly?t=this.value:t=this.isHovering?this.hoverValue:this.value,u`
      <div
        part="base"
        class=${m({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${a.map(i=>t>i&&t<i+1?u`
                <span
                  class=${m({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(t)===i+1})}
                  role="presentation"
                >
                  <div
                    style=${p({clipPath:e?`inset(0 ${(t-i)*100}% 0 0)`:`inset(0 0 0 ${(t-i)*100}%)`})}
                  >
                    ${g(this.getSymbol(i+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${p({clipPath:e?`inset(0 0 0 ${100-(t-i)*100}%)`:`inset(0 ${100-(t-i)*100}% 0 0)`})}
                  >
                    ${g(this.getSymbol(i+1))}
                  </div>
                </span>
              `:u`
              <span
                class=${m({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(t)===i+1,"rating__symbol--active":t>=i+1})}
                role="presentation"
              >
                ${g(this.getSymbol(i+1))}
              </span>
            `)}
        </span>
      </div>
    `}};r.styles=[w,C];r.dependencies={"ug-icon":M};o([S(".rating")],r.prototype,"rating",2);o([_()],r.prototype,"hoverValue",2);o([_()],r.prototype,"isHovering",2);o([l()],r.prototype,"label",2);o([l({type:Number})],r.prototype,"value",2);o([l({type:Number})],r.prototype,"max",2);o([l({type:Number})],r.prototype,"precision",2);o([l({type:Boolean,reflect:!0})],r.prototype,"readonly",2);o([l({type:Boolean,reflect:!0})],r.prototype,"disabled",2);o([l()],r.prototype,"getSymbol",2);o([R({passive:!0})],r.prototype,"handleTouchMove",1);o([b("hoverValue")],r.prototype,"handleHoverValueChange",1);o([b("isHovering")],r.prototype,"handleIsHoveringChange",1);var T=Object.defineProperty,D=Object.getOwnPropertyDescriptor,F=(e,a,t,i)=>{for(var s=i>1?void 0:i?D(a,t):a,n=e.length-1,c;n>=0;n--)(c=e[n])&&(s=(i?c(a,t,s):c(s))||s);return i&&s&&T(a,t,s),s};let d=class extends r{};d=F([P("ug-rating")],d);const J={title:"Components/Rating",component:"ug-rating"},h={render:e=>u`<ug-rating label="Rating"></ug-rating>`};var v,y,f;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-rating label="Rating"></ug-rating>\`;
  }
}`,...(f=(y=h.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const Q=["Rating"];export{h as Rating,Q as __namedExportsOrder,J as default};
