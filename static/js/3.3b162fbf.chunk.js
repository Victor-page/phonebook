(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[3],{100:function(t,e,n){"use strict";var r=1;t.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(t){r=t}}},101:function(t,e,n){"use strict";var r,a,o=n(102);n(94);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===a?r++:(r=0,a=n),e+=o(7),e+=o(t),r>0&&(e+=o(r)),e+=o(n)}},102:function(t,e,n){"use strict";var r=n(94),a=n(103),o=n(104);t.exports=function(t){for(var e,n=0,c="";!e;)c+=o(a,r.get(),1),e=t<Math.pow(16,n+1),n++;return c}},103:function(t,e,n){"use strict";var r,a="object"===typeof window&&(window.crypto||window.msCrypto);r=a&&a.getRandomValues?function(t){return a.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=r},104:function(t,e){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,a=-~(1.6*r*n/e.length),o="";;)for(var c=t(a),i=a;i--;)if((o+=e[c[i]&r]||"").length===+n)return o}},105:function(t,e,n){"use strict";var r=n(94);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},106:function(t,e,n){"use strict";t.exports=0},107:function(t,e,n){t.exports={form:"Form_form__Rio11"}},108:function(t,e,n){t.exports={contact:"ContactItem_contact__pVjRq"}},109:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));var r={};n.r(r),n.d(r,"getFilter",(function(){return h}));var a=n(93),o=n(0),c=n(29),i=n(95),u=n(107),s=n.n(u),l=n(2),d=function(){var t=Object(o.useState)(""),e=Object(a.a)(t,2),n=e[0],r=e[1],u=Object(o.useState)(""),d=Object(a.a)(u,2),f=d[0],h=d[1],b=Object(c.b)(),j=Object(a.a)(b,2),p=j[0],m=j[1].isLoading,x=Object(c.d)().data,g=Object(i.generate)(),v=Object(i.generate)(),O=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":r(a);break;case"number":h(a)}};return Object(l.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""===n.trim()||""===f.trim())return alert("The fields are mandatory.");var e,a,o=(e=n,a=f,x.find((function(t){var n=t.name,r=t.number;return n===e||r===a})));if(o)return alert(o.name+" is already in contacts.");p({name:n,number:f}),r(""),h("")},className:s.a.form,children:[Object(l.jsx)("label",{htmlFor:g,children:"Name"}),Object(l.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:O,id:g}),Object(l.jsx)("label",{htmlFor:v,children:"Number"}),Object(l.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:f,onChange:O,id:v}),Object(l.jsx)("button",{type:"submit",disabled:m,children:m?"Adding...":"Add Contact"})]})},f=n(4),h=(n(21),function(t){return t.contacts.filter}),b=(n(59),n(50)),j=function(){var t=Object(i.generate)(),e=Object(f.e)(r.getFilter),n=Object(f.d)();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("label",{htmlFor:t,children:"Find contacts by name"}),Object(l.jsx)("input",{value:e,onChange:function(t){var e=t.target.value;return n(b.a.changeFilter(e))},id:t})]})},p=n(108),m=n.n(p),x=function(t){var e=t.name,n=t.number,r=t.id,o=Object(c.c)(),i=Object(a.a)(o,2),u=i[0],s=i[1].isLoading;return Object(l.jsx)("li",{className:m.a.contact,children:Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:e}),": ",Object(l.jsx)("span",{children:n}),Object(l.jsx)("button",{type:"button",onClick:function(){return u(r)},disabled:s,children:s?"Deleting...":"Delete"})]})})},g=function(){var t,e=Object(f.e)(r.getFilter),n=Object(c.d)(),a=n.data,o=void 0===a?[]:a,i=n.isLoading,u=n.error,s=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(o,e);return Object(l.jsxs)(l.Fragment,{children:[i&&Object(l.jsx)("h2",{children:"Loading..."}),u&&!i&&Object(l.jsx)("h2",{children:null===u||void 0===u||null===(t=u.data)||void 0===t?void 0:t.message}),0!==s.length&&Object(l.jsx)("ul",{children:s.map((function(t){var e=t.id,n=t.name,r=t.number;return Object(l.jsx)(x,{name:n,number:r,id:e},e)}))})]})},v=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Phonebook"}),Object(l.jsx)(d,{}),Object(l.jsx)("h2",{children:"Contacts"}),Object(l.jsx)(j,{}),Object(l.jsx)(g,{})]})}},93:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(39);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},94:function(t,e,n){"use strict";var r,a,o,c=n(100),i="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function u(){o=!1}function s(t){if(t){if(t!==r){if(t.length!==i.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,u()}}else r!==i&&(r=i,u())}function l(){return o||(o=function(){r||s(i);for(var t,e=r.split(""),n=[],a=c.nextValue();e.length>0;)a=c.nextValue(),t=Math.floor(a*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||i},characters:function(t){return s(t),r},seed:function(t){c.seed(t),a!==t&&(u(),a=t)},lookup:function(t){return l()[t]},shuffled:l}},95:function(t,e,n){"use strict";t.exports=n(99)},99:function(t,e,n){"use strict";var r=n(94),a=n(101),o=n(105),c=n(106)||0;function i(){return a(c)}t.exports=i,t.exports.generate=i,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return c=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=o}}]);
//# sourceMappingURL=3.3b162fbf.chunk.js.map