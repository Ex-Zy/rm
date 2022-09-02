import{a as y,o as m,c as p,w as t,b as h,e as l,t as c,f as r,u as e,h as _,i as x,j as b,k as C,l as E,m as k,p as v}from"./entry.aecc05ba.mjs";import{E as D,g as w,a as S,b as j,v as B}from"./directive.854da397.mjs";import{E as Y}from"./index.17c78257.mjs";import{E as o,a as z,b as N}from"./index.b244745c.mjs";import"./index.40b80f96.mjs";const T={class:"card-header",style:{"justify-content":"center"}},V={style:{display:"flex","justify-content":"center","margin-bottom":"20px"}},A=y({__name:"CardCharacter",props:{character:null},setup(a){return(i,n)=>(m(),p(e(N),{class:"box-card",style:{margin:"40px auto 0"}},{header:t(()=>[h("div",T,[h("span",null,[l(" #"+c(a.character.id)+" ",1),h("strong",null,c(a.character.name),1)])])]),default:t(()=>[h("div",V,[r(e(Y),{shape:"square",size:300,src:a.character.image},null,8,["src"])]),r(e(z),{direction:"vertical",column:4,size:"large",border:""},{default:t(()=>[r(e(o),{label:"Species"},{default:t(()=>[l(c(a.character.species),1)]),_:1}),r(e(o),{label:"Created"},{default:t(()=>[l(c(e(_)(a.character.created).format("MM/DD/YYYY")),1)]),_:1}),r(e(o),{label:"Gender",span:2},{default:t(()=>[l(c(a.character.gender),1)]),_:1}),r(e(o),{label:"Status"},{default:t(()=>[r(e(D),{type:e(w)(a.character.status),effect:"dark",size:"large"},{default:t(()=>[l(c(a.character.status),1)]),_:1},8,["type"])]),_:1}),r(e(o),{label:"Location"},{default:t(()=>{var s,d;return[l(c((s=a.character.location)==null?void 0:s.type)+" / "+c((d=a.character.location)==null?void 0:d.name),1)]}),_:1})]),_:1})]),_:1}))}}),G=()=>{const a=x(),{result:i,loading:n,error:s}=b({id:String(a.params.id)});return{character:C(()=>{var f,u;return(u=(f=i.value)==null?void 0:f.character)!=null?u:{}}),error:s,loading:n}},Q=y({__name:"[id]",setup(a){const{character:i,error:n,loading:s}=G();return(d,f)=>{const u=A,g=k;return m(),E("div",null,[e(n)?(m(),p(e(S),{key:0,title:e(n).message,type:"error",effect:"dark","show-icon":""},null,8,["title"])):(m(),p(g,{key:1},{fallback:t(()=>[r(e(j),{animated:"",rows:14,style:{"max-width":"480px",margin:"60px auto 0"}})]),default:t(()=>[v(r(u,{character:e(i)},null,8,["character"]),[[e(B),e(s)]])]),_:1}))])}}});export{Q as default};
