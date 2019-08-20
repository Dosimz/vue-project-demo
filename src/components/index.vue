<template>
  <div id='nav'>
  <h1>首页</h1>
    <ul v-for = '(item, index) in getCourseList' :key='index'>
        <li>
          <router-link :to="{name:'detail', params:{id:item.id}}"> <a href="">{{item.title}}</a></router-link>
        </li>
        <!-- <p>{{getAllDatas}}</p>
        <p>{{arra}}</p>  -->
    </ul>
  </div>
</template>

<script>
export default {
    name: 'index',
    data(){
      return {

      }
    },
    created(){

    },
    mounted(){
      console.log(this)
      // this.initindex()
      var _this = this
      this.$axios.request({
        url: "http://127.0.0.1:8000/api/course/",
        method: "GET"
      }).then(function (ret) {
        console.log(ret.data)
        if (ret.data.code === 1000){
          _this.$store.state.courseList = ret.data.data
        }
      }).catch(function (ret) {
      
      })
    },
    computed:{
      getCourseList(){
        return this.$store.state.courseList
      }
    }
//     methods:{
//       initindex:function (){
//         var that = this
//         this.$axios.request({
//         url: "http://127.0.0.1:8000/api/course/",
//         method: "GET"
//       }).then(function (ret) {
//        console.log(ret.data)
//         if (ret.data.code === 1000){
//           that.courseList = ret.data.data
//         }
//       }).catch(function (ret) {
      
//       })
//       }
//     },
//     computed:{
//       getCourseList(){
//         return this.courseList  
//       }
// }
}
</script>

<style scoped>
  #nav {
      /* text-align:center */
  }
  ul {

      overflow: hidden;
  }

  ul li{
        list-style: none;
        /* float: left; */
        padding-right:50px;
        display: inline;
    }
  a {
        text-decoration:none
    }
</style>