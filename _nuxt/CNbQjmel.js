import{m as n,z as r,s as m,r as u,S as i,c as p,A as _,o as f}from"./DhUrEDIg.js";import{u as d}from"./C-EjTd67.js";const h={class:"fe-layout-game"},g="https://cdn.fe1024.com/webstatic/fe1024/games",y=n({__name:"game",async setup($){let e,a;const s=(r().fullPath||"").replace(/\/$/,"").split("/").slice(-1),{data:t}=([e,a]=m(()=>d(`/api/game/detail/${s}`,"$ttksBi17gI")),e=await e,a(),e),o=t.value.url?t.value.url:`${g}/${t.value.name}/index.html`,c=u({data:t,src:o});return i("game",c),(l,k)=>(f(),p("div",h,[_(l.$slots,"default")]))}});export{y as default};
