"use strict";var precacheConfig=[["/index.html","812e9c960b71588cc558877131efd71e"],["/static/css/main.84bc9c38.css","1b06d12ebbaa942e98449b442c4c8183"],["/static/js/0.f562bf07.chunk.js","2cbd09f2390b49b6c8b1ee2cd063bfb8"],["/static/js/1.75ae5038.chunk.js","66f849e2cce0862f68dd63e9f52be925"],["/static/js/2.0fb77510.chunk.js","25d69d5c98ecea7012f3052bb84e7c96"],["/static/js/3.e94a7941.chunk.js","78ef4cba3f8e002cfc4c2848c015caf3"],["/static/js/4.eee6647f.chunk.js","b34a070ea5cb9de07e1da77cede11afe"],["/static/js/5.a1d0c9ff.chunk.js","f446e6398f67c7613ec37388bfdc368f"],["/static/js/6.cadeb1be.chunk.js","acb0d92ac242ebcd6a69d05e3d7f0757"],["/static/js/7.0ba572c4.chunk.js","4b7390c3b11a644a4712a9cc7b5dcc6f"],["/static/js/main.5c189780.js","f96fa335f83855e5f1f84db881a5a1dc"],["/static/media/123.5923f943.md","5923f943aa26afe45dedb11ac5883362"],["/static/media/Quicksand-Bold.0c044626.ttf","0c04462696ac0fd3e85e75415b483fdb"],["/static/media/Quicksand-Light.c5f95478.ttf","c5f954788f341b22e1974433bb972ac1"],["/static/media/Quicksand-Medium.0c642332.ttf","0c64233241ead44bffbec54eb9d1d164"],["/static/media/Quicksand-Regular.f87b9b4f.ttf","f87b9b4f34bdbf75b5c0cf3a5a137508"],["/static/media/dfSim.5c9bcf44.png","5c9bcf44fdcd6585f8632ce59bf3a669"],["/static/media/findc.fdd898f9.jpg","fdd898f929908cb810558a82cc35ebf8"],["/static/media/igem2017.3441e223.jpg","3441e2239b0da8ae43e872663e73a483"],["/static/media/info300-1.b83857b5.md","b83857b5f873a39549b08a3702b5d8bf"],["/static/media/koconut.def81f38.jpg","def81f38ac26a09b8d3770bbf612cec6"],["/static/media/main.6a0b7eef.png","6a0b7eef359040a54bb4f30cccbad862"],["/static/media/planet.ce5f0fd5.png","ce5f0fd5461843a21ba5447c420ac313"],["/static/media/pr.4479c254.png","4479c254c63a8aa3a66171fd6d9e6959"],["/static/media/safecycleJS.898b2d43.png","898b2d43526bd2497485c6927483be4e"],["/static/media/safecycleR.b1d2bbda.png","b1d2bbdafc16e3e1f5d6243488090e94"],["/static/media/scout.6a0df6e7.png","6a0df6e7af734944d2db3cbc6afc4fe2"],["/static/media/teammanager.27409909.png","27409909e5aa64b7aadfdb5eeeca2a55"],["/static/media/walker.aacf9e89.png","aacf9e8999ff985be6177f9a594d9ecb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});