if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const l=e=>s(e,t),c={module:{uri:t},exports:o,require:l};i[t]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BZ6kxL7u.css",revision:null},{url:"assets/index-CPUO4LyT.js",revision:null},{url:"assets/webfontloader-BbsTpSw6.js",revision:null},{url:"index.html",revision:"f0a594f6ebe1c66152c6d9573f5b648e"},{url:"registerSW.js",revision:"96aa3fd899a701243c0554d2c28a2a94"},{url:"img/charging_station_192.png",revision:"b2283301419c8bce0f53e91719c3fb09"},{url:"img/charging_station_512.png",revision:"b739a98fb67f9f13d2bf4a71e5bc6ece"},{url:"manifest.webmanifest",revision:"8fcb4baa526639e00d0dc648f96ecdae"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
