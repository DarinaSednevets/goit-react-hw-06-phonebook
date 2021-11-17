(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{16:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},36:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(7),i=n.n(a),o=n(12),u=n(3),b=function(e){return e.contacts.items},s=function(e){return e.contacts.filter},j=function(e){var t=b(e),n=s(e);return t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))},d=n(4),l=n(15),O=n.n(l),m=Object(d.b)("contacts//addContact",(function(e){var t=e.name,n=e.number;return{payload:{id:O.a.generate(),name:t,number:n}}})),f=Object(d.b)("contacts//deleteContact"),h=Object(d.b)("contacts/filterContacts"),p=n(1);var x=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(o.a)(a,2),s=i[0],j=i[1],d=Object(u.c)(b),l=Object(u.b)(),O=function(){r(""),j("")};return Object(p.jsxs)("div",{children:[Object(p.jsx)("section",{children:Object(p.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),d.some((function(e){return e.name===n})))return alert("".concat(n," is already in contacts"));l(m({name:n,number:s})),O()},children:[Object(p.jsxs)("label",{children:["Name",Object(p.jsx)("input",{type:"text",autoComplete:"off",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:function(e){return r(e.target.value)}})]}),Object(p.jsxs)("label",{children:["Number",Object(p.jsx)("input",{type:"tel",autoComplete:"off",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:s,onChange:function(e){return j(e.target.value)}})]}),Object(p.jsx)("button",{className:"btnSubmit",type:"submit",disabled:!n||!s,children:"Add"})]})}),Object(p.jsx)("section",{children:"Contacts"})]})};var v=function(){var e=Object(u.c)(s),t=Object(u.b)();return Object(p.jsxs)("label",{children:["Find contact by name",Object(p.jsx)("input",{type:"text",value:e,onChange:function(e){return t(h(e.target.value))}})]})};var C=function(){var e=Object(u.c)(j),t=Object(u.b)();return Object(p.jsx)("ul",{children:e.map((function(e){var n=e.id,c=e.name,r=e.number;return Object(p.jsxs)("li",{id:n,children:[c,":",r,Object(p.jsx)("button",{type:"button",onClick:function(){return t(f(n))},children:"Delete"})]},n)}))})};n(36);var y,g=function(){return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(x,{}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(v,{}),Object(p.jsx)(C,{})]})},A=(n(37),n(9)),S=n(13),k=n(2),w=n(16),N=Object(S.a)(w),z=Object(d.c)(N,(y={},Object(A.a)(y,m,(function(e,t){var n=t.payload;return[].concat(Object(S.a)(e),[n])})),Object(A.a)(y,f,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),y)),J=Object(d.c)("",Object(A.a)({},h,(function(e,t){return t.payload}))),Z=Object(k.b)({items:z,filter:J}),q=Object(d.a)({reducer:{contacts:Z}});i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(u.a,{store:q,children:Object(p.jsx)(g,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.1390ee4c.chunk.js.map