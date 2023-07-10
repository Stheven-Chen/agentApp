"use strict";(self.webpackChunkagent_prototype=self.webpackChunkagent_prototype||[]).push([[568],{2854:function(e,n,t){t.d(n,{Z:function(){return r}});var s=t(9439),l=t(2791),a=t(7689),i=t(184),o=function(e){e.text;var n=e.onClick,t=e.onCancel;return(0,i.jsx)("div",{className:"fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-600 bg-opacity-50",children:(0,i.jsxs)("div",{className:"bg-white w-80 h-72 rounded-lg overflow-hidden flex flex-col justify-center items-center",children:[(0,i.jsx)("div",{className:"py-2",children:(0,i.jsx)("h3",{className:"text-black text-center font-bold text-2xl",children:"COB"})}),(0,i.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,i.jsx)("button",{className:"bg-sky-600 text-white  font-bold text-lg w-32 h-14 rounded-xl mt-5",onClick:n,children:"Non MV"}),t&&(0,i.jsx)("button",{className:"bg-amber-400 text-white font-bold text-lg w-32 h-14 rounded-xl mt-5",onClick:t,children:"MV"})]})]})})};var r=function(){var e=(0,l.useState)(!1),n=(0,s.Z)(e,2),t=n[0],r=n[1],c=(0,a.s0)(),d=(0,l.useState)(!1),u=(0,s.Z)(d,2),m=u[0],x=u[1],h=(0,l.useState)(""),p=(0,s.Z)(h,2),f=p[0],j=p[1];return(0,i.jsxs)("div",{className:"fixed bottom-16 right-4",children:[(0,i.jsx)("button",{className:"bg-red-500 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-md",onClick:function(){r(!t)},children:(0,i.jsx)("svg",{className:"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})})}),t&&(0,i.jsx)("button",{onClick:function(){x(!0),j("klaim")},className:"bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center absolute right-2 bottom-24",children:(0,i.jsx)("span",{className:"text-xs font-bold",children:"Klaim"})}),t&&(0,i.jsx)("button",{onClick:function(){x(!0),j("new")},className:"bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center absolute right-2 bottom-44 64",children:(0,i.jsx)("span",{className:"text-xs font-bold",children:"New"})}),m&&(0,i.jsx)(o,{onClick:function(){return c("/agent/application/".concat(f,"harta"))},onCancel:function(){return c("/agent/application/".concat(f,"mv"))}})]})}},8716:function(e,n){n.Z=function(){return(new Date).toISOString().split("T")[0]}},429:function(e,n,t){t(2791);var s=t(184);n.Z=function(e){var n=e.isPassword?"password":"text",t="w-full  h-10 mt-5  p-3  font-Poppins font-semibold ".concat(e.additionalStyles);return(0,s.jsx)("input",{onChange:e.onChange,type:n,className:t,placeholder:e.placeholder,value:e.value,id:e.id,name:e.name,pattern:e.pattern})}},6078:function(e,n,t){t(2791);var s=t(184);n.Z=function(e){return(0,s.jsx)("main",{className:"font-Poppins rounded-30px px-8 py-6 bg-login mb-16 min-h-screen  w-screen",children:e.content})}},4780:function(e,n,t){t(2791);var s=t(9434),l=t(7060),a=t(7689),i=t(184);n.Z=function(e){var n=(0,s.I0)(),t=(0,a.s0)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("nav",{className:"flex items-center justify-between bg-primary w-full h-14 lg:h-78px font-Poppins px-4 lg:px-2",children:[(0,i.jsx)("span",{className:"text-xl font-bold text-white",children:"BCA Insurance"}),(0,i.jsx)("img",{className:"w-10 h-7",src:"/agent/assets/logout.svg",alt:"logout",onClick:function(){n((0,l.kS)()),t("/agent/")}})]})})}},7960:function(e,n,t){t(2791);var s=t(7689),l=t(184);n.Z=function(e){var n=(0,s.s0)();return(0,l.jsxs)("div",{className:"flex items-center justify-between  fixed bottom-0 left-0 w-full z-50 bg-primary h-14 p-5 font-Poppins rounded-t-30px",children:[(0,l.jsxs)("div",{onClick:function(){n("/agent/home")},className:"flex items-center justify-center flex-col w-20",children:[(0,l.jsx)("img",{className:"w-5 h-5",src:"/agent/assets/home.svg",alt:"home"}),(0,l.jsx)("span",{className:"text-white",children:"Home"})]}),(0,l.jsxs)("div",{onClick:function(){n("/agent/application")},className:"flex items-center justify-center flex-col w-20",children:[(0,l.jsx)("img",{className:"w-5 h-5",src:"/agent/assets/application.svg",alt:"application"}),(0,l.jsx)("span",{className:"text-white",children:"Application"})]}),(0,l.jsxs)("div",{onClick:function(){n("/agent/commision")},className:"flex items-center justify-center flex-col w-20",children:[(0,l.jsx)("img",{className:"w-5 h-5",src:"/agent/assets/commision.svg",alt:"commision"}),(0,l.jsx)("span",{className:"text-white",children:"Commision"})]})]})}},3568:function(e,n,t){t.r(n);var s=t(4942),l=t(1413),a=t(9439),i=t(2791),o=t(4780),r=t(7960),c=t(6078),d=t(429),u=t(2854),m=t(9434),x=t(6841),h=t(7689),p=t(8716),f=t(184);n.default=function(){var e=(0,i.useState)({nPolis:"",insuredName:"",periode:"",polis:"",okupasi:"",dol:"",kronologi:""}),n=(0,a.Z)(e,2),t=n[0],j=n[1],g=(0,m.I0)(),v=(0,h.s0)(),N=(0,m.v9)((function(e){return e.username})).username,b=(0,p.Z)(),w=new Date;w.setDate(w.getDate()-10);var k=w.toISOString().split("T")[0],y=function(e){var n=e.target,t=n.name,a=n.value;j((function(e){return(0,l.Z)((0,l.Z)({},e),{},(0,s.Z)({},t,a))}))};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.Z,{}),(0,f.jsx)(r.Z,{}),(0,f.jsx)(c.Z,{content:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{className:"font-semibold text-xl mb-5",children:"Klaim"}),(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g((0,x.EF)({insuredName:t.insuredName,nPolis:t.nPolis,type:"Klaim",COB:"Harta Benda",periode:t.periode,polis:t.polis,okupasi:t.okupasi,dol:t.dol,kronologi:t.kronologi,addedDate:b,status:"First Report",agentName:N})),v("/agent/application")},children:[(0,f.jsxs)("div",{className:"relative my-5",children:[(0,f.jsx)("label",{htmlFor:"nPolis",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"No Polis"}),(0,f.jsx)(d.Z,{id:"nPolis",name:"nPolis",placeholder:"",value:t.nPolis,onChange:y,additionalStyles:"rounded-xl pl-3"})]}),(0,f.jsxs)("div",{className:"relative my-5",children:[(0,f.jsx)("label",{htmlFor:"insuredName",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"Insured Name"}),(0,f.jsx)(d.Z,{id:"insuredName",name:"insuredName",placeholder:"",value:t.insuredName,onChange:y,additionalStyles:"rounded-xl pl-3"})]}),(0,f.jsxs)("div",{className:"relative my-5",children:[(0,f.jsx)("label",{htmlFor:"polis",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"Polis:"}),(0,f.jsxs)("select",{id:"polis",name:"polis",value:t.polis,onChange:y,className:"rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold",children:[(0,f.jsx)("option",{value:"",children:"Jenis Polis"}),(0,f.jsx)("option",{value:"FLEXAS",children:"FLEXAS"}),(0,f.jsx)("option",{value:"PAR",children:"PAR"})]})]}),(0,f.jsxs)("div",{className:"relative my-5",children:[(0,f.jsx)("label",{htmlFor:"okupasi",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"Okupasi:"}),(0,f.jsxs)("select",{id:"okupasi",name:"okupasi",value:t.okupasi,onChange:y,className:"rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold",children:[(0,f.jsx)("option",{value:"",children:"Pilih Okupasi"}),(0,f.jsx)("option",{value:"Rumah Tinggal",children:"Rumah Tinggal"}),(0,f.jsx)("option",{value:"Ruko",children:"Ruko"})]})]}),(0,f.jsxs)("div",{className:"relative my-5",children:[(0,f.jsx)("label",{htmlFor:"dol",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"Tanggal Kejadian:"}),(0,f.jsx)("div",{className:"flex justify-between items-center gap-4",children:(0,f.jsx)("input",{id:"dol",name:"dol",placeholder:"",value:t.dol,onChange:y,className:"rounded-xl pl-3 w-full h-10 mt-5 p-3 font-Poppins font-semibold",type:"date",min:k,max:b})}),(0,f.jsxs)("div",{className:"relative my-5",children:[(0,f.jsx)("label",{htmlFor:"kronologi",className:"absolute left-3 -top-2.5 transition-all duration-200",children:"Kronologi Kejadian"}),(0,f.jsx)("textarea",{id:"kronologi",name:"kronologi",placeholder:"",value:t.kronologi,onChange:y,className:"rounded-xl pl-3 w-full h-32 mt-5 p-3 font-Poppins font-semibold",rows:5})]})]}),(0,f.jsx)("div",{className:"flex justify-center",children:(0,f.jsx)("button",{type:"submit",className:"bg-sky-500 h-8 w-32 text-white font-Poppins rounded-xl transform-gpu transition-transform duration-300 active:scale-90",children:"Send"})})]})]})}),(0,f.jsx)(u.Z,{})]})}}}]);
//# sourceMappingURL=568.f8c8d261.chunk.js.map