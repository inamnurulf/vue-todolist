import{b as p,d as v,_ as x,m as y,e as w,r as k,o as r,c,a as s,w as $,f as I,g as m,v as C,h as L,t as u,F as g,i as V,j as D,k as S,p as F,l as B}from"./index-anWWeZBp.js";import{B as N}from"./BaseInput-q4rr-wNH.js";const h="/api/todo",A=()=>p.get(`${h}`),j=t=>p.post(`${h}`,t),E=t=>{p.delete(`${h}/${t}`)},M=(t,e)=>{p.put(`${h}/${t}`,e)},_=v({id:"list",state:()=>({list:[]}),actions:{async a$list(){try{const{data:t}=await A();this.list=t}catch({message:t,error:e}){throw t??e}},async a$add(t){try{await j(t),await this.a$list()}catch({message:e,error:i}){throw e??i}},async removeIndex(t,e){try{await E(t),this.list=this.list.filter((i,d)=>e!==d)}catch(i){console.error(i)}},async editIndex(t,e,i){try{await M(t,i),this.list[e]=i}catch(d){console.error(d)}}},getters:{getList:({list:t})=>t,getDetail:({list:t})=>e=>t[e]}}),b={title:"",description:"",category:"",completed:!1},U={name:"ListView",data:()=>({input:{...b},editing:!1}),components:{BaseInput:N},computed:{...y(_,["getList","getDetail"])},async mounted(){await this.a$list()},methods:{...w(_,["a$list","a$add","editIndex","removeIndex"]),resetForm(){Object.assign(this.input,b),this.editing=!1},addForm(t){console.log(t),this.editing===!1?this.a$add({...this.input}):this.editIndex(this.input.id,this.editing,{...this.input}),this.resetForm()},detailList(t){this.editing=t,this.input={...this.getDetail(t)}},toggleCompleted(t,e){const i=this.getDetail(e);this.editIndex(t,e,{...i,completed:!i.completed})},handleLogEvent(t){console.log(t)}}},l=t=>(F("data-v-063ac54f"),t=t(),B(),t),q={class:"p-4"},T={class:"bg-white p-4 rounded-lg"},O=l(()=>s("h1",{class:"text-2xl font-bold mb-4"},"Add New Data",-1)),R={class:"flex flex-col p-4"},z=l(()=>s("label",{for:"completed"},"Completed",-1)),G={type:"submit",class:"bg-blue-500 text-white px-4 py-2 mr-2 rounded-lg"},H=l(()=>s("button",{type:"reset",class:"bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"}," Cancel ",-1)),J={class:"bg-white rounded-lg mt-4 p-4"},K=l(()=>s("h1",{class:"text-2xl font-bold mb-4"},"List",-1)),P={class:"list overflow-y-auto max-h-[45vh]"},Q=l(()=>s("hr",{class:"my-2"},null,-1)),W=["onDblclick"],X={class:"flex justify-between"},Y={class:"flex flex-col"},Z={class:"text-lg font-bold"},tt={key:0,class:"pi pi-check text-lg text-green-500"},et={class:"text-base"},st={class:"flex items-center"},ot=["onClick","disabled"],it=l(()=>s("i",{class:"pi pi-trash text-lg"},null,-1)),lt=[it],dt=["onClick","disabled"],at=l(()=>s("i",{class:"pi pi-file-edit text-lg"},null,-1)),nt=[at],rt=l(()=>s("hr",{class:"my-2"},null,-1));function ct(t,e,i,d,pt,a){const f=k("base-input");return r(),c("div",q,[s("div",T,[O,s("form",{onSubmit:e[3]||(e[3]=$(o=>a.addForm(o),["prevent"])),method:"post",onReset:e[4]||(e[4]=()=>a.resetForm()),class:"mb-4"},[s("div",R,[I(f,{modelValue:t.input.title,"onUpdate:modelValue":e[0]||(e[0]=o=>t.input.title=o),class:"input mb-2 border rounded-lg p-2",placeholder:"add new",required:""},null,8,["modelValue"]),m(s("textarea",{"onUpdate:modelValue":e[1]||(e[1]=o=>t.input.description=o),class:"input mb-2 border rounded-lg p-2 min-h-[10vh]",placeholder:"description",required:""},null,512),[[C,t.input.description]]),s("div",null,[m(s("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.input.completed=o),type:"checkbox",class:"mr-2",id:"completed"},null,512),[[L,t.input.completed]]),z])]),s("button",G,u(t.editing!==!1?"Edit":"Add"),1),H],32)]),s("div",J,[K,s("ol",P,[(r(!0),c(g,null,V(t.getList,(o,n)=>(r(),c(g,{key:n},[Q,s("li",{onDblclick:()=>a.toggleCompleted(o==null?void 0:o.id,n),class:"mb-2"},[s("div",X,[s("div",Y,[s("div",Z,[D(u(o.title)+" ",1),o.completed?(r(),c("i",tt)):S("",!0)]),s("div",et,u(o!=null&&o.description?`${o.description}`:""),1)]),s("div",st,[s("button",{class:"pointer hover:bg-red-500 text-red-500 hover:text-white p-1 rounded-lg mx-2",onClick:()=>t.removeIndex(o.id,n),disabled:t.editing!==!1},lt,8,ot),s("button",{class:"hover:bg-blue-500 text-blue-500 hover:text-white p-1 rounded-lg mx-2",onClick:()=>a.detailList(n),disabled:t.editing!==!1},nt,8,dt)])])],40,W)],64))),128))]),rt])])}const mt=x(U,[["render",ct],["__scopeId","data-v-063ac54f"]]);export{mt as default};
