import Vue from 'vue'
import Router from 'vue-router'
import newComponent from '@/components/newComponent'
import mainIndex from '@/views/mainIndex/index'
import top from '@/components/topNav'

Vue.use(Router)
export const router = new Router({
  scrollBehavior: () => ({ y: 0 }),

   routes:[
    {
      path: '/',
      component: mainIndex,
      hidden: true,
    },
    {
      path: '/2',
      component: mainIndex,
      hidden: true,
      children:[
        {
          path:"/2/2",
          name:'你猜猜',
          components:{
            default:()=>import('@/views/login/index'),
            top,
          }
        }
      ]
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