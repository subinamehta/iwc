import{h as r,j as n,ao as c,ag as h,ae as o,ap as l,o as u,c as d,I as g}from"./DTepUT80.js";const f=["src","alt","width","height"],p=r({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,i=n(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const a=c(h(o().app.baseURL));if(a!=="/"&&!t.src.startsWith(a))return l(a,t.src)}return t.src});return(s,a)=>(u(),d("img",{src:g(i),alt:e.alt,width:e.width,height:e.height},null,8,f))}});export{p as default};