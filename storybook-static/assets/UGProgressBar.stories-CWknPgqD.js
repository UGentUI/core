import{i as h,k as c}from"./lit-element-CPYlYYac.js";import{L as v}from"./chunk.WLV3FVBR-BTBv_Sfe.js";import{c as f}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as d,n as p,S as _,t as w}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as y}from"./class-map-Bm7ZJXTF.js";import{t as x}from"./if-defined-4GS2c12S.js";import{s as P}from"./style-map-0RSG7iKa.js";import"./directive-Ctav8iJK.js";var k=h`
  :host {
    --height: 1rem;
    --track-color: var(--ug-color-neutral-200);
    --indicator-color: var(--ug-color-primary-600);
    --label-color: var(--ug-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--ug-border-radius-pill);
    box-shadow: inset var(--ug-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--ug-font-sans);
    font-size: 12px;
    font-weight: var(--ug-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--ug-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,e=class extends _{constructor(){super(...arguments),this.localize=new v(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return c`
      <div
        part="base"
        class=${y({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${x(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${P({width:`${this.value}%`})}>
          ${this.indeterminate?"":c` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};e.styles=[f,k];d([p({type:Number,reflect:!0})],e.prototype,"value",2);d([p({type:Boolean,reflect:!0})],e.prototype,"indeterminate",2);d([p()],e.prototype,"label",2);var $=Object.defineProperty,S=Object.getOwnPropertyDescriptor,z=(s,t,i,a)=>{for(var r=a>1?void 0:a?S(t,i):t,l=s.length-1,n;l>=0;l--)(n=s[l])&&(r=(a?n(t,i,r):n(r))||r);return a&&r&&$(t,i,r),r};let g=class extends e{};g=z([w("ug-progress-bar")],g);const R={title:"Components/ProgressBar",component:"ug-progress-bar"},o={render:s=>c`<ug-progress-bar value="50"></ug-progress-bar>`};var m,u,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-progress-bar value="50"></ug-progress-bar>\`;
  }
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const N=["ProgressBar"];export{o as ProgressBar,N as __namedExportsOrder,R as default};
