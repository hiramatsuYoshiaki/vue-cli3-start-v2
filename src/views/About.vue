<template>
<div class="about">
    <div class="aboutWrap">
      <BgImageFull msg="bgImage" v-bind:img= bgImage />
      
      <HeaderBar msg="HeaderBar"
                  navMenu="about"
                  v-bind:headerScrollType="true"
                  v-bind:headerFixedType="false"
                  v-bind:headerStikyType="false"/>
      <AboutContent msg="AboutContent"/>
      <transition appear name="tScreen">
        <TransitionScreen msg="bgImage" 
          v-bind:img= bgImage pageView="about"
          v-if="page === 'about'"
        />
      </transition>
    </div>
</div>
</template>
<script>
import AboutContent from '@/components/about/AboutContent.vue'
import HeaderBar from '@/components/header/HeaderBar.vue'
import BgImageFull from '@/components/background/BgImageFull.vue'
import TransitionScreen from '@/components/transition/TransitionScreen.vue'
export default {
  name: 'About',
  components: {
    AboutContent,
    HeaderBar,
    BgImageFull,
    TransitionScreen,
  },
  computed: {
    page () {
    return this.$store.state.page;
    },
  },
  data () {
      return {
        bgImage: require("../assets/img/img4130b.jpg"),
      }
 },
}
</script>
<style scoped lang="scss">
@import "../assets/scss/common/data/thema.scss";
.about{
  position: relative;
  margin: 0;
  padding:0;
}
.aboutWrap{
  background-color: $body-color;
  color: $body-text;
}
</style>

