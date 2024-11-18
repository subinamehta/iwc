import{_ as O,m as W,g as y,h as z,i as A,j as $,k as N,l as T,o,c as n,r as v,d as j,t as b,n as U,q as _,w as u,s as h,v as x,x as L,y as B,a as f,z as M,A as F,B as w,F as S,b as R}from"./vEY_StsY.js";import{u as D,a as q,b as G,_ as J,c as P}from"./BCfXxbOW.js";import"./IShi1APO.js";const Q={base:"inline-flex items-center",rounded:"rounded-md",font:"font-medium",size:{xs:"text-xs px-1.5 py-0.5",sm:"text-xs px-2 py-1",md:"text-sm px-2 py-1",lg:"text-sm px-2.5 py-1.5"},color:{white:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"},gray:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"},black:{solid:"text-white dark:text-gray-900 bg-gray-900 dark:bg-white"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{size:"sm",variant:"solid",color:"primary"}},H={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},i=W(y.ui.strategy,y.ui.badge,Q),K=z({inheritAttrs:!1,props:{size:{type:String,default:()=>i.default.size,validator(e){return Object.keys(i.size).includes(e)}},color:{type:String,default:()=>i.default.color,validator(e){return[...y.ui.colors,...Object.keys(i.color)].includes(e)}},variant:{type:String,default:()=>i.default.variant,validator(e){return[...Object.keys(i.variant),...Object.values(i.color).flatMap(t=>Object.keys(t))].includes(e)}},label:{type:[String,Number],default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:s}=D("badge",A(e,"ui"),i),{size:d,rounded:g}=q({ui:t,props:e}),c=$(()=>{var m,r;const p=((r=(m=t.value.color)==null?void 0:m[e.color])==null?void 0:r[e.variant])||t.value.variant[e.variant];return N(T(t.value.base,t.value.font,g.value,t.value.size[d.value],p==null?void 0:p.replaceAll("{color}",e.color)),e.class)});return{attrs:s,badgeClass:c}}});function X(e,t,s,d,g,c){return o(),n("span",U({class:e.badgeClass},e.attrs),[v(e.$slots,"default",{},()=>[j(b(e.label),1)])],16)}const Y=O(K,[["render",X]]),Z=W(y.ui.strategy,y.ui.card,H),ee=z({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:s}=D("card",A(e,"ui"),Z),d=$(()=>N(T(t.value.base,t.value.rounded,t.value.divide,t.value.ring,t.value.shadow,t.value.background),e.class));return{ui:t,attrs:s,cardClass:d}}});function te(e,t,s,d,g,c){return o(),_(L(e.$attrs.onSubmit?"form":e.as),U({class:e.cardClass},e.attrs),{default:u(()=>[e.$slots.header?(o(),n("div",{key:0,class:h([e.ui.header.base,e.ui.header.padding,e.ui.header.background])},[v(e.$slots,"header")],2)):x("",!0),e.$slots.default?(o(),n("div",{key:1,class:h([e.ui.body.base,e.ui.body.padding,e.ui.body.background])},[v(e.$slots,"default")],2)):x("",!0),e.$slots.footer?(o(),n("div",{key:2,class:h([e.ui.footer.base,e.ui.footer.padding,e.ui.footer.background])},[v(e.$slots,"footer")],2)):x("",!0)]),_:3},16,["class"])}const ae=O(ee,[["render",te]]),oe={class:"sticky top-4 h-16"},re={class:"mt-6"},ne=["onClick"],se={class:"text-xl font-bold mb-2"},ie={class:"mb-4"},de={key:0,class:"mb-4"},ge=z({__name:"index",setup(e){const t=B(""),s=B(null),d=G(),g=$(()=>d.allWorkflows),c=$(()=>g.value.filter(r=>r.definition.name.toLowerCase().includes(t.value.toLowerCase())));function p(r){var k;const l=document.getElementById(`workflow-${r.definition.uuid}`);l&&((k=l.parentElement)==null||k.scrollTo({top:l.offsetTop-l.parentElement.offsetTop-8,behavior:"smooth"}))}function m(r){s.value=r,p(r)}return(r,l)=>{const k=Y,I=P,V=ae,E=J;return o(),_(E,null,{sidebar:u(()=>[f("div",oe,[M(f("input",{"onUpdate:modelValue":l[0]||(l[0]=a=>t.value=a),type:"text",placeholder:"Search workflows",class:"w-full mb-4 p-2 border rounded"},null,512),[[F,t.value]])]),f("ul",re,[(o(!0),n(S,null,w(c.value,a=>(o(),n("li",{key:a.definition.uuid,onClick:C=>m(a),class:h(["cursor-pointer hover:bg-gray-100 p-2 rounded",{"bg-blue-100":s.value===a}])},b(a.definition.name),11,ne))),128))])]),content:u(()=>[(o(!0),n(S,null,w(c.value,a=>(o(),_(V,{key:a.definition.uuid,id:`workflow-${a.definition.uuid}`,class:"mb-4 p-6"},{header:u(()=>[f("h2",se,b(a.definition.name),1)]),default:u(()=>[f("p",ie,b(a.definition.annotation),1),a.definition.tags&&a.definition.tags.length>0?(o(),n("div",de,[(o(!0),n(S,null,w(a.definition.tags,C=>(o(),_(k,{key:C,class:"mr-2 mb-2",variant:"soft"},{default:u(()=>[j(b(C),1)]),_:2},1024))),128))])):x("",!0),R(I,{to:`/workflow/${encodeURIComponent(a.trsID)}/`},{default:u(()=>[j("Details")]),_:2},1032,["to"])]),_:2},1032,["id"]))),128))]),_:1})}}});export{ge as default};
