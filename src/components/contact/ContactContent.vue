<template>
  <div class="contactContent">
    <main>
      <!-- <div class="main-header">
        <section class="main-header-text">head-line</section>
      </div> -->
      <transition name="mainCon" appear>
        <div class="main-content">
          <!-- section component -->
            <div class="col2-content">
              <div class="col-block left-block">
                <div class="section-block left-section">
                  <div class="contact-title">
                    <div class="link-text">
                      <a href="http://tourdehdr.sakuraweb.com/h-works-website/index.html">
                        <p>portfolio site</p>
                        <p>http://tourdehdr.sakuraweb.com/h-works-website/index.html</p>
                      </a>
                    </div>
                    <br>
                    <h1>HIRAMATSU WORKS</h1>
                    <br>
                    <p>このWEBサイトは、作品をご覧いただき、デザイン、コーディング、プログラミングなどのスキルレベルをご確認いただくために作成しております。</p>
                  </div> 
                </div>
              </div>
              <div class="col-block right-block">
                <div class="section-block left-section">
                  <p><i class="far fa-envelope"></i><span>hiramatsu3300@gmail.com</span></p>
                  <p><i class="fas fa-phone"></i><span>111-222-33333</span></p>
                  <!-- <p></p> -->
                  <br>
                  <p>Minami 444-55</p>
                  <p>Okayama </p>
                  <p>japan</p>
                  <!-- <p><i class="fas fa-map-marker-alt"></i>view on map</p> -->
                </div>
              </div>
            </div>
        </div>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ContactContent',
  props: {
    msg: String
  },
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/common/data/thema.scss";
.contactContent{
    position: relative;
    width: 100%;
    height: auto;
    // padding-top: $header-height;
}
main{
  margin: 0;
  padding: 0;
  h1{
    font-size: 2.8rem;
    @media(min-width:576px){
      font-size: 2.8rem;
    }
    @media(min-width: 992px){
      font-size: 4.0rem;
    }
  }
  p{
    font-size: 1.6rem;
    @media(min-width:576px){
      font-size: 1.6rem;
    }
    @media(min-width: 992px){
      font-size: 2.0rem;
    } 
  }
}


.main-content{
  width:100%;
  // height: calc( 100vh - #{ $header-height } );
  height: 100%;
  // height: 100vh;
  min-height: 100vh;
  @media (min-width: 992px){
    height: 100vh;
  }
  // margin-top: #{ $header-height } ;
  //横スクロール処理
  width: auto;
  min-width: 100vw;
  padding: 1rem 1rem;
  background-color: $footer-color-color;
  color: $footer-color-text;
}
.col2-content{
  position: relative;
  width: 100%;
  height: 100%;
  display:flex;
  flex-wrap: wrap;
  
}
.col-block{
  width: 100%;
  height: 100%;
  @media (min-width: 992px){
    width: 50%;
    height: 100%;
  }
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // flex-direction: column; 
  padding: 6rem 1.6rem;
  @media (min-width: 992px){
    padding-left: 16rem ;
  }
  
}
.section-block{
  position:relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
   overflow: hidden;
   width: 100%;
   height: 100%;
  
}
.left-section{
  // border:  3px dotted red;
}
.right-section{
  // border:  3px dotted yellow;
}
.contact-title {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
}
i{
  margin-right: .5rem;
}

.link-text  {
  position: relative;
  width: 100%;
  height: 10rem;
  margin-top:3rem;
}

.link-text a {
  position: absolute;
  z-index: 2;
  display: block;
  top:0%;
  left:0%;
  // transform: translate(0%,-50%);
  // @media(min-width:992px){
  //   top:50%;
  //   left:50%;
  //   transform: translate(-50%,-50%);
  // }
  cursor: pointer;
  color:rgba(250,250,250,1);
  font-weight: 700;
  &:hover{
    color:rgba(250,250,250,.7);
    opacity: 1;
  }
}
</style>
