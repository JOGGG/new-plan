import Vue from 'vue'
import Router from 'vue-router'
import mainIndex from '@/components/mainIndex'
import newComponent from '@/components/newComponent'

Vue.use(Router)
export const router = new Router({
  scrollBehavior: () => ({ y: 0 }),

   routes:[
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
router.beforeEach((to,from,next)=>{
  //check token
  if(to.path !='/login'){
    if(window.sessionStorage.token){
      next()
    }else{
      next({ path: '/login' })
    }
  }
  next()
})

export default router