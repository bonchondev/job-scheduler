import{S as j,d as B,e as C,z as h,h as p,k as q,A as w,l as z,m as A,w as D,t as b,c as E,b as _,B as F,p as S,C as y,a as G,D as H,E as L,F as I,G as J,H as K,r as M,j as N,v as O,o as P,x as Q}from"../main.js";import R from"./Spinner-Dp1DM3SD.js";function T(s){let t;const o=s[4].default,l=L(o,s,s[3],null);return{c(){l&&l.c()},m(e,n){l&&l.m(e,n),t=!0},p(e,n){l&&l.p&&(!t||n&8)&&I(l,o,e,e[3],t?K(o,e[3],n,null):J(e[3]),null)},i(e){t||(_(l,e),t=!0)},o(e){b(l,e),t=!1},d(e){l&&l.d(e)}}}function U(s){let t,o,l;return t=new R({}),{c(){M(t.$$.fragment),o=N(" Loading...")},m(e,n){O(t,e,n),z(e,o,n),l=!0},p:P,i(e){l||(_(t.$$.fragment,e),l=!0)},o(e){b(t.$$.fragment,e),l=!1},d(e){e&&S(o),Q(t,e)}}}function V(s){let t,o,l,e,n,i,d,r;const v=[U,T],u=[];function k(a,c){return a[0]?0:1}l=k(s),e=u[l]=v[l](s);let m=[s[2],{disabled:s[0]},{class:n=`
      bg-blue-500
      text-white
      font-bold
      ${s[1]}
      rounded-lg
      transition-all
      duration-150
      ease-in-out
      ${s[0]?"bg-gray-400 text-gray-700 cursor-not-allowed":`border-b-4
      border-blue-700
      hover:bg-blue-600
      hover:border-blue-600
      active:border-blue-700
      active:transform
      active:translate-y-1
      shadow-lg
      hover:shadow-md
      active:shadow-sm`}
    `}],f={};for(let a=0;a<m.length;a+=1)f=h(f,m[a]);return{c(){t=p("button"),o=p("div"),e.c(),q(o,"class","flex flex-row items-center justify-center gap-x-2"),w(t,f)},m(a,c){z(a,t,c),A(t,o),u[l].m(o,null),t.autofocus&&t.focus(),i=!0,d||(r=D(t,"click",s[5]),d=!0)},p(a,[c]){let g=l;l=k(a),l===g?u[l].p(a,c):(G(),b(u[g],1,1,()=>{u[g]=null}),E(),e=u[l],e?e.p(a,c):(e=u[l]=v[l](a),e.c()),_(e,1),e.m(o,null)),w(t,f=F(m,[c&4&&a[2],(!i||c&1)&&{disabled:a[0]},(!i||c&3&&n!==(n=`
      bg-blue-500
      text-white
      font-bold
      ${a[1]}
      rounded-lg
      transition-all
      duration-150
      ease-in-out
      ${a[0]?"bg-gray-400 text-gray-700 cursor-not-allowed":`border-b-4
      border-blue-700
      hover:bg-blue-600
      hover:border-blue-600
      active:border-blue-700
      active:transform
      active:translate-y-1
      shadow-lg
      hover:shadow-md
      active:shadow-sm`}
    `))&&{class:n}]))},i(a){i||(_(e),i=!0)},o(a){b(e),i=!1},d(a){a&&S(t),u[l].d(),d=!1,r()}}}function W(s,t,o){let{$$slots:l={},$$scope:e}=t,{loading:n}=t,{size:i="w-40 h-20"}=t;function d(r){H.call(this,s,r)}return s.$$set=r=>{o(2,t=h(h({},t),y(r))),"loading"in r&&o(0,n=r.loading),"size"in r&&o(1,i=r.size),"$$scope"in r&&o(3,e=r.$$scope)},t=y(t),[n,i,t,e,l,d]}class Z extends j{constructor(t){super(),B(this,t,W,V,C,{loading:0,size:1})}}export{Z as default};
