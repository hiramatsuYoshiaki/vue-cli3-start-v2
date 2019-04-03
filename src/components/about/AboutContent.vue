<template>
  <div class="aboutContent">
    <main>
      <div class="main-header">
        <section class="main-header-wrape">
          <div class="transition-box">
            <transition name="carousel-pop-up" appear>
              <h1>ABOUT COMPONENT </h1>
            </transition>
          </div>
          <div class="transition-box">
            <transition name="carousel-pop-up" appear>
            <p>Seamless Page Transition Demo</p>
            </transition>
          </div>
          <div class="transition-box">
            <transition name="carousel-pop-up" appear>
            <p>GitHubを使う </p>
            </transition>
          </div>
        </section>
      </div>

      <transition name="mainCon" appear>
        <div  class="main-content">
            <div class="col2-content">
              <div class="col-block left-block">
                <div class="section-block caption-section">
                  <!-- <div v-for="(h1LeftArrey, index) in h1LeftArreys " :key="index">
                    <div class="transition-box" >
                      <transition v-bind:name="h1LeftArrey.tName" appear>
                        <div><p v-bind:style="{color: h1LeftArrey.tColor}">{{h1LeftArrey.tText}}</p></div>
                      </transition>
                    </div>
                  </div> -->
                    <div class="transition-box" >
                      <transition name="carousel-pop-up1" appear>
                        <div>
                          <p>Seamless Page Transitionは、シームレスなページ遷移を実装する、スターターテンプレートとして開発することを目的としました。再利用できるようにGitHubで共有しました。</p>
                        </div>
                      </transition>
                    </div>
                    <div class="transition-box" >
                      <transition name="carousel-pop-up2" appear>
                        <div>
                          <p>このサイトは、GitHub Pagesに公開されています。詳細については、README.mdを見てください。</p>
                        </div>
                      </transition>
                    </div>
                    
                   
                    <div class="link-text">
                        <a href="https://hiramatsuyoshiaki.github.io/vue-cli3-page-transition/" > 
                          <div class="transition-box" >
                            <transition name="carousel-pop-up4" appear>
                              <div>
                                <p><i class="fab fa-github"></i><span>GitHub Repository</span></p>
                                <p>hiramatsuYoshiaki/vue-cli3-page-transition</p>
                                <p>URL: https://github.com/hiramatsuYoshiaki/vue-cli3-page-transition</p>
                              </div>
                              </transition>
                          </div>
                        </a>
                    </div>
                   
                    <div class="transition-box" >
                      <transition name="carousel-pop-up3" appear>
                        <div class="text-color-gray">
                          <p>このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。</p>
                        </div>
                      </transition>
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
      <FooterBar  msg="footerBar"
                  navMenu="prpject"
                  v-bind:footerTop= "true"
                  v-bind:footerBottom= "true"
                  v-bind:footerMenu= "true"
                  v-bind:footerSepalater= "true"
                  />
    </main>
  </div>
</template>

<script>
import FooterBar from '@/components/footer/FooterBar.vue'

