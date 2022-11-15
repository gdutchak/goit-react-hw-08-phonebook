"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[969,96],{6671:function(n,e,t){t.d(e,{Ei:function(){return b},H1:function(){return x},TR:function(){return m},ZC:function(){return h},rU:function(){return f},xu:function(){return p}});var r,o,i,a,c,u,s=t(168),l=t(1087),d=t(7691),f=(0,d.ZP)(l.OL)(r||(r=(0,s.Z)(["\nwidth: 100px;\nweight: 700;\ntext-align: center;\nbackground-color: aliceblue;\nborder: 1px solid grey;\nborder-radius: 4px;\n    &:not(:last-child){\n        margin-right: 10px;\n    }\n    &:hover, &:focus {\n        background-color: #46b5ff;\n        color: white;\n        border: 1px solid white;\n    }\n"]))),p=d.ZP.section(o||(o=(0,s.Z)(["\nbackground-color: white;\nmargin: 0 20px;\nmargin-top: 35px;\n"]))),h=d.ZP.div(i||(i=(0,s.Z)(["\ndisplay: flex;\njustify-content: flex-end;\npadding: 20px 20px;\nbackground-color: #e8f4f969;\n"]))),b=d.ZP.img(a||(a=(0,s.Z)(["\ndisplay: block;\nwidth: 70%;\nmargin: 0 auto;\n"]))),x=d.ZP.h1(c||(c=(0,s.Z)(["\nfont-size: 28px;\nfont-weight: 700;\ntext-align: center;\nborder: 1px solid blue;\n"]))),m=d.ZP.section(u||(u=(0,s.Z)(["\ndisplay: flex;\njustify-content: space-between;\nalign-items: flex-start;\n"])))},3969:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,o,i,a=t(9439),c=t(2791),u=t(6382),s=t(9434),l=t(168),d=t(7691),f=d.ZP.input(r||(r=(0,l.Z)(["\nwidth: 200px;\nmargin-left: 10px;\nmargin-bottom: 10px;\nfont-size: 18px;\nheight: 25px;\nborder-radius: 4px;\nborder: 1px solid blue;\n    &:hover, &:focus {\n        outline-color: blue;\n    }\n    "]))),p=d.ZP.label(o||(o=(0,l.Z)(["\ndisplay: block;\nfont-size: 22px;\n    &:hover, &:focus {\n        color: blue;\n    }\n    "]))),h=d.ZP.button(i||(i=(0,l.Z)(["\n    width: 140px;\n    height: 35px;\n    font-size: 18px;\n    margin-bottom: 20px;\n    background-color: aliceblue;\n    border: 1px solid grey;\n    &:hover, &:focus {\n        background-color: blue;\n        color: white;\n    }\n    "]))),b=t(3930),x=t(5264),m=t(8699),g=t(3329);var v,y,j,w=function(){var n=(0,s.I0)(),e=(0,s.v9)((function(n){return n.number.contacts.items})),t=(0,c.useState)(""),r=(0,a.Z)(t,2),o=r[0],i=r[1],l=(0,c.useState)(""),d=(0,a.Z)(l,2),v=d[0],y=d[1];return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),e&&e.find((function(n){return n.name.toLowerCase()===o.toLowerCase()})))alert("This name is already in contacts!");else{var r={id:(0,u.x0)(),name:o,number:v};n((0,b.Q_)(r)),x.Notify.success("This number has added in contacts!"),i(""),y("")}},children:[(0,g.jsxs)(p,{children:[" Name",(0,g.jsx)(f,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onInput:function(n){i(n.currentTarget.value)},value:o})]}),(0,g.jsxs)(p,{children:["Number",(0,g.jsx)(f,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onInput:function(n){y(n.currentTarget.value)},value:v})]}),(0,g.jsxs)(h,{type:"submit",children:[(0,g.jsx)(m.dt,{marginRight:2}),"Add contact"]})]})})},Z=t(6364),_=d.ZP.input(v||(v=(0,l.Z)(["\nborder: 1px solid blue;\nwidth: 200px;\nheight: 25px;\nborder-radius: 4px;\nmargin-left: 5px;\n"]))),P=function(){var n=(0,s.v9)((function(n){return n.filter.filter})),e=(0,s.I0)();return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(p,{children:["Find contacts by name",(0,g.jsx)(_,{type:"text",name:"filter",onInput:function(n){return e((0,Z.K)(n.currentTarget.value))},value:n})]})})},O=d.ZP.li(y||(y=(0,l.Z)(["\nfont-size: 22px;\nfont-weight: bold;\nmargin-bottom: 15px;\n"]))),k=d.ZP.button(j||(j=(0,l.Z)(["\nmargin-left: 25px;\nwidth: 100px;\nheight: 25px;\nfont-size: 18px;\nbackground-color: transparent;\nborder-radius: 4px;\n    &:hover, &:focus {\n        background-color: blue;\n        color: white;\n    }\n"]))),C=t(2299),L=t.n(C),z=function(){var n=(0,s.I0)(),e=(0,s.v9)((function(n){return n.number.contacts.items})),t=(0,s.v9)((function(n){return n.filter.filter})),r=(0,s.v9)((function(n){return n.number.contacts.isLoading})),o=(0,s.v9)((function(n){return n.auth.isLogin}));return(0,c.useEffect)((function(){o&&n((0,b.yF)())}),[n,o]),t&&(e=e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))),(0,g.jsxs)("ul",{children:[r&&(0,g.jsx)(L(),{}),e&&e.map((function(e){var t=e.name,r=e.number,o=e.id;return(0,g.jsxs)(O,{children:[t,": ",r,(0,g.jsxs)(k,{type:"button",onClick:function(){n((0,b.IL)(o)),x.Notify.warning("This number has deleted from contacts!")},children:[(0,g.jsx)(m.pJ,{marginRight:2}),"Delete"]})]},o)}))]})},A=t(96),I=t(6671),M=function(){return(0,g.jsxs)(I.TR,{children:[(0,g.jsxs)("div",{style:{padding:40},children:[(0,g.jsx)(I.H1,{children:"Phonebook"}),(0,g.jsx)(w,{}),(0,g.jsx)(P,{}),(0,g.jsx)("h2",{children:"Contacts"}),(0,g.jsx)(z,{})]}),(0,g.jsx)(A.default,{})]})}},96:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r,o,i=t(9434),a=t(8699),c=t(2851),u=t(168),s=t(7691),l=s.ZP.p(r||(r=(0,u.Z)(["\nfont-style: italic;\n"]))),d=s.ZP.button(o||(o=(0,u.Z)(["\nwidth: 100px;\nbackground-color: aliceblue;\nborder: 1px solid grey;\nborder-radius: 4px;\n    &:hover, &:focus {\n        background-color: blue;\n        color: white;\n        border: 1px solid white;\n    }\n"]))),f=t(3329),p=function(){var n=(0,i.I0)(),e=(0,i.v9)((function(n){return n.auth.user.email}));return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l,{children:"".concat(e)}),(0,f.jsxs)(d,{onClick:function(){return n((0,c.Kv)())},children:[(0,f.jsx)(a.Rp,{}),"Log out"]})]})},h=function(){return(0,f.jsx)(p,{})}},2299:function(n,e,t){var r=this&&this.__assign||function(){return r=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},r.apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(n,e,t,r){void 0===r&&(r=t);var o=Object.getOwnPropertyDescriptor(e,t);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,r,o)}:function(n,e,t,r){void 0===r&&(r=t),n[r]=e[t]}),i=this&&this.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),a=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)"default"!==t&&Object.prototype.hasOwnProperty.call(n,t)&&o(e,n,t);return i(e,n),e},c=this&&this.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t};Object.defineProperty(e,"__esModule",{value:!0});var u=a(t(2791)),s=t(8945),l=(0,t(7074).createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");e.default=function(n){var e=n.loading,t=void 0===e||e,o=n.color,i=void 0===o?"#000000":o,a=n.speedMultiplier,d=void 0===a?1:a,f=n.cssOverride,p=void 0===f?{}:f,h=n.size,b=void 0===h?35:h,x=c(n,["loading","color","speedMultiplier","cssOverride","size"]),m=r({background:"transparent !important",width:(0,s.cssValue)(b),height:(0,s.cssValue)(b),borderRadius:"100%",border:"2px solid",borderTopColor:i,borderBottomColor:"transparent",borderLeftColor:i,borderRightColor:i,display:"inline-block",animation:"".concat(l," ").concat(.75/d,"s 0s infinite linear"),animationFillMode:"both"},p);return t?u.createElement("span",r({style:m},x)):null}},7074:function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.createAnimation=void 0;e.createAnimation=function(n,e,t){var r="react-spinners-".concat(n,"-").concat(t);if("undefined"==typeof window||!window.document)return r;var o=document.createElement("style");document.head.appendChild(o);var i=o.sheet,a="\n    @keyframes ".concat(r," {\n      ").concat(e,"\n    }\n  ");return i&&i.insertRule(a,0),r}},8945:function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.cssValue=e.parseLengthAndUnit=void 0;var t={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(n){if("number"===typeof n)return{value:n,unit:"px"};var e,r=(n.match(/^[0-9.]*/)||"").toString();e=r.includes(".")?parseFloat(r):parseInt(r,10);var o=(n.match(/[^0-9]*$/)||"").toString();return t[o]?{value:e,unit:o}:(console.warn("React Spinners: ".concat(n," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}e.parseLengthAndUnit=r,e.cssValue=function(n){var e=r(n);return"".concat(e.value).concat(e.unit)}}}]);
//# sourceMappingURL=969.428bcd3a.chunk.js.map