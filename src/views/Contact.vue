<template>
<div class="contact">
    <div class="contactWrap">
      <BgImageFull msg="bgImage" v-bind:img= bgImage />
      <HeaderBar msg="HeaderBar"
                  navMenu="contact"
                  v-bind:headerScrollType="false"
                  v-bind:headerFixedType="true"
                  v-bind:headerStikyType="false" />
        <ContactContent msg="ContactContent"/>
        <transition appear name="tScreen">  
          <TransitionScreen msg="bgImage" 
            v-bind:img= bgImage pageView="contact"
            v-if="page === 'contact'"
          />
        </transition>
    </div>
</div>
</template>
<script>
import ContactContent from '@/components/contact/ContactContent.vue'
import HeaderBar from '@/components/header/HeaderBar.vue'
import BgImageFull from '@/components/background/BgImageFull.vue'
import TransitionScreen from '@/components/transition/TransitionScreen.vue'
export default {
  name: 'Contact',
  components: {
    ContactContent,
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
      bgImage: require("../assets/img/img3668.jpg"),
    }
  }
}
</script>
<style scoped lang="scss">
@import "../assets/scss/common/data/thema.scss";
.contact{
  position: relative;
  margin: 0;
  padding:0;
}
.contactWrap{
  background-color: $body-color;
  color: $body-text;
}
</style>
