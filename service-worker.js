"use strict";var precacheConfig=[["/index.html","e658acd74e0b0908d9fe8eadbe716feb"],["/static/css/main.84bc9c38.css","1b06d12ebbaa942e98449b442c4c8183"],["/static/js/0.f8d9fd54.chunk.js","b01bd1d2a07f0ab16bbad6c77606a925"],["/static/js/1.153f9290.chunk.js","3f06ded400dd6f1690d655e84b19bf1b"],["/static/js/2.12730149.chunk.js","70537f4e6cfc9030263802d74f86dd76"],["/static/js/3.861d37d5.chunk.js","e7943acb76beed9518f015948d0889b7"],["/static/js/4.c98a5d15.chunk.js","c291c7f46fb1b3b196c608d030ce5275"],["/static/js/main.4a2dbc80.js","3bcd95be2d8e5de3d7651f3f9f746f4e"],["/static/media/Quicksand-Bold.0c044626.ttf","0c04462696ac0fd3e85e75415b483fdb"],["/static/media/Quicksand-Light.c5f95478.ttf","c5f954788f341b22e1974433bb972ac1"],["/static/media/Quicksand-Medium.0c642332.ttf","0c64233241ead44bffbec54eb9d1d164"],["/static/media/Quicksand-Regular.f87b9b4f.ttf","f87b9b4f34bdbf75b5c0cf3a5a137508"],["/static/media/dfSim.5c9bcf44.png","5c9bcf44fdcd6585f8632ce59bf3a669"],["/static/media/igem2017.3441e223.jpg","3441e2239b0da8ae43e872663e73a483"],["/static/media/main.6a0b7eef.png","6a0b7eef359040a54bb4f30cccbad862"],["/static/media/planet.ce5f0fd5.png","ce5f0fd5461843a21ba5447c420ac313"],["/static/media/pr.4479c254.png","4479c254c63a8aa3a66171fd6d9e6959"],["/static/media/safecycleJS.898b2d43.png","898b2d43526bd2497485c6927483be4e"],["/static/media/safecycleR.b1d2bbda.png","b1d2bbdafc16e3e1f5d6243488090e94"],["/static/media/scout.6a0df6e7.png","6a0df6e7af734944d2db3cbc6afc4fe2"],["/static/media/teammanager.27409909.png","27409909e5aa64b7aadfdb5eeeca2a55"],["/static/media/walker.aacf9e89.png","aacf9e8999ff985be6177f9a594d9ecb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});