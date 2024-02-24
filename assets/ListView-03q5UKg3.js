import{b as k,d as I,_ as v,o as n,c as o,a as l,F as m,r as h,t as c,e as L,m as w,f as D,g as b,h as g,w as S,v as B,i as f,j as F,n as A,p as E,k as N}from"./index-Jbcgu_rP.js";import{B as U}from"./BaseInput-UizEsEpL.js";const V="/api/todo",q=()=>k.get(`${V}`),H=t=>k.post(`${V}`,t),y=I({id:"list",state:()=>({list:[]}),actions:{async a$list(){try{const{data:t}=await q();this.list=t}catch({message:t,error:e}){throw t??e}},async a$add(t){try{await H(t),await this.a$list()}catch({message:e,error:i}){throw e??i}},removeIndex(t){this.list=this.list.filter((e,i)=>t!==i)},editIndex(t,e){this.list[t]=e}},getters:{getList:({list:t})=>t,getDetail:({list:t})=>e=>t[e]}}),T={name:"BaseTable",props:{columns:{type:Array,default:()=>[]},actions:{type:Array,default:()=>[]},data:{type:Array,default:()=>[]}}},j={key:0},M=["onClick"];function z(t,e,i,$,C,r){return n(),o("table",null,[l("thead",null,[l("tr",null,[(n(!0),o(m,null,h(i.columns,(a,p)=>(n(),o("th",{key:p},c(a),1))),128))])]),l("tbody",null,[(n(!0),o(m,null,h(i.data,(a,p)=>(n(),o("tr",{key:p},[(n(!0),o(m,null,h(i.columns,s=>(n(),o("td",{key:s},c(a[s]),1))),128)),i.actions.length?(n(),o("td",j,[(n(!0),o(m,null,h(i.actions,(s,u)=>(n(),o("button",{key:u,onClick:nt=>t.$emit(`${s.event}`,a)},c(s.title),9,M))),128))])):L("",!0)]))),128))])])}const O=v(T,[["render",z]]),_={title:"",description:"",category:"",completed:!1},R={name:"ListView",data:()=>({input:{..._},editing:!1,table:{columns:["id","title","description","completed"],actions:[{title:"Handle",event:"handle-event"}]}}),components:{BaseInput:U,BaseTable:O},computed:{...w(y,["getList","getDetail"])},async mounted(){await this.a$list()},methods:{...D(y,["a$list","a$add","editIndex","removeIndex"]),resetForm(){Object.assign(this.input,_),this.editing=!1},addForm(t){console.log(t),this.editing===!1?this.a$add({...this.input}):this.editIndex(this.editing,{...this.input}),this.resetForm()},detailList(t){this.editing=t,this.input={...this.getDetail(t)}},toggleCompleted(t){const e=this.getDetail(t);this.editIndex(t,{...e,completed:!e.completed})},handleLogEvent(t){console.log(t)}}},d=t=>(E("data-v-20915407"),t=t(),N(),t),G=d(()=>l("h1",null,"List",-1)),J=d(()=>l("br",null,null,-1)),K=d(()=>l("br",null,null,-1)),P=d(()=>l("br",null,null,-1)),Q=d(()=>l("br",null,null,-1)),W={type:"submit"},X=d(()=>l("button",{type:"reset"},"Cancel",-1)),Y=d(()=>l("hr",null,null,-1)),Z={class:"list"},x=["onDblclick"],tt=["onClick","disabled"],et=["onClick","disabled"],st=d(()=>l("hr",null,null,-1));function lt(t,e,i,$,C,r){const a=b("base-input"),p=b("base-table");return n(),o("div",null,[G,l("form",{onSubmit:e[4]||(e[4]=F(s=>r.addForm(s),["prevent"])),method:"post",onReset:e[5]||(e[5]=()=>r.resetForm())},[g(a,{modelValue:t.input.title,"onUpdate:modelValue":e[0]||(e[0]=s=>t.input.title=s),class:"input",placeholder:"add new",required:""},null,8,["modelValue"]),J,g(a,{modelValue:t.input.description,"onUpdate:modelValue":e[1]||(e[1]=s=>t.input.description=s),class:"input",placeholder:"desccription",required:""},null,8,["modelValue"]),K,g(a,{modelValue:t.input.category,"onUpdate:modelValue":e[2]||(e[2]=s=>t.input.category=s),class:"input",placeholder:"category",required:""},null,8,["modelValue"]),P,S(l("input",{"onUpdate:modelValue":e[3]||(e[3]=s=>t.input.completed=s),type:"checkbox"},null,512),[[B,t.input.completed]]),f(" Completed "),Q,l("button",W,c(t.editing!==!1?"Edit":"Add"),1),X],32),Y,l("ol",Z,[(n(!0),o(m,null,h(t.getList,(s,u)=>(n(),o("li",{key:u,onDblclick:()=>r.toggleCompleted(u),class:A({strike:s.completed})},[l("button",{class:"red",onClick:()=>t.removeIndex(u),disabled:t.editing!==!1}," × ",8,tt),l("button",{class:"orange",onClick:()=>r.detailList(u),disabled:t.editing!==!1}," ✎ ",8,et),f(" "+c(s.title)+" "+c(s!=null&&s.description?`- ${s.description}`:""),1)],42,x))),128))]),st,g(p,{data:t.getList,columns:t.table.columns,actions:t.table.actions,onHandleEvent:r.handleLogEvent},null,8,["data","columns","actions","onHandleEvent"])])}const at=v(R,[["render",lt],["__scopeId","data-v-20915407"]]);export{at as default};
