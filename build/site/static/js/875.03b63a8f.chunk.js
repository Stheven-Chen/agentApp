"use strict";(self.webpackChunkagent_prototype=self.webpackChunkagent_prototype||[]).push([[875],{5582:function(e,n,t){t(2791);var s=t(3077),a=t(152),i=t(184);a.kL.register(a.uw,a.f$,a.ZL,a.Dx,a.u,a.De);n.Z=function(e){return(0,i.jsx)(s.$Q,{data:e.data,options:e.options})}},7420:function(e,n){n.Z=function(e){var n=e.replace(/[^0-9]/g,""),t=parseInt(n);return isNaN(t)?"":"Rp "+t.toLocaleString("id-ID")}},6078:function(e,n,t){t(2791);var s=t(184);n.Z=function(e){return(0,s.jsx)("main",{className:"font-Poppins rounded-30px px-8 py-6 bg-login mb-16 min-h-screen  w-screen",children:e.content})}},4780:function(e,n,t){t(2791);var s=t(9434),a=t(7060),i=t(7689),o=t(184);n.Z=function(e){var n=(0,s.I0)(),t=(0,i.s0)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("nav",{className:"flex items-center justify-between bg-primary w-full h-14 lg:h-78px font-Poppins px-4 lg:px-2",children:[(0,o.jsx)("span",{className:"text-xl font-bold text-white",children:"BCA Insurance"}),(0,o.jsx)("img",{className:"w-10 h-7",src:"/agent/assets/logout.svg",alt:"logout",onClick:function(){n((0,a.kS)()),t("/agent/")}})]})})}},7960:function(e,n,t){t(2791);var s=t(7689),a=t(184);n.Z=function(e){var n=(0,s.s0)();return(0,a.jsxs)("div",{className:"flex items-center justify-between  fixed bottom-0 left-0 w-full z-50 bg-primary h-14 p-5 font-Poppins rounded-t-30px",children:[(0,a.jsxs)("div",{onClick:function(){n("/agent/home")},className:"flex items-center justify-center flex-col w-20",children:[(0,a.jsx)("img",{className:"w-5 h-5",src:"/agent/assets/home.svg",alt:"home"}),(0,a.jsx)("span",{className:"text-white",children:"Home"})]}),(0,a.jsxs)("div",{onClick:function(){n("/agent/application")},className:"flex items-center justify-center flex-col w-20",children:[(0,a.jsx)("img",{className:"w-5 h-5",src:"/agent/assets/application.svg",alt:"application"}),(0,a.jsx)("span",{className:"text-white",children:"Application"})]}),(0,a.jsxs)("div",{onClick:function(){n("/agent/commision")},className:"flex items-center justify-center flex-col w-20",children:[(0,a.jsx)("img",{className:"w-5 h-5",src:"/agent/assets/commision.svg",alt:"commision"}),(0,a.jsx)("span",{className:"text-white",children:"Commision"})]})]})}},6875:function(e,n,t){t.r(n);var s=t(1413),a=t(4165),i=t(5861),o=t(9439),c=t(2791),r=t(4780),l=t(7960),u=t(6078),m=t(9434),x=t(5582),f=t(7420),d=t(7689),h=t(4313),p=t(184);n.default=function(){var e=(0,c.useState)({minggu:"",bulan:"",tahun:"",showCom:""}),n=(0,o.Z)(e,2),t=n[0],g=n[1],j=(0,m.v9)((function(e){return e.username})).username,w=(0,d.s0)(),b=(0,m.I0)();(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var n,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://agentserver-production.up.railway.app/".concat(j,"/commision"));case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,g({minggu:t[0].commission.mingguan,bulan:t[0].commission.bulanan,tahun:t[0].commission.tahunan,showCom:t[0].commission.mingguan});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[j]);var v=t.minggu,N=t.bulan,k=t.tahun,C=t.showCom;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.Z,{}),(0,p.jsx)(u.Z,{content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{className:"text-xl font-semibold font-Poppins",children:"Commision"}),(0,p.jsxs)("div",{className:"text-xl font-semibold flex justify-between items-center mt-5 font-Poppins",children:[v?(0,p.jsxs)("div",{className:"flex flex-col",children:[(0,p.jsx)("span",{children:"".concat((0,f.Z)(Object.values(v).flatMap((function(e){return e})).reduce((function(e,n){return e+Number(n)}),0).toString()))}),(0,p.jsx)("span",{className:"text-sm text-gray-500",children:"Commision This Month"})]}):(0,p.jsx)("span",{children:"-"}),(0,p.jsx)("button",{onClick:function(){b((0,h.I$)({jumlah:Object.values(v).flatMap((function(e){return e})).reduce((function(e,n){return e+Number(n)}),0)})),w("withdraw")},className:"bg-emerald-500 text-white rounded-xl p-2 text-lg shadow-lg transform-gpu transition-transform duration-300 active:scale-90",children:"Withdraw"})]}),(0,p.jsx)("div",{className:"flex flex-col mt-5 justify-center items-center font-Poppins",children:k&&(0,p.jsxs)("div",{className:"bg-white w-full rounded-xl shadow-lg p-4",children:[(0,p.jsx)("span",{className:"text-2xl font-semibold font-Poppins text-dark",children:"Premi"}),(0,p.jsxs)("div",{className:"flex justify-between items-center my-2 space-x-4",children:[(0,p.jsx)("button",{className:"bg-sky-500 rounded-full w-16 text-sm text-white",onClick:function(){return g((0,s.Z)((0,s.Z)({},t),{},{showCom:v}))},children:"Week"}),(0,p.jsx)("button",{className:"bg-sky-500 rounded-full w-16 text-sm text-white",onClick:function(){return g((0,s.Z)((0,s.Z)({},t),{},{showCom:N}))},children:"Month"}),(0,p.jsx)("button",{className:"bg-sky-500 rounded-full w-16 text-sm text-white",onClick:function(){return g((0,s.Z)((0,s.Z)({},t),{},{showCom:k}))},children:"Year"})]}),(0,p.jsx)("div",{className:"mt-4 mx-auto max-w-lg ",children:(0,p.jsx)(x.Z,{data:{labels:Object.keys(C),datasets:[{label:"Commision",data:Object.values(C),backgroundColor:"#E91E63"}]},options:{responsive:!0}})})]})})]})}),(0,p.jsx)(l.Z,{})]})}}}]);
//# sourceMappingURL=875.03b63a8f.chunk.js.map