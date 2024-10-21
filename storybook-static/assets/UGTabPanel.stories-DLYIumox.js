import{i as h,k as g}from"./lit-element-CPYlYYac.js";import{w as v}from"./chunk.CCJUT23E-CIcXkUoC.js";import{c as f}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as b,n as m,S as _,t as T}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as y}from"./class-map-Bm7ZJXTF.js";import"./directive-Ctav8iJK.js";var C=h`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,P=0,e=class extends _{constructor(){super(...arguments),this.attrId=++P,this.componentId=`ug-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return g`
      <slot
        part="base"
        class=${y({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};e.styles=[f,C];b([m({reflect:!0})],e.prototype,"name",2);b([m({type:Boolean,reflect:!0})],e.prototype,"active",2);b([v("active")],e.prototype,"handleActiveChange",1);var A=Object.defineProperty,O=Object.getOwnPropertyDescriptor,w=(l,t,r,n)=>{for(var a=n>1?void 0:n?O(t,r):t,p=l.length-1,o;p>=0;p--)(o=l[p])&&(a=(n?o(t,r,a):o(a))||a);return n&&a&&A(t,r,a),a};let i=class extends e{};i=w([T("ug-tab-panel")],i);const E={title:"Components/TabPanel",component:"ug-tab-panel"},s={render:l=>g`<ug-tab-group>
  <ug-tab slot="nav" panel="general">General</ug-tab>
  <ug-tab slot="nav" panel="custom">Custom</ug-tab>
  <ug-tab slot="nav" panel="advanced">Advanced</ug-tab>
  <ug-tab slot="nav" panel="disabled" disabled>Disabled</ug-tab>

  <ug-tab-panel name="general">This is the general tab panel.</ug-tab-panel>
  <ug-tab-panel name="custom">This is the custom tab panel.</ug-tab-panel>
  <ug-tab-panel name="advanced">This is the advanced tab panel.</ug-tab-panel>
  <ug-tab-panel name="disabled">This is a disabled tab panel.</ug-tab-panel>
</sl-tab-group>
`};var u,d,c;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-tab-group>
  <ug-tab slot="nav" panel="general">General</ug-tab>
  <ug-tab slot="nav" panel="custom">Custom</ug-tab>
  <ug-tab slot="nav" panel="advanced">Advanced</ug-tab>
  <ug-tab slot="nav" panel="disabled" disabled>Disabled</ug-tab>

  <ug-tab-panel name="general">This is the general tab panel.</ug-tab-panel>
  <ug-tab-panel name="custom">This is the custom tab panel.</ug-tab-panel>
  <ug-tab-panel name="advanced">This is the advanced tab panel.</ug-tab-panel>
  <ug-tab-panel name="disabled">This is a disabled tab panel.</ug-tab-panel>
</sl-tab-group>
\`;
  }
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const G=["TabPanel"];export{s as TabPanel,G as __namedExportsOrder,E as default};
