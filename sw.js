if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>i(e,t),c={module:{uri:t},exports:l,require:o};s[t]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/base-DbMKDdBq.css",revision:null},{url:"assets/index-B-lKG4mi.css",revision:null},{url:"assets/index-C2xIRHFK.js",revision:null},{url:"assets/main-BLJ_rOkC.css",revision:null},{url:"index.html",revision:"b2bfe7c0d858c7a7029455fc8a453c7c"},{url:"registerSW.js",revision:"5f081f2da882f5e44f5272984db4d416"},{url:"manifest.webmanifest",revision:"0588d06272991dfbd391c41e338c25af"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
