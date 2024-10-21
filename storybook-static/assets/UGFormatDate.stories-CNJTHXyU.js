import{k as y}from"./lit-element-CPYlYYac.js";import{L as f}from"./chunk.WLV3FVBR-BTBv_Sfe.js";import{c as e,n as o,S as g,t as _}from"./chunk.NLWS5DN7-C0h9DzRV.js";var t=class extends g{constructor(){super(...arguments),this.localize=new f(this),this.date=new Date,this.hourFormat="auto"}render(){const r=new Date(this.date),s=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(r.getMilliseconds()))return y`
      <time datetime=${r.toISOString()}>
        ${this.localize.date(r,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:s})}
      </time>
    `}};e([o()],t.prototype,"date",2);e([o()],t.prototype,"weekday",2);e([o()],t.prototype,"era",2);e([o()],t.prototype,"year",2);e([o()],t.prototype,"month",2);e([o()],t.prototype,"day",2);e([o()],t.prototype,"hour",2);e([o()],t.prototype,"minute",2);e([o()],t.prototype,"second",2);e([o({attribute:"time-zone-name"})],t.prototype,"timeZoneName",2);e([o({attribute:"time-zone"})],t.prototype,"timeZone",2);e([o({attribute:"hour-format"})],t.prototype,"hourFormat",2);var v=Object.defineProperty,D=Object.getOwnPropertyDescriptor,F=(r,s,i,n)=>{for(var a=n>1?void 0:n?D(s,i):s,p=r.length-1,d;p>=0;p--)(d=r[p])&&(a=(n?d(s,i,a):d(a))||a);return n&&a&&v(s,i,a),a};let u=class extends t{};u=F([_("ug-format-date")],u);const Z={title:"Components/FormatDate",component:"ug-format-date"},m={render:r=>y`<ug-format-date
      date="2020-07-15T09:17:00-04:00"
    ></ug-format-date>`};var h,c,l;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-format-date
      date="2020-07-15T09:17:00-04:00"
    ></ug-format-date>\`;
  }
}`,...(l=(c=m.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const b=["FormatDate"];export{m as FormatDate,b as __namedExportsOrder,Z as default};
