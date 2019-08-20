// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false
import Vuex from 'vuex'
import Cookie from 'vue-cookies'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    courseList:[],
    courseDetail:[],
    chapter:[],
    username: Cookie.get('username'),
    token: Cookie.get('token'),
  },

  mutations: {
  //   getCourseList(state){

  //     this.$axios.request({
  //       url: "http://127.0.0.1:8000/api/course/",
  //       method: "GET"
  //     }).then(function (ret) {
  //      console.log(ret.data)
  //       if (ret.data.code === 1000){
  //         state.courseList = ret.data.data
  //       }
  //     }).catch(function (ret) {
      
  //     })  
  // },
   saveToken: function (state, userToken) {
     state.username = userToken.username;
     state.token = userToken.token;
     Cookie.set("username", userToken.username, "20min")
     Cookie.set("token", userToken.token, "20min")
   },
   clearToken: function (state) {
     state.username = null
     state.token = null
     Cookie.remove('username')
     Cookie.remove('token')
  }   
}
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach(function (to, from, next) {
  if(to.meta.requireAuth){
    // 登录后才能访问
    if (store.state.token) {
      next()
    } else {
      next({name: 'login', query: {backUrl: to.fullPath}})
    }

  }else{
    next()
  }
})
