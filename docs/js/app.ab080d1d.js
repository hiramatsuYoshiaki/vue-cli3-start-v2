(function(t){function e(e){for(var i,s,r=e[0],c=e[1],l=e[2],u=0,m=[];u<r.length;u++)s=r[u],a[s]&&m.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var r=n[s];0!==a[r]&&(i=!1)}i&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},s={app:0},a={app:0},o=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2183bf28","chunk-13dda8fb":"424138a3","chunk-1e8813fe":"5983ef54","chunk-4d69497a":"05dcc64b"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1,"chunk-13dda8fb":1,"chunk-1e8813fe":1,"chunk-4d69497a":1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise(function(e,n){for(var i="css/"+({about:"about"}[t]||t)+"."+{about:"66f952d8","chunk-13dda8fb":"938d3742","chunk-1e8813fe":"85e42e32","chunk-4d69497a":"b6f4ae8b"}[t]+".css",a=c.p+i,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var l=o[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===a))return e()}var m=document.getElementsByTagName("style");for(r=0;r<m.length;r++){l=m[r],u=l.getAttribute("data-href");if(u===i||u===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var i=e&&e.target&&e.target.src||a,o=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");o.request=i,delete s[t],d.parentNode.removeChild(d),n(o)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){s[t]=0}));var i=a[t];if(0!==i)if(i)e.push(i[2]);else{var o=new Promise(function(e,n){i=a[t]=[e,n]});e.push(i[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(t),l=function(e){u.onerror=u.onload=null,clearTimeout(m);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+i+": "+s+")");o.type=i,o.request=s,n[1](o)}a[t]=void 0}};var m=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var m=0;m<l.length;m++)e(l[m]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"054e":function(t,e,n){},"0904":function(t,e,n){},"125a":function(t,e,n){t.exports=n.p+"img/h-works1200x600white.a5e93905.svg"},1312:function(t,e,n){"use strict";var i=n("5dbc"),s=n.n(i);s.a},"1fe9":function(t,e,n){"use strict";var i=n("054e"),s=n.n(i);s.a},"20c8":function(t,e,n){"use strict";var i=n("8e94"),s=n.n(i);s.a},"2d47":function(t,e,n){"use strict";var i=n("a9ba"),s=n.n(i);s.a},3535:function(t,e,n){"use strict";var i=n("5f77"),s=n.n(i);s.a},"37c8":function(t,e,n){t.exports=n.p+"img/h-works1200x600black.7ab65215.svg"},"4f50":function(t,e,n){t.exports=n.p+"img/fuji1.0864f0fb.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.isLoading?n("div",[n("LoadingWrite")],1):t._e(),t.isLoading?t._e():n("div",[n("TransitionScreen",{attrs:{msg:"bgImage",img:t.bgImage,pageView:"loading"}})],1),t.isLoading?t._e():n("div",[n("router-view")],1)])},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"LoadingWrite"},[n("svg",{attrs:{version:"1.1",id:"wrapper",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"273px",height:"125.2px",viewBox:"0 0 273 125.2","enable-background":"new 0 0 273 125.2","xml:space":"preserve"}},[n("path",{staticClass:"path",attrs:{fill:"none",stroke:"#000000","stroke-width":"4","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round",d:"\n    M2,65.7C49.2,3.8,29.8,2.1,27.4,2c-2.4-0.1-4.4,2.2-6.6,5.3c-10.2,14.8-10.4,40.3-8.7,45s4.6,15.3,11.7,16.5\n    c5.5,0.9,10.8-2.9,14.3-7.4c3.5-4.4,6-9.7,10.2-13.4c4.2-3.7,11.1-5.4,15.4-1.7c-5-0.4-10.3-0.4-14.9,1.7s-8.2,7.1-7.3,12.1\n    c1.1,5.9,8.5,9.2,14.2,7.3s9.5-7.6,10.8-13.5c0.6-3,0.5-6.5-1.7-8.5c-2.2-2-6.9-0.7-6.7,2.3c0.2,2.1,2.4,3.3,4.4,3.8\n    c5.5,1.2,11.2-0.7,16.5-2.7c5.3-1.9,11-3.8,16.5-2.4c5.5,1.4,10,7.7,7.5,12.8c-0.6-7.2-7.3-13.4-14.5-13.3\n    c-7.2,0.2-13.7,7.1-13,14.3s8.6,12.9,15.6,10.8c7.5-2.2,11-11.3,10-19.1c-1.8,3.2-1.5,13.5,0.8,16.3c2.3,2.8,6.5,4,9.9,2.8\n    c4.4-1.5,6.9-12.1,9.5-16s6.5-7.9,11.1-7.2c5.2,0.8,7.6,6.8,9.1,11.9c0.3-6.2-5.6-12-11.8-11.6c-6.2,0.4-11.3,6.9-10.2,13.1\n    c1.1,6.1,8.2,10.5,14.2,8.7c7.4-2.2,10.3-11.1,11.3-18.8c1.9-14.6,0.9-29.5-2.8-43.7c-3,16.8-3.3,34-0.9,50.9\n    c0.8,5.7,2.6,12.3,7.8,14.8c5.8,2.8,12.9-1.2,16-6.8c3-5.6,3-12.4,2.8-18.8c-1.5,5.8-3.1,11.9-1.4,17.7c1.6,5.8,7.7,10.8,13.4,8.9\n    c5-1.6,7.4-7.5,7.7-12.8s-0.9-10.6,0.1-15.8c-1.8,10.2-0.9,20.9,2.5,30.7c0.5-7.1,1.1-14.3,1.6-21.4c0.2-2.5,0.5-5.4,2.4-7\n    c3.6-3.1,9.5,0.6,10.8,5.2c1.3,4.6-0.1,9.5,0,14.2c0.1,4,1.8,8.7,5.7,9.7c3.7,1,7.5-2,9.2-5.4c1.8-3.4,2.2-7.4,3.6-11\n    c1.9-4.7,5.6-8.8,10.4-10.4s10.6-0.3,13.8,3.7s2.9,10.4-1.1,13.6c4.4-4.6,4.4-12.7,0.1-17.5s-12.2-5.5-17.5-1.9s-7.3,11.2-4.8,17.1\n    c3.1,7.2,12.7,10.8,19.7,7.3c7-3.5,10.1-13.3,6.2-20.1c1.1,20,2.2,40,3.3,60c0.2,3.7,0,8.2-3.3,10c-4.1,2.3-8.9-2.1-10.7-6.5\n    c-4.6-11-1.6-24.8,7.3-32.9c4.7-4.3,10.8-6.9,15.8-10.9c5-4,9.2-10.1,7.9-16.4"}}),n("path",{staticClass:"path2",attrs:{fill:"none",stroke:"#000000","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:"\n    M177.7,20.2c-2.3-2.5-7-2.1-8.8,0.8c-1.8,2.9,0,7.3,3.3,8.2c2.3,0.6,4.9-0.4,6.2-2.4S179.3,22,177.7,20.2z"}})])])},r=[],c={name:"loadingWrite",props:{msg:String}},l=c,u=(n("2d47"),n("2877")),m=Object(u["a"])(l,o,r,!1,null,"61f633dc",null),d=m.exports,p=n("d4ad"),v={components:{LoadingWrite:d,TransitionScreen:p["a"]},data:function(){return{isLoading:!0,bgImage:n("e7ee")}},created:function(){var t=this;setInterval(function(){t.isLoading=!1},3e3)}},h=v,f=(n("5c0b"),Object(u["a"])(h,s,a,!1,null,null,null)),g=f.exports,b=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hoem"},[n("TransitionScreen",{attrs:{msg:"bgImage",img:t.bgImage,pageView:"home"}}),n("HeaderBar",{attrs:{msg:"HeaderBar",navMenu:"home",headerScrollType:!0,headerFixedType:!1,headerStikyType:!1,logoPositionLeft:!0,logoPositionCenter:!1,logoPositionRight:!1}}),n("HomeContent",{attrs:{msg:"HomeContent"}})],1)},k=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homeContent"},[n("div",{staticClass:"home-wrapper"},[n("main",[n("CarouselFullScreenAlprime")],1)])])},w=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carouselFullScreenAlprime"},[n("div",{staticClass:"carousel-wrapper"},[n("div",{staticClass:"carousel-nav"},[n("div",{staticClass:"nav-position"},[n("div",{staticClass:"nav-link-arrow",on:{click:function(e){return t.back_page()}}},[n("i",{staticClass:"fas fa-angle-left"})]),n("div",{staticClass:"nav-link-circle",on:{click:function(e){return t.back_page()}}},[n("svg",{attrs:{width:"60",height:"60"}},[n("circle",{attrs:{cx:"30",cy:"30",r:"24"}})])])]),n("div",{staticClass:"nav-position"},[n("div",{staticClass:"nav-link-arrow",on:{click:function(e){return t.next_page()}}},[t._m(0)]),n("div",{staticClass:"nav-link-circle",on:{click:function(e){return t.next_page()}}},[n("svg",{attrs:{width:"60",height:"60"}},[n("circle",{attrs:{cx:"30",cy:"30",r:"24"}})])])])]),n("div",{staticClass:"carousel-pagination"},[n("div",{staticClass:"pagination-position"},t._l(t.contents,function(e,i){return n("div",{key:i,staticClass:"pagination-box",on:{click:function(e){return t.skip_page(i)}}},[n("div",{staticClass:"pagination-text"},[t._v(t._s(i+1))]),n("transition",{attrs:{name:"pagenationActiveLine"}},[t.visible_content===e.id?n("div",{staticClass:"active-line"}):t._e()]),n("div",{staticClass:"pagination-mark"})],1)}),0)]),n("div",{staticClass:"vue-carousel ",attrs:{id:"vue-carousel"}},[n("transition-group",{attrs:{name:t.transition_name}},t._l(t.contents,function(e,i){return t.visible_content==i?n("div",{key:i,staticClass:"vue-carousel_body"},[n("div",{staticClass:"full-img-wrap",style:{"background-image":"url("+t.contents[i].imgURL+")"}},[n("div",{staticClass:"bg_filter"})])]):t._e()}),0),n("transition-group",{attrs:{name:t.transition_name_link}},t._l(t.contents,function(e){return t.visible_content==e.id?n("div",{key:e.id,staticClass:"vue-carousel_body_link"},[n("div",{staticClass:"carousel-link"},[n("div",{staticClass:"link-position"},[n("div",{staticClass:"transiton-box "},[n("transition",{attrs:{name:"carousel-pop-up",appear:""}},[n("p",[t._v("Seamless Page Transition Demo")])])],1),n("div",{staticClass:"transiton-box "},[n("transition",{attrs:{name:"carousel-pop-up",appear:""}},[n("p",[t._v("シームレスなページ遷移のデモ")])])],1),n("div",{staticClass:"transiton-box "},[n("transition",{attrs:{name:"carousel-pop-up",appear:""}},[n("h1",[t._v(t._s(e.titel))])])],1),n("div",{staticClass:"transiton-box "},[n("transition",{attrs:{name:"carousel-pop-up",appear:""}},[n("p",[t._v("クリックしてボーダレスなページ移動を確認ください。")])])],1),n("div",{staticClass:"link-unit"},[n("transition",{attrs:{name:"link-lineMotion",appear:""}},[n("div",{staticClass:"link-nextPage"},[n("a",{on:{click:function(n){return t.link_commit(e.link,e.link_path)}}},[n("div",{staticClass:"next-text"},[t._v("\n                                 "+t._s(e.link)+"\n                              ")])]),n("a",{on:{click:function(n){return t.link_commit(e.link,e.link_path)}}},[n("div",{staticClass:"link-arrow"},[n("svg",{attrs:{width:"60",height:"60"}},[n("line",{attrs:{x1:"0",y1:"30",x2:"60",y2:"30"}}),n("polygon",{attrs:{points:"56,26 56,34 60,30"}})])])]),n("a",{on:{click:function(n){return t.link_commit(e.link,e.link_path)}}},[n("div",{staticClass:"link-circle"},[n("svg",{attrs:{width:"60",height:"60"}},[n("circle",{attrs:{cx:"30",cy:"30",r:"24"}})])])])])])],1)])])]):t._e()}),0)],1)])])},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("i",{staticClass:"fas fa-angle-right"})])}],y={name:"CarouselFullScreenAlprime",props:{msg:String},data:function(){return{bg_cnt:0,acrInterval:null,bg_acrInterval:null,arr_interval:[],contents:[{id:0,title:"img1",bg_color:"#f16972",imgURL:n("4f50"),titel:"WORKS CONTENT",detail:"path:/works",link:"works",link_path:"/works"},{id:1,title:"img2",bg_color:"#7bbff9",imgURL:n("a485"),titel:"PROJECTS CONTENT",detail:"path:/projects",link:"projects",link_path:"/projects"},{id:2,title:"img3",bg_color:"#f16972",imgURL:n("7746"),titel:"ABOUT CONTENT ",detail:"path:/about",link:"about",link_path:"/about"},{id:3,title:"img4",bg_color:"#20d2d3",imgURL:n("7686"),titel:"CONTACT CONTENT",detail:"path:/content",link:"contact",link_path:"/contact"}],transition_name:"show-next",transition_name_link:"show-next-link",visible_content:0,contents_number:null}},beforeDestroy:function(){clearInterval(this.arr_interval.shift())},mounted:function(){this.contents_number=this.contents.length,this.autoSlide()},methods:{back_page:function(){this.transition_name="show-prev-alprime",this.transition_name_link="show-prev-alprime-link",this.transition_text="show-prev-text",this.visible_content-1===-1?this.visible_content=this.contents_number-1:this.visible_content--,clearInterval(this.arr_interval.shift()),this.bg_acrInterval=setInterval(this.renderBg,5e3),this.arr_interval.push(this.bg_acrInterval)},next_page:function(){this.transition_name="show-next-alprime",this.transition_name_link="show-next-alprime-link",this.transition_text="show-next-text",this.visible_content=(this.visible_content+1)%this.contents_number,clearInterval(this.arr_interval.shift()),this.bg_acrInterval=setInterval(this.renderBg,5e3),this.arr_interval.push(this.bg_acrInterval)},skip_page:function(t){t>this.visible_content?(this.visible_content=t-1,this.next_page()):t<this.visible_content&&(this.visible_content=t+1,this.back_page())},autoSlide:function(){this.bg_acrInterval=setInterval(this.renderBg,5e3),this.arr_interval.push(this.bg_acrInterval)},renderBg:function(){this.transition_name="show-next-alprime",this.transition_name_link="show-next-alprime-link",this.transition_text="show-next-text",this.visible_content=(this.visible_content+1)%this.contents_number},link_commit:function(t,e){var n=this;this.$store.commit(t),setTimeout(function(){n.$router.push({path:e})},500)}}},T=y,j=(n("3535"),Object(u["a"])(T,x,S,!1,null,"3b779e22",null)),P=j.exports,B={name:"HomeContent",props:{msg:String},components:{CarouselFullScreenAlprime:P}},O=B,M=(n("1312"),Object(u["a"])(O,C,w,!1,null,"0de2caa1",null)),L=M.exports,E=n("c779"),I={name:"Home",components:{HomeContent:L,HeaderBar:E["a"],TransitionScreen:p["a"]},data:function(){return{isLoading:!0,isShow:!0,progress:0,bgImage:n("e7ee")}}},A=I,R=(n("dfe1"),Object(u["a"])(A,_,k,!1,null,"6b93c63f",null)),N=R.exports;i["a"].use(b["a"]);var W=new b["a"]({base:"",scrollBehavior:function(t,e,n){return n||(t.hash?{selector:t.hash}:{x:0,y:0})},routes:[{path:"/",name:"home",component:N},{path:"/home",name:"home",component:N},{path:"/works",name:"works",component:function(){return n.e("chunk-4d69497a").then(n.bind(null,"1822"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-13dda8fb").then(n.bind(null,"f820"))}},{path:"/contact",name:"contact",component:function(){return n.e("chunk-1e8813fe").then(n.bind(null,"b8fa"))}},{path:"/projects",name:"projects",component:function(){return n.e("about").then(n.bind(null,"acca"))}},{path:"*",name:"notFound",component:function(){return n.e("about").then(n.bind(null,"9703"))}}]}),$=n("2f62");i["a"].use($["a"]);var H=new $["a"].Store({state:{count:0,page:"home"},mutations:{increment:function(t){return t.count++},decrement:function(t){return t.count--},home:function(t){t.page="home"},works:function(t){t.page="works"},projects:function(t){t.page="projects"},about:function(t){t.page="about"},contact:function(t){t.page="contact"}},actions:{}});i["a"].config.productionTip=!1,new i["a"]({router:W,store:H,render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("5e27"),s=n.n(i);s.a},"5dbc":function(t,e,n){},"5e27":function(t,e,n){},"5f77":function(t,e,n){},7686:function(t,e,n){t.exports=n.p+"img/img3668.dd9ff013.jpg"},7746:function(t,e,n){t.exports=n.p+"img/img4130b.b52cefb7.jpg"},"8e94":function(t,e,n){},a481:function(t,e,n){"use strict";var i=n("e383"),s=n.n(i);s.a},a485:function(t,e,n){t.exports=n.p+"img/img2722.0c46bd17.jpg"},a9ba:function(t,e,n){},c779:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"headerBar ",class:{scroll:t.headerFixedType,fixed:t.headerFixedType,fadeOut:t.isScroll&&t.headerStikyType},attrs:{id:"Top"}},[n("nav",{staticClass:"nav-side-space"},[n("MobileMenu",{attrs:{msg:"mobileMenu",menuVisible:t.navMenu,mobileBarType:"fullScreen",mobileBarAction:"Down",mobileMenuPositionLeft:!1,mobileMenuPositionCenter:!1,mobileMenuPositionRight:!0,logPositionLeft:!0,logPositionCenter:!1,logPositionRight:!1}})],1)])},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MobileMenu"},[n("div",{staticClass:"m-menu-bg",class:{v_open_menu:t.active,v_close_menu:!t.active}}),n("div",{staticClass:"m-bar m-bar-position m-bar-display",class:{dsp_bar:!t.active,"b-menu-items-left":t.mobileMenuPositionLeft,"b-menu-items-center":t.mobileMenuPositionCenter,"b-menu-items-right":t.mobileMenuPositionRight}},[n("div",{staticClass:"m-bar-wrap",on:{click:function(e){t.active=!t.active}}},[n("div",{staticClass:"upper-bar",class:{close_upper:t.active,open_upper:!t.active}}),n("div",{staticClass:"under-bar",class:{close_under:t.active,open_under:!t.active}})])]),n("div",{staticClass:"log-bar log-bar-positon log-side-space",class:{"b-menu-items-left":t.logPositionLeft,"b-menu-items-center":t.logPositionCenter,"b-menu-items-right":t.logPositionRight}},[n("a",{staticClass:"header-logo",on:{click:function(e){return t.link_commit("home","/")}}},[n("img",{attrs:{src:t.logoSvgHWorksWhite,alt:"logo"}})])]),n("nav",{staticClass:"laptop-menu"},[n("div",{staticClass:"l-menu-bar l-menu-position l-menu-display l-menu-bar-side-space ",class:{"l-menu-items-left":t.mobileMenuPositionLeft,"l-menu-items-center":t.mobileMenuPositionCenter,"l-menu-items-right":t.mobileMenuPositionRight}},[n("div",{staticClass:"m-menu-wrap m-menu-position "},[n("div",{staticClass:"menu_items menu_items_row"},[n("div",{staticClass:"menu-item-box"},[n("a",{staticClass:"menu_link",class:{menu_item_visible:"works"===t.menuVisible},on:{click:function(e){return t.link_commit("works","/works")}}},[t._v("\n              WORKS\n            ")]),n("div",{staticClass:"menu_underline"})]),n("div",{staticClass:"menu-item-box"},[n("a",{staticClass:"menu_link",class:{menu_item_visible:"projects"===t.menuVisible},on:{click:function(e){return t.link_commit("projects","/projects")}}},[t._v("\n              Projects\n            ")]),n("div",{staticClass:"menu_underline"})]),n("div",{staticClass:"menu-item-box"},[n("a",{staticClass:"menu_link",class:{menu_item_visible:"about"===t.menuVisible},on:{click:function(e){return t.link_commit("about","/about")}}},[t._v("\n              ABOUT\n            ")]),n("div",{staticClass:"menu_underline"})]),n("div",{staticClass:"menu-item-box"},[n("a",{staticClass:"menu_link",class:{menu_item_visible:"contact"===t.menuVisible},on:{click:function(e){return t.link_commit("contact","/contact")}}},[t._v("\n              CONTACT\n            ")]),n("div",{staticClass:"menu_underline"})])])])])]),n("nav",{staticClass:"mobile-menu"},[n("div",{staticClass:"m-menu",class:{v_open_menu:t.active,v_close_menu:!t.active}},[n("div",{staticClass:"m-menu-wrap m-menu-position "},[n("section",{staticClass:"m-menu-section m-menu-section-start",class:{v_tran_slide_rightIn:!t.active}},[n("div",{staticClass:"d-flex-center-center"})]),n("section",{staticClass:"m-menu-section m-menu-section-start",class:{v_tran_slide_rightIn:!t.active}},[n("div",{staticClass:"d-flex-center-center"},[n("div",{staticClass:"menu_items menu_items_column"},[n("div",{staticClass:"menu-item-box"},[n("a",{staticClass:"menu_link",on:{click:function(e){return t.link_commit("works","/works")}}},[t._v("\n                  WORKS\n                ")]),n("div",{staticClass:"menu_underline"})]),n("div",{staticClass:"menu-item-box"},[n("a",{staticClass:"menu_link",on:{click:function(e){return t.link_commit("projects","/projects")}}},[t._v("\n                  Projects\n                ")]),n("div",{staticClass:"menu_underline"})]),n("div",{staticClass:"menu-item-box"},[n("a",{staticClass:"menu_link",on:{click:function(e){return t.link_commit("about","/about")}}},[t._v("\n                  ABOUT\n                ")]),n("div",{staticClass:"menu_underline"})]),n("div",{staticClass:"menu-item-box"},[n("a",{staticClass:"menu_link",on:{click:function(e){return t.link_commit("contact","/contact")}}},[t._v("\n                  CONTACT\n                ")]),n("div",{staticClass:"menu_underline"})])])])])])])])])},o=[],r={name:"MobileMenu",props:{msg:String,menuVisible:String,mobileBarType:String,mobileBarAction:String,mobileMenuPositionLeft:Boolean,mobileMenuPositionCenter:Boolean,mobileMenuPositionRight:Boolean,logPositionLeft:Boolean,logPositionCenter:Boolean,logPositionRight:Boolean},data:function(){return{active:!0,scrollY:0,isScroll:!1,logoSvgHWorksWhite:n("125a"),logoSvgHWorksBlack:n("37c8"),logoSvg:n("fb34")}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.scrollY=window.scrollY,this.scrollY>250?this.isScroll=!0:this.isScroll=!1},link_commit:function(t,e){var n=this;this.$store.commit(t),setTimeout(function(){n.$router.push({path:e})},500)}}},c=r,l=(n("20c8"),n("2877")),u=Object(l["a"])(c,a,o,!1,null,"376ddea2",null),m=u.exports,d={name:"HeaderBar",components:{MobileMenu:m},props:{msg:String,navMenu:String,headerScrollType:Boolean,headerFixedType:Boolean,headerStikyType:Boolean},data:function(){return{scroll:250,scrollY:0,isScroll:!1,logoSvgHWorksWhite:n("125a"),logoSvgHWorksBlack:n("37c8"),logoSvg:n("fb34")}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.scrollY=window.scrollY,this.scrollY>this.scroll?this.isScroll=!0:this.isScroll=!1}}},p=d,v=(n("a481"),Object(l["a"])(p,i,s,!1,null,"c909267a",null));e["a"]=v.exports},d4ad:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"transitionScreen"},[n("transition",{attrs:{appear:"",name:"tScreen"}},[t.page===t.pageView||"loading"===t.pageView?n("div",{staticClass:"tranScreen",style:{"background-image":"url("+t.img+") "}},[n("div",{staticClass:"bg_filter"})]):t._e()])],1)},s=[],a={name:"TransitionScreen",props:{msg:String,img:String,pageView:String},computed:{page:function(){return this.$store.state.page}},methods:{}},o=a,r=(n("1fe9"),n("2877")),c=Object(r["a"])(o,i,s,!1,null,"a91cad60",null);e["a"]=c.exports},dfe1:function(t,e,n){"use strict";var i=n("0904"),s=n.n(i);s.a},e383:function(t,e,n){},e7ee:function(t,e,n){t.exports=n.p+"img/img1578.bdba597c.jpg"},fb34:function(t,e,n){t.exports=n.p+"img/h-logo.f74219d6.svg"}});
//# sourceMappingURL=app.ab080d1d.js.map