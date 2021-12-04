import{r as c,c as j,o as h,a as w,b as N,d as g,e as t,f as l,w as p,u as S,i as U,g as _,h as F,j as O,Q as H,t as A,F as z,k as M,p as I,l as W,m as u,n as q,v as E,q as K,s as Q,x as G,y as J,V as X,z as Y,A as Z}from"./vendor.dac959e3.js";const ee=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function r(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerpolicy&&(d.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?d.credentials="include":s.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(s){if(s.ep)return;s.ep=!0;const d=r(s);fetch(s.href,d)}};ee();function te(o){return(e,r)=>{const i=c("router-view");return h(),j(i)}}const oe={mounted(){}},se=Object.assign(oe,{setup:te});var $={async list(o,e){return await w({method:"get",url:o,data:e})},async compact(o){return await w({method:"get",url:o,data:params})},async read(o){return await w({method:"get",url:o,data:params})},async create(o,e){return await w({method:"post",url:o,data:e})},async update(o,e){return await w({method:"post",url:o,data:e})},async delete(o,e){return await w({method:"delete",url:o,data:e})},async activate(o){return await w({method:"put",url,data:params})}};const le=()=>({records:[],record:null}),ne={getRecords(o,e,r){return o.records},getRecord(o,e,r){return o.record}},re={async list({state:o,commit:e,rootState:r}){return await $.list(r.apiServer+"/package")},async read({state:o,commit:e,rootState:r},i){return await $.read(r.apiServer+"/package/"+i.id)},async create({state:o,commit:e,rootState:r},i){return await $.create(r.apiServer+"/package/create",i)},async update({state:o,commit:e,rootState:r},i){return await $.update(r.apiServer+"/package/update",i)},async delete({state:o,commit:e,rootState:r},i){return await $.delete(r.apiServer+"/package/"+i.id)}},ae={setRecords(o,e){o.records=e},setRecord(o,e){o.record=e}};var de={namespaced:!0,state:le,getters:ne,actions:re,mutations:ae};const ce=!1;var ie=N({state:{apiServer:"http://sctservice.kabit.asia/api"},modules:{product:de},strict:ce,plugins:[]}),R="/assets/logo.4dbb9523.png",y=(o,e)=>{const r=o.__vccOpts||o;for(const[i,s]of e)r[i]=s;return r};const ue={},pe={class:"w-full h-8 my-2 leading-8 text-gray-400"},me=t("div",{class:"text-center copy-right"},"\xA9 \u179A\u1780\u17D2\u179F\u17B6\u179A\u179F\u17B7\u1791\u17D2\u1792\u17B7\u1782\u17D2\u179A\u1794\u17CB\u1799\u17C9\u17B6\u1784 \u17E2\u17E0\u17E2\u17E1",-1),_e=[me];function he(o,e){return h(),g("div",pe,_e)}var B=y(ue,[["render",he]]);const ve={class:"flex justify-center"},ge={class:"w-1/4 p-8 mt-24 border rounded"},fe=t("div",{class:"w-32 mx-auto my-4"},[t("img",{src:R,alt:"SCT Logo",class:"w-full"})],-1),be=t("div",{class:"w-full mx-auto my-4 text-lg"}," Sony Cambodia Transportation ",-1),xe=t("div",{class:"w-full mx-auto my-4 text-left text-md"}," Sign in ",-1),we={class:"w-full"},ye=_("Sign in"),Ve={class:"mt-16"};function ke(o){return(e,r)=>{const i=c("van-field"),s=c("van-cell-group"),d=c("van-button");return h(),g("div",ve,[t("div",ge,[fe,be,xe,l(s,{inset:""},{default:p(()=>[l(i,{modelValue:S(email),"onUpdate:modelValue":r[0]||(r[0]=m=>U(email)?email.value=m:null),label:"Email",placeholder:"Email"},null,8,["modelValue"]),l(i,{modelValue:S(password),"onUpdate:modelValue":r[1]||(r[1]=m=>U(password)?password.value=m:null),type:"password",clearable:"",label:"Password",placeholder:"Password"},null,8,["modelValue"])]),_:1}),t("div",we,[l(d,{type:"primary",onClick:r[2]||(r[2]=m=>this.$router.push("/receive")),class:"w-1/2 mx-auto mt-8",size:"small",loading:S(btnLoginLoading),"loading-text":"Loading...",block:""},{default:p(()=>[ye]),_:1},8,["loading"])]),t("div",Ve,[l(B)])])])}}const $e={setup(){const o=ref(!1),e=ref(""),r=ref("");return{btnLoginLoading:o,email:e,password:r}},name:"LoginTemplate"},Pe=Object.assign($e,{setup:ke}),Ce={name:"Topmenu"},Le={class:"fixed bg-gray-100 top-0 left-0 right-0 flex h-16 p-2 mb-4 border-b border-gray-300"},Te={class:"flex-none w-12 h-12"},Se=t("img",{src:R,class:"w-full rounded-full",alt:"SCT Logo",title:"SCT Logo"},null,-1),ze=F('<div class="flex-grow h-12"></div><div class="flex-none w-12 h-12 ..."><div class="w-12 h-12 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div></div>',2);function Me(o,e,r,i,s,d){const m=c("router-link");return h(),g("div",Le,[t("div",Te,[l(m,{to:"/dashboard"},{default:p(()=>[Se]),_:1})]),ze])}var Ue=y(Ce,[["render",Me]]);const He={setup(){return{}},components:{Footer:B},name:"sidebar-left",data(){return{sidebarToggle:!0,menus:[{label:"\u17A5\u179C\u17C9\u17B6\u1793\u17CB",to:"/package"},{label:"\u17A2\u17D2\u1793\u1780\u1794\u17D2\u179A\u17BE\u1794\u17D2\u179A\u17B6\u179F\u17CB",to:"/user"},{label:"\u17A2\u178F\u17B7\u1790\u17B7\u1787\u1793",to:"/customer"},{label:"Chat",to:"/label"},{icon:"chat-o",label:"Setting",to:"/label"}]}},methods:{toggleSidebarFunc(o){this.sidebarToggle=o}}};function Re(o,e,r,i,s,d){return c("router-link"),c("Footer"),O("",!0)}var Be=y(He,[["render",Re]]);const De={setup(){return{}},name:"DashboardPage",data(){return{}},computed:{},mounted(){},methods:{},components:{Topmenu:Ue,SidebarLeft:Be}},je={class:"relative w-full min-h-screen bg-gray-50 bg-center bg-cover bg-background",oncontextmenu:"return false; "},Ne={class:"absolute p-4 top-16 right-0 bottom-0 left-60"};function Fe(o,e,r,i,s,d){const m=c("router-view"),f=c("SidebarLeft"),b=c("Topmenu");return h(),g("div",je,[t("div",Ne,[l(m)]),l(f),l(b)])}var Oe=y(De,[["render",Fe]]);const Ae={components:{},name:"dashboard",data(){return{}},computed:{},mounted(){},methods:{}},Ie={class:"flex flex-wrap justify-center p-4bg-white"};function We(o,e,r,i,s,d){return h(),g("div",Ie," ok, I am dashboard widgets ")}var qe=y(Ae,[["render",We]]);const Ee={components:{QrcodeVue:H,Vue3Barcode:A},setup(){return{}},name:"Product",data(){return{model:{name:"product",title:"Product"},table:{data:[],columns:[],pagination:{}},createPopToggle:!1,product:{code:"",from:"",to:"",sender:"",receiver:"",weight:"",dimension:"",price:"",note:""},savingLoading:!1}},beforeMount(){this.$store.dispatch("product/list").then(o=>{this.$store.commit("product/setRecords",o.data.records)}).catch(o=>{console.log(o)})},mounted(){},methods:{onDecode(o){console.log(o)},toggleCreatePopup(o){this.createPopToggle=o===!0?o:!1},saveProduct(){this.savingLoading=!0}}},V=o=>(I("data-v-b66c0784"),o=o(),W(),o),Ke={class:"w-full"},Qe={class:"flex title-bar border-b border-gray-200"},Ge={class:"flex w-64 h-10 py-1 title"},Je=V(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"mt-2 w-4 h-4 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})],-1)),Xe=["innerHTML"],Ye={class:"flex-grow action-buttons flex-row-reverse flex"},Ze=V(()=>t("div",{class:"filters-bar"},null,-1)),et={class:"vcb-table-panel"},tt={class:"vcb-table"},ot=V(()=>t("tr",{class:"vcb-table-headers"},[t("th",{class:"vcb-table-header"},"No"),t("th",{class:"vcb-table-header"},"Code"),t("th",{class:"vcb-table-header"},"From"),t("th",{class:"vcb-table-header"},"To"),t("th",{class:"vcb-table-header"},"Sender"),t("th",{class:"vcb-table-header"},"Receiver"),t("th",{class:"vcb-table-header"},"Weight (KG)"),t("th",{class:"vcb-table-header"},"Dimension (WxHxL)"),t("th",{class:"vcb-table-header"},"Price (THB)"),t("th",{class:"vcb-table-header"},"Note"),t("th",{class:"vcb-table-header w-60"},"Actions")],-1)),st={class:"vcb-table-cell font-bold"},lt={class:"vcb-table-cell"},nt={class:"vcb-table-cell"},rt={class:"vcb-table-cell"},at={class:"vcb-table-cell"},dt={class:"vcb-table-cell"},ct={class:"vcb-table-cell"},it={class:"vcb-table-cell"},ut={class:"vcb-table-cell"},pt={class:"vcb-table-cell"},mt=V(()=>t("td",{class:"vcb-table-actions-panel"},[t("div",{to:"/product/new",class:"vcb-action-button"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"mx-auto w-4 h-4 mt-2 duration-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})])]),t("div",{to:"/product/new",class:"vcb-action-button"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"mx-auto w-4 h-4 mt-2 duration-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})])]),t("div",{to:"/product/new",class:"vcb-action-button"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"mx-auto w-4 h-4 mt-2 duration-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})])])],-1)),_t={class:"vcb-table-pagination"},ht=V(()=>t("div",{class:"vcb-pagination-page",innerHTML:"<"},null,-1)),vt=V(()=>t("div",{class:"vcb-pagination-page",innerHTML:">"},null,-1)),gt={class:"vcb-pop-create"},ft=V(()=>t("div",{class:"font-bold my-4 text-xl"},"\u178A\u17B6\u1780\u17CB\u1795\u17D2\u1789\u17BE\u179A",-1)),bt=_("\u1791\u17C6\u17A0\u17C6\u1794\u17D2\u179A\u17A2\u1794\u17CB"),xt=_("60x40x20"),wt=_("60x60x40"),yt=_("20x10x10"),Vt=_("20x5x10"),kt=_("\u1795\u17D2\u1789\u17BE");function $t(o,e,r,i,s,d){const m=c("van-icon"),f=c("van-divider"),b=c("van-field"),v=c("van-radio"),k=c("van-radio-group"),P=c("van-cell-group"),C=c("van-button"),L=c("van-popup");return h(),g("div",Ke,[t("div",Qe,[t("div",Ge,[Je,t("div",{class:"leading-8 font-bold",innerHTML:s.model.title},null,8,Xe)]),t("div",Ye,[t("div",{onClick:e[0]||(e[0]=a=>d.toggleCreatePopup(!0)),class:"mx-2 w-8 h-8 text-center hover:border-blue-300 duration-300 cursor-pointer"},[l(m,{name:"add-o",size:"30"})])]),Ze]),t("div",et,[t("table",tt,[ot,(h(!0),g(z,null,M(o.$store.getters["product/getRecords"].records,(a,n)=>(h(),g("tr",{key:n,class:"vcb-table-row"},[t("td",st,u(n+1),1),t("td",lt,u(a.code),1),t("td",nt,u(a.from),1),t("td",rt,u(a.to),1),t("td",at,u(a.sender_nubmer),1),t("td",dt,u(a.receiver_id),1),t("td",ct,u(a.weight),1),t("td",it,u(a.dimension),1),t("td",ut,u(a.price),1),t("td",pt,u(a.note),1),mt]))),128))])]),t("div",_t,[ht,(h(),g(z,null,M(7,a=>t("div",{key:a,class:"vcb-pagination-page"},u(a),1)),64)),vt]),t("div",gt,[l(L,{show:s.createPopToggle,"onUpdate:show":e[9]||(e[9]=a=>s.createPopToggle=a),class:"p-8"},{default:p(()=>[ft,l(f),l(P,{inset:""},{default:p(()=>[l(b,{modelValue:s.product.to,"onUpdate:modelValue":e[1]||(e[1]=a=>s.product.to=a),label:"\u1782\u17C4\u179B\u178A\u17C5",type:"textarea",placeholder:"\u1782\u17C4\u179B\u178A\u17C5\u178A\u17C2\u179B\u178A\u17C2\u179B\u178F\u17D2\u179A\u17BC\u179C\u1791\u17C5",rows:"1",autosize:""},null,8,["modelValue"]),l(b,{modelValue:s.product.sender,"onUpdate:modelValue":e[2]||(e[2]=a=>s.product.sender=a),type:"phone",label:"\u179B\u17C1\u1781\u17A2\u17D2\u1793\u1780\u1795\u17D2\u1789\u17BE\u179A",placeholder:"\u179B\u17C1\u1781\u17A2\u17D2\u1793\u1780\u1795\u17D2\u1789\u17BE\u179A"},null,8,["modelValue"]),l(b,{modelValue:s.product.receiver,"onUpdate:modelValue":e[3]||(e[3]=a=>s.product.receiver=a),type:"phone",label:"\u179B\u17C1\u1781\u17A2\u17D2\u1793\u1780\u1791\u1791\u17BD\u179B",placeholder:"\u179B\u17C1\u1781\u17A2\u17D2\u1793\u1780\u1791\u1791\u17BD\u179B"},null,8,["modelValue"]),l(b,{modelValue:s.product.weight,"onUpdate:modelValue":e[4]||(e[4]=a=>s.product.weight=a),type:"number",label:"\u1791\u17C6\u1784\u1793\u17CB",placeholder:"\u1791\u17C6\u1784\u1793\u17CB"},null,8,["modelValue"]),l(f,null,{default:p(()=>[bt]),_:1}),l(k,{modelValue:s.product.dimension,"onUpdate:modelValue":e[5]||(e[5]=a=>s.product.dimension=a),direction:"horizontal",class:"mx-4 my-6",label:"\u1791\u17C6\u17A0\u17C6\u1794\u17D2\u179A\u17A2\u1794\u17CB",placeholder:"\u1791\u17C6\u17A0\u17C6\u1794\u17D2\u179A\u17A2\u1794\u17CB"},{default:p(()=>[l(v,{name:"60x40x20"},{default:p(()=>[xt]),_:1}),l(v,{name:"60x60x40"},{default:p(()=>[wt]),_:1}),l(v,{name:"20x10,10"},{default:p(()=>[yt]),_:1}),l(v,{name:"20x5x10"},{default:p(()=>[Vt]),_:1})]),_:1},8,["modelValue"]),l(f),l(b,{modelValue:s.product.price,"onUpdate:modelValue":e[6]||(e[6]=a=>s.product.price=a),type:"number",label:"\u178F\u1798\u17D2\u179B\u17C3",placeholder:"\u178F\u1798\u17D2\u179B\u17C3"},null,8,["modelValue"]),l(b,{modelValue:s.product.note,"onUpdate:modelValue":e[7]||(e[7]=a=>s.product.note=a),label:"\u179F\u1798\u17D2\u1782\u17B6\u179B\u17CB",type:"textarea",placeholder:"\u179F\u1798\u17D2\u1782\u17B6\u179B\u17CB\u1795\u17D2\u179F\u17C1\u1784\u17D7",rows:"3",autosize:""},null,8,["modelValue"])]),_:1}),l(C,{loading:s.savingLoading,"loading-text":"\u179A\u1780\u17D2\u179F\u17B6\u179A\u1791\u17BB\u1780...",type:"primary",class:"my-4 w-1/2",onClick:e[8]||(e[8]=a=>d.saveProduct())},{default:p(()=>[kt]),_:1},8,["loading"])]),_:1},8,["show"])])])}var Pt=y(Ee,[["render",$t],["__scopeId","data-v-b66c0784"]]);const Ct={components:{QrcodeVue:H},setup(){return{}},data(){return{sctTransactionDate:new Date,createPopToggle:!1,products:{all:[],matched:[]},product:{code:"",from:"\u1794\u17B6\u1784\u1780\u1780",to:"",sender_phone:"",receiver_phone:"",weight:"",dimension:"",price:"",note:""},clearProduct:{code:"",from:"\u1794\u17B6\u1784\u1780\u1780",to:"",sender_phone:"",receiver_phone:"",weight:"",dimension:"",price:"",note:""},savingLoading:!1,search:{value:""}}},computed:{totalPrice(){let o=0;for(var e in this.products.all)o+=this.products.all[e].price;return o}},beforeMount(){this.getRecords()},mounted(){},methods:{filterProducts(){this.products.matched=[];for(var o in this.products.all)this.products.all[o].code.indexOf(this.search.value)!=-1&&this.products.matched.push(this.products.all[o]);console.log(this.products.matched),this.products.matched.length<=0&&(this.products.matched=this.products.all)},validateData(){return!(this.product.from==""||this.product.to==""||this.product.sender_phone==""||this.product.receiver_phone==""||this.product.price=="")},toggleCreatePopup(o){this.createPopToggle=o===!0?o:!1},saveProduct(){if(!this.validateData())return!1;this.savingLoading=!0,this.$store.dispatch("product/create",this.product).then(o=>{switch(o.status){case 200:this.getRecords();break}this.product=this.clearProduct,this.toggleCreatePopup(!1),this.savingLoading=!1}).catch(o=>{console.log(o)})},getRecords(){this.$store.dispatch("product/list").then(o=>{this.$store.commit("product/setRecords",o.data.records),this.products.all=this.products.matched=this.$store.getters["product/getRecords"].records}).catch(o=>{console.log(o)})}}},Lt={class:"flex flex-wrap justify-around"},Tt={class:"flex flex-wrap w-full h-12 border-b"},St={class:"sct-transaction-date w-1/2 flex leading-10"},zt={class:"sct-transaction-new-package flex flex-row-reverse w-1/2"},Mt={class:"w-1/2"},Ut={class:"w-1/4 leading-10"},Ht={class:"w-1/4 leading-10"},Rt=_("\u1780\u1789\u17D2\u1785\u1794\u17CB\u17A5\u179C\u17C9\u17B6\u1793\u17CB"),Bt={class:"w-full font-extrabold mt-8 mb-4"},Dt={class:"w-full font-extrabold my-4"},jt={class:"w-full font-extrabold my-4"},Nt={class:"w-full font-extrabold my-4"},Ft={class:"w-full font-extrabold my-4"},Ot={class:"w-full font-extrabold my-4"},At={class:"w-full font-extrabold my-4"},It={class:"w-full font-extrabold my-4"},Wt={class:"w-full font-extrabold mt-4 mb-8"},qt={class:"vcb-pop-create"},Et=t("div",{class:"font-bold my-4 text-xl"},"\u178A\u17B6\u1780\u17CB\u1795\u17D2\u1789\u17BE\u179A",-1),Kt=_("\u1791\u17C6\u17A0\u17C6\u1794\u17D2\u179A\u17A2\u1794\u17CB"),Qt=_("60x40x20"),Gt=_("60x60x40"),Jt=_("20x10x10"),Xt=_("20x5x10"),Yt=_("\u1795\u17D2\u1789\u17BE");function Zt(o,e,r,i,s,d){const m=c("van-icon"),f=c("van-divider"),b=c("qrcode-vue"),v=c("van-field"),k=c("van-radio"),P=c("van-radio-group"),C=c("van-cell-group"),L=c("van-button"),a=c("van-popup");return h(),g("div",Lt,[t("div",Tt,[t("div",St,u(s.sctTransactionDate),1),t("div",zt,[t("div",{onClick:e[0]||(e[0]=n=>d.toggleCreatePopup(!0)),class:"mx-2 w-8 h-8 mt-1 text-center hover:border-blue-300 duration-300 cursor-pointer"},[l(m,{name:"add-o",size:32,class:"hover:text-blue-600"})]),t("div",Mt,[q(t("input",{type:"text",onKeyup:e[1]||(e[1]=(...n)=>d.filterProducts&&d.filterProducts(...n)),"onUpdate:modelValue":e[2]||(e[2]=n=>s.search.value=n),class:"bg-gray-100 px-2 h-8 my-1 w-full rounded border border-gray-200 focus:border-blue-600 hover:border-blue-600",placeholder:"\u179F\u17D2\u179C\u17C2\u1784\u179A\u1780\u17A5\u179C\u17C9\u17B6\u1793\u17CB\u178F\u17B6\u1798\u179B\u17C1\u1781\u1780\u17BC\u178A"},null,544),[[E,s.search.value]])]),t("div",Ut," \u1785\u17C6\u1793\u17BC\u1793\u17A5\u179C\u17C9\u17B6\u1793\u17CB\u179F\u179A\u17BB\u1794 \u17D6 "+u(this.products.all.length)+" \u178A\u17BB\u17C6 ",1),t("div",Ht," \u178F\u1798\u17D2\u179B\u17C3\u179F\u179A\u17BB\u1794 \u17D6 "+u(d.totalPrice)+" \u0E3F (THB) ",1)])]),l(f,{class:"w-full text-2xl font-moul"},{default:p(()=>[Rt]),_:1}),(h(!0),g(z,null,M(this.products.matched,(n,D)=>(h(),g("div",{key:D,class:"relative text-left border border-gray-300 bg-gray-50 m-4 p-4"},[t("div",Bt,"Code : "+u(n.code),1),t("div",Dt,"From : "+u(n.from),1),t("div",jt,"To : "+u(n.to),1),t("div",Nt,"Sender : "+u(n.sender_phone),1),t("div",Ft,"Receiver : "+u(n.receiver_phone),1),t("div",Ot,"Weight : "+u(n.weight),1),t("div",At,"Dimension : "+u(n.dimension),1),t("div",It,"Price : "+u(n.price)+" THB",1),t("div",Wt,"Note : "+u(n.note),1),t("div",{onClick:e[3]||(e[3]=T=>d.toggleCreatePopup(!0)),class:"mx-2 w-4 h-4 mt-1 text-center text-red-500 cursor-pointer absolute top-4 right-1"},[l(m,{name:"close",size:20,class:""})]),t("div",{onClick:e[4]||(e[4]=T=>d.toggleCreatePopup(!0)),class:"mx-2 w-4 h-4 mt-1 text-center text-blue-500 cursor-pointer absolute top-4 right-7"},[l(m,{name:"edit",size:20,class:""})]),t("div",{onClick:e[5]||(e[5]=T=>d.toggleCreatePopup(!0)),class:"mx-2 w-4 h-4 mt-1 text-center text-blue-500 absolute left-2 top-4"},[l(m,{name:"logistics",size:20,class:""})]),t("div",{onClick:e[6]||(e[6]=T=>d.toggleCreatePopup(!0)),class:"mx-2 w-4 h-4 mt-1 text-center text-green-500 absolute left-8 top-4"},[l(m,{name:"passed",size:20,class:""})]),l(b,{value:n.code,size:140,level:"H",class:"mx-auto"},null,8,["value"])]))),128)),t("div",qt,[l(a,{show:s.createPopToggle,"onUpdate:show":e[16]||(e[16]=n=>s.createPopToggle=n),class:"p-8"},{default:p(()=>[Et,l(f),l(C,{inset:""},{default:p(()=>[l(v,{modelValue:s.product.from,"onUpdate:modelValue":e[7]||(e[7]=n=>s.product.from=n),label:"\u1795\u17D2\u1789\u17BE\u1785\u17C1\u1789\u1796\u17B8",type:"textarea",placeholder:"\u17A2\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793\u1780\u17D2\u179A\u17BB\u1798\u17A0\u17CA\u17BB\u1793 (\u179F\u17B6\u1781\u17B6)",rows:"1",autosize:"",disabled:""},null,8,["modelValue"]),l(v,{modelValue:s.product.to,"onUpdate:modelValue":e[8]||(e[8]=n=>s.product.to=n),label:"\u1782\u17C4\u179B\u178A\u17C5",type:"textarea",placeholder:"\u1782\u17C4\u179B\u178A\u17C5\u178A\u17C2\u179B\u178A\u17C2\u179B\u178F\u17D2\u179A\u17BC\u179C\u1791\u17C5",rows:"1",autosize:""},null,8,["modelValue"]),l(v,{modelValue:s.product.sender_phone,"onUpdate:modelValue":e[9]||(e[9]=n=>s.product.sender_phone=n),type:"phone",label:"\u179B\u17C1\u1781\u17A2\u17D2\u1793\u1780\u1795\u17D2\u1789\u17BE\u179A",placeholder:"\u179B\u17C1\u1781\u17A2\u17D2\u1793\u1780\u1795\u17D2\u1789\u17BE\u179A"},null,8,["modelValue"]),l(v,{modelValue:s.product.receiver_phone,"onUpdate:modelValue":e[10]||(e[10]=n=>s.product.receiver_phone=n),type:"phone",label:"\u179B\u17C1\u1781\u17A2\u17D2\u1793\u1780\u1791\u1791\u17BD\u179B",placeholder:"\u179B\u17C1\u1781\u17A2\u17D2\u1793\u1780\u1791\u1791\u17BD\u179B"},null,8,["modelValue"]),l(v,{modelValue:s.product.weight,"onUpdate:modelValue":e[11]||(e[11]=n=>s.product.weight=n),type:"number",label:"\u1791\u17C6\u1784\u1793\u17CB",placeholder:"\u1791\u17C6\u1784\u1793\u17CB"},null,8,["modelValue"]),l(f,null,{default:p(()=>[Kt]),_:1}),l(P,{modelValue:s.product.dimension,"onUpdate:modelValue":e[12]||(e[12]=n=>s.product.dimension=n),direction:"horizontal",class:"mx-4 my-6",label:"\u1791\u17C6\u17A0\u17C6\u1794\u17D2\u179A\u17A2\u1794\u17CB",placeholder:"\u1791\u17C6\u17A0\u17C6\u1794\u17D2\u179A\u17A2\u1794\u17CB"},{default:p(()=>[l(k,{name:"60x40x20"},{default:p(()=>[Qt]),_:1}),l(k,{name:"60x60x40"},{default:p(()=>[Gt]),_:1}),l(k,{name:"20x10,10"},{default:p(()=>[Jt]),_:1}),l(k,{name:"20x5x10"},{default:p(()=>[Xt]),_:1})]),_:1},8,["modelValue"]),l(f),l(v,{step:1,modelValue:s.product.price,"onUpdate:modelValue":e[13]||(e[13]=n=>s.product.price=n),type:"number",label:"\u178F\u1798\u17D2\u179B\u17C3",placeholder:"\u178F\u1798\u17D2\u179B\u17C3"},null,8,["modelValue"]),l(v,{modelValue:s.product.note,"onUpdate:modelValue":e[14]||(e[14]=n=>s.product.note=n),label:"\u179F\u1798\u17D2\u1782\u17B6\u179B\u17CB",type:"textarea",placeholder:"\u179F\u1798\u17D2\u1782\u17B6\u179B\u17CB\u1795\u17D2\u179F\u17C1\u1784\u17D7",rows:"3",autosize:""},null,8,["modelValue"])]),_:1}),l(L,{loading:s.savingLoading,"loading-text":"\u179A\u1780\u17D2\u179F\u17B6\u179A\u1791\u17BB\u1780...",type:"primary",class:"my-4 w-1/2",onClick:e[15]||(e[15]=n=>d.saveProduct())},{default:p(()=>[Yt]),_:1},8,["loading"])]),_:1},8,["show"])])])}var eo=y(Ct,[["render",Zt]]);let to=[{path:"",redirect:o=>({path:"/login"})},{path:"/login",component:Pe},{path:"/dashboard",component:Oe,children:[{path:"",component:qe},{path:"/package",component:Pt},{path:"/receive",component:eo}]}];const oo=K({history:Q(),routes:to});let x=G(se);x.use(ie);x.use(J,w);x.provide("axios",x.config.globalProperties.axios);x.use(X);x.use(oo);x.use(Y);x.use(Z);x.mount("#app");
