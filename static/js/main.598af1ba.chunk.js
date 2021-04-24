(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[1],{104:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(31),o=n.n(r),u=n(18),i=n(12),a=(n(79),n(7)),s=n(32),b=function(t){return t.user.isAuthenticated},j=function(t){return t.user.user.email},l=n(2),d={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"tomato"}},f=function(){var t=Object(i.c)(b);return Object(l.jsxs)("nav",{children:[Object(l.jsx)(u.b,{to:"/",exact:!0,style:d.link,activeStyle:d.activeLink,children:"Home"}),t&&Object(l.jsx)(u.b,{to:"/contacts",exact:!0,style:d.link,activeStyle:d.activeLink,children:"Contacts"})]})},O={container:{display:"flex",alignItems:"center"},name:{fontWeight:700,marginRight:12,color:"black"},button:{color:"black",padding:"5px 40px",backgroundColor:"#fff",border:"none",borderRadius:5,boxShadow:"0px 0px 3px 0px black",cursor:"pointer"}},h=function(){var t=Object(i.b)(),e=Object(i.c)(j);return Object(l.jsxs)("div",{style:O.container,children:[Object(l.jsxs)("span",{style:O.name,children:[e," "]}),Object(l.jsx)("button",{style:O.button,type:"button",onClick:function(){return t(Object(s.b)())},children:"Sign out"})]})},p={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"tomato"}};function g(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(u.b,{to:"/register",exact:!0,style:p.link,activeStyle:p.activeLink,children:"Registartion"}),Object(l.jsx)(u.b,{to:"/login",exact:!0,style:p.link,activeStyle:p.activeLink,children:"Login"})]})}var x,k,y,v,m,C=n(119),S=n(122),R=Object(C.a)((function(t){return{header:{marginLeft:50,marginRight:50,display:"flex",justifyContent:"space-between",alignItems:"center"},app:{backgroundColor:"#fff"}}})),L=function(){var t=R(),e=Object(i.c)(b);return Object(l.jsx)(S.a,{position:"static",className:t.app,children:Object(l.jsxs)("header",{className:t.header,children:[Object(l.jsx)(f,{}),e?Object(l.jsx)(h,{}):Object(l.jsx)(g,{})]})})},A=n(25),E=n(6),w=function(t){var e=t.children,n=t.redirectTo,c=Object(E.a)(t,["children","redirectTo"]),r=Object(i.c)(b);return Object(l.jsx)(a.b,Object(A.a)(Object(A.a)({},c),{},{children:r?e:Object(l.jsx)(a.a,{to:n})}))},q=function(t){var e=t.children,n=t.restricted,c=void 0!==n&&n,r=t.redirectTo,o=Object(E.a)(t,["children","restricted","redirectTo"]),u=Object(i.c)(b);return Object(l.jsx)(a.b,Object(A.a)(Object(A.a)({},o),{},{children:u&&c?Object(l.jsx)(a.a,{to:r}):e}))},T=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,177))})),z=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,178))})),D=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,181))})),U=Object(c.lazy)((function(){return Promise.all([n.e(4),n.e(5)]).then(n.bind(null,183))})),B=function(){var t=Object(i.b)();return Object(c.useEffect)((function(){t(Object(s.a)())}),[t]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(L,{}),Object(l.jsx)(c.Suspense,{fallback:Object(l.jsx)("h1",{children:"Loading..."}),children:Object(l.jsxs)(a.d,{children:[Object(l.jsx)(a.b,{exact:!0,path:"/",component:T}),Object(l.jsx)(q,{path:"/register",component:D,restricted:!0,redirectTo:"/"}),Object(l.jsx)(q,{path:"/login",restricted:!0,component:z,redirectTo:"/"}),Object(l.jsx)(w,{path:"/contacts",component:U,redirectTo:"/login"})]})})]})},I=n(64),P=n(21),W=n(8),F=n(20),J=n(65),N=n.n(J),H=n(5),G=n(3),K=n(27),M=Object(G.c)([],(x={},Object(H.a)(x,K.g,(function(t,e){return e.payload})),Object(H.a)(x,K.d,(function(t,e){var n=e.payload;return[].concat(Object(P.a)(t),[n])})),Object(H.a)(x,K.j,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),x)),Q=Object(G.c)("",Object(H.a)({},K.a,(function(t,e){return e.payload}))),V=Object(W.c)({items:M,filter:Q}),X=n(4),Y={name:null,email:null},Z=Object(G.c)(Y,(k={},Object(H.a)(k,X.l,(function(t,e){return e.payload.user})),Object(H.a)(k,X.f,(function(t,e){return e.payload.user})),Object(H.a)(k,X.i,(function(){return Y})),Object(H.a)(k,X.c,(function(t,e){return e.payload})),k)),$=Object(G.c)(null,(y={},Object(H.a)(y,X.l,(function(t,e){return e.payload.token})),Object(H.a)(y,X.f,(function(t,e){return e.payload.token})),Object(H.a)(y,X.i,(function(){return null})),y)),_=Object(G.c)(null,(v={},Object(H.a)(v,X.j,(function(t,e){return e.payload})),Object(H.a)(v,X.d,(function(t,e){return e.payload})),Object(H.a)(v,X.g,(function(){return function(t,e){return e.payload}})),Object(H.a)(v,X.a,(function(t,e){return e.payload})),v)),tt=Object(G.c)(!1,(m={},Object(H.a)(m,X.l,(function(){return!0})),Object(H.a)(m,X.f,(function(){return!0})),Object(H.a)(m,X.c,(function(){return!0})),Object(H.a)(m,X.j,(function(){return!1})),Object(H.a)(m,X.d,(function(){return!1})),Object(H.a)(m,X.g,(function(){return!1})),Object(H.a)(m,X.i,(function(){return!1})),m)),et=Object(W.c)({user:Z,token:$,error:_,isAuthenticated:tt}),nt=Object(P.a)(Object(G.d)({serializableCheck:{ignoredActions:[F.a,F.f,F.b,F.c,F.d,F.e]}})),ct={key:"token",storage:N.a,whitelist:["token"]},rt=Object(W.c)({contacts:V,user:Object(F.g)(ct,et)}),ot=Object(G.a)({reducer:rt,middleware:nt}),ut=Object(F.h)(ot);o.a.render(Object(l.jsx)(i.a,{store:ot,children:Object(l.jsx)(I.a,{loading:null,persistor:ut,children:Object(l.jsx)(u.a,{children:Object(l.jsx)(B,{})})})}),document.getElementById("root"))},27:function(t,e,n){"use strict";n.d(e,"f",(function(){return r})),n.d(e,"g",(function(){return o})),n.d(e,"e",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return a})),n.d(e,"b",(function(){return s})),n.d(e,"i",(function(){return b})),n.d(e,"j",(function(){return j})),n.d(e,"h",(function(){return l})),n.d(e,"a",(function(){return d}));var c=n(3),r=Object(c.b)("contacts/fetchContactsRequest"),o=Object(c.b)("contacts/fetchContactsSuccess"),u=Object(c.b)("contacts/fetchContactsError"),i=Object(c.b)("contacts/fetchAddContactRequest"),a=Object(c.b)("contacts/fetchAddContactSuccess"),s=Object(c.b)("contacts/fetchAddContactError"),b=Object(c.b)("contacts/fetchDeleteContactRequest"),j=Object(c.b)("contacts/fetchDeleteContactSuccess"),l=Object(c.b)("contacts/fetchDeleteContactError"),d=Object(c.b)("contacts/changeFilter")},32:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return b}));var c=n(24),r=n.n(c),o=n(4);r.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var u=function(t){return r.a.defaults.headers.Authorization=t},i=function(t){return function(e){e(o.k()),r.a.post("/users/signup",t).then((function(t){var n=t.data;return e(o.l(n))})).then((function(t){var e=t.data;return u(e.token)})).catch((function(t){return e(o.j(t.message))}))}},a=function(t){return function(e){e(o.e()),r.a.post("/users/login",t).then((function(t){var n=t.data;e(o.f(n)),u(n.token)})).catch((function(t){return e(o.d(t.message))}))}},s=function(){return function(t){t(o.h()),r.a.post("/users/logout").then((function(){t(o.i()),u(null)})).catch((function(e){return t(o.g(e.message))}))}},b=function(){return function(t,e){var n=e().user.token;n&&(u(n),t(o.b()),r.a.get("/users/current").then((function(e){var n=e.data;return t(o.c(n))})).catch((function(e){return t(o.a(e.message))})))}}},4:function(t,e,n){"use strict";n.d(e,"k",(function(){return r})),n.d(e,"l",(function(){return o})),n.d(e,"j",(function(){return u})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return j})),n.d(e,"g",(function(){return l})),n.d(e,"e",(function(){return i})),n.d(e,"f",(function(){return a})),n.d(e,"d",(function(){return s})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return O}));var c=n(3),r=Object(c.b)("user/registerRequest"),o=Object(c.b)("user/registerSuccess"),u=Object(c.b)("user/registerError"),i=Object(c.b)("user/loginRequest"),a=Object(c.b)("user/loginSuccess"),s=Object(c.b)("user/loginError"),b=Object(c.b)("user/logoutRequest"),j=Object(c.b)("user/logoutSuccess"),l=Object(c.b)("user/logoutError"),d=Object(c.b)("user/getCurrentUserRequest"),f=Object(c.b)("user/getCurrentUserSuccess"),O=Object(c.b)("user/getCurrentUserError")},79:function(t,e,n){}},[[104,2,3]]]);
//# sourceMappingURL=main.598af1ba.chunk.js.map