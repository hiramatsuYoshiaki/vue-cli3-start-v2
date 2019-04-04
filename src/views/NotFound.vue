<template>
<div class="notFound">
  <div class="notFoundWrap">
    <div class="notFound-content">
        <div class="link-block">
          <div class="link-wrap">
            <a v-on:click="link_commit(page, '/'+page)" class="menu_link" >
              <h1>Not Found</h1>
              <p>Go Back</p>
            </a>
          </div>
        </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'NotFound',
  data () {
    return {
      bgImage: require("../assets/img/img3668.jpg"),
    }
  },
  computed: {
    page () {
    return this.$store.state.page
    },
  },
  methods: {
   link_commit(link, link_path) {
     if(!link){
       this.$store.commit( 'home' );
        setTimeout( () => {
          this.$router.push({ path: '/' });
        }, 500);
     }else{
      this.$store.commit( link );
      setTimeout( () => {
        this.$router.push({ path: link_path });
      }, 500);
    }
   },
 },
}
</script>
<style scoped lang="scss">
@import "../assets/scss/common/data/thema.scss";
.notFound{
  position: relative;
  margin: 0;
  padding:0;
}
.notFoundWrap{
  background-color: $body-color;
  color: $body-text;
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
}
.notFound-content{
  position:relative;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.link-block{
  width: 30rem;
  height: 10rem;
  position:relative;
}
.link-wrap{
  width: 30rem;
  height: 10rem;
  position: absolute;
  z-index: 2;
  text-align: center;
}
</style>
