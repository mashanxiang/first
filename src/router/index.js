import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main.vue'
import Login from '@/components/Login.vue'
import Ku from '@/components/Ku.vue'
import Navi from '@/components/Navi/Navi.vue'
import Page1 from '@/components/Page1.vue'
import Page2 from '@/components/Page2.vue'
import Page3 from '@/components/Page3.vue'
Vue.use(Router) // 注册vue-router

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/ku',
      name: 'Ku',
      component: Ku
    },

    {
      path: '/navi',
      name: 'Navi',
      component: Navi
    },
    ,

    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    },,

    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    },,

    {
      path: '/page3',
      name: 'Page3',
      component: Page3
    },
  ]
})

