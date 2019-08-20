<template>
  <div id="app">

    <router-link to="/">首页</router-link>
    <router-link to="/pins">沸点</router-link>
    <router-link to="/topics">话题</router-link>
    <router-link to="/books">小书</router-link>
    <router-link to="/events">活动</router-link>
    <div v-if="this.$store.state.token">
      <a href="">{{this.$store.state.username}}</a>
      <a @click="logout">注销</a>
    </div>
    <div v-else>
      <router-link to="/login">登录</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    logout(){
      this.$store.commit('clearToken')
    }
  }
  // created(){

  // },
  // mounted(){
  //   this.$store.commit('getCourseList')
  // }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
