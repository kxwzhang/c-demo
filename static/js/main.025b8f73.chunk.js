(this["webpackJsonpreact-tinder-card-demo"]=this["webpackJsonpreact-tinder-card-demo"]||[]).push([[0],{102:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(34),o=t.n(c),i=(t(41),t(6)),l=(t(42),t(43),t(10)),u=t.n(l),s=t(23),m=t(17),d=t.n(m),f=t(105),p=t(106),h=t(107),g=[{name:"Richard Hendricks",url:"./img/richard.jpg"},{name:"Erlich Bachman",url:"./img/erlich.jpg"},{name:"Monica Hall",url:"./img/monica.jpg"},{name:"Jared Dunn",url:"./img/jared.jpg"},{name:"Dinesh Chugtai",url:"./img/dinesh.jpg"}];var v=function(){var e=Object(a.useState)(g.length-1),n=Object(i.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(),l=Object(i.a)(o,2),m=l[0],v=l[1],b=Object(a.useRef)(t),E=Object(a.useMemo)((function(){return Array(g.length).fill(0).map((function(e){return r.a.createRef()}))}),[]),k=function(e){c(e),b.current=e},w=t<g.length-1,y=t>=0,j=function(){var e=Object(s.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(y&&t<g.length)){e.next=3;break}return e.next=3,E[t].current.swipe(n);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=Object(s.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w){e.next=2;break}return e.abrupt("return");case 2:return k(n=t+1),e.next=6,E[n].current.restoreCard();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Damion&display=swap",rel:"stylesheet"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Alatsi&display=swap",rel:"stylesheet"}),r.a.createElement("h1",null,"How It Started: 2021"),r.a.createElement("div",{className:"cardContainer"},g.map((function(e,n){return r.a.createElement(d.a,{ref:E[n],className:"swipe",key:e.name,onSwipe:function(t){return function(e,n,t){v(e),k(t-1)}(t,e.name,n)},onCardLeftScreen:function(){return t=e.name,a=n,console.log("".concat(t," (").concat(a,") left the screen!"),b.current),void(b.current>=a&&E[a].current.restoreCard());var t,a}},r.a.createElement("div",{style:{backgroundImage:"url("+e.url+")"},className:"card"},r.a.createElement("h3",null,e.name)))}))),r.a.createElement("div",{className:"buttons"},r.a.createElement(f.a,{style:{backgroundColor:!y&&"#c3c4d3",fontSize:"60px",color:"red",padding:"0.5rem"},onClick:function(){return j("left")}}),w&&r.a.createElement(p.a,{style:{backgroundColor:!y&&"#c3c4d3",fontSize:"60px",color:"blue",padding:"0.5rem"},onClick:function(){return x()}}),r.a.createElement(h.a,{style:{backgroundColor:!y&&"#c3c4d3",fontSize:"60px",color:"green",padding:"0.5rem"},onClick:function(){return j("right")}})),m?r.a.createElement("h2",{key:m,className:"infoText"},"You swiped ",m):r.a.createElement("div",null,r.a.createElement("h2",{className:"infoText"},"Congratulations!"),r.a.createElement("h2",{className:"infoText"},"You have a new match on Tinder!")))};var b=function(){var e=Object(a.useState)(!0),n=Object(i.a)(e,2);return n[0],n[1],r.a.createElement("div",{className:"app"},r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},36:function(e,n,t){e.exports=t(102)},41:function(e,n,t){},42:function(e,n,t){}},[[36,1,2]]]);
//# sourceMappingURL=main.025b8f73.chunk.js.map