export default {
  name: 'AboutContent',
  props: {
    msg: String,
  },
  components: {
    FooterBar,
  },
  data () {
    return {
      imgURL1: require("../../assets/img/img1578.jpg"),
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
      cardDatas:[
        {id:"card0",img: require("../../assets/img/img1578.jpg"), title: "title1", subscription: "subscription1"  },
        {id:"card1",img: require("../../assets/img/fuji1.jpg"), title: "title2", subscription: "subscription2"  },
        {id:"card2",img: require("../../assets/img/img4130b.jpg"), title: "title3", subscription: "subscription3"  },
        {id:"card3",img: require("../../assets/img/img3668.jpg"), title: "title4", subscription: "subscription4"  },
      ],
      cardSectionPosition:[],
              h1LeftArreys:[
          {tName: "carousel-pop-up1", 
           tText: 
           "Seamless Page Transitionは、シームレスなページ遷移を実装する、スターターテンプレートとして開発することを目的としました。再利用できるようにGitHubで共有しました。"
           , tColor:"rgba(0,0,0,.8)" },
          {tName: "carousel-pop-up2",  tText:
           "このサイトは、GitHub Pagesに公開されています。詳細については、README.mdを見てください。"
            , tColor:"rgba(0,0,0,.8)"},
          {tName: "carousel-pop-up3",  tText:
           "このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。"
            , tColor:"rgba(0,0,0,.6)"},
          {tName: "carousel-pop-up4",  tText:
           "4このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。"
            , tColor:"rgba(0,0,0,.6)"},
          {tName: "carousel-pop-up5",  tText:
           "5このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。"
            , tColor:"rgba(0,0,0,.6)"},
          {tName: "carousel-pop-up6",  tText:
           "6このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。"
            , tColor:"rgba(0,0,0,.6)"},
          {tName: "carousel-pop-up7",  tText:
           "7このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。"
            , tColor:"rgba(0,0,0,.6)"},
          {tName: "carousel-pop-up8",  tText:
           "8このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。"
            , tColor:"rgba(0,0,0,.6)"},
          {tName: "carousel-pop-up9",  tText:
           "このサイトをGitHubで共有することで、Git,GitHubスキル習得を目的としています。"
            , tColor:"rgba(0,0,0,.6)"},
        ],
        h1RightArreys:[
          {tName: "carousel-pop-up1",  tText: "GitHubで...", tColor:"rgba(0,0,0,.6)" },
          {tName: "carousel-pop-up2",  tText: "再利用が簡単", tColor:"rgba(0,0,40,1)" },
          {tName: "carousel-pop-up3",  tText: "バージョンを管理", tColor:"rgba(0,0,40,1)" },
          {tName: "carousel-pop-up4",  tText: "チームで活用", tColor:"rgba(0,0,0,.6)" },
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
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll);
    this.init();
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      for (var i = 0; i < this.cardDatas.length; i++) {
       
        this.cardSectionPosition[i] = document.getElementById(this.cardDatas[i].id).getBoundingClientRect().top
                          + window.scrollY  - (window.innerHeight*0.7) ;
      }
      this.img1Captionblock = document.getElementById('img1Captionblock').getBoundingClientRect().top
                          + window.scrollY  - (window.innerHeight*0.8) ;
      this.img1Imageblock = document.getElementById('img1Imageblock').getBoundingClientRect().top
                          + window.scrollY  - (window.innerHeight*0.8)  ;
      this.img2Captionblock = document.getElementById('img2Captionblock').getBoundingClientRect().top
                          + window.scrollY  - (window.innerHeight*0.8) ;
      this.img2Imageblock = document.getElementById('img2Imageblock').getBoundingClientRect().top
                          + window.scrollY  - (window.innerHeight*0.8)  ;
      this.innerHeight = window.innerHeight;
      this.scrollY = window.scrollY;
      if(this.scrollY > this.MaxScrollY) {
        this.MaxScrollY = this.scrollY;
      }
    },
    init(){
      this.$store.commit( 'about' );
      this.innerHeight = window.innerHeight;
      this.scrollY = window.scrollY;
    },
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
.aboutContent{
    position: relative;
    width: 100%;
    height: auto;
    padding-top: $header-height;
}
main{
  margin: 0;
  padding: 0;
}
.main-header{
  height: 35vh;
  padding: 1rem 1rem;
  //横スクロール処理
  // width: auto;
  // min-width: 100vw;
  width: 100vw;
}
.main-header-wrape{
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

.main-content{
  // height: 75vh;
  height:100%;
  background-color: $main-contents-color;
  color: $main-contents-text;
  //横スクロール処理
  // width: auto;
  // min-width: 100vw;
  width: 100vw;
} 

//section-2col
.col2-content{
  position: relative;
  width: 100%;
  height: 100%;
  display:flex;
  flex-wrap: wrap;
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

.link-text  {
  position: relative;
  width: 100%;
  height: 20rem;
  padding: 2rem 0;
}

.link-text a {
  position: absolute;
  z-index: 2;
  cursor: pointer;
  color:rgba(0,0,0,.6);
  font-weight: 700;
  &:hover{
    color:rgba(0,0,0,1);
  }
}
.text-color-gray{
  color: rgba(0,0,0,.6);
}
.fa-github{
  margin-right: 1rem;
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

// alternation-------------------------
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
// alternation virtical#####################
.card-content{
  position:relative;
  width:100%;
  height:100%;
}
.card-section{
  position: relative;
  width: 100%;
  height: 100%;
  display:flex;
  flex-wrap: wrap;
}
.card-row{
  flex-direction: row;
}

.col2-block{
  width: 100%;
  @media (min-width: 992px){
    width: 50%;
  }
}
.card-container{
  padding: 1rem 1rem;
  @media (min-width: 992px){
    padding: 5rem 10rem;
  }
}
.card-wrap{
  // border: 1px dotted red;
}
.cardMarginTop{
  margin-top: 0rem;
  @media (min-width: 992px){
    margin-top: 10rem;
  }
  
}

.image-box img{
  width: 100%;
  height: auto;
  
}
.subscription-wrap{
  padding: 1rem;
}


.text-block{
  width: 100%;
  @media (min-width: 992px){
    width: 30%;
  }
 
}
.image-block{
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
  background-color: rgba(0,250,250,.2);//blue
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
}
.caption-group-right .link-nextPage{
  position: absolute;
  top: 0;
  left: -55px;
  z-index:10;
}
.caption-group-left .link-nextPage{
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


</style>
