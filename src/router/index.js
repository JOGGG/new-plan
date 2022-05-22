import Vue from 'vue'
import Router from 'vue-router'
import mainIndex from '@/components/mainIndex'
import newComponent from '@/components/newComponent'

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'mainIndex',
      component: mainIndex
    },
    {
     path:'/testCom',
     name:'testCom',
     component:newComponent
    },
    {
      path: '/login',
      component: () => import('@/views/login/index'),
      hidden: true
    },
  ]
})
