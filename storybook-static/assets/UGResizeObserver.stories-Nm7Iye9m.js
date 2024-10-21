import{k as u}from"./lit-element-CPYlYYac.js";import{S as z}from"./chunk.YJK4WDCI-DFupQych.js";import"./chunk.TUVJKY7S-B9PwIF6B.js";import{t as m}from"./chunk.NLWS5DN7-C0h9DzRV.js";import"./chunk.CCJUT23E-CIcXkUoC.js";var g=Object.defineProperty,f=Object.getOwnPropertyDescriptor,O=(r,n,o,s)=>{for(var e=s>1?void 0:s?f(n,o):n,i=r.length-1,v;i>=0;i--)(v=r[i])&&(e=(s?v(n,o,e):v(e))||e);return s&&e&&g(n,o,e),e};let a=class extends z{};a=O([m("ug-resize-observer")],a);var c=Object.freeze,_=Object.defineProperty,y=(r,n)=>c(_(r,"raw",{value:c(r.slice())})),l;const j={title:"Components/ResizeObserver",component:"ug-resize-observer"},t={render:r=>u(l||(l=y([`<div class="resize-observer-overview">
        <ug-resize-observer>
          <div>Resize this box and watch the console 👉</div>
        </ug-resize-observer>
      </div>

      <script>
        const container = document.querySelector(".resize-observer-overview");
        const resizeObserver = container.querySelector("ug-resize-observer");

        resizeObserver.addEventListener("ug-resize", (event) => {
          console.log(event.detail);
        });
      <\/script>

      <style>
        .resize-observer-overview div {
          display: flex;
          border: solid 2px var(--ug-input-border-color);
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 2rem;
        }
      </style>`])))};var d,b,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    return html\`<div class="resize-observer-overview">
        <ug-resize-observer>
          <div>Resize this box and watch the console 👉</div>
        </ug-resize-observer>
      </div>

      <script>
        const container = document.querySelector(".resize-observer-overview");
        const resizeObserver = container.querySelector("ug-resize-observer");

        resizeObserver.addEventListener("ug-resize", (event) => {
          console.log(event.detail);
        });
      <\/script>

      <style>
        .resize-observer-overview div {
          display: flex;
          border: solid 2px var(--ug-input-border-color);
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 2rem;
        }
      </style>\`;
  }
}`,...(p=(b=t.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};const P=["ResizeObserver"];export{t as ResizeObserver,P as __namedExportsOrder,j as default};
