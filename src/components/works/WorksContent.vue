<template>
  <div class="worksContent">
    <main>
      <div class="main-header">
        <section class="main-header-wrape">
          <div class="transition-box">
            <transition name="carousel-pop-up" appear>
              <h1>WORKS COMPONENT </h1>
            </transition>
          </div>
          <div class="transition-box">
            <transition name="carousel-pop-up" appear>
            <p>Seamless Page Transition Demo</p>
            </transition>
          </div>
          <div class="transition-box">
            <transition name="carousel-pop-up" appear>
            <p>概要</p>
            </transition>
          </div>
        </section>
      </div>
      
      <transition name="mainCon" appear>
        <div  class="main-content" >

            <div class="col2-content">
              <div class="col-block left-block">
                <div class="section-block caption-section">

                  <div v-for="(h1LeftArrey, index) in h1LeftArreys " :key="index">
                    <div class="transition-box" >
                      <transition v-bind:name="h1LeftArrey.tName" appear>
                        <div><p v-bind:style="{color: h1LeftArrey.tColor}">{{h1LeftArrey.tText}}</p></div>
                      </transition>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-block right-block">
                <div class="section-block image-section">

                  <div v-for="(h1RightArrey, index ) in h1RightArreys " :key="index">
                    <div class="transition-box" >
                      <transition v-bind:name="h1RightArrey.tName" appear>
                        <div><h1 v-bind:style="{color: h1RightArrey.tColor}">{{h1RightArrey.tText}}</h1></div>
                      </transition>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>

            
        </div>
      </transition>
    </main>
    <FooterBar  msg="footerBar"
                  navMenu="works"
                  v-bind:footerTop= "true"
                  v-bind:footerBottom= "true"
                  v-bind:footerMenu= "true"
                  v-bind:footerSepalater= "true"
                  />
  </div>
</template>

<script>
// import HistorySection from '@/components/section/HistorySection.vue'
import FooterBar from '@/components/footer/FooterBar.vue'

