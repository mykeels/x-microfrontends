var chassis;(()=>{"use strict";var e={9068:(e,r,t)=>{var o={"./index.js":()=>Promise.all([t.e("vendors-node_modules_pnpm_classnames_2_3_2_node_modules_classnames_dedupe_js-node_modules_pnp-1f51cd"),t.e("webpack_sharing_consume_default_react_react"),t.e("webpack_sharing_consume_default_react-dom_react-dom"),t.e("src_bootstrap_tsx")]).then((()=>()=>t(2003)))},a=(e,r)=>(t.R=r,r=t.o(o,e)?o[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),n=(e,r)=>{if(t.S){var o="default",a=t.S[o];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,r)}};t.d(r,{get:()=>a,init:()=>n})}},r={};function t(o){var a=r[o];if(void 0!==a)return a.exports;var n=r[o]={exports:{}};return e[o](n,n.exports,t),n.exports}t.m=e,t.c=r,t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,o)=>(t.f[o](e,r),r)),[])),t.u=e=>"static/js/"+e+"."+{"vendors-node_modules_pnpm_react-dom_18_2_0_react_18_2_0_node_modules_react-dom_index_js":"53acadf5",webpack_sharing_consume_default_react_react:"8f6a00ad","vendors-node_modules_pnpm_react-query_3_39_3_react-dom_18_2_0_react_18_2_0_node_modules_react-11ea29":"e670fd7a","webpack_sharing_consume_default_react-dom_react-dom":"86360f7e","vendors-node_modules_pnpm_react-router-dom_6_15_0_react-dom_18_2_0_react_18_2_0_node_modules_-323b6a":"b335b1ba","node_modules_pnpm_babel_runtime_7_22_11_node_modules_babel_runtime_helpers_esm_asyncToGenerat-b4f673":"a240960b",node_modules_pnpm_react_18_2_0_node_modules_react_index_js:"9923a5f9","vendors-node_modules_pnpm_classnames_2_3_2_node_modules_classnames_dedupe_js-node_modules_pnp-1f51cd":"b93a142d",src_bootstrap_tsx:"df62b8bb"}[e]+".chunk.js",t.miniCssF=e=>"static/css/"+e+".b293fc2b.chunk.css",t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={},r="chassis:";t.l=(o,a,n,_)=>{if(e[o])e[o].push(a);else{var s,d;if(void 0!==n)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var i=u[c];if(i.getAttribute("src")==o||i.getAttribute("data-webpack")==r+n){s=i;break}}s||(d=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",r+n),s.src=o),e[o]=[a];var l=(r,t)=>{s.onerror=s.onload=null,clearTimeout(m);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(t))),r)return r(t)},m=setTimeout(l.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=l.bind(null,s.onerror),s.onload=l.bind(null,s.onload),d&&document.head.appendChild(s)}}})(),t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{t.S={};var e={},r={};t.I=(o,a)=>{a||(a=[]);var n=r[o];if(n||(n=r[o]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[o])return e[o];t.o(t.S,o)||(t.S[o]={});var _=t.S[o],s="chassis",d=(e,r,t,o)=>{var a=_[e]=_[e]||{},n=a[r];(!n||!n.loaded&&(!o!=!n.eager?o:s>n.from))&&(a[r]={get:t,from:s,eager:!!o})},u=[];if("default"===o)d("react-dom","18.2.0",(()=>Promise.all([t.e("vendors-node_modules_pnpm_react-dom_18_2_0_react_18_2_0_node_modules_react-dom_index_js"),t.e("webpack_sharing_consume_default_react_react")]).then((()=>()=>t(3274))))),d("react-query","3.39.3",(()=>Promise.all([t.e("vendors-node_modules_pnpm_react-query_3_39_3_react-dom_18_2_0_react_18_2_0_node_modules_react-11ea29"),t.e("webpack_sharing_consume_default_react_react"),t.e("webpack_sharing_consume_default_react-dom_react-dom")]).then((()=>()=>t(8909))))),d("react-router-dom","6.15.0",(()=>Promise.all([t.e("vendors-node_modules_pnpm_react-router-dom_6_15_0_react-dom_18_2_0_react_18_2_0_node_modules_-323b6a"),t.e("webpack_sharing_consume_default_react_react"),t.e("node_modules_pnpm_babel_runtime_7_22_11_node_modules_babel_runtime_helpers_esm_asyncToGenerat-b4f673")]).then((()=>()=>t(9391))))),d("react","18.2.0",(()=>t.e("node_modules_pnpm_react_18_2_0_node_modules_react_index_js").then((()=>()=>t(3103)))));return u.length?e[o]=Promise.all(u).then((()=>e[o]=1)):e[o]=1}}})(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var o=r.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!e;)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),o=t[1]?r(t[1]):[];return t[2]&&(o.length++,o.push.apply(o,r(t[2]))),t[3]&&(o.push([]),o.push.apply(o,r(t[3]))),o},r=(r,t)=>{r=e(r),t=e(t);for(var o=0;;){if(o>=r.length)return o<t.length&&"u"!=(typeof t[o])[0];var a=r[o],n=(typeof a)[0];if(o>=t.length)return"u"==n;var _=t[o],s=(typeof _)[0];if(n!=s)return"o"==n&&"n"==s||"s"==s||"u"==n;if("o"!=n&&"u"!=n&&a!=_)return a<_;o++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,n=1;n<e.length;n++)a--,t+="u"==(typeof(s=e[n]))[0]?"-":(a>0?".":"")+(a=2,s);return t}var _=[];for(n=1;n<e.length;n++){var s=e[n];_.push(0===s?"not("+d()+")":1===s?"("+d()+" || "+d()+")":2===s?_.pop()+" "+_.pop():o(s))}return d();function d(){return _.pop().replace(/^\((.+)\)$/,"$1")}},a=(r,t)=>{if(0 in r){t=e(t);var o=r[0],n=o<0;n&&(o=-o-1);for(var _=0,s=1,d=!0;;s++,_++){var u,c,i=s<r.length?(typeof r[s])[0]:"";if(_>=t.length||"o"==(c=(typeof(u=t[_]))[0]))return!d||("u"==i?s>o&&!n:""==i!=n);if("u"==c){if(!d||"u"!=i)return!1}else if(d)if(i==c)if(s<=o){if(u!=r[s])return!1}else{if(n?u>r[s]:u<r[s])return!1;u!=r[s]&&(d=!1)}else if("s"!=i&&"n"!=i){if(n||s<=o)return!1;d=!1,s--}else{if(s<=o||c<i!=n)return!1;d=!1}else"s"!=i&&"n"!=i&&(d=!1,s--)}}var l=[],m=l.pop.bind(l);for(_=1;_<r.length;_++){var p=r[_];l.push(1==p?m()|m():2==p?m()&m():p?a(p,t):!m())}return!!m()},n=(e,t)=>{var o=e[t];return Object.keys(o).reduce(((e,t)=>!e||!o[e].loaded&&r(e,t)?t:e),0)},_=(e,r,t,a)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(a)+")",s=(e,r,t,o)=>{var s=n(e,t);return a(o,s)||d(_(e,t,s,o)),u(e[t][s])},d=e=>{"undefined"!==typeof console&&console.warn&&console.warn(e)},u=e=>(e.loaded=1,e.get()),c=e=>function(r,o,a,n){var _=t.I(r);return _&&_.then?_.then(e.bind(e,r,t.S[r],o,a,n)):e(r,t.S[r],o,a,n)},i=c(((e,r,o,a,n)=>r&&t.o(r,o)?s(r,0,o,a):n())),l={},m={5752:()=>i("default","react",[1,18,2,0],(()=>t.e("node_modules_pnpm_react_18_2_0_node_modules_react_index_js").then((()=>()=>t(3103))))),4669:()=>i("default","react-dom",[1,18,2,0],(()=>t.e("vendors-node_modules_pnpm_react-dom_18_2_0_react_18_2_0_node_modules_react-dom_index_js").then((()=>()=>t(3274))))),8797:()=>i("default","react-query",[1,3,39,3],(()=>t.e("vendors-node_modules_pnpm_react-query_3_39_3_react-dom_18_2_0_react_18_2_0_node_modules_react-11ea29").then((()=>()=>t(8909))))),5095:()=>i("default","react-router-dom",[1,6,15,0],(()=>t.e("vendors-node_modules_pnpm_react-router-dom_6_15_0_react-dom_18_2_0_react_18_2_0_node_modules_-323b6a").then((()=>()=>t(9391)))))},p={webpack_sharing_consume_default_react_react:[5752],"webpack_sharing_consume_default_react-dom_react-dom":[4669],src_bootstrap_tsx:[8797,5095]};t.f.consumes=(e,r)=>{t.o(p,e)&&p[e].forEach((e=>{if(t.o(l,e))return r.push(l[e]);var o=r=>{l[e]=0,t.m[e]=o=>{delete t.c[e],o.exports=r()}},a=r=>{delete l[e],t.m[e]=o=>{throw delete t.c[e],r}};try{var n=m[e]();n.then?r.push(l[e]=n.then(o).catch(a)):o(n)}catch(_){a(_)}}))}})(),(()=>{if("undefined"!==typeof document){var e=e=>new Promise(((r,o)=>{var a=t.miniCssF(e),n=t.p+a;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var a=(_=t[o]).getAttribute("data-href")||_.getAttribute("href");if("stylesheet"===_.rel&&(a===e||a===r))return _}var n=document.getElementsByTagName("style");for(o=0;o<n.length;o++){var _;if((a=(_=n[o]).getAttribute("data-href"))===e||a===r)return _}})(a,n))return r();((e,r,t,o,a)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=t=>{if(n.onerror=n.onload=null,"load"===t.type)o();else{var _=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=_,d.request=s,n.parentNode&&n.parentNode.removeChild(n),a(d)}},n.href=r,t?t.parentNode.insertBefore(n,t.nextSibling):document.head.appendChild(n)})(e,n,null,r,o)})),r={chassis:0};t.f.miniCss=(t,o)=>{r[t]?o.push(r[t]):0!==r[t]&&{src_bootstrap_tsx:1}[t]&&o.push(r[t]=e(t).then((()=>{r[t]=0}),(e=>{throw delete r[t],e})))}}})(),(()=>{var e={chassis:0};t.f.j=(r,o)=>{var a=t.o(e,r)?e[r]:void 0;if(0!==a)if(a)o.push(a[2]);else if(/^webpack_sharing_consume_default_react(\-dom_react\-dom|_react)$/.test(r))e[r]=0;else{var n=new Promise(((t,o)=>a=e[r]=[t,o]));o.push(a[2]=n);var _=t.p+t.u(r),s=new Error;t.l(_,(o=>{if(t.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=o&&("load"===o.type?"missing":o.type),_=o&&o.target&&o.target.src;s.message="Loading chunk "+r+" failed.\n("+n+": "+_+")",s.name="ChunkLoadError",s.type=n,s.request=_,a[1](s)}}),"chunk-"+r,r)}};var r=(r,o)=>{var a,n,[_,s,d]=o,u=0;if(_.some((r=>0!==e[r]))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(d)d(t)}for(r&&r(o);u<_.length;u++)n=_[u],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0},o=self.webpackChunkchassis=self.webpackChunkchassis||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var o=t(9068);chassis=o})();
//# sourceMappingURL=remoteEntry.js.map