(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{25:function(e,t){},38:function(e,t,n){e.exports={form:"Form_form__1WhxY"}},39:function(e,t,n){e.exports={contact:"ContactItem_contact__A0GNP"}},44:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getFilter",(function(){return q}));var c=n(0),a=n.n(c),o=n(20),i=n.n(o),u=(n(44),n(13)),s=n(36),d=n(8),b=Object(s.a)({reducerPath:"contactsApi",baseQuery:Object(d.d)({baseUrl:"https://61b44d0559c6ac0017300fbe.mockapi.io"}),tagTypes:["Contact"],endpoints:function(e){return{fetchContacts:e.query({query:function(){return"/contacts"},providesTags:["Contact"]}),deleteContact:e.mutation({query:function(e){return{url:"/contacts/".concat(e),method:"DELETE"}},invalidatesTags:["Contact"]}),addContact:e.mutation({query:function(e){return{url:"/contacts",method:"POST",body:e}},invalidatesTags:["Contact"]})}}}),l=b.useFetchContactsQuery,j=b.useDeleteContactMutation,O=b.useAddContactMutation,f=n(15),m=n(38),p=n.n(m),h=n(2),x=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),o=Object(u.a)(a,2),i=o[0],s=o[1],d=O(),b=Object(u.a)(d,2),j=b[0],m=b[1].isLoading,x=l().data,v=Object(f.generate)(),g=Object(f.generate)(),C=function(e){var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":r(c);break;case"number":s(c)}};return Object(h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===n.trim()||""===i.trim())return alert("The fields are mandatory.");var t,c,a=(t=n,c=i,x.find((function(e){var n=e.name,r=e.number;return n===t||r===c})));if(a)return alert(a.name+" is already in contacts.");j({name:n,number:i}),r(""),s("")},className:p.a.form,children:[Object(h.jsx)("label",{htmlFor:v,children:"Name"}),Object(h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:C,id:v}),Object(h.jsx)("label",{htmlFor:g,children:"Number"}),Object(h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:i,onChange:C,id:g}),Object(h.jsx)("button",{type:"submit",disabled:m,children:m?"Adding...":"Add Contact"})]})},v=n(4),g=n(11),C=n.n(g),y=n(23),k=n(16),w=n.n(k),F=n(1);w.a.defaults.baseURL="https://61b44d0559c6ac0017300fbe.mockapi.io";var A,_,D="/contacts",N=Object(F.c)("contacts/fetchContacts",Object(y.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get(D);case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))),T=Object(F.c)("contacts/addContact",function(){var e=Object(y.a)(C.a.mark((function e(t){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post(D,t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),L=Object(F.c)("contacts/deleteContact",function(){var e=Object(y.a)(C.a.mark((function e(t){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.delete("".concat(D,"/").concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),q=function(e){return e.contacts.filter},I=(n(25),n(7)),P=n(22),S=n(6),z=Object(F.e)({name:"contacts",initialState:{items:[],loading:!1,filter:"",error:null},reducers:{changeFilter:function(e,t){var n=t.payload;e.filter=n}},extraReducers:(A={},Object(I.a)(A,N.fulfilled,(function(e,t){var n=t.payload;return Object(S.a)(Object(S.a)({},e),{},{items:n,loading:!1,error:null})})),Object(I.a)(A,N.pending,(function(e){return Object(S.a)(Object(S.a)({},e),{},{loading:!0,error:null})})),Object(I.a)(A,N.rejected,(function(e,t){return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:t.error.message})})),Object(I.a)(A,T.fulfilled,(function(e,t){var n=t.payload;return Object(S.a)(Object(S.a)({},e),{},{items:[n].concat(Object(P.a)(e.items)),loading:!1,error:null})})),Object(I.a)(A,T.pending,(function(e){return Object(S.a)(Object(S.a)({},e),{},{loading:!0,error:null})})),Object(I.a)(A,T.rejected,(function(e,t){return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:t.error.message})})),Object(I.a)(A,L.fulfilled,(function(e,t){var n=t.payload;return Object(S.a)(Object(S.a)({},e),{},{items:e.items.filter((function(e){return e.id!==n.id})),loading:!1,error:null})})),Object(I.a)(A,L.pending,(function(e){return Object(S.a)(Object(S.a)({},e),{},{loading:!0,error:null})})),Object(I.a)(A,L.rejected,(function(e,t){return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:t.error.message})})),A)}),E=z.actions,M=z.reducer,J=function(){var e=Object(f.generate)(),t=Object(v.e)(r.getFilter),n=Object(v.d)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("label",{htmlFor:e,children:"Find contacts by name"}),Object(h.jsx)("input",{value:t,onChange:function(e){var t=e.target.value;return n(E.changeFilter(t))},id:e})]})},Z=n(39),B=n.n(Z),Q=function(e){var t=e.name,n=e.number,r=e.id,c=j(),a=Object(u.a)(c,2),o=a[0],i=a[1].isLoading;return Object(h.jsx)("li",{className:B.a.contact,children:Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:t}),": ",Object(h.jsx)("span",{children:n}),Object(h.jsx)("button",{type:"button",onClick:function(){return o(r)},disabled:i,children:i?"Deleting...":"Delete"})]})})},R=function(){var e=Object(v.e)(r.getFilter),t=l(),n=t.data,c=void 0===n?[]:n,a=t.isLoading,o=t.error,i=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}(c,e);return Object(h.jsxs)(h.Fragment,{children:[a&&Object(h.jsx)("h2",{children:"Loading..."}),o&&!a&&Object(h.jsx)("h2",{children:o}),i&&Object(h.jsx)("ul",{children:i.map((function(e){var t=e.id,n=e.name,r=e.number;return Object(h.jsx)(Q,{name:n,number:r,id:t},t)}))})]})},U=Object(F.b)("counter/Increment"),G=Object(F.b)("counter/Decrement"),W=function(e){var t=e.step,n=e.onIncrement,r=e.onDecrement;return Object(h.jsxs)("div",{className:"Counter__controls",children:[Object(h.jsxs)("button",{type:"button",onClick:n,children:["Increase for ",t]}),Object(h.jsxs)("button",{type:"button",onClick:r,children:["Decrease for ",t]})]})},Y=function(e){var t=e.value;return Object(h.jsx)("span",{className:"Counter__value",children:t})},$=(n(78),function(e){return e.counter.value}),H=function(e){return e.counter.step},K=function(){var e=Object(v.e)($),t=Object(v.e)(H),n=Object(v.d)();return Object(h.jsxs)("div",{className:"Counter",children:[Object(h.jsx)(Y,{value:e}),Object(h.jsx)(W,{step:t,onIncrement:function(){return n(U(t))},onDecrement:function(){return n(G(t))}})]})},V=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(x,{}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(J,{}),Object(h.jsx)(R,{}),Object(h.jsx)(K,{})]})},X=n(12),ee=n(5),te=Object(F.d)(0,(_={},Object(I.a)(_,U,(function(e,t){return e+t.payload})),Object(I.a)(_,G,(function(e,t){return e-t.payload})),_)),ne=Object(F.d)(15,{}),re=Object(ee.b)({value:te,step:ne}),ce=[].concat(Object(P.a)(Object(F.f)({serializableCheck:{ignoredActions:[X.a,X.f,X.b,X.c,X.d,X.e]}})),[b.middleware]),ae=Object(F.a)({reducer:Object(I.a)({counter:re,contacts:M},b.reducerPath,b.reducer),middleware:ce,devTools:!1});i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(v.a,{store:ae,children:Object(h.jsx)(V,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.6db4d19c.chunk.js.map