export default {
  name: 'WorksContent',
  props: {
    msg: String,
  },
  components: {
    // HistorySection,
    FooterBar,
  },
     data () {
      return {
        // imgURL1: require("../../assets/img/img1578.jpg"),
        imgURL1: require("../../assets/img/page-tran-test1.gif"),
        imgURL2: require("../../assets/img/fuji1.jpg"),
        imgURL3: require("../../assets/img/img4130b.jpg"),
        imgURL4: require("../../assets/img/img3668.jpg"),
        logoSvgHWorksWhite: require("../../assets/logo/h-works1200x600white.svg"),
        logoSvgHWorksBlack: require("../../assets/logo/h-works1200x600black.svg"),

        scrollY: 0,
        MaxScrollY: 0,
        innerHeight: 0, 

        menuVisible: String,
        mobileBarType: String,
        mobileBarAction: String,
        // mobileMenuPositionLeft: Boolean,
        // mobileMenuPositionCenter: Boolean,
        // mobileMenuPositionRight: Boolean,

        h1LeftArreys:[
          {tName: "carousel-pop-up1", 
           tText: 
           "Seamless Page Transitionは、シームレスなページ遷移を実装するために、テストケースとして作成したデモンストレーションサイトです。"
           , tColor:"rgba(0,0,0,1)" },
          {tName: "carousel-pop-up2",  tText:
           "ランディングページのカルーセルは、訪問者を退屈させません。その、リンクをクリックし、目的とするページへの遷移は、シームレスに行われます。訪問者は、アニメーションを気にしている瞬間に、次のページに到達しています。"
            , tColor:"rgba(0,0,0,1)"},
          {tName: "carousel-pop-up3",  tText:
           "このウェブサイトは、シームレスなページ遷移を実装する、スターターテンプレートとして開発することを目的としました。Vue.jsを使いコンポーネントを、できるだけ使いやすく再利用できることをめざし、試行錯誤しています。ただ、これは完成されたものではありません、あくまで試作品であり、スキル習得のためのステップにすぎません。"
            , tColor:"rgba(0,0,0,.6)"},
        ],
        h1RightArreys:[
          {tName: "carousel-pop-up1",  tText: "ランディングページより", tColor:"rgba(0,0,0,.6)" },
          {tName: "carousel-pop-up2",  tText: "シームレスに", tColor:"rgba(0,0,0,1)" },
          {tName: "carousel-pop-up3",  tText: "訪問者の行きたい", tColor:"rgba(0,0,0,.6)" },
          {tName: "carousel-pop-up4",  tText: "情報へ遷移します。", tColor:"rgba(0,0,0,.6)" },
        ],

        img1Arreys:[
          {tName: "text-pop-up1",  tText: "Opportunities. Chances.", tColor:"rgba(0,0,0,.6)"},
          {tName: "text-pop-up2",  tText: "Our mission: Prime", tColor:"rgba(0,0,40,1)"},
          {tName: "text-pop-up3",  tText: "products and services.", tColor:"rgba(0,0,40,1)"},
          {tName: "text-pop-up4",  tText: "Focusing on your needs.", tColor:"rgba(0,0,0,.6)"},
        ],
        img1Captionblock: 0,
        img1Imageblock: 0,

        img2Arreys:[
          {tName: "text-pop-up1",  tText: "Expertise. Spirit.", tColor:"rgba(0,0,0,.6)"},
          {tName: "text-pop-up2",  tText: "Prime experience and", tColor:"rgba(0,0,40,1)" },
          {tName: "text-pop-up3",  tText: "dedication. Focusing on", tColor:"rgba(0,0,40,1)" },
          {tName: "text-pop-up4",  tText: "risk and performance.", tColor:"rgba(0,0,0,.6)" },
        ],
        img2Captionblock: 0,
        img2Imageblock: 0,
      }
  },
  computed: {
    page () {
    return this.$store.state.page
    },
  },
  created () {
    // console.log('create: ');
    window.addEventListener('scroll', this.handleScroll);
    
  },
  destroyed () {
    // console.log('destory: ');
    window.removeEventListener('scroll', this.handleScroll);
    
  },
  mounted: function () {
    // console.log('mounted: ');
    // window.addEventListener('scroll', this.handleScroll);
    this.init();
  },
  
  methods: {
    handleScroll() {
      // console.log('handleScroll: ');
      // console.log('workcomponent this.scrollY: ' + this.scrollY);
      // this.img1Captionblock = document.getElementById('img1Captionblock').getBoundingClientRect().top
      //                     + window.scrollY  - (window.innerHeight*0.8) ;
      // this.img1Imageblock = document.getElementById('img1Imageblock').getBoundingClientRect().top
      //                     + window.scrollY  - (window.innerHeight*0.8)  ;
      // this.img2Captionblock = document.getElementById('img2Captionblock').getBoundingClientRect().top
      //                     + window.scrollY  - (window.innerHeight*0.8) ;
      // this.img2Imageblock = document.getElementById('img2Imageblock').getBoundingClientRect().top
      //                     + window.scrollY  - (window.innerHeight*0.8)  ;
      this.innerHeight = window.innerHeight;
      this.scrollY = window.scrollY;
      if(this.scrollY > this.MaxScrollY) {
        this.MaxScrollY = this.scrollY;
      }
      // this.resize();
    },
    init(){
      // console.log('init: ');
      this.$store.commit( 'works' );
      this.innerHeight = window.innerHeight;
      this.scrollY = window.scrollY;
      // if(this.scrollY > this.MaxScrollY) {
      //   this.MaxScrollY = this.scrollY;
      // }
      // this.resize();
      // console.log('workcomponent Init  this.scrollY: ' + this.scrollY);
    },
    // resize(){
    //    this.mainPos = (this.innerHeight - 300 -50 )  * -1  ;
    // }
  // this.scrollY = (window.scrollY * 0.1) - 190;
  //      this.scrY = window.scrollY;
  //      this.sec1 =  
  //      document.getElementById('hSec1').getBoundingClientRect().top 
  //      + window.scrollY - (window.innerHeight*0.5);
  //    if( this.scrY > this.sec1){
  //       this.isDspSec1 = true;
  //     }
    link_commit(link, link_path) {
      this.$store.commit( link );
      setTimeout( () => {
        this.$router.push({ path: link_path });
      }, 500);
    },
  },
  
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/common/data/thema.scss";
.worksContent{
    position: relative;
    width: 100%;
    height: auto;
    padding-top: $header-height;
}
main{
  margin: 0;
  padding: 0;
  h1{
    font-size: 2.8rem;
    @media(min-width: 992px){
      font-size: 4.0rem;
    }
  }
  p{
    font-size: 1.6rem;
    @media(min-width: 992px){
      font-size: 2.0rem;
    } 
  }
}
.main-header{
  // width:100%;
  height: 35vh;
  padding: 1rem 1rem;
  // border: 1px solid green;
  //横スクロール処理
  // width: auto;
  // min-width: 100vw;
  width: 100vw
}
.main-header-wrape{
  // border: 1px solid green;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
}
.transition-box{
  width: 100%;
  overflow: hidden;
  margin-bottom: 0.5rem;
}
.main-header h1,  .main-header p{
  color: $header-text;
}
.main-header h1{
  font-size: 3rem;
  @media (min-width: 992px){
    font-size: 4rem;
  }
}
// .main-header p{
//   font-size: 1.6rem;
//   @media (min-width: 992){
//     font-size: 2rem;;
//   }
// }
.main-content{
  // height: 75vh;
  height:100%;
  background-color: $main-contents-color;
  color: $main-contents-text;
  //横スクロール処理
  // width: auto;
  // min-width: 100vw;
  width: 100vw;
  padding-bottom:20rem;
} 
//section-2col
.col2-content{
  position: relative;
  width: 100%;
  height: 100%;
  display:flex;
  flex-wrap: wrap;
  // flex-direction: column;
  // @media (min-width: 992px){
  //   flex-direction: row;
  // }
}

.col-block{
  width: 100%;
  @media (min-width: 992px){
    width: 50%;
  }
}

.left-block{
  // background-color: rgba(0,0,0,.1);
  // border:  1px solid red;
 
}
.right-block{
  // background-color: rgba(0,0,0,.3);
  // border:  1px solid green;
}

.section-block{
  // border:  1px solid green;
  position: relative;
  width:100%;
  height:100%;
  padding: 1.6rem;
  @media (min-width: 992px){
    padding: 6rem 0 6rem 6rem ;
  } 
  @media (min-width: 1200px){
    padding: 6rem 0 6rem 12rem ;
  } 
}

.image-section-block{
  position: relative;
  @media (min-width: 992px){
    padding: 12rem 0;
  } 
}

.caption-section{
  // border:  1px dotted red;
}
.image-section{
  // border:  1px dotted yellow;
}

.caption-group{
  position: relative;
  width: 100%;
  @media (min-width: 992px){
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translateY(-50%);
  } 
  // border: 1px solid yellow;
}
.caption-group p, .caption-group h1, .caption-group h2{
  color: rgba(0, 0, 0, 1);
  text-shadow: 1px 1px 0px #fff,
               2px 2px 0px rgba(0,0,0,0.2),
               3px 3px 0px rgba(0,0,0,0.15);
}

.caption-group-right{
  left: 0%;
  padding-left: 0;
  text-align:left;
  @media (min-width: 992px){
    text-align:left;
    left: 50%;
    padding-left: 0%;
  }
}
.caption-group-left{
  left: 0%;
  padding-left: 0;
  text-align:right;
  @media (min-width: 992px){
    text-align:left;
    left: -8%;
    padding-left: 0%;
  }
}
.link-group{
  position:relative;
  width: 100%;
  height: 60px;
}
// alternation
.alternationImage-content{
  position: relative;
  width: 100%;
  height: 100%;
  display:flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.alternation-row{
  flex-direction: row;
}
.alternation-revers{
  flex-direction: row-reverse;
}

.text-block{
  // background-color: rgba(0,0,0,.1);
  // border:  1px solid red;
  width: 100%;
  @media (min-width: 992px){
    width: 30%;
  }
 
}
.image-block{
  // background-color: rgba(0,0,0,.3);
  // border:  1px solid green;
  // padding: 1rem;
  width: 100%;
  @media (min-width: 992px){
    width: 70%;
  }
}
.image-block .image-section{
  // overflow:hidden;
}

.image-block .image-section img{
  width: 100%;
  height: auto;
}
.image-block .image-right img{
  clip-path: circle(150% at 0 100%);
}
.image-block .image-left img{
  clip-path: circle(150% at 100% 100%);
}
.box-shadow{
  position: absolute;
  top:0;
  left: 0;
  background-color: rgba(0,0,255,.1);
  width: 100%;
  height: auto;
  transform: translate(-100px, 100px);
  img{
    opacity:0;
  }
  display: none;
  @media (min-width: 992px){
    display: block;
    margin-top: 10rem;
  }
}
.box-shadow-right{
  transform: translate(-100px, 100px);
}
.box-shadow-left{
  transform: translate(100px, 100px);
}
.image-filter{
  position: absolute;
  z-index: 1;
  top:0;
  left: 0;
  // background-color: rgba(250,250,250,.3);//white
  // background-color: rgba(0,128,128,.2);//teal
  background-color: rgba(0,250,250,.2);//blue
  // background-color: rgba(250,250,0,.1);//yellow
  // background-color: rgba(192,192,192,.2);//silver
  // background-color: rgba(250,0,0,.2);//red
  // background-color: rgba(2500,250,0,.2);//lime
  width: 100%;
  height: auto;
  img{
    opacity:0;
  }
  display:none;
  @media (min-width: 992px){
    display: block;
    margin-top: 12rem;
  }
  
}
.image-filter-right{
  clip-path: circle(150% at 0% 100%) ;
}
.image-filter-left{
  clip-path: circle(150% at 100% 100%) ;
}
// link-unit--------------------
.link-unit{
  position:relative;
  width: 100%;
  // border: 1px solid pink;
}
.caption-group-right .link-nextPage{
  // border: 1px solid pink;
  position: absolute;
  top: 0;
  left: -55px;
  z-index:10;
}
.caption-group-left .link-nextPage{
  // border: 1px solid pink;
  position: absolute;
  top: 0;
  left: 90px;
  z-index:10;
}
.link-nextPage{
  
  cursor: pointer;
  width: 200px;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem ;
  &:hover{
    animation: link-hoverActionSlide .25s  forwards cubic-bezier(0.320, 0.625, 0.580, 1.000);//sharp;;
    .link-circle svg {
      animation: link-hoverAction .5s   forwards cubic-bezier(0.320, 0.625, 0.580, 1.000);//sharp;;
    }
  }
}
.link-nextPage a .next-text{
  // border: 1px solid red;
   width:100px;
   margin-right: 0.4rem;
   text-transform: uppercase;
   text-align: right;
   color: rgba(0,0,40,1);
}
.link-nextPage a .link-arrow svg {
  line {
    fill: rgba(0,0,0,1);
    stroke: rgba(0,0,0,1);
    stroke-width: 1;
  }
  polygon {
    fill: rgba(0,0,0,1);
    stroke: rgba(0,0,0,1);
    stroke-width: 1;
  }
}
.link-nextPage a .link-circle{
  opacity: 1;
  // border: 1px solid green;
  cursor: pointer;
  margin-left: -32px;
}
.link-circle svg {
  transform: rotate(-90deg);
  circle {
    fill: transparent;
    stroke: rgba(0,0,0,1);
    stroke-width: 1;
  }
}
@keyframes link-hoverActionSlide {
  0% {  transform: translateX(0); }
  100% { transform: translateX(25px);}
}
@keyframes link-hoverAction {
  0% { opacity: 1; transform: scale(1); }
  45% { opacity: 0; transform: scale(1.2);}
  50% { opacity: 0; transform: scale(.6);}
  100% { opacity: 1; transform: scale(1);}
}

//main-footer--------------------------------------

.main-footer{
  padding: 1rem 1rem;
  background-color: $footer-color-color;
  color: $footer-color-text;
// 横スクロール処理
  // width: auto;
  // min-width: 100vw;
  width: 100vw;
  
}
.main-footer-logo-section{
 position: relative;
 width:100%;
 height: 20rem;
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 align-items: center;
 padding: 2rem;
}
.main-footer-logo-section a img{
  width: 15rem;
  height: auto;
}
.laptop-menu{
  position: relative;
  width:100%;
  height: 15rem;
  @media (min-width: 992px){
    height: 5rem;
  }
  // border: 3px solid white;
  overflow: hidden;
}
.m-menu-wrap{
  position: absolute;
  top: 50%;
  left: 50%;
  z-index:1;
  transform: translate(-50%,-50%);
  // border: 3px solid red;
  width:50%;
  height: 10rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

//menu items --------
.menu_items{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 992px){
    flex-direction: row;
  }
}
// .menu_items_row{
//   flex-direction: row;
// }
// .menu_items_column{
//   flex-direction: column;
// }
.menu-item-box{
  position:relative;
  overflow: hidden;
  margin: 0 1rem;
  padding: .3rem 0;
  .menu_underline{
    position:absolute;
    bottom: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    height: 2px;
    margin-top: .2rem;
    // transition: .1s all ease-in;
    transform: translateX(-102%);
  }
  &:hover{
    .menu_underline{
      transition: .5s all ease-in;
      transform: translateX(0);
    }
  }
}
.menu_link{
    display: inline-block;
    opacity: .5;
    text-transform: uppercase;
    &:hover{
      opacity: .75;
    }
}
.menu_item_visible{
  opacity: 1;
  pointer-events: none;
}

.main-footer-sepalater{
 width: 100%;
 height: 2rem;
 display: flex;
 justify-content: center;
 align-items: center;
}
.main-footer-sepalater .line{
  width:80%;
  height: 1px;
  background-color: #fff;
}
.main-footer-police{
  position: relative;
  width:100%;
  height: 20rem;
  @media (min-width: 992px){
    height: 10rem;
  }
//  border: 3px solid white;
}
.main-footer-police-wrap{
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%,0%);
  @media ( min-width: 992px){
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  z-index:1;
  // border: 3px solid red;
  width:80%;
  height: 100%;
  // cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media ( min-width: 992px){
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
}
.main-footer-police-wrap .copy-light {
  flex-basis: auto;
  @media ( min-width: 992px){
    flex-basis: 50%;
  }
}
</style>
