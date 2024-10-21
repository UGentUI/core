import{i as v}from"./lit-element-CPYlYYac.js";import{w as p}from"./chunk.CCJUT23E-CIcXkUoC.js";import{c as d}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as n,n as h,S as u,t as g}from"./chunk.NLWS5DN7-C0h9DzRV.js";var m=v`
  :host {
    --color: var(--ug-panel-border-color);
    --width: var(--ug-panel-border-width);
    --spacing: var(--ug-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,a=class extends u{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};a.styles=[d,m];n([h({type:Boolean,reflect:!0})],a.prototype,"vertical",2);n([p("vertical")],a.prototype,"handleVerticalChange",1);var f=Object.defineProperty,b=Object.getOwnPropertyDescriptor,_=(s,r,o,t)=>{for(var e=t>1?void 0:t?b(r,o):r,i=s.length-1,l;i>=0;i--)(l=s[i])&&(e=(t?l(r,o,e):l(e))||e);return t&&e&&f(r,o,e),e};let c=class extends a{};c=_([g("ug-divider")],c);
