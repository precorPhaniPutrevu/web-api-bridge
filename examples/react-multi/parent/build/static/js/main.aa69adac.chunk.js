(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,i){e.exports=i(52)},51:function(e,t,i){},52:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),r=i(16),o=i.n(r),c=i(20),s=i(17),p=i(21),l=i(18),d=i(2),u=i(22),b=i(3),h=i(19),w=i.n(h),g=(i(51),["https://precor.github.io/web-api-bridge/examples/react-multi/webapp1/build/#/page2/","https://precor.github.io/web-api-bridge/examples/react-multi/webapp1/build/#/page2/","https://precor.github.io/web-api-bridge/examples/react-multi/webapp2/build/","https://precor.github.io/web-api-bridge/examples/react-multi/webapp2/build/"]),m=[],f=function e(t){var i=this;Object(b.a)(this,e),this.setSend=function(e){i.send=e},this.photoSelected=function(e){i.send("photoSelected",[e],!1)},this.send=t},v=function e(t){var i=this;Object(b.a)(this,e),this.setSend=function(e){i.send=e},this.photoClicked=function(t){m.find(function(e){return e.props.api instanceof f}).props.api.photoSelected(t),m.forEach(function(t){t.props.api!==i&&t.props.api instanceof e&&t.props.api.displayNewPhoto()})},this.displayNewPhoto=function(){i.send("displayNewPhoto",null,!1)},this.send=t},E=function(e){function t(){var e,i;Object(b.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(i=Object(p.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).setIframe=function(e){if(e&&!i.iframe){i.iframe=e;var t=i.props,n=t.src,a=t.api,r=new URL(n);i.webApiBridge=new w.a,i.webApiBridge.origin=r.origin,i.webApiBridge.targetOrigin=r.origin,i.webApiBridge.apis=[a],a.setSend(i.webApiBridge.send.bind(i.webApiBridge)),m.push(Object(d.a)(i)),i.webApiBridge.target=e.contentWindow,window.addEventListener("message",function(e){e&&e.source===i.webApiBridge.target&&i.webApiBridge.onMessage(e,e.data)}),i.iframe.onload=function(){console.log("".concat(e.src," loaded"))}}},i}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,i=t.src,n=(t.api,Object(c.a)(t,["src","api"]));return console.log("render iframe: ".concat(i)),a.a.createElement("iframe",Object.assign({src:i,title:i,ref:function(t){e.setIframe(t)},scrolling:"no"},n))}}]),t}(n.Component),B=function(){return console.log("render parent"),a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(E,{className:"fullscreen-iframe",src:"https://precor.github.io/web-api-bridge/examples/react-multi/webapp1/build/#/page1/",api:new f})),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},g.map(function(e,t){return a.a.createElement(E,{className:"image-select",key:t,src:e,api:new v})})),a.a.createElement("div",{className:"overlay-text"},"Click on one of the 4 photos")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.aa69adac.chunk.js.map