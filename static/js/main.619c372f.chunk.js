(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{10:function(e,t,n){e.exports={contact:"ContactItem_contact__A0GNP"}},16:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),o=n.n(r),i=(n(16),n(11)),s=n(3),u=n(2),b=n(9),l=n.n(b),j=n(0),d=function(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(""),b=Object(s.a)(i,2),d=b[0],m=b[1],h=Object(u.generate)(),O=Object(u.generate)(),f=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":m(a)}};return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r,d),o(""),m("")},className:l.a.form,children:[Object(j.jsx)("label",{htmlFor:h,children:"Name"}),Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:r,onChange:f,id:h}),Object(j.jsx)("label",{htmlFor:O,children:"Number"}),Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:d,onChange:f,id:O}),Object(j.jsx)("button",{type:"submit",children:"Add Contact"})]})},m=function(e){var t=e.value,n=e.onChange,a=Object(u.generate)();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{htmlFor:a,children:"Find contacts by name"}),Object(j.jsx)("input",{value:t,onChange:n,id:a})]})},h=n(10),O=n.n(h),f=function(e){var t=e.name,n=e.number,a=e.id,c=e.onDeleteContact;return Object(j.jsx)("li",{className:O.a.contact,children:Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:t}),": ",Object(j.jsx)("span",{children:n}),Object(j.jsx)("button",{type:"button",onClick:function(){return c(a)},children:"Delete"})]})})},p=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(j.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(j.jsx)(f,{name:a,number:c,id:t,onDeleteContact:n},t)}))})},x=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],v=function(){var e=Object(a.useState)(x),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(s.a)(r,2),b=o[0],l=o[1];Object(a.useEffect)((function(){c(JSON.parse(localStorage.getItem("contacts")))}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var h=function(){var e=b.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(d,{onSubmit:function(e,t){var a,r,o=(a=e,r=t,n.find((function(e){var t=e.name,n=e.number;return t===a||n===r})));if(o)alert(o.name+" is already in contacts.");else{var s={id:Object(u.generate)(),name:e,number:t};c((function(e){return[s].concat(Object(i.a)(e))}))}}}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(m,{value:b,onChange:function(e){var t=e.currentTarget.value;l(t)}}),Object(j.jsx)(p,{contacts:h,onDeleteContact:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))},9:function(e,t,n){e.exports={form:"Form_form__1WhxY"}}},[[26,1,2]]]);
//# sourceMappingURL=main.619c372f.chunk.js.map