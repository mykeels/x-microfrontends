"use strict";(self.webpackChunkchassis=self.webpackChunkchassis||[]).push([["src_bootstrap_tsx"],{2003:(n,e,t)=>{t.r(e);var r=t(245),o=t(9027),u=t(5752),c=t.n(u),a=t(2267),i=t(8797),s=t(1600),l=t(2754),f=t(5095),d=t(1774),m=t(1896),v=t(5305),p=function(n){return n.sort((function(n,e){return(n.priority||0)-(e.priority||0)}))},h=function(){var n=(0,u.useContext)(m.MicrofrontendContext).homedir;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:"new-post-button",children:(0,v.jsx)("svg",{className:"verified",viewBox:"0 -2 24 24",width:"28",height:"24",stroke:"white",children:(0,v.jsx)("path",{d:"M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"})})}),(0,v.jsxs)("main",{className:"flex flex-row px-32 py-2 gap-8",children:[(0,v.jsxs)("nav",{className:"flex flex-col self-start justify-between h-[90dvh] sticky top-0 px-4",children:[(0,v.jsx)("img",{src:"https://seeklogo.com/images/T/twitter-x-logo-101C7D2420-seeklogo.com.png?v=638258077300000000",alt:"logo",className:"flex self-start h-12 w-12 mx-4"}),(0,v.jsx)("ul",{className:"flex flex-col gap-4 list-none",children:(0,v.jsx)(m.MicrofrontendSlot,{className:"contents",name:"nav:item",transform:p})}),(0,v.jsx)(m.MicrofrontendSlot,{className:"contents",name:"nav:footer"})]}),(0,v.jsx)(m.MicrofrontendSlot,{className:"contents",name:"main:content",transform:function(e){return e.filter((function(e){return!(!("route"in e)||"string"!==typeof e.route||!n||"string"!==typeof n)&&(0,m.canMatchRoute)(n,e.route)}))}}),(0,v.jsx)("aside",{className:"flex flex-col self-start right sticky top-[-224px] w-1/4",children:(0,v.jsxs)("div",{className:"container-right",children:[(0,v.jsx)(m.MicrofrontendSlot,{className:"contents",name:"aside:item",transform:p}),(0,v.jsxs)("div",{className:"container-terms-of-service",children:[(0,v.jsx)("span",{children:"Terms of service"}),(0,v.jsx)("span",{children:"Privacy Policy"}),(0,v.jsx)("span",{children:"Cookie Policy"}),(0,v.jsx)("span",{children:"Accesibility"}),(0,v.jsx)("span",{children:"Ads info \xa0More \xb7\xb7\xb7"}),(0,v.jsx)("span",{children:"\xa9 2023 X Corp."})]})]})})]})]})},y=new d.v,g=function(){return(0,v.jsx)("div",{children:"Something went wrong. This is a Fallback component."})},x=function(n){var e=n.manifests,t=(0,f.useLocation)(),r=(0,f.useNavigate)(),o="".concat("/x-microfrontends").concat(t.pathname);return(0,v.jsx)(m.MicrofrontendContext.Provider,{value:{manifests:e,navigate:r,eventBus:y,fetch:fetch,homedir:o,url:t.pathname,user:{permissions:[]},layout:{navItems:[],logout:function(){}},ErrorBoundary:function(n){return(0,v.jsx)(m.ErrorBoundary,(0,l.Z)({Fallback:g},n))}},children:(0,v.jsx)(f.Routes,{children:(0,v.jsx)(f.Route,{path:"*",element:(0,v.jsx)(h,{})})})})},w=function(n){var e=n.getMicrofrontendManifests,t=(0,i.useQuery)("manifests",(function(){return e([])})).data,r=void 0===t?[]:t;return(0,v.jsx)(f.BrowserRouter,{children:(0,v.jsx)(x,{manifests:r})})},E=new i.QueryClient;function j(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).getManifestsUri,e=void 0===n?"/microfrontend-manifests.json":n;return(0,v.jsxs)(i.QueryClientProvider,{client:E,children:[(0,v.jsx)(s.ReactQueryDevtools,{}),(0,v.jsx)(w,{getMicrofrontendManifests:(0,o.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch(e).then((function(n){return n.json()})));case 1:case"end":return n.stop()}}),n)})))})]})}(0,a.s)(document.getElementById("root")).render((0,v.jsx)(c().StrictMode,{children:(0,v.jsx)(j,{})}))},1896:(n,e,t)=>{var r,o=t(3471).default,u=t(8035).default,c=t(9835).default,a=t(5537).default,i=t(162).default,s=t(1880).default,l=t(9074).default,f=t(2861).default,d=t(4627).default,m=t(3089).default,v=t(9066).default,p=t(4955).default,h=["id","scope","entry","module","Loading","Fallback","className","loadMicrofrontend"],y=["name","transform","Fallback","Loading","className"],g=["manifests","user"],x=["host","Loading","Fallback","navigate","Microfrontend"],w=Object.create,E=Object.defineProperty,j=Object.getOwnPropertyDescriptor,b=Object.getOwnPropertyNames,M=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty,N=function(n,e,t,r){if(e&&"object"===typeof e||"function"===typeof e){var o,u=p(b(e));try{var c=function(){var u=o.value;k.call(n,u)||u===t||E(n,u,{get:function(){return e[u]},enumerable:!(r=j(e,u))||r.enumerable})};for(u.s();!(o=u.n()).done;)c()}catch(a){u.e(a)}finally{u.f()}}return n},P=function(n,e,t){return t=null!=n?w(M(n)):{},N(!e&&n&&n.__esModule?t:E(t,"default",{value:n,enumerable:!0}),n)},C={};!function(n,e){for(var t in e)E(n,t,{get:e[t],enumerable:!0})}(C,{ErrorBoundary:function(){return _},Microfrontend:function(){return G},MicrofrontendContext:function(){return nn},MicrofrontendScreen:function(){return an},MicrofrontendSlot:function(){return tn},assert:function(){return L},canMatchHost:function(){return T},canMatchPermission:function(){return R},canMatchPermissions:function(){return H},canMatchRoute:function(){return A},getMicrofrontendsByName:function(){return en},getMicrofrontendsMatchingLocation:function(){return cn},makeError:function(){return S},register:function(){return q},selectProps:function(){return $},sleep:function(){return B},throwError:function(){return I}}),n.exports=(r=C,N(E({},"__esModule",{value:!0}),r));var F="Invariant failed";var L=function(n,e){return function(n,e){if(!n)throw new Error(F)}(n,"string"===typeof e&&"AssertError: ".concat(e)),n},S=function(n,e,t){return{name:n,message:e,stack:(new Error).stack,cause:t,toString:function(){return"".concat(n,": ").concat(e)}}},I=function(n,e){throw S(n,e)},B=function(n){return new Promise((function(e){setTimeout(e,n)}))},O=t(5646),A=function(n,e){var t=(0,O.pathToRegexp)(n.replace(/\/\*+/g,"/:params*"),[]),r=(0,O.pathToRegexp)(e.replace(/\/\*+/g,"/:params*"),[]);return t.test(e)||r.test(n)},R=function(n,e){var t=(0,O.pathToRegexp)(n.replace(/\/\*\*+/g,"/:params*").replace(/\/\*/g,"/:params"),[]),r=(0,O.pathToRegexp)(e.replace(/\/\*\*+/g,"/:params*").replace(/\/\*/g,"/:params"),[]);return t.test(e)||r.test(n)},T=function(n,e){return!n||!e||n===e},H=function(n,e){return null===e||void 0===e?void 0:e.every((function(e){var t=e.split(":"),r=v(t),o=r[0],u=r.slice(1).join(":");return n.permissions.some((function(n){var e=n.split(":"),t=v(e),r=t[0],c=t.slice(1).join(":");return(c===u||R(c,u))&&(r===o||"read-only"===o&&"manage"===r)}))}))},$=function(n){return function(e){return Object.fromEntries(Object.entries(e).filter((function(e){var t=m(e,1)[0];return n.includes(t)})))}},Z=function(){return"undefined"===typeof window?{}:window},q=function(n,e,t){var r=t.mount,o=t.unmount,u=function(n,e){if("undefined"===typeof window)return console.warn("Microfrontend cannot be registered without a global window scope"),{mount:function(){},unmount:function(){},instances:0};var t=Z();t.$mfs=t.$mfs||{},t.$mfs[n]=t.$mfs[n]||{};var r=t.$mfs[n];return r?(r[e]=r[e]||{mount:function(){return console.warn("No ".concat(n," mount fn exists")),function(){}},unmount:function(){return console.warn("No ".concat(n," unmount fn exists"))},instances:0,scope:n,module:e},null===r||void 0===r?void 0:r[e]):(console.warn("No ".concat(n," scope exists in window.$mfs")),null===r||void 0===r?void 0:r[e])}(n,e);u.tracker=u.tracker||function(n){return{increment:function(){n.instances++},decrement:function(){n.instances>0&&n.instances--},hasZeroInstances:function(){var e,t=null===(e=Z().$mfs)||void 0===e?void 0:e[n.scope];return 0===Object.values(L(t,"window.$mfs.".concat(n.scope," must exist"))).reduce((function(n,e){return n+e.instances}),0)}}}(u);var c=function(e){var t,r;return null===(t=u.tracker)||void 0===t||t.decrement(),null!==(r=u.tracker)&&void 0!==r&&r.hasZeroInstances()&&function(n,e){var t="mf-".concat(n.toLocaleLowerCase(),"-entry"),r=document.getElementById(t);if(r){var o=L(r.getAttribute("src"),"script #".concat(t," must have attr [src]")),u=o.lastIndexOf("/"),c=o.slice(0,u),a=3;return B(100).then((function(){return i()}))}function i(){return s.apply(this,arguments)}function s(){return s=d(l().mark((function n(){var t,r,o,u=arguments;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=u.length>0&&void 0!==u[0]?u[0]:0,r=Array.from(document.querySelectorAll("head script")).filter((function(n){var e;return null===(e=n.getAttribute("src"))||void 0===e?void 0:e.startsWith(c)})),!(o=Array.from(document.querySelectorAll("head link")).filter((function(n){var e;return null===(e=n.getAttribute("href"))||void 0===e?void 0:e.startsWith(c)}))).length||!e.hasZeroInstances()){n.next=10;break}return console.log("Removed assets",[].concat(f(r),f(o))),r.forEach((function(n){n.remove()})),o.forEach((function(n){n.remove()})),n.abrupt("return",[].concat(f(r),f(o)));case 10:return n.abrupt("return",B(100).then((function(){return t<a?i(t+1):[]})));case 11:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}}(n,u.tracker),function(){setTimeout((function(){e()()}))}};return u.mount=function(t,o){var a;null===(a=u.tracker)||void 0===a||a.increment();var i,s=L(r,"mount fn must exist")(t,o),l=(i=t)instanceof HTMLElement?i:document.getElementById(i),f=null===o||void 0===o?void 0:o.eventBus;return null===f||void 0===f||f.emit("mf:mount",{container:l,scope:n,module:e}),function(){return null===f||void 0===f||f.emit("mf:unmount",{container:l,scope:n,module:e}),c(s)}},u.unmount=function(n){return c((function(){return L(o,"unmount fn must exist")(n)}))},u},Q=P(t(5752)),_=function(n){i(t,n);var e=s(t);function t(n){var r;return c(this,t),(r=e.call(this,n)).state={error:null,errorInfo:null},r}return a(t,[{key:"componentDidCatch",value:function(n,e){this.setState({error:n,errorInfo:e})}},{key:"render",value:function(){if(this.state.errorInfo&&this.state.error){var n=this.state.error,e=this.state.errorInfo;n&&(n.cause=e);var t=this.props.Fallback;return"function"===typeof t?Q.default.createElement(t,{error:n}):t}return this.props.children}}]),t}(Q.Component),D=P(t(3563)),U=P(t(5752)),z=t(8797);function V(n,e){return d(l().mark((function r(){var o,u,c,a;return l().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("undefined"!==typeof window){r.next=2;break}return r.abrupt("return");case 2:return o=window,r.next=5,t.I("default");case 5:return u=o[n],r.next=8,u.init(t.S.default);case 8:return r.next=10,Promise.race([null===u||void 0===u?void 0:u.get(e),B(300).then((function(){return Promise.reject(new Error("No module ".concat(e," was found in window.").concat(n," container")))}))]);case 10:return c=r.sent,a="function"===typeof c?c():Promise.reject(new Error("No module ".concat(e," was found in window.").concat(n," container"))),r.abrupt("return",a);case 13:case"end":return r.stop()}}),r)})))}var W=function(n,e){return new Promise((function(t,r){if(document.querySelector('script[id="'.concat(n,'"]'))){var o=L(document.querySelector('script[id="'.concat(n,'"]')),"script must exist: [id=".concat(n,"]"));return t(o)}var u=document.createElement("script");u.id=n,u.src=e,u.type="text/javascript",u.async=!0,u.onload=function(){return t(u)},u.onerror=r,document.head.appendChild(u)}))},X=function(){var n=d(l().mark((function n(e){var t,r,o;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.entry,r=e.scope,o=e.module,n.abrupt("return",W("mf-".concat(r.toLowerCase(),"-entry"),t).then((function(){return V(r,o)()})).then((function(n){return n.default})).then((function(n){return{mount:n.mount,unmount:n.unmount}})).catch((function(n){return Promise.reject(n)})));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),G=function(n){var e=n.id,t=n.scope,r=n.entry,c=n.module,a=n.Loading,i=n.Fallback,s=n.className,f=n.loadMicrofrontend,v=u(n,h),p=(0,z.useQuery)("microfrontend?entry=".concat(r,"&module=").concat(c),d(l().mark((function n(){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return L(f,"props.loadMicrofrontend must be a function"),n.abrupt("return",null===f||void 0===f?void 0:f({entry:r,scope:t,module:c}));case 2:case"end":return n.stop()}}),n)})))),y=p.isFetched,g=p.isError,x=p.error,w=p.data,E=(void 0===w?{}:w).mount,j=(0,D.default)("microfrontend-container spin-when-empty",s),b="mount-".concat((e||t).toLowerCase(),"-container"),M=(0,U.useState)(null),k=m(M,2),N=k[0],P=k[1],C=(0,U.useState)(0),F=m(C,2),I=F[0],B=F[1],O=function(n){return"function"===typeof i?U.default.createElement(i,o(o(o({},o({containerId:b,scope:t,entry:r,module:c},v)),n),{},{retry:function(){return B(I+1)}})):i},A=function(n){var e=n.children;return U.default.createElement(_,{Fallback:O},e)};return(0,U.useEffect)((function(){if(y&&!g&&"function"===typeof E){var n=null;try{n=E(b,o(o({},v),{},{ErrorBoundary:A}))}catch(e){P(S("MountError","Could not mount Microfrontend: ".concat(t," (").concat(c,")"),e))}return function(){setTimeout((function(){try{"function"===typeof n&&(console.log("unmount",t),n())}catch(e){console.error(e),P(S("UnmountError","Could not unmount Microfrontend: ".concat(t," (").concat(c,")"),x))}}))}}}),[y,g,r,c,I]),g?U.default.createElement(O,{error:x instanceof Error?x:S("UnknownError","string"===typeof x?x:"An error occurred in a microfrontend: ".concat(x),x)}):N?U.default.createElement(O,{error:N}):y?U.default.createElement("div",o({id:b,className:j},{"data-mf-scope":t,"data-mf-module":c})):"function"===typeof a?U.default.createElement(a,null):a};G.defaultProps={loadMicrofrontend:X};var J=P(t(5752)),K=P(t(5752)),Y={homedir:"/",url:"/",navigate:function(){},manifests:[],fetch:function(n,e){return window.fetch(n,e)},user:void 0,eventBus:void 0,layout:{navItems:[],logout:function(){}},ErrorBoundary:function(n){var e=n.children;return K.default.createElement(_,{Fallback:function(){return K.default.createElement(K.default.Fragment,null,"An Error occurred")}},e)}},nn=K.default.createContext(Y),en=function(n,e,t){return null===n||void 0===n?void 0:n.reduce((function(n,t){var r;return[].concat(f(n),f((null===(r=t.slots[e])||void 0===r?void 0:r.map((function(n){return o(o({},$(["entry","scope","module","auth"])(t)),"string"===typeof n?{slot:n}:n)})))||[]))}),[]).filter((function(n){var e=n.host;return T(e,null===t||void 0===t?void 0:t.host)})).filter((function(n){var e,r=n.auth;return!(null!==r&&void 0!==r&&r.required)||H(L(null===t||void 0===t?void 0:t.user,"options.user must exist"),(null===r||void 0===r||null===(e=r.permissions)||void 0===e?void 0:e.map((function(n){return"function"===typeof(null===t||void 0===t?void 0:t.transformPermission)?null===t||void 0===t?void 0:t.transformPermission(n):n})))||[])}))},tn=function(n){var e=n.name,t=n.transform,r=n.Fallback,c=n.Loading,a=n.className,i=u(n,y),s=(0,J.useId)(),l=(0,J.useContext)(nn),f=l.manifests,d=l.user,m=u(l,g),v=en(f,e,{user:d}),p=(null===t||void 0===t?void 0:t(v))||v;return J.default.createElement(J.default.Fragment,null,p.map((function(n,e){return J.default.createElement(_,{key:"slot-".concat(n.scope,"-").concat(n.module,"-").concat(s,"-").concat(e),Fallback:"function"===typeof r?function(e){return J.default.createElement(r,o(o({slot:n},i),e))}:r||function(){return J.default.createElement(J.default.Fragment,null)}},J.default.createElement(G,o(o({},o(o(o({manifests:f,user:d},n),m),i)),{},{Fallback:"function"===typeof r?function(e){return J.default.createElement(r,o(o({slot:n},i),e))}:r||function(){return J.default.createElement(J.default.Fragment,null)},Loading:"function"===typeof c?function(){return J.default.createElement(c,{slot:n})}:c||function(){return J.default.createElement(J.default.Fragment,null)},entry:n.entry,module:n.module,scope:n.scope,className:a,id:"slot-".concat(n.scope,"-").concat(s,"-").concat(e)})))})))};tn.defaultProps={transform:function(n){return n},Fallback:function(){return J.default.createElement("div",null,"Sorry, there was an error loading this component")},Loading:function(){return J.default.createElement("div",null,"...loading...")}};var rn=P(t(5752)),on=t(8797),un=t(5095),cn=function(n,e,t){return null===n||void 0===n?void 0:n.reduce((function(n,e){var t;return[].concat(f(n),f((null===(t=e.slots.routes)||void 0===t?void 0:t.map((function(n){return o(o({},$(["entry","scope","module","auth"])(e)),"string"===typeof n?{route:n}:n)})))||[]))}),[]).filter((function(n){var r=n.route,o=n.host;return A(r,e)&&T(o,null===t||void 0===t?void 0:t.host)})).filter((function(n){var e,r=n.auth;return!(null!==r&&void 0!==r&&r.required)||H(L(null===t||void 0===t?void 0:t.user,"options.user must exist"),(null===r||void 0===r||null===(e=r.permissions)||void 0===e?void 0:e.map("function"===typeof(null===t||void 0===t?void 0:t.transformPermission)?null===t||void 0===t?void 0:t.transformPermission:function(n){return n}))||[])}))},an=function(n){var e=n.host,t=n.Loading,r=n.Fallback,c=n.navigate,a=n.Microfrontend,i=u(n,x),s=(0,un.useLocation)().pathname,l=(0,on.useQuery)("manifests",(function(){return"getMicrofrontendManifests"in i?i.getMicrofrontendManifests():i.manifests}),{enabled:"getMicrofrontendManifests"in i}),f=l.data,d=void 0===f?"manifests"in i?i.manifests:[]:f,v=l.isLoading,p=l.isError,h=l.error,y=cn(d||[],s,{host:e,user:null===i||void 0===i?void 0:i.user})||[],g=m(y,1)[0],w=function(n){return"function"===typeof r?rn.default.createElement(r,o(o({},i),n)):r};return p?rn.default.createElement(w,{error:h instanceof Error?h:S("UnknownError","string"===typeof h?h:"An error occurred in a microfrontend: ".concat(h),h)}):v?"function"===typeof t?rn.default.createElement(t,null):t:!g&&null!==d&&void 0!==d&&d.length?rn.default.createElement(w,{error:S("NoRouteMatchFound","No microfrontend was found capable of handling the route: ".concat(s))}):g?rn.default.createElement(a,o(o({},i),{},{url:s,entry:g.entry,scope:g.scope,module:g.module,manifests:d,navigate:c,Loading:t,Fallback:r})):null};an.defaultProps={Microfrontend:G}}}]);
//# sourceMappingURL=src_bootstrap_tsx.8e7813ca.chunk.js.map