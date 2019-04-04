<template>
<div class="hoem">
  <!-- <div class="homeWrap"> -->
    <TransitionScreen msg="bgImage" v-bind:img= bgImage pageView="home"  />
    <HeaderBar msg="HeaderBar"
                navMenu="home"
                v-bind:headerScrollType="true"
                v-bind:headerFixedType="false"
                v-bind:headerStikyType="false"
                v-bind:logoPositionLeft="true"
                v-bind:logoPositionCenter="false"
                v-bind:logoPositionRight="false"
    />
    <!-- <BgImageFull msg="bgImage" v-bind:img= bgImage /> -->
    <HomeContent msg="HomeContent"/>
    <!-- <FooterBar msg="FooterBar"/>  -->
  <!-- </div> -->
<!-- </div> -->
</div>
</template>


<script>
// @ is an alias to /src
import HomeContent from '@/components/home/HomeContent.vue'
import HeaderBar from '@/components/header/HeaderBar.vue'
// import BgImageFull from '@/components/background/BgImageFull.vue'
// import Spinner from '@/components/transition/Spinner.vue'
// import LoadingCounterBar2 from '@/components/transition/LoadingCounterBar2.vue'
// import LoadingWrite from '@/components/transition/LoadingWrite.vue'
import TransitionScreen from '@/components/transition/TransitionScreen.vue'

export default {
  name: 'Home',
  components: {
    HomeContent,
    HeaderBar,
    // BgImageFull,
    // Spinner,
    // LoadingCounterBar2,
    // LoadingWrite,
    TransitionScreen,
  },
  data () {
      return {
        isLoading: true, 
        isShow: true, 
        progress: 0,
        bgImage: require("../assets/img/img1578.jpg"),
      }
  },
}
</script>
<style scoped lang="scss">
@import "../assets/scss/common/data/thema.scss";
.home{
  position: relative;
  margin: 0;
  padding:0;
}
.homeWrap{
  background-color: $body-color;
  color: $body-text;
  width: 100%;
  height:100%;
}
</style>
