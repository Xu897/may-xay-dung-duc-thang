(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["create-user"],{"2a52":function(n,t,e){"use strict";e.r(t),function(n){e.d(t,"findAnswer",function(){return s});e("ac6a");var r=e("1da1");e("6b54");const o=e("9f6a"),i=(t,e,r,i,s,a)=>{return new Promise((f,c)=>{o(t,e,r,i,s,a,(t,e,r)=>{if(t)c(t);else if(r){r=n.from(r);const t=r.toString("hex");f(t)}})})},s=function(){var t=Object(r["a"])(function*(t){let e="";new Date;const r=[],o=n.from(t.salt,"utf8");for(let f=0;f<=t.domain;f++){const e=n.from(f+"","utf8");r.push(i(e,o,t.N,t.r,t.P,t.dklen))}const s=yield Promise.all(r),a=s.indexOf(t.hash);a>=0&&(e=a+"");new Date;return e});return function(n){return t.apply(this,arguments)}}()}.call(this,e("b639").Buffer)}}]);
//# sourceMappingURL=create-user.3b10d1ec.js.map