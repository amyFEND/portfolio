(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(55)},26:function(e,t,a){},28:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),l=a.n(r),o=(a(26),a(1)),i=a(2),s=a(5),u=a(3),m=a(4),d=(a(28),a(30),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet vulputate mi, non ornare orci auctor sit amet. Phasellus eleifend tortor eget dolor fringilla ultrices. Aenean fermentum nulla enim, vel vulputate nisl pharetra et. Morbi nec purus quis felis auctor semper a sit amet tellus. Aenean vel mollis massa, sit amet cursus massa. Donec consectetur nisl et viverra feugiat. Ut massa magna, auctor et lectus ut, pulvinar aliquet mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas dignissim nisi at imperdiet efficitur. Quisque in tortor sit amet enim venenatis porta eget id lectus. Etiam fringilla iaculis diam a gravida. Integer scelerisque quis risus vitae rutrum. Morbi in quam vitae orci porta consequat."),p=a(7),v=(a(41),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"Nav",className:"container-fluid"},c.a.createElement("nav",{className:"container"},c.a.createElement("div",{className:"row justify-content-end"},c.a.createElement("div",{className:"col-9"},c.a.createElement("div",{className:"navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item active"},c.a.createElement(p.Link,{className:"nav-link",activeClass:"active",to:"Home",spy:!0,smooth:!0,offset:-70,duration:500},"Home ",c.a.createElement("span",{className:"sr-only"},"(current)"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.Link,{className:"nav-link",activeClass:"active",to:"About",spy:!0,smooth:!0,offset:-70,duration:500},"About")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.Link,{className:"nav-link",activeClass:"active",to:"Projects",spy:!0,smooth:!0,offset:-70,duration:500},"Projects")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.Link,{className:"nav-link",activeClass:"active",to:"Contact",spy:!0,smooth:!0,offset:-70,duration:500},"Contact"))))))))}}]),t}(n.Component)),h=a(6),f=(a(43),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={topButton:!1,intervalId:0},a.showTopBtn=a.showTopBtn.bind(Object(h.a)(Object(h.a)(a))),a.scrollToTop=a.scrollToTop.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.showTopBtn)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.showTopBtn)}},{key:"showTopBtn",value:function(e){document.body.scrollTop>300||document.documentElement.scrollTop>300?this.setState({topButton:!0}):this.setState({topButton:!1})}},{key:"scrollStep",value:function(){0===window.pageYOffset&&clearInterval(this.state.intervalId),window.scroll(0,window.pageYOffset-this.props.scrollStepInPx)}},{key:"scrollToTop",value:function(){p.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.state.topButton;return c.a.createElement("div",null,e&&c.a.createElement("button",{to:"/",id:"toTop",title:"Go to top",onClick:this.scrollToTop},"\u2191"))}}]),t}(n.Component));a(45);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var b=c.a.createElement("metadata",null,"Created by potrace 1.15, written by Peter Selinger 2001-2017"),j=c.a.createElement("g",{transform:"translate(0.000000,1477.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"},c.a.createElement("path",{d:"M5960 14755 c0 -13 23 -15 150 -15 144 0 150 -1 150 -20 0 -21 -1086\n-8721 -1095 -8777 l-6 -31 -74 29 c-339 130 -737 229 -1115 276 -204 25 -814\n25 -1004 0 -444 -60 -826 -179 -1236 -387 -765 -388 -1318 -1042 -1569 -1855\n-50 -164 -119 -461 -138 -595 -26 -191 -23 -559 6 -749 41 -271 107 -485 226\n-743 71 -153 77 -165 143 -285 98 -175 333 -501 485 -673 74 -83 250 -247 353\n-329 129 -102 385 -246 589 -331 266 -110 793 -234 1111 -261 235 -20 686 0\n924 41 30 5 71 11 90 14 153 23 480 106 645 164 444 155 829 382 1215 718 152\n132 347 333 460 474 24 30 50 62 57 70 34 39 263 365 263 375 0 2 54 94 120\n205 66 111 130 220 141 243 12 23 25 47 30 53 27 34 217 440 278 594 23 58 46\n114 50 125 86 210 262 835 312 1105 6 36 15 71 18 78 8 15 146 -78 632 -424\n604 -430 850 -581 1285 -786 200 -94 549 -219 684 -244 14 -3 43 -10 65 -16\n22 -5 49 -12 60 -14 11 -1 61 -10 111 -18 49 -9 106 -18 125 -21 18 -3 133 -8\n254 -11 246 -7 441 8 641 51 309 65 628 271 854 552 264 326 447 782 489 1217\n15 154 14 196 -4 196 -12 0 -15 -14 -15 -66 0 -37 -7 -113 -15 -170 -70 -471\n-352 -888 -805 -1189 -372 -247 -615 -318 -1140 -331 -378 -10 -711 39 -1095\n163 -444 142 -1117 500 -1609 855 -129 94 -439 328 -461 349 -5 6 53 9 149 8\n146 0 178 3 164 16 -2 3 -73 5 -156 6 -89 0 -152 4 -152 10 0 16 1260 10093\n1264 10109 2 8 3 -2264 2 -5050 l-1 -5065 -152 -3 c-91 -1 -153 -6 -153 -12 0\n-6 32 -10 73 -10 1061 -3 1863 2 1871 10 7 7 -7 10 -39 10 -28 1 -99 2 -160 3\nl-110 2 -3 5172 -2 5172 157 3 c114 2 157 6 161 16 3 9 -196 12 -972 12 -861\n0 -976 -2 -976 -15 0 -13 23 -15 150 -15 149 0 150 0 150 -22 -1 -13 -142\n-1146 -314 -2518 -195 -1559 -315 -2484 -319 -2465 -5 23 -627 4982 -627 5000\n0 3 68 6 152 7 110 2 152 6 156 16 3 9 -196 12 -972 12 -861 0 -976 -2 -976\n-15z m310 -4826 c0 -3669 -3 -4589 -13 -4583 -6 4 -41 26 -77 49 -213 135\n-559 317 -830 436 l-155 69 1 37 c1 40 1067 8583 1071 8583 2 0 3 -2066 3\n-4591z m1640 -2810 l-308 -2454 0 4910 0 4910 308 -2456 308 -2455 -308 -2455z\nm-3615 -1423 c175 -22 393 -60 545 -96 145 -34 258 -65 267 -73 5 -6 -119\n-1036 -133 -1109 l-6 -28 -154 0 c-96 0 -154 -4 -154 -10 0 -6 115 -10 325\n-10 210 0 325 4 325 10 0 6 -58 10 -155 10 -85 0 -155 3 -155 8 1 26 140 1115\n144 1119 13 13 474 -158 716 -267 116 -52 374 -183 398 -202 9 -8 12 -83 10\n-332 l-3 -321 -152 -3 c-210 -4 -202 -22 10 -22 89 0 416 -1 727 -2 l565 -3\n42 -28 42 -29 -63 -181 c-293 -840 -527 -1306 -1001 -1992 -219 -317 -331\n-450 -566 -680 -239 -233 -511 -440 -774 -587 -515 -290 -1164 -529 -1625\n-599 -268 -40 -756 -35 -1028 11 -407 70 -977 325 -1337 600 -317 242 -651\n652 -815 1003 -184 392 -241 885 -159 1377 61 369 166 648 360 958 163 263\n411 543 629 712 266 205 653 412 985 527 335 115 868 218 1335 257 123 10 732\n-3 855 -18z"})),O=function(e){return c.a.createElement("svg",E({version:1,width:"1275.000000pt",height:"1477.000000pt",viewBox:"0 0 1275.000000 1477.000000",preserveAspectRatio:"xMidYMid meet"},e),b,j)},g=(a.p,function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{id:"Home",className:"container-fluid"},c.a.createElement("div",{className:"container"},c.a.createElement("header",{className:"App-header"},c.a.createElement(O,{className:"logo",alt:"logo"}),c.a.createElement("p",null,"Work in Progress",c.a.createElement("span",{class:"one"},"."),c.a.createElement("span",{class:"two"},"."),c.a.createElement("span",{class:"three"},".")))))}}]),t}(n.Component)),y=(a(47),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.placeholderTxt;return c.a.createElement("section",{id:"About",className:"container-fluid"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"About"),c.a.createElement("p",null,e)))}}]),t}(n.Component));a(49),a(51);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var N=c.a.createElement("path",{_ngcontentSc5:"",d:"M29 .5l1 .5v13c0 5.551887-2.8897 8.695692-5.995216 10.099885L24.0094 24.1l-7.620963 4.388562c-.05877.03456-.11776.068527-.176957.101902l-.08642.049764.001806-.00254C14.48289 29.545895 12.684682 30 11 30 6 30 0 26 0 18V6l2 1v11c0 8 6 10 9 10 1.858706 0 4.86901-.76773 6.89043-3.254517C14.181726 23.872636 10 20.678703 10 14V2.2L2 7 0 6l10-6 1 .5 1 .5v13c0 6.939958 4.515283 8.612086 7.017542 8.933368C19.625786 21.62159 20 19.997902 20 18V5l2 1v12c0 1.852645-.321777 3.49077-.878395 4.91438C23.648223 22.549217 28 20.813144 28 14V2.25L22 6l-2-1 8-5 1 .5z",fill:"#02B3E4",fillRule:"evenodd",id:"mark"}),k=function(e){return c.a.createElement("svg",w({_ngcontentSc5:"",alt:"Udacity Project",height:30,viewBox:"0 0 30 30",width:30},e),N)},C=(a.p,function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"carouselIndicators",class:"carousel slide","data-ride":"carousel"},c.a.createElement("div",{class:"carousel-inner"},c.a.createElement("div",{class:"carousel-item active"},c.a.createElement(k,{className:"udacilogo",alt:"First slide"})),c.a.createElement("div",{class:"carousel-item"},c.a.createElement("svg",{class:"placeholder",width:"200px",height:"300px",alt:"Second slide"})),c.a.createElement("div",{class:"carousel-item"},c.a.createElement("svg",{class:"placeholder",width:"200px",height:"300px",alt:"Third slide"}))),c.a.createElement("a",{class:"carousel-control-prev",href:"#carouselIndicators",role:"button","data-slide":"prev"},c.a.createElement("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),c.a.createElement("span",{class:"sr-only"},"Previous")),c.a.createElement("a",{class:"carousel-control-next",href:"#carouselIndicators",role:"button","data-slide":"next"},c.a.createElement("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),c.a.createElement("span",{class:"sr-only"},"Next")),c.a.createElement("ol",{class:"carousel-indicators"},c.a.createElement("li",{"data-target":"#carouselIndicators","data-slide-to":"0",class:"active"}),c.a.createElement("li",{"data-target":"#carouselIndicators","data-slide-to":"1"}),c.a.createElement("li",{"data-target":"#carouselIndicators","data-slide-to":"2"})))}}]),t}(n.Component)),T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{id:"Projects",className:"container-fluid"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Projects"),c.a.createElement("div",{id:"project"},c.a.createElement(C,null))))}}]),t}(n.Component),x=(a(53),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.placeholderTxt;return c.a.createElement("section",{id:"Contact",className:"container-fluid"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Contact"),c.a.createElement("p",null,e)))}}]),t}(n.Component)),B=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(v,null),c.a.createElement(g,{id:"Home"}),c.a.createElement("hr",{id:"divider"}),c.a.createElement(y,{id:"About",placeholderTxt:d}),c.a.createElement("hr",{id:"divider"}),c.a.createElement(T,{id:"Projects"}),c.a.createElement("hr",{id:"divider"}),c.a.createElement(x,{id:"Contact",placeholderTxt:d}),c.a.createElement(f,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.89b308d0.chunk.js.map