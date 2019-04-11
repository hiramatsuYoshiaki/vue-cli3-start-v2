<template>
    <!-- <div class="transitionScreen">
        <transition appear name="tScreen"> -->
            <div class="tranScreen" :style="{ 'background-image': 'url(' + img + ') '  }">
            <!-- <div class="tranScreen" v-if="page === pageView ||
             'loading' === pageView"
                :style="{ 'background-image': 'url(' + img + ') '  }"> -->

                <div class="bg_filter"></div>
            </div>
        <!-- </transition>
    </div> -->
</template>


<script>
 export default {
  name: 'TransitionScreen',
  props: {
    msg: String,
    img: String,
    pageView: String
  },
//   data(){
//       return{
//           isChenge: true,
//       }
//   },
  computed: {
    page () {
    return this.$store.state.page;
    },
  },
   methods: {
    // clickHome () {
    //  this.$store.commit('clickHome')
    // },
    // clickWorks () {
    //  this.$store.commit('clickWorks')
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/common/data/thema.scss";
// .transitionScreen{
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     overflow: hidden;
//     z-index: 1;
//     transform: translateX(100%);
// }
.tranScreen{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  overflow:hidden;
  opacity: 1;
  transform: translateX(100%);
  // transform: translate(50%, 50%);
}
.bg_filter{
      background-color: #212121;
      opacity: 1;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1001;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
  }
</style>
