(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"145b":function(t,e,s){},"50d0":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bgImageFull"},[s("transition",{attrs:{name:"bgTran",appear:""}},[s("div",{staticClass:"bgImage",style:{"background-image":"url("+t.img+") "}},[s("div",{staticClass:"bg_filter"})])])],1)},o=[],c={name:"BgImageFull",props:{msg:String,img:String}},a=c,n=(s("fc6e"),s("2877")),l=Object(n["a"])(a,i,o,!1,null,"63672c2d",null);e["a"]=l.exports},"62e9":function(t,e,s){"use strict";var i=s("f50a"),o=s.n(i);o.a},"7aba":function(t,e,s){"use strict";var i=s("145b"),o=s.n(i);o.a},9703:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"notFound"},[s("div",{staticClass:"notFoundWrap"},[s("div",{staticClass:"notFound-content"},[s("div",{staticClass:"link-block"},[s("div",{staticClass:"link-wrap"},[s("a",{staticClass:"menu_link",on:{click:function(e){return t.link_commit(t.page,"/"+t.page)}}},[s("h1",[t._v("Not Found")]),s("p",[t._v("Go Back")])])])])])])])},o=[],c={name:"NotFound",data:function(){return{bgImage:s("7686")}},computed:{page:function(){return this.$store.state.page}},methods:{link_commit:function(t,e){var s=this;t?(this.$store.commit(t),setTimeout(function(){s.$router.push({path:e})},500)):(this.$store.commit("home"),setTimeout(function(){s.$router.push({path:"/"})},500))}}},a=c,n=(s("c37d"),s("2877")),l=Object(n["a"])(a,i,o,!1,null,"263e9d34",null);e["default"]=l.exports},"9ad2":function(t,e,s){},"9d02":function(t,e,s){},a09e:function(t,e,s){"use strict";var i=s("9d02"),o=s.n(i);o.a},a432:function(t,e,s){},acca:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"projects"},[t._v("\r\n    project \r\n  "),s("div",{staticClass:"projectsWrap"},[s("TransitionScreen",{attrs:{msg:"bgImage",img:t.bgImage,pageView:"projects"}}),s("HeaderBar",{attrs:{msg:"HeaderBar",navMenu:"projects",headerScrollType:!0,headerFixedType:!1,headerStikyType:!1}}),s("BgImageFull",{attrs:{msg:"bgImage",img:t.bgImage}}),s("projectsContent",{attrs:{msg:"projectsContent",pageView:"projects"}})],1)])},o=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"projectsContent"},[s("main",[s("div",{staticClass:"main-header"},[s("section",{staticClass:"main-header-wrape"},[s("div",{staticClass:"transition-box"},[s("transition",{attrs:{name:"carousel-pop-up",appear:""}},[s("h1",[t._v("PROJECTS COMPONENT ")])])],1),s("div",{staticClass:"transition-box"},[s("transition",{attrs:{name:"carousel-pop-up",appear:""}},[s("p",[t._v("Seamless Page Transition Demo")])])],1),s("div",{staticClass:"transition-box"},[s("transition",{attrs:{name:"carousel-pop-up",appear:""}},[s("p",[t._v("画像からのトランジション")])])],1)])]),s("transition",{attrs:{name:"mainCon",appear:""}},[s("div",{staticClass:"main-content"},[s("div",{staticClass:"historySection"},[s("div",{staticClass:"center-line"}),s("div",{staticClass:"history-header"},[s("div",{staticClass:"col-block header-block"},[s("div",{staticClass:"header-block-wrap"},[s("h1",[t._v("画像からもシームレスに")]),s("h1",[t._v("遷移できます。")])]),s("p",{staticClass:"history-menu-title"},[t._v("MENU")])])]),s("div",{staticClass:"history-altanative"},[s("div",{staticClass:"grid-container"},[s("div",{staticClass:"col2-block left-block",attrs:{id:"sec1SelectTop"}},[s("div",{staticClass:"section-block section-right"},[s("div",{staticClass:"altanative-wrap",class:{"altanative-wrap-right":!t.sec1Select}},[!t.isHidden||t.sec1Select?s("div",{staticClass:"image-group-right",class:{fullScreenImageLeft:t.sec1Select}},[s("div",{staticClass:"img-wrap",style:{"background-image":"url("+t.contents[2].imgURL+")"},on:{click:function(e){return t.scrollTopSec1()}}})]):t._e(),t.isHidden?t._e():s("div",{staticClass:"subscribe-group subscribe-group-right"},[s("div",{staticClass:"subscribe-wrap subscribe-wrap-right",on:{click:function(e){return t.scrollTopSec1()}}},[s("div",{staticClass:"transition-box"},[s("transition",{attrs:{name:"carousel-pop-up",appear:""}},[s("p",{on:{click:function(e){return t.scrollTopSec1()}}},[t._v(t._s(t.contents[2].imgDate))])])],1),s("div",{staticClass:"transition-box"},[s("transition",{attrs:{name:"carousel-pop-up",appear:""}},[s("h1",{on:{click:function(e){return t.scrollTopSec1()}}},[t._v(t._s(t.contents[2].imgTitle))])])],1)])])])])]),s("div",{staticClass:"col2-block right-block",attrs:{id:"sec2SelectTop"}},[s("div",{staticClass:"section-block section-left"},[s("div",{staticClass:"altanative-wrap altanative-wrap-left"},[!t.isHidden||t.sec2Select?s("div",{staticClass:"image-group-left",class:{fullScreenImageRight:t.sec2Select}},[s("div",{staticClass:"img-wrap",style:{"background-image":"url("+t.contents[0].imgURL+")"},on:{click:function(e){return t.scrollTopSec2()}}})]):t._e(),t.isHidden?t._e():s("div",{staticClass:"subscribe-group subscribe-group-left"},[s("div",{staticClass:"subscribe-wrap subscribe-wrap-left",on:{click:function(e){return t.scrollTopSec2()}}},[s("div",{staticClass:"transition-box"},[s("transition",{attrs:{name:"carousel-pop-up",appear:""}},[s("p",{on:{click:function(e){return t.scrollTopSec2()}}},[t._v(t._s(t.contents[0].imgDate))])])],1),s("div",{staticClass:"transition-box"},[s("transition",{attrs:{name:"carousel-pop-up",appear:""}},[s("h1",{on:{click:function(e){return t.scrollTopSec2()}}},[t._v(t._s(t.contents[0].imgTitle))])])],1)])])])])]),s("div",{staticClass:"col2-block left-block",attrs:{id:"sec3SelectTop"}},[s("div",{staticClass:"section-block section-right"},[s("div",{staticClass:"altanative-wrap",class:{"altanative-wrap-right":!t.sec3Select}},[!t.isHidden||t.sec3Select?s("div",{staticClass:"image-group-right",class:{fullScreenImageLeft3:t.sec3Select}},[s("div",{staticClass:"img-wrap",style:{"background-image":"url("+t.contents[4].imgURL+")"},on:{click:function(e){return t.scrollTopSec3()}}})]):t._e(),t.isHidden?t._e():s("div",{staticClass:"subscribe-group subscribe-group-right"},[s("div",{staticClass:"subscribe-wrap subscribe-wrap-right",on:{click:function(e){return t.scrollTopSec3()}}},[s("div",{staticClass:"transition-box"},[s("transition",{attrs:{name:"carousel-pop-up",appear:""}},[s("p",{on:{click:function(e){return t.scrollTopSec3()}}},[t._v(t._s(t.contents[4].imgDate))])])],1),s("div",{staticClass:"transition-box"},[s("transition",{attrs:{name:"carousel-pop-up",appear:""}},[s("h1",{on:{click:function(e){return t.scrollTopSec3()}}},[t._v(t._s(t.contents[4].imgTitle))])])],1)])])])])]),s("div",{staticClass:"col2-block right-block",attrs:{id:"sec4SelectTop"}},[s("div",{staticClass:"section-block section-left"},[s("div",{staticClass:"altanative-wrap altanative-wrap-left"},[!t.isHidden||t.sec4Select?s("div",{staticClass:"image-group-left",class:{fullScreenImageRight4:t.sec4Select}},[s("div",{staticClass:"img-wrap",style:{"background-image":"url("+t.contents[3].imgURL+")"},on:{click:function(e){return t.scrollTopSec4()}}})]):t._e(),t.isHidden?t._e():s("div",{staticClass:"subscribe-group subscribe-group-left"},[s("div",{staticClass:"subscribe-wrap subscribe-wrap-left",on:{click:function(e){return t.scrollTopSec4()}}},[s("div",{staticClass:"transition-box"},[s("transition",{attrs:{name:"carousel-pop-up",appear:""}},[s("p",{on:{click:function(e){return t.scrollTopSec4()}}},[t._v(t._s(t.contents[3].imgDate))])])],1),s("div",{staticClass:"transition-box"},[s("transition",{attrs:{name:"carousel-pop-up",appear:""}},[s("h1",{on:{click:function(e){return t.scrollTopSec4()}}},[t._v(t._s(t.contents[3].imgTitle))])])],1)])])])])])])]),s("div",{staticClass:"history-footer"},[s("div",{staticClass:"col-block footer-block"},[s("div",{staticClass:"footer-block-wrap"},[s("p",[t._v("Seamless Page Transition Demo")])])])]),s("transition",{attrs:{appear:"",name:"tScreen"}},[t.page===t.pageView?s("div",{staticClass:"tranScreen"}):t._e()]),s("transition",{attrs:{name:"fade500W500"}},[t.isHidden?s("div",{staticClass:"bg_filter"}):t._e()])],1)])]),s("FooterBar",{attrs:{msg:"footerBar",navMenu:"prpject",footerTop:!0,footerBottom:!0,footerMenu:!0,footerSepalater:!0}})],1)])},a=[],n=s("df2e"),l={name:"ProjectsContent",props:{msg:String,pageView:String},components:{FooterBar:n["a"]},data:function(){return{logoSvgHWorksWhite:s("125a"),logoSvgHWorksBlack:s("37c8"),isHidden:!1,isChengPage:!1,sec1Select:!1,sec2Select:!1,sec3Select:!1,sec4Select:!1,sec1Position:0,scrollY:0,windowH:0,scrollTopHeight:0,sec1SelectTop:0,sec2SelectTop:0,sec3SelectTop:0,sec4SelectTop:0,contents:[{id:0,title:"img1",bg_color:"#f16972",imgURL:s("4f50"),titel:"WORKS CONTENT",detail:"path:/works",link:"works",link_path:"/works",imgTitle:"WORKS CONTENT",imgDate:"Link"},{id:1,title:"img2",bg_color:"#7bbff9",imgURL:s("a485"),titel:"PROJECTS CONTENT",detail:"path:/projects",link:"projects",link_path:"/projects",imgTitle:"PROJECTS CONTENT",imgDate:"Link"},{id:2,title:"img3",bg_color:"#f16972",imgURL:s("7746"),titel:"ABOUT CONTENT ",detail:"path:/about",link:"about",link_path:"/about",imgTitle:"ABOUT CONTENT",imgDate:"Link"},{id:3,title:"img4",bg_color:"#20d2d3",imgURL:s("7686"),titel:"CONTACT CONTENT",detail:"path:/content",link:"contact",link_path:"/contact",imgTitle:"CONTACT CONTENT",imgDate:"Link"},{id:4,title:"img5",bg_color:"#7bbff9",imgURL:s("e7ee"),titel:"HOME CONTENT ",detail:"path:/",link:"home",link_path:"/",imgTitle:"HOME CONTENT",imgDate:"Link"}]}},computed:{page:function(){return this.$store.state.page}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},mounted:function(){this.init()},methods:{handleScroll:function(){this.scrollY=window.scrollY,this.windowH=window.innerHeight,this.sec1SelectTop=document.getElementById("sec1SelectTop").getBoundingClientRect().top+window.scrollY,this.sec2SelectTop=document.getElementById("sec2SelectTop").getBoundingClientRect().top+window.scrollY,this.sec3SelectTop=document.getElementById("sec3SelectTop").getBoundingClientRect().top+window.scrollY,this.sec4SelectTop=document.getElementById("sec4SelectTop").getBoundingClientRect().top+window.scrollY},scrollTopSec1:function(){var t=this;this.sec1SelectTop=document.getElementById("sec1SelectTop").getBoundingClientRect().top+window.scrollY,this.scrollTopHeight=this.sec1SelectTop-window.scrollY,window.scrollBy({top:this.scrollTopHeight,behavior:"smooth"}),setTimeout(function(){t.sec1Select=!0,t.isHidden=!0,setTimeout(function(){var e="about",s="/about";t.$store.commit(e),setTimeout(function(){t.$router.push({path:s}),t.sec1Select=!1,t.isHidden=!1},500)},1500)},1e3)},scrollTopSec2:function(){var t=this;this.sec2SelectTop=document.getElementById("sec2SelectTop").getBoundingClientRect().top+this.scrollY,this.scrollTopHeight=this.sec2SelectTop-this.scrollY,window.scrollBy({top:this.scrollTopHeight,behavior:"smooth"}),setTimeout(function(){t.sec2Select=!0,t.isHidden=!0,setTimeout(function(){var e="works",s="/works";t.$store.commit(e),setTimeout(function(){t.$router.push({path:s}),t.sec2Select=!1,t.isHidden=!1},500)},1500)},1e3)},scrollTopSec3:function(){var t=this;this.sec3SelectTop=document.getElementById("sec3SelectTop").getBoundingClientRect().top+this.scrollY,this.scrollTopHeight=this.sec3SelectTop-this.scrollY,window.scrollBy({top:this.scrollTopHeight,behavior:"smooth"}),setTimeout(function(){t.sec3Select=!0,t.isHidden=!0,setTimeout(function(){var e="home",s="/";t.$store.commit(e),setTimeout(function(){t.$router.push({path:s}),t.sec3Select=!1,t.isHidden=!1},500)},1500)},1e3)},scrollTopSec4:function(){var t=this;this.sec4SelectTop=document.getElementById("sec4SelectTop").getBoundingClientRect().top+this.scrollY,this.scrollTopHeight=this.sec4SelectTop-this.scrollY,window.scrollBy({top:this.scrollTopHeight,behavior:"smooth"}),setTimeout(function(){t.sec4Select=!0,t.isHidden=!0,setTimeout(function(){var e="contact",s="/contact";t.$store.commit(e),setTimeout(function(){t.$router.push({path:s}),t.sec4Select=!1,t.isHidden=!1},500)},1500)},1e3)},link_commit:function(t,e){var s=this;this.$store.commit(t),setTimeout(function(){s.$router.push({path:e})},500)},init:function(){this.$store.commit("projects"),this.scrollY=window.scrollY,this.windowH=window.innerHeight}}},r=l,u=(s("a09e"),s("2877")),p=Object(u["a"])(r,c,a,!1,null,"0e3f74d8",null),d=p.exports,m=s("c779"),g=s("50d0"),v=s("d4ad"),h={name:"Projects",components:{projectsContent:d,HeaderBar:m["a"],BgImageFull:g["a"],TransitionScreen:v["a"]},data:function(){return{bgImage:s("a485")}}},f=h,T=(s("62e9"),Object(u["a"])(f,i,o,!1,null,"f80439b0",null));e["default"]=T.exports},c37d:function(t,e,s){"use strict";var i=s("a432"),o=s.n(i);o.a},df2e:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footerBar "},[s("div",{staticClass:"footerBar-Wrap"},[t.footerTop?s("div",{staticClass:"footer-top"},[s("a",{staticClass:"menu_link",on:{click:function(e){return t.link_commit("home","/")}}},[s("img",{attrs:{src:t.logoSvgHWorksWhite,alt:"h-works logo"}})])]):t._e(),t.footerSepalater?s("div",{staticClass:"footer-sepalater"},[s("div",{staticClass:"line"})]):t._e(),t.footerMenu?s("nav",{staticClass:"footer-menu"},[s("div",{staticClass:"m-menu-wrap  "},[s("div",{staticClass:"menu_items "},[s("div",{staticClass:"menu-item-box"},[s("a",{staticClass:"menu_link",class:{menu_item_visible:"works"===t.page},on:{click:function(e){return t.link_commit("works","/works")}}},[t._v("\n                Works\n              ")]),s("div",{staticClass:"menu_underline"})]),s("div",{staticClass:"menu-item-box"},[s("a",{staticClass:"menu_link",class:{menu_item_visible:"projects"===t.page},on:{click:function(e){return t.link_commit("projects","/projects")}}},[t._v("\n                Projects\n              ")]),s("div",{staticClass:"menu_underline"})]),s("div",{staticClass:"menu-item-box"},[s("a",{staticClass:"menu_link",class:{menu_item_visible:"about"===t.page},on:{click:function(e){return t.link_commit("about","/about")}}},[t._v("\n                ABOUT\n              ")]),s("div",{staticClass:"menu_underline"})]),s("div",{staticClass:"menu-item-box"},[s("a",{staticClass:"menu_link",class:{menu_item_visible:"contact"===t.page},on:{click:function(e){return t.link_commit("contact","/contact")}}},[t._v("\n                CONTACT\n              ")]),s("div",{staticClass:"menu_underline"})])])])]):t._e(),t.footerBottom?s("div",{staticClass:"footer-bottom"},[t._m(0)]):t._e()])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-bottom-wrap"},[s("div",{staticClass:"copy-light"},[t._v("© 2018 h-works. All Rights Reserved")]),s("a",{attrs:{href:"#top"}},[s("div",[t._v("TOP")])])])}],c={name:"FooterBar",props:{msg:String,navMenu:String,footerTop:Boolean,footerBottom:Boolean,footerMenu:Boolean,footerSepalater:Boolean,logo:String},data:function(){return{logoSvgHWorksWhite:s("125a"),logoSvgHWorksBlack:s("37c8"),logoSvg:s("fb34")}},computed:{page:function(){return this.$store.state.page}},methods:{link_commit:function(t,e){var s=this;this.$store.commit(t),setTimeout(function(){s.$router.push({path:e})},500)}}},a=c,n=(s("7aba"),s("2877")),l=Object(n["a"])(a,i,o,!1,null,"69736ee8",null);e["a"]=l.exports},f50a:function(t,e,s){},fc6e:function(t,e,s){"use strict";var i=s("9ad2"),o=s.n(i);o.a}}]);
//# sourceMappingURL=about.2183bf28.js.map