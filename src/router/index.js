import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/index/Index.vue'
import Page1 from '../views/page1/Page1.vue'
import Page2 from '../views/page2/Page2.vue'
import Page3 from '../views/page3/Page3.vue'
import Page4 from '../views/page4/Page4.vue'
//1.安装插件
Vue.use(VueRouter)

//2.创建router
const router = new VueRouter({
  routes: [{
      path: '/',
      //重定向
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/page1',
      component: Page1
    },
    {
      path: '/page2',
      component: Page2
    },
    {
      path: '/page3',
      component: Page3
    },
    {
      path: '/page4',
      component: Page4
    }
  ],
  mode: 'history',
  linkActiveClass: 'active'
})

export default router
