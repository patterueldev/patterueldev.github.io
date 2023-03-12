(function(){"use strict";var e={1426:function(e,t,n){var o=n(9242),r=n(3396);function i(e,t){const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(n)}var a=n(89);const u={},l=(0,a.Z)(u,[["render",i]]);var c=l,f=(n(9773),n(8377)),p=(0,f.Rd)();async function s(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var d=n(2483);const m={class:"portfolio"};function v(e,t,n,o,i,a){const u=(0,r.up)("PortfolioComponent");return(0,r.wg)(),(0,r.iD)("div",m,[(0,r.Wm)(u)])}var h=n(7139),w=n(8106),b=n(6824),y=n(8521);const g=(0,r._)("div",{class:"header"},[(0,r._)("h1",null,"Portfolio"),(0,r._)("p",null,"I've had the opportunity to work with the following projects.")],-1),j={key:0,class:"tools"},O={key:1},k=["href"];function _(e,t,n,o,i,a){return(0,r.wg)(),(0,r.j4)(w.K,null,{default:(0,r.w5)((()=>[(0,r.Wm)(b.o,null,{default:(0,r.w5)((()=>[(0,r.Wm)(y.D,{class:"mb-4"},{default:(0,r.w5)((()=>[g,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.platforms,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"platform",key:e.platform},[(0,r._)("h2",null,(0,h.zw)(e.platform),1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.projects,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"project",key:e.name},[(0,r._)("h3",null,(0,h.zw)(e.name),1),null!=e.tools?((0,r.wg)(),(0,r.iD)("p",j,(0,h.zw)(e.tools),1)):(0,r.kq)("",!0),null!=e.description?((0,r.wg)(),(0,r.iD)("p",O,(0,h.zw)(e.description),1)):(0,r.kq)("",!0),null!=e.release?((0,r.wg)(),(0,r.iD)("a",{key:2,href:e.release.url,target:"_blank"},(0,h.zw)(e.release.type),9,k)):(0,r.kq)("",!0)])))),128))])))),128))])),_:1})])),_:1})])),_:1})}var P={name:"PortfolioComponent",data:()=>({platforms:[{platform:"iOS Development",projects:[{name:"Right Choice Finance",tools:"Xcode, Swift",description:"Financial-tool app with wallet functionalities.",release:{url:"https://apps.apple.com/ph/app/myrcf/id1531321927",type:"App Store"}},{name:"WHS Mobile",tools:"Xcode, Objective-C, Swift",description:"Work Health and Safety app",release:{url:"https://apps.apple.com/au/app/whs-monitor/id1065412557",type:"App Store"}},{name:"Cignal Play",tools:"Xcode, Swift",description:"Video player app with VOD and Live TV",release:{url:"https://apps.apple.com/ph/app/cignal-play/id1293561677",type:"App Store"}}]},{platform:"Web Development",projects:[{name:"Ease Hospitality",tools:"Visual Studio Code, VueJS (Frontend), Laravel (Backend)",release:{url:"https://www.easehospitality.com/",type:"Website"}}]}]})};const S=(0,a.Z)(P,[["render",_]]);var C=S,D={name:"PortfolioView",components:{PortfolioComponent:C}};const T=(0,a.Z)(D,[["render",v]]);var E=T;const A=[{path:"/",name:"portfolio",component:E},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,6506))}],W=(0,d.p7)({history:(0,d.PO)(),routes:A});var M=W,V=n(65),x=(0,V.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});s(),(0,o.ri)(c).use(x).use(M).use(p).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(f=0;f<e.length;f++){o=e[f][0],r=e[f][1],i=e[f][2];for(var u=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(u=!1,i<a&&(a=i));if(u){e.splice(f--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var u=2&r&&o;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){a[e]=function(){return o[e]}}));return a["default"]=function(){return o},n.d(i,a),i}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+{443:"about",461:"webfontloader"}[e]+"."+{443:"8cedfdf2",461:"cd1d5e22"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="patteruel-io:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var p=c[f];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==t+i){u=p;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=o),e[o]=[r];var s=function(t,n){u.onerror=u.onload=null,clearTimeout(d);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),u=new Error,l=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};n.l(a,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],u=o[1],l=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(l)var f=l(n)}for(t&&t(o);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},o=self["webpackChunkpatteruel_io"]=self["webpackChunkpatteruel_io"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1426)}));o=n.O(o)})();
//# sourceMappingURL=app.c2f0a532.js.map