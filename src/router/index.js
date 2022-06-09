import Vue from 'vue'
import Router from 'vue-router'
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
      path: '/table',
      component: mainIndex,
      hidden: true,
      children:[
        {
          path:"/table/index",
          name:'tableIndex',
          components:{
            default:()=>import('@/views/table/index'),
          }
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/login/index'),
      hidden: true
    },
  ]
}) 
//Navigation Guards
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