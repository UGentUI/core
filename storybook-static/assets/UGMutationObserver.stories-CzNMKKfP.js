import{i as y,k as O}from"./lit-element-CPYlYYac.js";import{w as s}from"./chunk.CCJUT23E-CIcXkUoC.js";import{c as f}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as r,n as i,S as w,t as _}from"./chunk.NLWS5DN7-C0h9DzRV.js";var C=y`
  :host {
    display: contents;
  }
`,e=class extends w{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("ug-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t=typeof this.attr=="string"&&this.attr.length>0,a=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:a,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return O` <slot></slot> `}};e.styles=[f,C];r([i({reflect:!0})],e.prototype,"attr",2);r([i({attribute:"attr-old-value",type:Boolean,reflect:!0})],e.prototype,"attrOldValue",2);r([i({attribute:"char-data",type:Boolean,reflect:!0})],e.prototype,"charData",2);r([i({attribute:"char-data-old-value",type:Boolean,reflect:!0})],e.prototype,"charDataOldValue",2);r([i({attribute:"child-list",type:Boolean,reflect:!0})],e.prototype,"childList",2);r([i({type:Boolean,reflect:!0})],e.prototype,"disabled",2);r([s("disabled")],e.prototype,"handleDisabledChange",1);r([s("attr",{waitUntilFirstUpdate:!0}),s("attr-old-value",{waitUntilFirstUpdate:!0}),s("char-data",{waitUntilFirstUpdate:!0}),s("char-data-old-value",{waitUntilFirstUpdate:!0}),s("childList",{waitUntilFirstUpdate:!0})],e.prototype,"handleChange",1);var k=Object.defineProperty,D=Object.getOwnPropertyDescriptor,L=(t,a,o,l)=>{for(var n=l>1?void 0:l?D(a,o):a,c=t.length-1,v;c>=0;c--)(v=t[c])&&(n=(l?v(a,o,n):v(n))||n);return l&&n&&k(a,o,n),n};let d=class extends e{};d=L([_("ug-mutation-observer")],d);var b=Object.freeze,U=Object.defineProperty,S=(t,a)=>b(U(t,"raw",{value:b(t.slice())})),h;const F={title:"Components/MutationObserver",component:"ug-mutation-observer"},u={render:t=>O(h||(h=S([`<div class="mutation-overview">
      <ug-mutation-observer attr="variant">
        <ug-button variant="primary">Click to mutate</ug-button>
      </ug-mutation-observer>

      <br />
      👆 Click the button and watch the console

      <script>
        const container = document.querySelector(".mutation-overview");
        const mutationObserver = container.querySelector(
          "ug-mutation-observer"
        );
        const button = container.querySelector("ug-button");
        const variants = ["primary", "success", "neutral", "warning", "danger"];
        let clicks = 0;

        // Change the button's variant attribute
        button.addEventListener("click", () => {
          clicks++;
          button.setAttribute("variant", variants[clicks % variants.length]);
        });

        // Log mutations
        mutationObserver.addEventListener("ug-mutation", (event) => {
          console.log(event.detail);
        });
      <\/script>

      <style>
        .mutation-overview ug-button {
          margin-bottom: 1rem;
        }
      </style>
    </div>`])))};var p,m,g;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return html\`<div class="mutation-overview">
      <ug-mutation-observer attr="variant">
        <ug-button variant="primary">Click to mutate</ug-button>
      </ug-mutation-observer>

      <br />
      👆 Click the button and watch the console

      <script>
        const container = document.querySelector(".mutation-overview");
        const mutationObserver = container.querySelector(
          "ug-mutation-observer"
        );
        const button = container.querySelector("ug-button");
        const variants = ["primary", "success", "neutral", "warning", "danger"];
        let clicks = 0;

        // Change the button's variant attribute
        button.addEventListener("click", () => {
          clicks++;
          button.setAttribute("variant", variants[clicks % variants.length]);
        });

        // Log mutations
        mutationObserver.addEventListener("ug-mutation", (event) => {
          console.log(event.detail);
        });
      <\/script>

      <style>
        .mutation-overview ug-button {
          margin-bottom: 1rem;
        }
      </style>
    </div>\`;
  }
}`,...(g=(m=u.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const P=["MutationObserver"];export{u as MutationObserver,P as __namedExportsOrder,F as default};
