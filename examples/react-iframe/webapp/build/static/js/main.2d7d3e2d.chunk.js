(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},22:function(e,t,n){e.exports=n(52)},28:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(15),r=n.n(i),c=(n(28),n(16)),s=n(20),l=n(17),m=n(21),u=n(8),d=n(18),p=n.n(d),w=n(19),g=n.n(w),h=(n(51),"https://precor.github.io"),f=function e(t){var n=this;Object(u.a)(this,e),this.setOnWelcome=function(e){return n.onWelcome=e},this.welcome=function(e){console.log("got welcome message"),n.onWelcome(e)},this.howOldAreYou=function(){return console.log("asking for age"),n.send("howOldAreYou",null,!0)},this.send=t},b=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).webApiBridge=new p.a,n.myIframeApi=new f(n.webApiBridge.send.bind(n.webApiBridge)),n.myIframeApi.setOnWelcome(function(e){return n.setState({welcome:e})}),n.webApiBridge.origin=h,n.webApiBridge.targetOrigin=h,n.webApiBridge.apis=[n.myIframeApi],window.addEventListener("message",function(e){return n.webApiBridge.onMessage(e,e.data)}),n.webApiBridge.target=window.parent,n.state={},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.welcome,o=t.age;return n&&!o&&this.myIframeApi.howOldAreYou().then(function(t){return e.setState({age:t})}),a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("p",null,"webapp iframe"),a.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null,n&&o?"from parent: ".concat(n,", I'm: ").concat(o):"waiting...")))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.2d7d3e2d.chunk.js.map