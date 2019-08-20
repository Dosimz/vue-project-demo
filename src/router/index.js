import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import pins from '@/components/pins'
import topics from '@/components/topics'
import books from '@/components/books'
import events from '@/components/events'
import detail from '@/components/Detail'
import login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/detail/:id',
      name:'detail',
      component: detail
    },
    {
      path: '/pins',
      name: 'pins',
      component: pins,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/topics',
      name: 'topics',
      component: topics
    },
    {
      path: '/books',
      name: 'books',
      component: books
    },
    {
      path: '/events',
      name: 'events',
      component: events
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
  ],
  mode:'history'
})
