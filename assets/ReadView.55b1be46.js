import{b as o}from"./index.3551583f.js";import{_ as c,o as e,c as r,F as d,r as l,a as s,t as n}from"./index.ab701fbc.js";const i={data:()=>({items:[]}),mounted(){o.get("/users").then(t=>{this.items=t.data})}},_={class:"avatar p-4"},p={class:"w-24 rounded"},u=["src"],m={class:"card-content"},h={class:"card-title"};function f(t,$,g,v,b,w){return e(),r("ul",null,[(e(!0),r(d,null,l(t.items,a=>(e(),r("li",{key:a.id,class:"card card-side w-96 bg-base-100 shadow-xl items-center m-4 p-2"},[s("div",_,[s("div",p,[s("img",{src:a.avatar,alt:""},null,8,u)])]),s("div",m,[s("p",h,n(`${a.first_name} ${a.last_name}`),1),s("p",null,n(`ID: ${a.id}`),1),s("p",null,n(`Email: ${a.email}`),1)])]))),128))])}const B=c(i,[["render",f]]);export{B as default};
