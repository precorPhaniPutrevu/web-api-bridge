(window.webpackJsonpwebapp2=window.webpackJsonpwebapp2||[]).push([[0],{101:function(e,t,n){var r={"./Api1":27,"./Api1/":27,"./Api1/callbacks":23,"./Api1/callbacks.js":23,"./Api1/index":27,"./Api1/index.js":27,"./Api2":28,"./Api2/":28,"./Api2/apis":25,"./Api2/apis.js":25,"./Api2/callbacks":24,"./Api2/callbacks.js":24,"./Api2/index":28,"./Api2/index.js":28,"./Api3":29,"./Api3/":29,"./Api3/apis":26,"./Api3/apis.js":26,"./Api3/index":29,"./Api3/index.js":29,"./Common":30,"./Common/":30,"./Common/callbacks":15,"./Common/callbacks.js":15,"./Common/index":30,"./Common/index.js":30,"./Send":14,"./Send.js":14};function i(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=c,e.exports=i,i.id=101},102:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),c=n(57),o=n.n(c),a=n(31),s=n(17),u=n(58),p=n(16),l=n(59),b=(n(102),n(41)),f=n.n(b),d=n(60);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach(function(t){Object(a.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var j=function(e){var t=e.size,n=t.width,r=t.height,i=e.id,c=e.grayscale,o=e.blur,a=i?"https://picsum.photos/id/".concat(i,"/").concat(n,"/").concat(r,"/"):"https://picsum.photos/".concat(n,"/").concat(r,"/");return c&&(a="".concat(a,"?grayscale")),o&&(a="".concat(a,c?"&blur":"?blur")),a},h=function(){var e=Object(d.a)(f.a.mark(function e(t){var n,r,i,c,o;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.lastRequestUrl,(r=j(t))!==n){e.next=4;break}return e.abrupt("return",t);case 4:return e.next=6,fetch(r);case 6:return i=e.sent,e.next=9,i.blob();case 9:return c=e.sent,o=i.url.split("/")[4],e.abrupt("return",w({},t,{lastRequestUrl:j(w({},t,{id:o})),id:o,url:URL.createObjectURL(c)}));case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();var y=function(){var e=function(){var e=Object(r.useState)({width:window.innerWidth,height:window.innerHeight}),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(r.useEffect)(function(){var e=function(){return i({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),n}(),t=Object(r.useState)({}),n=Object(s.a)(t,2),i=n[0],c=n[1],o=i.id,a=i.grayscale,u=i.blur;return Object(r.useEffect)(function(){h(w({},i,{size:e})).then(function(e){return c(e)})},[e,o,a,u]),[i,c]};function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach(function(t){Object(a.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var g=function(){console.log("render webapp2");var e=y(),t=Object(s.a)(e,2),n=t[0],c=t[1],o=n.url,a=n.id;return Object(r.useEffect)(function(){Object(u.startApis)("https://precor.github.io"),Object(p.setCallback)("displayNewPhoto",function(){return c(function(e){return v({},e,{id:void 0})})}),Object(p.setCallback)("displayGrayscale",function(e){return c(function(t){return v({},t,{grayscale:e})})}),Object(p.setCallback)("displayBlur",function(e){return c(function(t){return v({},t,{blur:e})})})},[c]),o?i.a.createElement("img",{src:o,alt:"",onClick:function(){return Object(l.photoClicked)(a)}}):null};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},61:function(e,t,n){e.exports=n(104)}},[[61,1,2]]]);
//# sourceMappingURL=main.139a4ccb.chunk.js.map