import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import WorksTop from '@/components/WorksTop'
import Contact from '@/components/Contact'
import About from '@/components/About'
import PageNotFound from '@/components/PageNotFound'
import BlogHome from '@/components/BlogHome'
import BlogPost from '@/components/BlogPost'

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

    // {
    //   path: '/blog/',
    //   name: 'blog-home',
    //   component: BlogHome
    // },
    // {
    //   path: '/blog/:slug',
    //   name: 'blog-post',
    //   component: BlogPost
    // },

    {
    path: '*',
    name: 'Not Found',
    component:PageNotFound,
    title: 'Not Found'
    }
  ]

})
