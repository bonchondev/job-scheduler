import{i as C,g as f,s as d,a as x,t as w,c as j,b as E,f as S,S as $,d as q,e as A,h as b,j as p,k as N,l as i,m as _,n as W,o,p as g}from"../main.js";import{k as z}from"./index-BoqvxspT.js";function B(e,t){const c=t.token={};function n(s,a,r,u){if(t.token!==c)return;t.resolved=u;let l=t.ctx;r!==void 0&&(l=l.slice(),l[r]=u);const h=s&&(t.current=s)(l);let v=!1;t.block&&(t.blocks?t.blocks.forEach((k,m)=>{m!==a&&k&&(x(),w(k,1,1,()=>{t.blocks[m]===k&&(t.blocks[m]=null)}),j())}):t.block.d(1),h.c(),E(h,1),h.m(t.mount(),t.anchor),v=!0),t.block=h,t.blocks&&(t.blocks[a]=h),v&&S()}if(C(e)){const s=f();if(e.then(a=>{d(s),n(t.then,1,t.value,a),d(null)},a=>{if(d(s),n(t.catch,2,t.error,a),d(null),!t.hasCatch)throw a}),t.current!==t.pending)return n(t.pending,0),!0}else{if(t.current!==t.then)return n(t.then,1,t.value,e),!0;t.resolved=e}}function D(e,t,c){const n=t.slice(),{resolved:s}=e;e.current===e.then&&(n[e.value]=s),e.current===e.catch&&(n[e.error]=s),e.block.p(n,c)}function F(e){let t;return{c(){t=b("span"),t.textContent=`Error: ${e[3].message}`},m(c,n){i(c,t,n)},p:o,d(c){c&&g(t)}}}function G(e){let t;return{c(){t=b("span"),t.textContent=`${e[2].dollars}`},m(c,n){i(c,t,n)},p:o,d(c){c&&g(t)}}}function H(e){return{c:o,m:o,p:o,d:o}}function I(e){let t,c,n,s,a,r={ctx:e,current:null,token:null,hasCatch:!0,pending:H,then:G,catch:F,value:2,error:3};return B(e[1],r),{c(){t=b("section"),c=p(J),n=p(" - "),s=p(e[0]),a=p(` |
    `),r.block.c(),N(t,"class","p-2 text-red-500")},m(u,l){i(u,t,l),_(t,c),_(t,n),_(t,s),_(t,a),r.block.m(t,r.anchor=null),r.mount=()=>t,r.anchor=null},p(u,[l]){e=u,l&1&&W(s,e[0]),D(r,e,l)},i:o,o,d(u){u&&g(t),r.block.d(),r.token=null,r=null}}}let J="New Wallet";function K(e,t,c){let{amount:n}=t;const s=z.post("/data").json();return e.$$set=a=>{"amount"in a&&c(0,n=a.amount)},[n,s]}class O extends ${constructor(t){super(),q(this,t,K,I,A,{amount:0})}}export{O as default};
