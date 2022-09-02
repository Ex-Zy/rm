import{a as v,r as V,x as F,a1 as S,o as f,l as w,f as a,a2 as T,p as P,u as t,c as y,w as s,e as g,t as h,h as B,C as N,F as R,a3 as G,K as E,a4 as $,k as C,b as j,m as z}from"./entry.aecc05ba.mjs";import{_ as A}from"./_plugin-vue_export-helper.7287ed4b.mjs";import{v as D,E as Y,g as K,a as M,b as x}from"./directive.854da397.mjs";import{E as p,a as O,b as Q,c as H}from"./index.8afe85cf.mjs";import{E as I}from"./index.17c78257.mjs";import"./index.40b80f96.mjs";import"./index.1376522b.mjs";const J={class:"filter-bar"},W=v({__name:"FilterBarCharacters",props:{filter:null},emits:["update:filter"],setup(i,{emit:n}){const c=i,l=V({name:"",status:"",species:"",type:"",gender:""});F(()=>({...c.filter}),u=>Object.keys(u).length?l.value=u:null,{immediate:!0});const d=()=>n("update:filter",{...l.value});return(u,o)=>{const e=S("FormKit");return f(),w("div",J,[a(e,{modelValue:l.value.name,"onUpdate:modelValue":o[0]||(o[0]=r=>l.value.name=r),label:"Name",placeholder:"Rick Sanchez",name:"name"},null,8,["modelValue"]),a(e,{modelValue:l.value.species,"onUpdate:modelValue":o[1]||(o[1]=r=>l.value.species=r),label:"Species",placeholder:"Human",name:"species"},null,8,["modelValue"]),a(e,{modelValue:l.value.status,"onUpdate:modelValue":o[2]||(o[2]=r=>l.value.status=r),type:"select",label:"Status",placeholder:"Alive",name:"status",options:["alive","dead","unknown"]},null,8,["modelValue"]),a(e,{modelValue:l.value.gender,"onUpdate:modelValue":o[3]||(o[3]=r=>l.value.gender=r),type:"select",label:"Gender",name:"gender",placeholder:"male",options:["male","female","genderless","unknown"]},null,8,["modelValue"]),a(e,{modelValue:l.value.type,"onUpdate:modelValue":o[4]||(o[4]=r=>l.value.type=r),label:"Type",placeholder:"Unknown",name:"type"},null,8,["modelValue"]),a(e,{style:{width:"100%"},type:"button",label:"Search",onClick:d})])}}}),X=A(W,[["__scopeId","data-v-06d68439"]]),Z=v({__name:"GridCharacters",props:{page:null,loading:{type:Boolean},totalRows:null,characters:null},emits:["update:page"],setup(i,{emit:n}){const c=i,l=V(1);T(()=>l.value=c.page);const m=d=>n("update:page",d);return(d,u)=>{const o=G;return f(),w(R,null,[P((f(),y(t(Q),{data:i.characters,style:{width:"100%","flex-grow":"1","margin-bottom":"15px",height:"100px"},stripe:"",border:""},{default:s(()=>[a(t(p),{prop:"id",label:"id",width:"50"}),a(t(p),{prop:"name",label:"Name",width:"250"},{default:s(({row:e})=>[a(o,{to:`/characters/${e.id}`,style:{"text-decoration":"none"}},{default:s(()=>[a(t(O),{type:"primary"},{default:s(()=>[g(h(e.name),1)]),_:2},1024)]),_:2},1032,["to"])]),_:1}),a(t(p),{prop:"image",label:"Avatar",width:"80"},{default:s(({row:e})=>[a(t(I),{size:50,src:e.image},null,8,["src"])]),_:1}),a(t(p),{prop:"species",label:"Species",width:"100"}),a(t(p),{prop:"created",label:"Created",sortable:""},{default:s(({row:e})=>[g(h(t(B)(e.created).format("MM/DD/YYYY")),1)]),_:1}),a(t(p),{prop:"gender",label:"Gender",width:"100"}),a(t(p),{prop:"status",label:"Status",width:"100",align:"center"},{default:s(({row:e})=>[a(t(Y),{type:t(K)(e.status),effect:"dark",round:"",size:"large"},{default:s(()=>[g(h(e.status),1)]),_:2},1032,["type"])]),_:1}),a(t(p),{prop:"location",label:"Location"},{default:s(({row:e})=>[g(h(e.location.dimension),1)]),_:1}),a(t(p),{prop:"type",label:"Type"},{default:s(({row:e})=>[g(h(e.type||"Unknown"),1)]),_:1})]),_:1},8,["data"])),[[t(D),i.loading]]),i.characters.length?(f(),y(t(H),{key:0,currentPage:l.value,"onUpdate:currentPage":u[0]||(u[0]=e=>l.value=e),style:{"margin-top":"auto","justify-content":"center","flex-shrink":"0"},"page-size":20,background:!0,layout:"total, prev, pager, next, jumper",total:i.totalRows,onCurrentChange:m},null,8,["currentPage","total"])):N("",!0)],64)}}}),q=i=>{const n=E({...i,...i.filter&&{filter:{...i.filter}}}),{result:c,loading:l,error:m}=$(n),d=C(()=>{var e,r;return(r=(e=c.value)==null?void 0:e.characters.results)!=null?r:[]}),u=C(()=>{var e;return((e=c.value)==null?void 0:e.characters.info.count)||0});return{characters:d,loading:l,error:m,totalRows:u,updateCharactersList:e=>{e.page&&(n.page=e.page),e.filter&&(n.filter=e.filter)}}},ee={class:"page-wrapper"},te=j("h2",{style:{"text-align":"center"}},"The Rick and Morty characters as seen on the TV show",-1),ue=v({__name:"index",setup(i){const n=E({page:1,filter:{name:"",status:"",species:"",type:"",gender:""}}),{characters:c,loading:l,error:m,totalRows:d,updateCharactersList:u}=q(n),o=r=>{n.page=r.page,n.filter=r.filter},e=r=>{o(r),u(r)};return(r,_)=>{const L=X,k=z,U=Z;return f(),w("div",ee,[a(k,null,{fallback:s(()=>[a(t(x),{rows:1,animated:""})]),default:s(()=>[a(L,{filter:n.filter,"onUpdate:filter":_[0]||(_[0]=b=>e({filter:b,page:1}))},null,8,["filter"])]),_:1}),te,t(m)?(f(),y(t(M),{key:0,title:t(m).message,type:"error",effect:"dark","show-icon":""},null,8,["title"])):(f(),y(k,{key:1},{fallback:s(()=>[a(t(x),{rows:12,animated:""})]),default:s(()=>[a(U,{page:n.page,loading:t(l),characters:t(c),"total-rows":t(d),"onUpdate:page":_[1]||(_[1]=b=>e({page:b,filter:{...n.filter}}))},null,8,["page","loading","characters","total-rows"])]),_:1}))])}}});export{ue as default};