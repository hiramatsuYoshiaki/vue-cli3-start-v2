<template>
<div class="works">
  <div class="worksWrap">
      <BgImageFull msg="bgImage" v-bind:img= bgImage />
      
      <HeaderBar msg="HeaderBar"
                 navMenu="works"
                 v-bind:headerScrollType= "true"
                 v-bind:headerFixedType= "false"
                 v-bind:headerStikyType= "false" />
      <WorksContent msg="WorksContent"/>
      <transition appear name="tScreen">
        <TransitionScreen msg="bgImage" 
          v-bind:img= bgImage 
          v-if="page === 'works'"  />
      </transition>
  </div>
</div>
</template>
<script>
import WorksContent from '@/components/works/WorksContent.vue'
import HeaderBar from '@/components/header/HeaderBar.vue'
import BgImageFull from '@/components/background/BgImageFull.vue'
import TransitionScreen from '@/components/transition/TransitionScreen.vue'

export default {
  name: 'Works',
  components: {
    WorksContent,
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
      bgImage: require("../assets/img/fuji1.jpg"),
    }
  },
}
</script>
<style scoped lang="scss">
@import "../assets/scss/common/data/thema.scss";
.works{
  position: relative;
  margin: 0;
  padding:0;
}
.worksWrap{
  background-color: $works-body-color;
  color: $works-body-text;
}
</style>
