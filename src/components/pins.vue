<template>
  <div>
    <h1>沸点</h1>
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  name:'pins',
  data() {
    return {
      title:null
    }
  },
  mounted(){
    this.initMicro()
  },
  methods:{
    initMicro(){
      var _this = this
      this.$axios.request({
        url:'http://127.0.0.1:8000/api/pins/',
        method: "GET",
        params: {
          token: this.$store.state.token
        }
      }).then(function (arg) {
        if (arg) {
          _this.title = arg
        }
      }).catch(function (arg) { 

      })
    },
  }
}
</script>

<style>

</style>