<template>
  <div class="homeContent">
  <div class="home-wrapper">
    <main>
      <CarouselFullScreenAlprime />
      <!-- <div class="main-header">
        <section class="main-header-text">head-line</section>
      </div> -->
    </main>
  </div>
  </div>
</template>

<script>
import CarouselFullScreenAlprime from '@/components/carousel/CarouselFullScreenAlprime.vue'
export default {
  name: 'HomeContent',
  props: {
    msg: String,
  },
  components: {
    CarouselFullScreenAlprime,
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/common/data/thema.scss";
.homeContent{
    position: relative;
    width: 100%;
    height: auto;
    padding-top: $header-height;
}
.home-wrapper{
  position:relative;
  width: 100vw;
  height: calc(100vh - #{ $header-height } );
  background-color: rgba(0,0,0, .5);
}
main{
  margin: 0;
  padding: 0;
}
.main-header{
  width:100%;
  height: calc( 100vh - #{ $header-height } ) ;
  padding: 1rem 1rem;
  width: auto;
  min-width: 100vw;
}
.main-content{
  width:100%;
  height: auto;
  padding: 1rem 1rem;
  border: 1px solid lightblue;
  background-color: $main-contents-color;
  color: $main-contents-text;
  width: auto;
  min-width: 100vw;
}
.main-footer{
  padding: 1rem 1rem;
  width:100%;
  height: 20vh;
  border: 1px solid yellow;
  background-color: $footer-color-color;
  color: $footer-color-text;
  width: auto;
  min-width: 100vw;
}
</style>