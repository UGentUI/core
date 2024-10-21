import{i as w,k as x}from"./lit-element-CPYlYYac.js";import{S as h}from"./chunk.IYEYDJ32-ZUe0xMSa.js";import{c as C}from"./chunk.HF7GESMZ-CNy7Hbrd.js";import{w as v}from"./chunk.CCJUT23E-CIcXkUoC.js";import{c as S}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as u,n as A,S as T,t as k}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{e as g}from"./query-DXShiZ7f.js";import"./chunk.CX3DZWHK-DbuvbXx3.js";import"./chunk.SI4ACBFK-DRvXEN2_.js";import"./chunk.R2T2D3TO-B7K_Sxkv.js";import"./chunk.2RCF7SLU-CB9V1Wsb.js";import"./chunk.WLV3FVBR-BTBv_Sfe.js";import"./chunk.O7VCMB7W-quwE6Eft.js";import"./chunk.3EPZX5HE-DhHcnySa.js";import"./class-map-Bm7ZJXTF.js";import"./directive-Ctav8iJK.js";import"./live-BkI6wUFM.js";import"./directive-helpers-CHX3h6dV.js";import"./state-LdesfBTP.js";import"./base-DIkkzJ-c.js";import"./chunk.GI7VDIWX-YQAxho_D.js";import"./chunk.NYIIDP5N-BF-xModZ.js";import"./if-defined-4GS2c12S.js";import"./chunk.3Y6SB6QS-B3KesEIx.js";var E=w`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--ug-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--ug-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function p(e,t=!1){function s(r){const o=r.getChildrenItems({includeDisabled:!1});if(o.length){const d=o.every(c=>c.selected),l=o.every(c=>!c.selected&&!c.indeterminate);r.selected=d,r.indeterminate=!d&&!l}}function i(r){const o=r.parentElement;h.isTreeItem(o)&&(s(o),i(o))}function n(r){for(const o of r.getChildrenItems())o.selected=t?r.selected||o.selected:!o.disabled&&r.selected,n(o);t&&s(r)}n(e),i(e)}var a=class extends T{constructor(){super(),this.selection="single",this.clickTarget=null,this.initTreeItem=e=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const s=e.querySelector(`[slot="${t}-icon"]`),i=this.getExpandButtonIcon(t);i&&(s===null?e.append(i):s.hasAttribute("data-default")&&s.replaceWith(i))})},this.handleTreeChanged=e=>{for(const t of e){const s=[...t.addedNodes].filter(h.isTreeItem),i=[...t.removedNodes].filter(h.isTreeItem);s.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),h.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("ug-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect()}getExpandButtonIcon(e){const s=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(s){const i=s.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(n=>n.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${e}-icon`,i}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),p(e);else if(this.selection==="single"||e.isLeaf){const i=this.getAllTreeItems();for(const n of i)n.selected=n===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const s=this.selectedItems;(t.length!==s.length||s.some(i=>!t.includes(i)))&&Promise.all(s.map(i=>i.updateComplete)).then(()=>{this.emit("ug-selection-change",{detail:{selection:s}})})}getAllTreeItems(){return[...this.querySelectorAll("ug-tree-item")]}focusItem(e){e==null||e.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(n=>{var r;return["input","textarea"].includes((r=n==null?void 0:n.tagName)==null?void 0:r.toLowerCase())}))return;const t=this.getFocusableItems(),s=this.matches(":dir(ltr)"),i=this.matches(":dir(rtl)");if(t.length>0){e.preventDefault();const n=t.findIndex(l=>l.matches(":focus")),r=t[n],o=l=>{const c=t[C(l,0,t.length-1)];this.focusItem(c)},d=l=>{r.expanded=l};e.key==="ArrowDown"?o(n+1):e.key==="ArrowUp"?o(n-1):s&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft"?!r||r.disabled||r.expanded||r.isLeaf&&!r.lazy?o(n+1):d(!0):s&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight"?!r||r.disabled||r.isLeaf||!r.expanded?o(n-1):d(!1):e.key==="Home"?o(0):e.key==="End"?o(t.length-1):(e.key==="Enter"||e.key===" ")&&(r.disabled||this.selectItem(r))}}handleClick(e){const t=e.target,s=t.closest("ug-tree-item"),i=e.composedPath().some(n=>{var r;return(r=n==null?void 0:n.classList)==null?void 0:r.contains("tree-item__expand-button")});!s||s.disabled||t!==this.clickTarget||(i?s.expanded=!s.expanded:this.selectItem(s))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const s of t)s.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > ug-tree-item")].forEach(s=>p(s,!0)))}get selectedItems(){const e=this.getAllTreeItems(),t=s=>s.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(s=>{var i;if(s.disabled)return!1;const n=(i=s.parentElement)==null?void 0:i.closest("[role=treeitem]");return n&&(!n.expanded||n.loading||t.has(n))&&t.add(s),!t.has(s)})}render(){return x`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};a.styles=[S,E];u([g("slot:not([name])")],a.prototype,"defaultSlot",2);u([g("slot[name=expand-icon]")],a.prototype,"expandedIconSlot",2);u([g("slot[name=collapse-icon]")],a.prototype,"collapsedIconSlot",2);u([A()],a.prototype,"selection",2);u([v("selection")],a.prototype,"handleSelectionChange",1);var _=Object.defineProperty,F=Object.getOwnPropertyDescriptor,D=(e,t,s,i)=>{for(var n=i>1?void 0:i?F(t,s):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=(i?o(t,s,n):o(n))||n);return i&&n&&_(t,s,n),n};let f=class extends a{};f=D([k("ug-tree")],f);const se={title:"Components/Tree",component:"ug-tree"},m={render:e=>x`<ug-tree>
  <ug-tree-item>
    Deciduous
    <ug-tree-item>Birch</ug-tree-item>
    <ug-tree-item>
      Maple
      <ug-tree-item>Field maple</ug-tree-item>
      <ug-tree-item>Red maple</ug-tree-item>
      <ug-tree-item>Sugar maple</ug-tree-item>
    </ug-tree-item>
    <ug-tree-item>Oak</ug-tree-item>
  </ug-tree-item>

  <ug-tree-item>
    Coniferous
    <ug-tree-item>Cedar</ug-tree-item>
    <ug-tree-item>Pine</ug-tree-item>
    <ug-tree-item>Spruce</ug-tree-item>
  </ug-tree-item>

  <ug-tree-item>
    Non-trees
    <ug-tree-item>Bamboo</ug-tree-item>
    <ug-tree-item>Cactus</ug-tree-item>
    <ug-tree-item>Fern</ug-tree-item>
  </ug-tree-item>
</sl-tree>
`};var b,I,y;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-tree>
  <ug-tree-item>
    Deciduous
    <ug-tree-item>Birch</ug-tree-item>
    <ug-tree-item>
      Maple
      <ug-tree-item>Field maple</ug-tree-item>
      <ug-tree-item>Red maple</ug-tree-item>
      <ug-tree-item>Sugar maple</ug-tree-item>
    </ug-tree-item>
    <ug-tree-item>Oak</ug-tree-item>
  </ug-tree-item>

  <ug-tree-item>
    Coniferous
    <ug-tree-item>Cedar</ug-tree-item>
    <ug-tree-item>Pine</ug-tree-item>
    <ug-tree-item>Spruce</ug-tree-item>
  </ug-tree-item>

  <ug-tree-item>
    Non-trees
    <ug-tree-item>Bamboo</ug-tree-item>
    <ug-tree-item>Cactus</ug-tree-item>
    <ug-tree-item>Fern</ug-tree-item>
  </ug-tree-item>
</sl-tree>
\`;
  }
}`,...(y=(I=m.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const ie=["Tree"];export{m as Tree,ie as __namedExportsOrder,se as default};
