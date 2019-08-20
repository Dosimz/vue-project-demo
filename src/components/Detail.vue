<template>
    <div>
        <h1>课程详情</h1>
        <p>{{detail.course}}</p>
        <p>{{detail.img}}</p>
        <p>{{detail.level}}</p>
        <p>{{detail.slogon}}</p>
        <p>{{detail.title}}</p>
        <p>{{detail.why}}</p>
        <div>
        <h3>章节</h3>
        <ul v-for="(item) in detail.chapter" :key="item.id">
            <li>{{item.name}}</li>
        </ul>
        </div>
        <div>
        <h4>推荐课程</h4>
        <ul v-for="item in detail.recommends" :key="item.id">
            <!-- route-link 跳转，仍在 detail 路由上，不刷新界面 -->
            <!-- <li><router-link :to="{name:'detail', params:{id:item.id}}">{{item.title}}</router-link></li> -->
            <li @click="changeDetail(item.id)">{{item.title}}</li>

        </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Detail",
    data() {
        return{
            detail:{
                course: null,
                img: null,
                level: null,
                slogon: null,
                title: null,
                why: null,
                chapter: [],
                recommends: [],
            }
        }
    },
    mounted(){
        var nid = this.$route.params.id
        this.initDetail(nid)
    },
    methods:{
        initDetail(params_id){
            console.log(this.$route.params.id)
            var _this = this
            this.$axios.request({
            url: "http://127.0.0.1:8000/api/course/" + params_id +"/",
            method: "GET"
            }).then(function (ret) {
            console.log(ret.data)
            if (ret.data.code === 1000){
        //   _this.$store.state.courseDetail = ret.data.data
            _this.detail = ret.data.data
            }
            }).catch(function (ret) {
      
            })
    },
    changeDetail(id){
        this.initDetail(id)
        this.$router.push({name: 'detail', params:{id: id}})
    }
}
    // computed:{
    //   getCourseDetail(){
    //     return this.$store.state.courseDetail
    //   }
    // }
    
}
</script>

<style scoped>

</style>