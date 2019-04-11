<template>
<div class="service">
    <div class="serviceWrap">
        <BgImageFull msg="bgImage" v-bind:img=bgImage />
        <HeaderBar msg="HeaderBar"
                 navMenu="service"
                 v-bind:headerScrollType= "true"
                 v-bind:headerFixedType= "false"
                 v-bind:headerStikyType= "false"/>
        <ServiceContent msg="ServiceContent" pageView="service"/>
        <transition appear name="tScreen">
            <TransitionScreen msg="bgImage" 
              v-bind:img=bgImage 
              v-if="page === 'service'"
              />
        </transition>
    </div>
</div>
</template>
<script>
import ServiceContent from '@/components/service/ServiceContent.vue'
import HeaderBar from '@/components/header/HeaderBar.vue'
import BgImageFull from '@/components/background/BgImageFull.vue'
import TransitionScreen from '@/components/transition/TransitionScreen.vue'

export default {
  name: 'Service',
  components: {
    ServiceContent,
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
      bgImage: require("../assets/img/img3482.jpg"),
    }
  },
}
</script>
<style scoped lang="scss">
@import "../assets/scss/common/data/thema.scss";
.service{
  position: relative;
  margin: 0;
  padding:0;
}
.serviceWrap{
  background-color: $service-body-color;
  color: $service-body-text;
}
</style>
