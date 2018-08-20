import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import WorksTop from '@/components/WorksTop' // 追加
import Contact from '@/components/Contact' // 追加
import About from '@/components/About' // 追加
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/Works',
      component:WorksTop,

    },
    {
      path:'/contact',
      name:'Contact',
      component:Contact
    },
    {
      path:'/about',
      name:'About',
      component:About
    },
    {
    path: '*',
    name: 'Not Found',
    component:PageNotFound,
    title: 'Not Found'
    }
  ]

})
