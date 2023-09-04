"use strict";(self.webpackChunkmessages=self.webpackChunkmessages||[]).push([["src_nav-messages_tsx"],{3324:(n,t,e)=>{e.r(t),e.d(t,{default:()=>d});var r=e(1896),o=e(5752),u=e.n(o),c=e(4669),a=e.n(c),i=e(2267);var s=e(5305),l=function(n){return n instanceof HTMLElement?n:document.getElementById(n)},f=function(){return(0,s.jsxs)("li",{className:"flex flex-row self-start py-2 px-4 rounded-full tabs-item gap-4 outline outline-red-400",children:[(0,s.jsx)("svg",{className:"msg-icon",viewBox:"0 0 24 24",width:"24",fill:"white",children:(0,s.jsx)("path",{d:"M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"})}),(0,s.jsx)("h1",{children:"Messages"})]})};const d=(0,r.register)("messages","./nav-messages",{mount:function(n){var t=l(n);if("true"===(null===t||void 0===t?void 0:t.getAttribute("data-mf-mounted")))return function(){a().unmountComponentAtNode(t)};null===t||void 0===t||t.setAttribute("data-mf-mounted","true");var e=(0,i.s)(t);return e.render((0,s.jsx)(u().StrictMode,{children:(0,s.jsx)(f,{})})),function(){e.unmount()}},unmount:function(n){a().unmountComponentAtNode(l(n))}})},1896:(n,t,e)=>{var r,o=e(3471).default,u=e(8035).default,c=e(9835).default,a=e(5537).default,i=e(162).default,s=e(1880).default,l=e(9074).default,f=e(2861).default,d=e(4627).default,m=e(3089).default,v=e(9066).default,p=e(4955).default,h=["id","scope","entry","module","Loading","Fallback","className","loadMicrofrontend"],g=["name","transform","Fallback","Loading","className"],y=["manifests","user"],w=["host","Loading","Fallback","navigate","Microfrontend"],E=Object.create,b=Object.defineProperty,x=Object.getOwnPropertyDescriptor,k=Object.getOwnPropertyNames,M=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty,P=function(n,t,e,r){if(t&&"object"===typeof t||"function"===typeof t){var o,u=p(k(t));try{var c=function(){var u=o.value;j.call(n,u)||u===e||b(n,u,{get:function(){return t[u]},enumerable:!(r=x(t,u))||r.enumerable})};for(u.s();!(o=u.n()).done;)c()}catch(a){u.e(a)}finally{u.f()}}return n},F=function(n,t,e){return e=null!=n?E(M(n)):{},P(!t&&n&&n.__esModule?e:b(e,"default",{value:n,enumerable:!0}),n)},N={};!function(n,t){for(var e in t)b(n,e,{get:t[e],enumerable:!0})}(N,{ErrorBoundary:function(){return U},Microfrontend:function(){return J},MicrofrontendContext:function(){return nn},MicrofrontendScreen:function(){return an},MicrofrontendSlot:function(){return en},assert:function(){return I},canMatchHost:function(){return $},canMatchPermission:function(){return T},canMatchPermissions:function(){return R},canMatchRoute:function(){return B},getMicrofrontendsByName:function(){return tn},getMicrofrontendsMatchingLocation:function(){return cn},makeError:function(){return A},register:function(){return z},selectProps:function(){return q},sleep:function(){return O},throwError:function(){return C}}),n.exports=(r=N,P(b({},"__esModule",{value:!0}),r));var L="Invariant failed";var I=function(n,t){return function(n,t){if(!n)throw new Error(L)}(n,"string"===typeof t&&"AssertError: ".concat(t)),n},A=function(n,t,e){return{name:n,message:t,stack:(new Error).stack,cause:e,toString:function(){return"".concat(n,": ").concat(t)}}},C=function(n,t){throw A(n,t)},O=function(n){return new Promise((function(t){setTimeout(t,n)}))},S=e(5646),B=function(n,t){var e=(0,S.pathToRegexp)(n.replace(/\/\*+/g,"/:params*"),[]),r=(0,S.pathToRegexp)(t.replace(/\/\*+/g,"/:params*"),[]);return e.test(t)||r.test(n)},T=function(n,t){var e=(0,S.pathToRegexp)(n.replace(/\/\*\*+/g,"/:params*").replace(/\/\*/g,"/:params"),[]),r=(0,S.pathToRegexp)(t.replace(/\/\*\*+/g,"/:params*").replace(/\/\*/g,"/:params"),[]);return e.test(t)||r.test(n)},$=function(n,t){return!n||!t||n===t},R=function(n,t){return null===t||void 0===t?void 0:t.every((function(t){var e=t.split(":"),r=v(e),o=r[0],u=r.slice(1).join(":");return n.permissions.some((function(n){var t=n.split(":"),e=v(t),r=e[0],c=e.slice(1).join(":");return(c===u||T(c,u))&&(r===o||"read-only"===o&&"manage"===r)}))}))},q=function(n){return function(t){return Object.fromEntries(Object.entries(t).filter((function(t){var e=m(t,1)[0];return n.includes(e)})))}},_=function(){return"undefined"===typeof window?{}:window},z=function(n,t,e){var r=e.mount,o=e.unmount,u=function(n,t){if("undefined"===typeof window)return console.warn("Microfrontend cannot be registered without a global window scope"),{mount:function(){},unmount:function(){},instances:0};var e=_();e.$mfs=e.$mfs||{},e.$mfs[n]=e.$mfs[n]||{};var r=e.$mfs[n];return r?(r[t]=r[t]||{mount:function(){return console.warn("No ".concat(n," mount fn exists")),function(){}},unmount:function(){return console.warn("No ".concat(n," unmount fn exists"))},instances:0,scope:n,module:t},null===r||void 0===r?void 0:r[t]):(console.warn("No ".concat(n," scope exists in window.$mfs")),null===r||void 0===r?void 0:r[t])}(n,t);u.tracker=u.tracker||function(n){return{increment:function(){n.instances++},decrement:function(){n.instances>0&&n.instances--},hasZeroInstances:function(){var t,e=null===(t=_().$mfs)||void 0===t?void 0:t[n.scope];return 0===Object.values(I(e,"window.$mfs.".concat(n.scope," must exist"))).reduce((function(n,t){return n+t.instances}),0)}}}(u);var c=function(t){var e,r;return null===(e=u.tracker)||void 0===e||e.decrement(),null!==(r=u.tracker)&&void 0!==r&&r.hasZeroInstances()&&function(n,t){var e="mf-".concat(n.toLocaleLowerCase(),"-entry"),r=document.getElementById(e);if(r){var o=I(r.getAttribute("src"),"script #".concat(e," must have attr [src]")),u=o.lastIndexOf("/"),c=o.slice(0,u),a=3;return O(100).then((function(){return i()}))}function i(){return s.apply(this,arguments)}function s(){return s=d(l().mark((function n(){var e,r,o,u=arguments;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=u.length>0&&void 0!==u[0]?u[0]:0,r=Array.from(document.querySelectorAll("head script")).filter((function(n){var t;return null===(t=n.getAttribute("src"))||void 0===t?void 0:t.startsWith(c)})),!(o=Array.from(document.querySelectorAll("head link")).filter((function(n){var t;return null===(t=n.getAttribute("href"))||void 0===t?void 0:t.startsWith(c)}))).length||!t.hasZeroInstances()){n.next=10;break}return console.log("Removed assets",[].concat(f(r),f(o))),r.forEach((function(n){n.remove()})),o.forEach((function(n){n.remove()})),n.abrupt("return",[].concat(f(r),f(o)));case 10:return n.abrupt("return",O(100).then((function(){return e<a?i(e+1):[]})));case 11:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}}(n,u.tracker),function(){setTimeout((function(){t()()}))}};return u.mount=function(e,o){var a;null===(a=u.tracker)||void 0===a||a.increment();var i,s=I(r,"mount fn must exist")(e,o),l=(i=e)instanceof HTMLElement?i:document.getElementById(i),f=null===o||void 0===o?void 0:o.eventBus;return null===f||void 0===f||f.emit("mf:mount",{container:l,scope:n,module:t}),function(){return null===f||void 0===f||f.emit("mf:unmount",{container:l,scope:n,module:t}),c(s)}},u.unmount=function(n){return c((function(){return I(o,"unmount fn must exist")(n)}))},u},H=F(e(5752)),U=function(n){i(e,n);var t=s(e);function e(n){var r;return c(this,e),(r=t.call(this,n)).state={error:null,errorInfo:null},r}return a(e,[{key:"componentDidCatch",value:function(n,t){this.setState({error:n,errorInfo:t})}},{key:"render",value:function(){if(this.state.errorInfo&&this.state.error){var n=this.state.error,t=this.state.errorInfo;n&&(n.cause=t);var e=this.props.Fallback;return"function"===typeof e?H.default.createElement(e,{error:n}):e}return this.props.children}}]),e}(H.Component),Z=F(e(3563)),D=F(e(5752)),Q=e(8797);function V(n,t){return d(l().mark((function r(){var o,u,c,a;return l().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("undefined"!==typeof window){r.next=2;break}return r.abrupt("return");case 2:return o=window,r.next=5,e.I("default");case 5:return u=o[n],r.next=8,u.init(e.S.default);case 8:return r.next=10,Promise.race([null===u||void 0===u?void 0:u.get(t),O(300).then((function(){return Promise.reject(new Error("No module ".concat(t," was found in window.").concat(n," container")))}))]);case 10:return c=r.sent,a="function"===typeof c?c():Promise.reject(new Error("No module ".concat(t," was found in window.").concat(n," container"))),r.abrupt("return",a);case 13:case"end":return r.stop()}}),r)})))}var W=function(n,t){return new Promise((function(e,r){if(document.querySelector('script[id="'.concat(n,'"]'))){var o=I(document.querySelector('script[id="'.concat(n,'"]')),"script must exist: [id=".concat(n,"]"));return e(o)}var u=document.createElement("script");u.id=n,u.src=t,u.type="text/javascript",u.async=!0,u.onload=function(){return e(u)},u.onerror=r,document.head.appendChild(u)}))},G=function(){var n=d(l().mark((function n(t){var e,r,o;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.entry,r=t.scope,o=t.module,n.abrupt("return",W("mf-".concat(r.toLowerCase(),"-entry"),e).then((function(){return V(r,o)()})).then((function(n){return n.default})).then((function(n){return{mount:n.mount,unmount:n.unmount}})).catch((function(n){return Promise.reject(n)})));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),J=function(n){var t=n.id,e=n.scope,r=n.entry,c=n.module,a=n.Loading,i=n.Fallback,s=n.className,f=n.loadMicrofrontend,v=u(n,h),p=(0,Q.useQuery)("microfrontend?entry=".concat(r,"&module=").concat(c),d(l().mark((function n(){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return I(f,"props.loadMicrofrontend must be a function"),n.abrupt("return",null===f||void 0===f?void 0:f({entry:r,scope:e,module:c}));case 2:case"end":return n.stop()}}),n)})))),g=p.isFetched,y=p.isError,w=p.error,E=p.data,b=(void 0===E?{}:E).mount,x=(0,Z.default)("microfrontend-container spin-when-empty",s),k="mount-".concat((t||e).toLowerCase(),"-container"),M=(0,D.useState)(null),j=m(M,2),P=j[0],F=j[1],N=(0,D.useState)(0),L=m(N,2),C=L[0],O=L[1],S=function(n){return"function"===typeof i?D.default.createElement(i,o(o(o({},o({containerId:k,scope:e,entry:r,module:c},v)),n),{},{retry:function(){return O(C+1)}})):i},B=function(n){var t=n.children;return D.default.createElement(U,{Fallback:S},t)};return(0,D.useEffect)((function(){if(g&&!y&&"function"===typeof b){var n=null;try{n=b(k,o(o({},v),{},{ErrorBoundary:B}))}catch(t){F(A("MountError","Could not mount Microfrontend: ".concat(e," (").concat(c,")"),t))}return function(){setTimeout((function(){try{"function"===typeof n&&(console.log("unmount",e),n())}catch(t){console.error(t),F(A("UnmountError","Could not unmount Microfrontend: ".concat(e," (").concat(c,")"),w))}}))}}}),[g,y,r,c,C]),y?D.default.createElement(S,{error:w instanceof Error?w:A("UnknownError","string"===typeof w?w:"An error occurred in a microfrontend: ".concat(w),w)}):P?D.default.createElement(S,{error:P}):g?D.default.createElement("div",o({id:k,className:x},{"data-mf-scope":e,"data-mf-module":c})):"function"===typeof a?D.default.createElement(a,null):a};J.defaultProps={loadMicrofrontend:G};var K=F(e(5752)),X=F(e(5752)),Y={homedir:"/",navigate:function(){},manifests:[],fetch:function(n,t){return window.fetch(n,t)},user:void 0,eventBus:void 0,layout:{navItems:[],logout:function(){}},ErrorBoundary:function(n){var t=n.children;return X.default.createElement(U,{Fallback:function(){return X.default.createElement(X.default.Fragment,null,"An Error occurred")}},t)}},nn=X.default.createContext(Y),tn=function(n,t,e){return null===n||void 0===n?void 0:n.reduce((function(n,e){var r;return[].concat(f(n),f((null===(r=e.slots[t])||void 0===r?void 0:r.map((function(n){return o(o({},q(["entry","scope","module","auth"])(e)),"string"===typeof n?{slot:n}:n)})))||[]))}),[]).filter((function(n){var t=n.host;return $(t,null===e||void 0===e?void 0:e.host)})).filter((function(n){var t,r=n.auth;return!(null!==r&&void 0!==r&&r.required)||R(I(null===e||void 0===e?void 0:e.user,"options.user must exist"),(null===r||void 0===r||null===(t=r.permissions)||void 0===t?void 0:t.map((function(n){return"function"===typeof(null===e||void 0===e?void 0:e.transformPermission)?null===e||void 0===e?void 0:e.transformPermission(n):n})))||[])}))},en=function(n){var t=n.name,e=n.transform,r=n.Fallback,c=n.Loading,a=n.className,i=u(n,g),s=(0,K.useId)(),l=(0,K.useContext)(nn),f=l.manifests,d=l.user,m=u(l,y),v=e(tn(f,t,{user:d}));return K.default.createElement(K.default.Fragment,null,v.map((function(n,t){return K.default.createElement(U,{key:"slot-".concat(n.scope,"-").concat(n.module,"-").concat(s,"-").concat(t),Fallback:"function"===typeof r?function(t){return K.default.createElement(r,o(o({slot:n},i),t))}:r||function(){return K.default.createElement(K.default.Fragment,null)}},K.default.createElement(J,o(o({},o(o(o({manifests:f,user:d},n),m),i)),{},{Fallback:"function"===typeof r?function(t){return K.default.createElement(r,o(o({slot:n},i),t))}:r||function(){return K.default.createElement(K.default.Fragment,null)},Loading:"function"===typeof c?function(){return K.default.createElement(c,{slot:n})}:c||function(){return K.default.createElement(K.default.Fragment,null)},entry:n.entry,module:n.module,scope:n.scope,className:a,id:"slot-".concat(n.scope,"-").concat(s,"-").concat(t)})))})))};en.defaultProps={transform:function(n){return n},Fallback:function(){return K.default.createElement("div",null,"Sorry, there was an error loading this component")},Loading:function(){return K.default.createElement("div",null,"...loading...")}};var rn=F(e(5752)),on=e(8797),un=e(5095),cn=function(n,t,e){return null===n||void 0===n?void 0:n.reduce((function(n,t){var e;return[].concat(f(n),f((null===(e=t.slots.routes)||void 0===e?void 0:e.map((function(n){return o(o({},q(["entry","scope","module","auth"])(t)),"string"===typeof n?{route:n}:n)})))||[]))}),[]).filter((function(n){var r=n.route,o=n.host;return B(r,t)&&$(o,null===e||void 0===e?void 0:e.host)})).filter((function(n){var t,r=n.auth;return!(null!==r&&void 0!==r&&r.required)||R(I(null===e||void 0===e?void 0:e.user,"options.user must exist"),(null===r||void 0===r||null===(t=r.permissions)||void 0===t?void 0:t.map("function"===typeof(null===e||void 0===e?void 0:e.transformPermission)?null===e||void 0===e?void 0:e.transformPermission:function(n){return n}))||[])}))},an=function(n){var t=n.host,e=n.Loading,r=n.Fallback,c=n.navigate,a=n.Microfrontend,i=u(n,w),s=(0,un.useLocation)().pathname,l=(0,on.useQuery)("manifests",(function(){return"getMicrofrontendManifests"in i?i.getMicrofrontendManifests():i.manifests}),{enabled:"getMicrofrontendManifests"in i}),f=l.data,d=void 0===f?"manifests"in i?i.manifests:[]:f,v=l.isLoading,p=l.isError,h=l.error,g=cn(d||[],s,{host:t,user:null===i||void 0===i?void 0:i.user})||[],y=m(g,1)[0],E=function(n){return"function"===typeof r?rn.default.createElement(r,o(o({},i),n)):r};return p?rn.default.createElement(E,{error:h instanceof Error?h:A("UnknownError","string"===typeof h?h:"An error occurred in a microfrontend: ".concat(h),h)}):v?"function"===typeof e?rn.default.createElement(e,null):e:!y&&null!==d&&void 0!==d&&d.length?rn.default.createElement(E,{error:A("NoRouteMatchFound","No microfrontend was found capable of handling the route: ".concat(s))}):y?rn.default.createElement(a,o(o({},i),{},{url:s,entry:y.entry,scope:y.scope,module:y.module,manifests:d,navigate:c,Loading:e,Fallback:r})):null};an.defaultProps={Microfrontend:J}}}]);
//# sourceMappingURL=src_nav-messages_tsx.d2479047.chunk.js.map