<template>
  <div id="app">
    <!-- loding  -->
    <div  v-if="isLoading">
      <LoadingWrite />
    </div>
    <!-- transition  -->
    <!-- <div  v-if="!isLoading">
      <TransitionScreen msg="bgImage" v-bind:img= bgImage pageView="loading"  />
    </div> -->
    <!-- contents  -->
    <div  v-if="!isLoading">
      <router-view /> 
    </div> 
  </div>
</template>
<script>
  import LoadingWrite from '@/components/transition/LoadingWrite.vue'
  // import TransitionScreen from '@/components/transition/TransitionScreen.vue'
  import AppDatas from './assets/json/appDatas.json'
  export default{
    components: {
      LoadingWrite,
      // TransitionScreen,
    },
    data () {
      return {
        appDatas: AppDatas,
        isLoading: true,
        bgImage: require("./assets/img/img1578.jpg"),
        //axios
        posts: [],
        // jsonUrl: require("./assets/json/posts.json"),
      }
    },
    created() {
      //loading setting
        console.log('loading axios');
        // setTimeout(() => {
          this.fetchData();
          // this.isLoading = false;
        // }, 3000);
      
    },
    // mounted() {
    //   console.log('mounted');
    //   this.fetchData();
    // },
    methods: {
      fetchData() {
        console.log('axios get data');
        // this.$axios.get('http://www.json-generator.com/api/json/get/ceUTuzoULC?indent=2').then(response => {
        //   this.posts = response.data;
        // this.$axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(response => {
        //   this.posts = response.data;
        // this.$axios.get(this.jsonUrl).then(response => { 
        //   this.posts = response.data;

        //publicに設置
        // this.$axios.get("./json/posts.json")
        // .then(response => { 
        //   this.posts = response.data;
        //   console.log('data: ' + JSON.stringify(response.data));
        // })
        // .catch((res) => {
        //     console.log('データの取得に失敗しました');
        //     console.log(res);
        // });



      this.posts = null;  
      const axios = this.$axios;
      const url = "./json/posts.json";

      async function main() {
        try {
          // const response = await axios.get(url);
          const posts = await axiosGetData();
          for(var i=0;i<posts.length;i++){
            const imgSrc = await pLoad(posts[i]);
            console.log('preload: imgName: ' + imgSrc );
          }
          // const items = response.data;
          // this.posts = response.data;
          // console.log('data: ' + JSON.stringify(posts));
          return posts;
        } catch (res) {
          console.log('データの取得に失敗しました');
          console.log(res);
        }
      }
      async function axiosGetData() {
        const response = await axios.get(url);
        console.log('data: ' + JSON.stringify(response.data));
        return response.data; 
      }
      async function pLoad(posts) {
        console.log('pLoad ' + posts.imgName);
        const img = new Image;
        img.onload = function(){
          console.log('image loaded----------OK: ' + posts.imgName );
          // cnt++;
          // console.log(cnt);
        };
        // console.log(this.appDatas[i].imgName);
        let imgUrlReq = require('./assets/img/' + posts.imgName);
        img.src = imgUrlReq;
        return img.src;
      }

      this.posts = main();
      // if(this.post){
      //   this.isLoading = false;
      // }

      

      

      //   main();
        // async function main() {
        //     const x = await getX()
        //     const y = await getY()
        //     console.log(x + y)
        //     console.log('async3')
        // }

        // async function getX() {
        //   console.log('async1')
        //     return 1
        // }

        // async function getY() {
        //   console.log('async2')
        //     return 2
        // }

        // main()
      },

      
// async function main() {
//   try {
//     const res = await axios.get(url);
//     const items = res.data;
//     for (const item of items) {
//       console.log(`${item.user.id}: \t${item.title}`);
//     }
//   } catch (error) {
//     const {
//       status,
//       statusText
//     } = error.response;
//     console.log(`Error! HTTP Status: ${status} ${statusText}`);
//   }
// }

// main();
// async function getServerStatusCode() {
        //   try {
        //     return (await axios.get("https://httpbin.org/status/500")).status
        //   } catch (error) {
        //     throw error.response.status
        //   }
        // }

        // getServerStatusCode()
        //     .then(statusCode => console.log("生きてる", statusCode))
        //     .catch(statusCode => console.error("死んでる", statusCode))


// const axios = require('axios');
// const url = "https://qiita.com/api/v2/items";

// axios.get(url).then(res => {
//   const items = res.data;
//   for (const item of items) {
//     console.log(`${item.user.id}: \t${item.title}`);
//   }
// }).catch(error => {
//   const {
//     status,
//     statusText
//   } = error.response;
//   console.log(`Error! HTTP Status: ${status} ${statusText}`);
// });










      imgPreLoad(){
        console.log('imgPreLoad');
        this.preLoad();
        this.isLoading = false;
      },
      preLoader(){
        console.log('preLoader');
      },
      imageLoader() {
      console.log('imageLoader');
      // this.img = require('../../assets/img/' + imgName);
      let cnt = 0;
      for(var i=0;i<this.appDatas.length;i++){
        let img;
        img = new Image;
        img.onload = function(){
          console.log('image loaded----------');
          cnt++;
          console.log(cnt);
        };
        console.log(this.appDatas[i].imgName);
        let imgUrlReq = this.getImage( this.appDatas[i].imgName );
        img.src = imgUrlReq;
        // new Promise((resolve, reject) => {
        //   const img = new Image();
        //   img.onload = () => resolve(img);
        //   img.onerror = (e) => reject(e);
        //   img.src = '画像のパス';
        // })
        // img.src = this.imgURL1;
      }
    },
    getImage( imgName ){
      return this.img = require('./assets/img/' + imgName);
    },

    }
  }
</script>
<style lang="scss">
 @import "./assets/scss/stylus.scss";
</style>