(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{248:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return r})},250:function(e,t,n){"use strict";var r=n(259);var a=n(260);function u(e,t){return Object(r.a)(e)||function(e,t){var n=[],r=!0,a=!1,u=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(i){a=!0,u=i}finally{try{r||null==c.return||c.return()}finally{if(a)throw u}}return n}(e,t)||Object(a.a)()}n.d(t,"a",function(){return u})},256:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(248);function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){Object(r.a)(e,t,n[t])})}return e}},259:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",function(){return r})},260:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}n.d(t,"a",function(){return r})},264:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(0),a=n.n(r),u=n(761);function o(){return a.a.createElement("div",{style:{marginBottom:10}},a.a.createElement(u.a,{className:"btn",style:{textDecoration:"none",color:"white",backgroundColor:"#005696"},to:"/tutorqadmin"},"Back to admin hub"))}},760:function(e,t,n){"use strict";n.r(t);var r=n(256),a=n(250),u=n(0),o=n.n(u),c=n(12),i=n.n(c),l=(n(117),n(264)),f=n(246),s=(n(263),i.a.functions().httpsCallable("removeUserFromQueue"));function m(e){var t=e.person,n=Object(u.useState)(!1),r=Object(a.a)(n,2),c=r[0],i=r[1],l=t.timestamp,m=t.name,b=t.classNumber,d=t.problemCategory,v=t.problemDescription,p=t.id;if(!l)return null;var y=new Date(l);return o.a.createElement(f.c,null,o.a.createElement(f.d,null,o.a.createElement(f.i,null,"Name: ",m),o.a.createElement(f.g,null,"Course: ",b," - ",d),o.a.createElement(f.h,null,"Submitted: ",y.toLocaleDateString()," ",y.toLocaleTimeString()),o.a.createElement(f.h,null,"Description: ",v),o.a.createElement(f.b,{disabled:c,style:{backgroundColor:"#005696"},onClick:function(){i(!0),s({id:p,removedFromQueue:!0}).then(function(e){i(!1),e.data.success||console.log(e.data)})}},"Remove")))}function b(){var e=Object(u.useState)({}),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(u.useState)({}),b=Object(a.a)(s,2),d=b[0],v=b[1];Object(u.useEffect)(function(){var e=i.a.database().ref("/tutorq/inqueue");e.on("value",function(e){var t=e.val()||{};c(t)});var t=i.a.database().ref("/tutorq/idToQueueInfo");return t.on("value",function(e){var t=e.val()||{};v(t)}),function(){e.off(),t.off()}},[]);var p=Object(r.a)({},n);Object.keys(d).forEach(function(e){if(d[e]){var t=d[e],n=t.queueKey,r=t.name,a=p[n];a&&(a.name=r,a.id=e)}});var y=Object.keys(p).sort(function(e,t){return p[e].timestamp-p[t].timestamp}).map(function(e){var t=p[e];return o.a.createElement(m,{key:e,person:t})});return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,null),0===y.length&&o.a.createElement("div",null,"There is nobody in the queue right now."),0!==y.length&&o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"There are ",y.length," people in the queue."),o.a.createElement(f.e,{style:{textAlign:"left"}},y)))}n.d(t,"default",function(){return b})}}]);
//# sourceMappingURL=46.97e7a035.chunk.js.map