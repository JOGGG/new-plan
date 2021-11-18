import Vue from 'vue'
import Router from 'vue-router'
import mainIndex from '@/components/mainIndex'
import newComponent from '@/components/newComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainIndex',
      component: mainIndex
    },
    {
     path:'/nihaoya',
     name:'nihaoya',
     component:newComponent
    },
    {
      path:'/wohaoya',
      name:'wohoaya',
      component:newComponent
    }
  ]
})
