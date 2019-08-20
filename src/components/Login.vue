<template>
<div>
  <h1>用户登录</h1>
  <div>
      <p><input type="text" placeholder="请输入用户名" v-model="username"></p>
      <p><input type="password" placeholder="请输入密码" v-model="password"></p>
      <input @click="doLogin" type="button" value="登录">
  </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            username: '',
            password: '',
        }
    },
    methods:{
        doLogin(){
            // alert(1)
            var _this = this
            this.$axios.request({
                url:'http://127.0.0.1:8000/api/auth/',
                method: 'POST',
                data: {
                    user: this.username,
                    pwd: this.password
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (arg){
                // console.log(arg.data.token)
                if (arg.data.code === 1000){
                    _this.$store.commit('saveToken',{token:arg.data.token, username: _this.username})

                    var url = _this.$route.query.backUrl
                    if(url){
                        _this.$router.push({path: url})
                    }else{
                        _this.$router.push({path: '/index'})
                    }
                }else{
                    alert(arg.data.error)
                }
            }).catch(function (arg){
                console.log('出错了')
            })
        }
    }
}
</script>

<style>

</style>