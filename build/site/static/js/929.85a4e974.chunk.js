/*! For license information please see 929.85a4e974.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkagent_prototype=self.webpackChunkagent_prototype||[]).push([[929],{2854:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(9439),r=n(2791),s=n(7689),o=n(184),c=function(t){t.text;var e=t.handleClose,n=t.onClick,a=t.onCancel;return(0,o.jsx)("div",{className:"fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-600 bg-opacity-50",onClick:e,children:(0,o.jsxs)("div",{className:"bg-white w-80 h-72 rounded-lg overflow-hidden flex flex-col justify-center items-center",children:[(0,o.jsx)("div",{className:"py-2",children:(0,o.jsx)("h3",{className:"text-black text-center font-bold text-2xl",children:"COB"})}),(0,o.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,o.jsx)("button",{className:"bg-sky-600 text-white font-bold text-lg w-32 h-14 rounded-xl mt-5",onClick:n,children:"Properti"}),a&&(0,o.jsx)("button",{className:"bg-amber-400 text-white font-bold text-lg w-32 h-14 rounded-xl mt-5",onClick:a,children:"MV"})]})]})})};var l=function(){var t=(0,r.useState)(!1),e=(0,a.Z)(t,2),n=e[0],l=e[1],i=(0,s.s0)(),u=(0,r.useState)(!1),f=(0,a.Z)(u,2),x=f[0],h=f[1],d=(0,r.useState)(""),p=(0,a.Z)(d,2),m=p[0],g=p[1];return(0,o.jsxs)("div",{className:"fixed bottom-16 right-4",children:[(0,o.jsx)("button",{className:"bg-red-500 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-md",onClick:function(){l(!n)},children:(0,o.jsx)("svg",{className:"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})})}),n&&(0,o.jsx)("button",{onClick:function(){h(!0),g("klaim")},className:"bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center absolute right-2 bottom-24",children:(0,o.jsx)("span",{className:"text-xs font-bold",children:"Klaim"})}),n&&(0,o.jsx)("button",{onClick:function(){h(!0),g("new")},className:"bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center absolute right-2 bottom-44 64",children:(0,o.jsx)("span",{className:"text-xs font-bold",children:"New"})}),x&&(0,o.jsx)(c,{onClick:function(){return i("/agent/application/".concat(m,"harta"))},onCancel:function(){return i("/agent/application/".concat(m,"mv"))},handleClose:function(){return h(!1)}})]})}},7420:function(t,e){e.Z=function(t){var e=t.replace(/[^0-9]/g,""),n=parseInt(e);return isNaN(n)?"":"Rp "+n.toLocaleString("id-ID")}},6078:function(t,e,n){n(2791);var a=n(184);e.Z=function(t){return(0,a.jsx)("main",{className:"font-Poppins rounded-30px px-8 py-6 bg-login mb-16 min-h-screen  w-screen",children:t.content})}},4780:function(t,e,n){n(2791);var a=n(9434),r=n(7060),s=n(7689),o=n(184);e.Z=function(t){var e=(0,a.I0)(),n=(0,s.s0)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("nav",{className:"flex items-center justify-between bg-primary w-full h-14 lg:h-78px font-Poppins px-4 lg:px-2",children:[(0,o.jsx)("span",{className:"text-xl font-bold text-white",children:"BCA Insurance"}),(0,o.jsx)("img",{className:"w-10 h-7",src:"/agent/assets/logout.svg",alt:"logout",onClick:function(){e((0,r.kS)()),n("/agent/")}})]})})}},7960:function(t,e,n){n(2791);var a=n(7689),r=n(184);e.Z=function(t){var e=(0,a.s0)();return(0,r.jsxs)("div",{className:"flex items-center justify-between  fixed bottom-0 left-0 w-full z-50 bg-primary h-14 p-5 font-Poppins rounded-t-30px",children:[(0,r.jsxs)("div",{onClick:function(){e("/agent/home")},className:"flex items-center justify-center flex-col w-20",children:[(0,r.jsx)("img",{className:"w-5 h-5",src:"/agent/assets/home.svg",alt:"home"}),(0,r.jsx)("span",{className:"text-white",children:"Home"})]}),(0,r.jsxs)("div",{onClick:function(){e("/agent/application")},className:"flex items-center justify-center flex-col w-20",children:[(0,r.jsx)("img",{className:"w-5 h-5",src:"/agent/assets/application.svg",alt:"application"}),(0,r.jsx)("span",{className:"text-white",children:"Application"})]}),(0,r.jsxs)("div",{onClick:function(){e("/agent/commision")},className:"flex items-center justify-center flex-col w-20",children:[(0,r.jsx)("img",{className:"w-5 h-5",src:"/agent/assets/commision.svg",alt:"commision"}),(0,r.jsx)("span",{className:"text-white",children:"Commision"})]})]})}},4929:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var a=n(4165),r=n(5861),s=n(9439),o=n(2791),c=n(4780),l=n(7960),i=n(6078),u=n(2854),f=n(9434),x=n(7420),h=n(184),d=function(t){var e=t.newData,n=t.modal,a=t.showModal,r=t.setShowModal;return(0,h.jsx)(h.Fragment,{children:e.map((function(t,e){return(0,h.jsxs)("div",{className:"w-full lg:w-9/12 flex flex-col justify-center bg-white shadow-md rounded-lg p-3 my-3 h-1/5",children:[(0,h.jsxs)("div",{className:"grid grid-cols-2",children:[(0,h.jsx)("span",{children:t.addedDate}),(0,h.jsx)("span",{className:"text-end",children:t.COB}),(0,h.jsx)("span",{children:t.insuredName}),(0,h.jsx)("span",{className:"text-end",children:t.polis}),(0,h.jsx)("span",{className:"",children:t.type}),(0,h.jsx)("span",{className:"text-end",children:t.status})]}),(0,h.jsx)("img",{className:"h-5 w-5 self-center",onClick:function(){return n(e)},src:"/agent/assets/arrow.svg",alt:"arrow"}),a===e&&("MV"===t.COB?(0,h.jsx)("div",{className:"fixed top-0 left-0 font-Poppins w-screen h-screen z-50 bg-black bg-opacity-50 flex items-center justify-center",children:(0,h.jsxs)("div",{className:"w-11/12 h-3/4 overflow-y-auto lg:w-9/12 bg-white rounded-xl p-4 flex flex-col",children:[(0,h.jsx)("span",{className:"w-full text-center text-xl font-semibold",children:t.insuredName}),(0,h.jsx)("span",{className:"w-full mt-5 text-start text-base",children:"NIK: ".concat(t.NIK)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Phone: ".concat(t.phone)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Email: ".concat(t.email)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Alamat:"}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"".concat(t.address)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"COB: ".concat(t.COB)}),(0,h.jsx)("span",{children:"\xa0"}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Okupasi: ".concat(t.okupasi)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"TSI: ".concat((0,x.Z)(t.tsi.toString()))}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Pertanggungan: ".concat(t.polis)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Periode: ".concat(t.periode)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Merek: ".concat(t.merek)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Model: ".concat(t.model)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"No Polisi: ".concat(t.plat)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"No Mesin: ".concat(t.mesin)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"No rangka: ".concat(t.rangka)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Perluasan: ".concat(t.perluasan.map((function(t){return t})).join(" || ").toUpperCase())}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Diskon: ".concat(t.diskon,"%")}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Potential Premi: ".concat((0,x.Z)(t.potentialPremi.toString()))}),(0,h.jsx)("img",{src:t.sign,alt:"sign",className:""}),(0,h.jsx)("button",{className:"text-sky-600 text-lg font-medium transition-transform transform-gpu duration-300 active:scale-90",onClick:function(){return r(-1)},children:"Close"})]})}):(0,h.jsx)("div",{className:"fixed top-0 left-0 font-Poppins w-screen h-screen z-50 bg-black bg-opacity-50 flex items-center justify-center",children:(0,h.jsxs)("div",{className:"w-11/12 h-3/4 overflow-y-auto lg:w-9/12 bg-white rounded-xl p-4 flex flex-col",children:[(0,h.jsx)("span",{className:"w-full text-center text-xl font-semibold",children:t.insuredName}),(0,h.jsx)("span",{className:"w-full mt-5 text-start text-base",children:"NIK: ".concat(t.NIK)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Phone: ".concat(t.phone)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Email: ".concat(t.email)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Alamat Objek Pertanggungan:"}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"".concat(t.alamatObj)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"COB: ".concat(t.COB)}),(0,h.jsx)("span",{children:"\xa0"}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Okupasi: ".concat(t.okupasi)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Rate: ".concat("".concat(1e3*parseFloat(t.rate),"\u2030"))}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Bangunan: ".concat((0,x.Z)(t.bangunan.toString()))}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Content: ".concat((0,x.Z)(t.content.toString()))}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"TSI: ".concat((0,x.Z)(t.tsi.toString()))}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Pertanggungan: ".concat(t.polis)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Periode: ".concat(t.periode)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Kelas: ".concat(t.kelas)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Perluasan: ".concat(t.perluasan.map((function(t){return t})).join(" || ").toUpperCase())}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Diskon: ".concat(t.diskon,"%")}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Potential Premi: ".concat((0,x.Z)(t.potentialPremi.toString()))}),(0,h.jsx)("img",{src:t.sign,alt:"sign",className:""}),(0,h.jsx)("button",{className:"text-sky-600 text-lg pt-3 font-medium transition-transform transform-gpu duration-300 active:scale-90",onClick:function(){return r(-1)},children:"Close"})]})}))]},e)}))})},p=function(t){var e=t.klaimData,n=t.modalK,a=t.setShowModalK,r=t.showModalK;return(0,h.jsx)(h.Fragment,{children:e.map((function(t,e){return(0,h.jsxs)("div",{className:"w-full flex flex-col lg:w-9/12 justify-center bg-white shadow-md rounded-lg p-3 my-3 h-1/5",children:[(0,h.jsxs)("div",{className:"grid grid-cols-2",children:[(0,h.jsx)("span",{children:t.addedDate}),(0,h.jsx)("span",{className:"text-end",children:t.COB}),(0,h.jsx)("span",{children:t.insuredName}),(0,h.jsx)("span",{className:"text-end",children:t.polis}),(0,h.jsx)("span",{className:"",children:t.type}),(0,h.jsx)("span",{className:"text-end",children:t.status})]}),(0,h.jsx)("img",{className:"h-5 w-5 self-center",onClick:function(){return n(e)},src:"/agent/assets/arrow.svg",alt:"arrow"}),r===e&&(0,h.jsx)("div",{className:"fixed top-0 left-0 font-Poppins w-screen h-screen z-50 bg-black bg-opacity-50 flex items-center justify-center",children:(0,h.jsxs)("div",{className:"w-11/12 lg:w-9/12 bg-white rounded-xl p-4 flex flex-col",children:[(0,h.jsx)("span",{className:"w-full text-center text-xl font-semibold",children:t.insuredName}),(0,h.jsx)("span",{className:"w-full mt-5 text-start text-base",children:"No Polis: ".concat(t.nPolis)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"COB: ".concat(t.COB)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Pertanggungan: ".concat(t.polis)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Okupasi: ".concat(t.okupasi)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Date of Loss : ".concat(t.dol)}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"Keterangan:"}),(0,h.jsx)("span",{className:"w-full text-start text-base",children:"\xa0"}),(0,h.jsx)("textarea",{className:"w-full h-40 border-solid border-2 rounded-xl p-1 border-gray-300 text-start text-base overflow-y-auto",defaultValue:t.kronologi}),(0,h.jsx)("button",{className:"text-sky-600 text-lg mt-2 font-medium transition-transform transform-gpu duration-300 active:scale-90",onClick:function(){return a(-1)},children:"Close"})]})})]},e)}))})},m=function(){var t=(0,f.v9)((function(t){return t.username})).username,e=(0,o.useState)(-1),n=(0,s.Z)(e,2),x=n[0],m=n[1],g=(0,o.useState)(-1),w=(0,s.Z)(g,2),v=w[0],j=w[1],b=(0,o.useState)([]),y=(0,s.Z)(b,2),N=y[0],k=y[1],C=(0,o.useState)([]),P=(0,s.Z)(C,2),L=P[0],Z=P[1];(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://agentserver-production.up.railway.app/".concat(t,"/list"));case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,k(r),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://agentserver-production.up.railway.app/".concat(t,"/listklaim"));case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,Z(r),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c.Z,{}),(0,h.jsx)(i.Z,{content:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("span",{className:"text-xl font-semibold",children:"Application List"}),N.length>0||L.length>0?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d,{modal:function(t){m(t)},showModal:x,setShowModal:m,newData:N}),(0,h.jsx)(p,{klaimData:L,modalK:function(t){j(t)},setShowModalK:j,showModalK:v})]}):(0,h.jsx)("div",{className:"flex justify-center items-center w-full",children:(0,h.jsx)("span",{className:"font-Poppins font-semibold text-2xl",children:"No List"})}),(0,h.jsx)(u.Z,{})]})}),(0,h.jsx)(l.Z,{})]})}},5861:function(t,e,n){function a(t,e,n,a,r,s,o){try{var c=t[s](o),l=c.value}catch(i){return void n(i)}c.done?e(l):Promise.resolve(l).then(a,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,s){var o=t.apply(e,n);function c(t){a(o,r,s,c,l,"next",t)}function l(t){a(o,r,s,c,l,"throw",t)}c(void 0)}))}}n.d(e,{Z:function(){return r}})},4165:function(t,e,n){n.d(e,{Z:function(){return r}});var a=n(1002);function r(){r=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,s=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(S){u=function(t,e,n){return t[e]=n}}function f(t,e,n,a){var r=e&&e.prototype instanceof d?e:d,o=Object.create(r.prototype),c=new L(a||[]);return s(o,"_invoke",{value:N(t,n,c)}),o}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}t.wrap=f;var h={};function d(){}function p(){}function m(){}var g={};u(g,c,(function(){return this}));var w=Object.getPrototypeOf,v=w&&w(w(Z([])));v&&v!==e&&n.call(v,c)&&(g=v);var j=m.prototype=d.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function y(t,e){function r(s,o,c,l){var i=x(t[s],t,o);if("throw"!==i.type){var u=i.arg,f=u.value;return f&&"object"==(0,a.Z)(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,l)}),(function(t){r("throw",t,c,l)})):e.resolve(f).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,l)}))}l(i.arg)}var o;s(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,a){r(t,n,e,a)}))}return o=o?o.then(a,a):a()}})}function N(t,e,n){var a="suspendedStart";return function(r,s){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw s;return O()}for(n.method=r,n.arg=s;;){var o=n.delegate;if(o){var c=k(o,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=x(t,e,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}function k(t,e){var n=e.method,a=t.iterator[n];if(void 0===a)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var r=x(a,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var s=r.arg;return s?s.done?(e[t.resultName]=s.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function Z(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,r=function e(){for(;++a<t.length;)if(n.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=m,s(j,"constructor",{value:m,configurable:!0}),s(m,"constructor",{value:p,configurable:!0}),p.displayName=u(m,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,i,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},b(y.prototype),u(y.prototype,l,(function(){return this})),t.AsyncIterator=y,t.async=function(e,n,a,r,s){void 0===s&&(s=Promise);var o=new y(f(e,n,a,r),s);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},b(j),u(j,i,"Generator"),u(j,c,(function(){return this})),u(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var a in e)n.push(a);return n.reverse(),function t(){for(;n.length;){var a=n.pop();if(a in e)return t.value=a,t.done=!1,t}return t.done=!0,t}},t.values=Z,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(n,a){return o.type="throw",o.arg=t,e.next=n,a&&(e.method="next",e.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r],o=s.completion;if("root"===s.tryLoc)return a("end");if(s.tryLoc<=this.prev){var c=n.call(s,"catchLoc"),l=n.call(s,"finallyLoc");if(c&&l){if(this.prev<s.catchLoc)return a(s.catchLoc,!0);if(this.prev<s.finallyLoc)return a(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return a(s.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return a(s.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var s=r;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=t,o.arg=e,s?(this.method="next",this.next=s.finallyLoc,h):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var a=n.completion;if("throw"===a.type){var r=a.arg;P(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:Z(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}}}]);
//# sourceMappingURL=929.85a4e974.chunk.js.map