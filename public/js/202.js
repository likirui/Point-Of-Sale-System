/*! For license information please see 202.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[202],{821:(t,r,e)=>{e.r(r),e.d(r,{default:()=>u});function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function i(){i=function(){return r};var t,r={},e=Object.prototype,o=e.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function v(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{v({},"")}catch(t){v=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var i=r&&r.prototype instanceof g?r:g,o=Object.create(i.prototype),s=new N(n||[]);return a(o,"_invoke",{value:S(t,e,s)}),o}function d(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var h="suspendedStart",p="suspendedYield",_="executing",y="completed",m={};function g(){}function b(){}function w(){}var C={};v(C,c,(function(){return this}));var x=Object.getPrototypeOf,O=x&&x(x(I([])));O&&O!==e&&o.call(O,c)&&(C=O);var E=w.prototype=g.prototype=Object.create(C);function L(t){["next","throw","return"].forEach((function(r){v(t,r,(function(t){return this._invoke(r,t)}))}))}function j(t,r){function e(i,a,s,c){var l=d(t[i],t,a);if("throw"!==l.type){var u=l.arg,v=u.value;return v&&"object"==n(v)&&o.call(v,"__await")?r.resolve(v.__await).then((function(t){e("next",t,s,c)}),(function(t){e("throw",t,s,c)})):r.resolve(v).then((function(t){u.value=t,s(u)}),(function(t){return e("throw",t,s,c)}))}c(l.arg)}var i;a(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,i){e(t,n,r,i)}))}return i=i?i.then(o,o):o()}})}function S(r,e,n){var i=h;return function(o,a){if(i===_)throw new Error("Generator is already running");if(i===y){if("throw"===o)throw a;return{value:t,done:!0}}for(n.method=o,n.arg=a;;){var s=n.delegate;if(s){var c=k(s,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=_;var l=d(r,e,n);if("normal"===l.type){if(i=n.done?y:p,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=y,n.method="throw",n.arg=l.arg)}}}function k(r,e){var n=e.method,i=r.iterator[n];if(i===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,k(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var o=d(i,r.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function T(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function I(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var i=-1,a=function e(){for(;++i<r.length;)if(o.call(r,i))return e.value=r[i],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(n(r)+" is not iterable")}return b.prototype=w,a(E,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:b,configurable:!0}),b.displayName=v(w,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,v(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},L(j.prototype),v(j.prototype,l,(function(){return this})),r.AsyncIterator=j,r.async=function(t,e,n,i,o){void 0===o&&(o=Promise);var a=new j(f(t,e,n,i),o);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(E),v(E,u,"Generator"),v(E,c,(function(){return this})),v(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=I,N.prototype={constructor:N,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!r)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function n(n,i){return s.type="throw",s.arg=r,e.next=n,i&&(e.method="next",e.arg=t),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var i=n.arg;P(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:I(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),m}},r}function o(t,r,e,n,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void e(t)}s.done?r(c):Promise.resolve(c).then(n,i)}function a(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function s(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?a(Object(e),!0).forEach((function(r){c(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function c(t,r,e){var i;return i=function(t,r){if("object"!=n(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(r,"string"),(r="symbol"==n(i)?i:String(i))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}const l={name:"login",data:function(){return{printLoading:!0,printObj:{id:"printMe",popTitle:"Order report",extraHead:'<meta http-equiv="Content-Language"content="zh-cn"/>',beforeOpenCallback:function(t){t.printLoading=!0,console.log("asadzaman")},openCallback:function(t){t.printLoading=!1,console.log("asadzaman")},closeCallback:function(t){console.log("asadzaman")}},auth:{email:"",password:""},processing:!1,order:{},orderproduct:[],sum:0}},created:function(){this.getResults()},methods:s(s({getResults:function(){var t=this;axios.get("/api/order-view/".concat(this.$route.params.id)).then((function(r){t.order=r.data.order,t.orderproduct=r.data.orderproduct,t.sum=r.data.sum}))}},(0,e(353).i0)({signIn:"auth/login"})),{},{login:function(){var t,r=this;return(t=i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.processing=!0,t.next=3,axios.get("/sanctum/csrf-cookie");case 3:return t.next=5,axios.post("/login",r.auth).then((function(t){t.data,r.signIn()})).catch((function(t){var r=t.response.data;alert(r.message)})).finally((function(){r.processing=!1}));case 5:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(n,i){var a=t.apply(r,e);function s(t){o(a,n,i,s,c,"next",t)}function c(t){o(a,n,i,s,c,"throw",t)}s(void 0)}))})()}})};const u=(0,e(486).A)(l,(function(){var t=this,r=t._self._c;return r("section",{staticClass:"section-content padding-y-sm bg-default",staticStyle:{padding:"50px"}},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 card padding-y-sm card"},[r("div",{staticClass:"row"},[t._m(0),t._v(" "),r("div",{staticClass:"col-md-6"},[r("form",{staticClass:"search-wrap",staticStyle:{float:"right"},attrs:{action:"#"}},[r("div",{staticClass:"input-group"},[r("div",{staticClass:"text-end"},[r("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"orderlist"}}},[r("i",{staticClass:"fa fa-file-pdf-o"}),t._v(" Back to order list")]),t._v(" "),r("button",{directives:[{name:"print",rawName:"v-print",value:t.printObj,expression:"printObj"}],staticClass:"btn btn-primary",attrs:{type:"button"}},[r("i",{staticClass:"fa fa-print"}),t._v(" Print")])],1)])])])]),t._v(" "),r("hr"),t._v(" "),r("ul",{staticClass:"nav bg radius nav-pills nav-fill mb-3 bg",attrs:{role:"tablist"}}),t._v(" "),r("span",{attrs:{id:"items"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body",attrs:{id:"printMe"}},[r("div",{attrs:{id:"invoice"}},[r("div",{staticClass:"toolbar hidden-print"}),t._v(" "),r("div",{staticClass:"invoice overflow-auto"},[r("div",{staticStyle:{"min-width":"600px"}},[t._m(1),t._v(" "),r("main",[r("div",{staticClass:"row contacts"},[r("div",{staticClass:"col invoice-to"},[r("div",{staticClass:"text-gray-light"},[t._v("INVOICE TO:")]),t._v(" "),r("h2",{staticClass:"to"},[t._v(t._s(t.order.customername))]),t._v(" "),r("div",{staticClass:"email"},[t._v("Phone : "),r("a",{attrs:{href:"#"}},[t._v(t._s(t.order.customerphone))])])]),t._v(" "),r("div",{staticClass:"col invoice-details"},[r("h1",{staticClass:"invoice-id"},[t._v("INVOICE "+t._s(t.order.ordernumber))]),t._v(" "),r("div",{staticClass:"date"},[t._v("Date of Invoice: "+t._s(t.order.created_at))])])]),t._v(" "),r("table",[t._m(2),t._v(" "),r("tbody",t._l(t.orderproduct,(function(e,n){return r("tr",{key:e.id},[r("td",{staticClass:"no"},[t._v(t._s(n+1))]),t._v(" "),r("td",{staticClass:"text-left"},[r("img",{staticStyle:{width:"100px"},attrs:{src:e.image}})]),t._v(" "),r("td",{staticClass:"text-left"},[t._v(t._s(e.name))]),t._v(" "),r("td",{staticClass:"unit"},[t._v(t._s(e.price))]),t._v(" "),r("td",{staticClass:"qty"},[t._v(t._s(e.quantity))]),t._v(" "),r("td",{staticClass:"total"},[t._v(t._s(e.total))])])})),0),t._v(" "),r("tfoot",[r("tr",[r("td",{attrs:{colspan:"3"}}),t._v(" "),r("td",{attrs:{colspan:"2"}},[t._v("SUBTOTAL")]),t._v(" "),r("td",[t._v("$"+t._s(t.sum))])]),t._v(" "),t._m(3),t._v(" "),r("tr",[r("td",{attrs:{colspan:"3"}}),t._v(" "),r("td",{attrs:{colspan:"2"}},[t._v("GRAND TOTAL")]),t._v(" "),r("td",[t._v("$"+t._s(t.sum))])])])]),t._v(" "),r("div",{staticClass:"thanks"},[t._v("Thank you!")]),t._v(" "),t._m(4)]),t._v(" "),r("footer",[t._v("Invoice was created on a computer and is valid without the signature and seal.")])]),t._v(" "),r("div")])])])])])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"col-md-6"},[t("h3",[this._v("Order view")])])},function(){var t=this,r=t._self._c;return r("header",[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("a",{attrs:{href:"javascript:;"}},[r("h1",[r("b",[t._v("QuickSell")])])])]),t._v(" "),r("div",{staticClass:"col company-details"},[r("h2",{staticClass:"name"},[r("a",{attrs:{target:"_blank",href:"javascript:;"}},[t._v("\n\t\t\t\t\t\t\t\t\tQuickSell\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),r("div",[t._v("Kenyatta Avenue, Nairobi, Kenya")]),t._v(" "),r("div",[t._v("+254700100100")]),t._v(" "),r("div",[t._v("info@quicksell.co.ke")])])])])},function(){var t=this,r=t._self._c;return r("thead",[r("tr",[r("th",[t._v("SL")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("IMAGE")]),t._v(" "),r("th",{staticClass:"text-right"},[t._v("NAME")]),t._v(" "),r("th",{staticClass:"text-right"},[t._v("PRICE")]),t._v(" "),r("th",{staticClass:"text-right"},[t._v("QUANTITY")]),t._v(" "),r("th",{staticClass:"text-right"},[t._v("TOTAL")])])])},function(){var t=this,r=t._self._c;return r("tr",[r("td",{attrs:{colspan:"3"}}),t._v(" "),r("td",{attrs:{colspan:"2"}},[t._v("TAX 0%")]),t._v(" "),r("td",[t._v("$00.00")])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"notices"},[r("div",[t._v("NOTICE:")]),t._v(" "),r("div",{staticClass:"notice"},[t._v("A finance charge of 1.5% will be made on unpaid balances after 30 days.")])])}],!1,null,null,null).exports},486:(t,r,e)=>{function n(t,r,e,n,i,o,a,s){var c,l="function"==typeof t?t.options:t;if(r&&(l.render=r,l.staticRenderFns=e,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=c):i&&(c=s?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,r){return c.call(r),u(t,r)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,c):[c]}return{exports:t,options:l}}e.d(r,{A:()=>n})}}]);