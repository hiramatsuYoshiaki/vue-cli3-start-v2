import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  

  state: {
    count: 0,
    page: "home",
    isLoading: true,
    isPosts: true,
    isAxiosStatus: false,
    postsData: [],
    PreloadImage: [],
  },
  mutations: {
    setLoading (state, payload) {
      state.isLoading = payload
    },
    
    setPosts (state, payload) {
      state.isPosts = payload
    },
    setAxiosStatus (state, payload) {
      state.isAxiosStatus = payload
    },
    setPostsData (state, payload) {
      state.postsData = payload
      
    },
    setPreloadImage (state, payload) {
      state.preloadImage = payload;
      console.log( '------setPostData: ' + payload);
      // state.preloadImage.push(payload);
      // state.preloadImage.push({"imgName":"img4130b.jpg"});
    },
    loading (state, payload) {
      state.isLoading = payload.isLoading
    },
    
    

    // loading: state => state.isLoading = false,
    increment: state => state.count++,
    decrement: state => state.count--,
    increment10 (state, n) {
      state.count += n
    },
    decrement10 (state, n) {
      state.count -= n
    },
    incrementPayload (state, payload) {
      state.count += payload.amount
    },
    decrementPayload (state, payload) {
      state.count -= payload.amount
    },
    home: state => { state.page = "home"},
    works: state => { state.page = "works"},
    projects: state => { state.page = "projects"},
    about: state => { state.page = "about"},
    contact: state => { state.page = "contact"},
    service: state => { state.page = "service"},
    // studio: state => { state.page = "studio"},
  },
  actions: {
    loading (context, isLoading) {
      context.commit('loading', isLoading)
    },
    
    increment: context => context.commit('increment'),
    decrement: context => context.commit('decrement'),
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 3000)
    },
    decrementAsync ({ commit }) {
      setTimeout(() => {
        commit('decrement')
      }, 3000)
    },
    //promis
    // actionA ({ commit }) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       commit('increment')
    //       resolve()
    //     }, 3000)
    //   })
    // },
    // actionB ({ dispatch, commit }) {
    //   return dispatch('actionA').then(() => {
    //     commit('increment')
    //   })
    // },
    //
    // 
    // `getData()` と `getOtherData()` が Promise を返すことを想定している
    


    async actionB ({ dispatch, commit }) {
      await dispatch('actionA') // `actionA` が完了するのを待機する
      // commit('incrementPayload', await getOtherData())
      commit('increment')
    },
    async actionA ({ commit }) {
      // commit('gotData', await getData())
      commit('increment')
    },


    //getData
    //step1 promis axios
    //  getData({ commit }){
    //     let posts = [];
    //     axios.get("./json/posts.json")
    //     .then(response => { 
    //       console.log('data: ' + JSON.stringify(response.data));
    //       commit('setLoading', false);
    //       posts = response.data;
         
    //       setTimeout(() => {
    //         commit('setPostsData', posts);
    //       }, 3000);
    //     })
    //     .catch((res) => {
    //         console.log('データの取得に失敗しました');
    //         console.log(res);
    //     });
    // },
    //getData
    //step2 acync axios
    // async getData({commit}){
    //   console.log('1async getData start');
    //   let posts = [];
    //   const response = await axios.get("./json/posts.json");
    //   posts = response.data;
    //   setTimeout(() => {
    //     commit('setPostsData', posts);
    //   }, 3000);
    //   console.log('data: ' + JSON.stringify(response.data));
    //   console.log('1async getData end');
    // },
    //getData acync axios stop loading
    //step3
    // async getData({dispatch, commit}){
    //   console.log('1 async getPosts start');
    //   await dispatch('axiosGetData');
    //   setTimeout(() => {
    //     commit('setPosts', false);
    //     console.log('1async getPosts end---- stop loading-----');
    //   }, 3000);
    // },
    // async axiosGetData({dispatch,commit}){
    //   console.log('2async axiosGetData start');
    //   commit('setPostsData', await dispatch('axiosGet'));
    //   console.log('2async axiosGetData end----axios loading-----');
    // },
    // async axiosGet({commit}){
    //   console.log('3async axiosGet start');
    //   commit('setAxiosStatus', true);
    //   var postsData = 
    //    [
    //     {title: 'TOKYO BIGSITE'},
    //     {title: 'HOTALUNA'},
    //     {title: 'FUJI TV'}
    //   ];
    //   console.log('3async axiosGet end------preload-----');
    //   return postsData
    // },
    //getData
    //step4
    async getData({dispatch, commit, getters}){
      console.log('1 async getPosts start');
      //データ読み込み
      // await dispatch('axiosGetData');
      await commit('setPostsData', await dispatch('axiosGet'));
      //画像プリロード
      await getters.getPostsImgName.forEach(value => {
          console.log(value.imgName)
          // const res =  dispatch('preLoadImage', value.imgName));
          dispatch('preLoadImage', value.imgName)
          .then(value => {
            console.log('++++++++preloadImage return:' + value)
            commit('setPreloadImage', value);
          })
          .catch(res => console.log(res));
          // commit('setPreloadImage', dispatch('preLoadImage', value.imgName));

          // const img = new Image;
          //  img.onload = function(){
          //   console.log('image loaded----------OK: ' + value.imgName );

          // };
          // let imgUrlReq = require('./assets/img/' + value.imgName);
          // img.src = imgUrlReq;
          // return img.src;
      });
      //ローディング画面ストップ
      setTimeout(() => {
        commit('setPosts', false);
        console.log('1async getPosts end---- stop loading-----');
      }, 3000);
    },
    // async axiosGetData({dispatch,commit}){
    //   console.log('2async axiosGetData start');
    //   commit('setPostsData', await dispatch('axiosGet'));
    //   console.log('2async axiosGetData end----axios loading data set -----');
    // },

    async axiosGet({dispatch,commit}){
      try{
        console.log('2async axiosGet start');
        let posts = [];
        const response = await axios.get("./json/posts.json");
        posts = response.data;
        console.log('data: ' + JSON.stringify(response.data));
        console.log('data: ' + posts);
        commit('setAxiosStatus', true);
        // await dispatch('preLoadImage',posts);
        console.log('2async axiosGet end------getData-----');
      return posts;
      } catch (res) {
        console.log('データの取得に失敗しました');
        console.log(res);
      }
    },
    async preLoadImage({dispatch,commit},imgName){
      try{
          console.log('3async preLoadImage start');
          console.log('preLoadImage: ' + imgName)
          const img = new Image;
          img.onload = function(){
            console.log('image loaded----------OK: ' + imgName );
          };
          let imgUrlReq = require('./assets/img/' + imgName);
          img.src = imgUrlReq;
          console.log('3async preLoadImage end----preload -----');
          return img.src;
        } catch (res) {
          console.log('データの取得に失敗しました');
          console.log(res);
        }
      
    },
     
    


    //getPosts
    // async getPosts({dispatch, commit}){
    //   console.log('1 async getPosts start');
    //   await dispatch('axiosGetData');
    //   commit('setPosts', true);
    //   console.log('1 async getPosts end');
    // },
    // async axiosGetData({dispatch,commit}){
    //   console.log('2async axiosGetData start');
    //   commit('setPostsData', await dispatch('axiosGet'));
    //   console.log('2async axiosGetData end');
    // },
    // async axiosGet({commit}){
    //   console.log('3async axiosGet start');
    //   commit('setAxiosStatus', true);
    //   var postsData = 
    //    [
    //     {title: 'TOKYO BIGSITE'},
    //     {title: 'HOTALUNA'},
    //     {title: 'FUJI TV'}
    //   ];
    //   console.log('3async axiosGet end');
    //   return postsData
    // }
    

  },
  getters: {
    getPosts: state => {
      return state.postsData
    },
    getPostsImgName: state => {
      return state.postsData.filter(post => post.imgName)
    },
    getImagePreload: state => {
      return state.PreloadImage
    },
    
    // doneTodosCount: (state, getters) => {
    //   return getters.doneTodos.length
    // }
  }
})
