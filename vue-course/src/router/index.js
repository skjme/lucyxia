import Vue from 'vue'
//引入路由模块
import Router from 'vue-router'
//引入router.js
import routes from './router'
import { setTitle } from '@/lib/util'

//使用路由
Vue.use(Router)
//三.创建router实例
const router = new Router({
  routes,
  //去掉地址的“井”号，用history的API来做无刷新页面的跳转，如果要用history模式是需要后端支持的
  //所有页面当匹配不到静态资源，所有都指向index.html，但还有一个问题，当匹配不到静态资源，而且前端路由也匹配不到组件的话，所以在路由(router.vue)列表最后设置一个匹配的规则
  mode:"history"
})

//全局守卫
//把是否要登录放在一个常量里，实际的判断是通过接口来获取的
const HAS_LOGINED = true
//router.beforeEach() 这个方法能注册一个全局全制守卫，并给三个参数,to代表的是即将跳转的那个路由对象, from是当前将要离开的路由对象,next是函数，如果要用到跳转，就会用到next
router.beforeEach((to, from, next) => {
  //根据每一个不同的相关页面title显示不同的内容设置,并在该页面index头部引入进来,（定义在与业务相关的组件里）
  to.meta && setTitle(to.meta.title)
  //判断用户是不是在登录页，如果是已经登录就继续，否则就进入到login去登录
  if (to.name !== 'login') {

    if (HAS_LOGINED) {
      next();
    }else {
      next({ name:'login' });
    }

  }else{

    //如果用户登录了，那么跳转到home首页
    if (HAS_LOGINED) {
      next({name:'home'});
    }else {
      //如果没有登录就直接到next()
      next();
    }
    
  }
})

//beforeResolve这个也是全局守卫，区别在于它是在导航被确认之前在所有组件守卫，和一波路由被解析之后被调用（也就是所有的导航勾子结束）来调用的，同时在组件内守卫
// router.beforeResolve((to, from, next)  => {
// })

//后置钩子，不能使页面跳转，在路由被跳转之后去做操作
//在所有的页面跳转之后，都可以加一个afterEach()
router.afterEach((to, from) => {
  // logining = false
})

/** 
 * 完整的导航解析流程
 * 1. 导航被触发（不管是用this.push去触发还是在URL里面修改地址）
 * 2. 在失活的组件（即将离开的页面组件）里调用离开守卫 beforeRouteLeave
 * 3. 调用全局的前置守卫 beforeEach
 * 4. 在重用的组件里调用 beforeRouteUpdate
 * 5. 调用路由独享的守卫beforeEnter
 * 6. 解析异步路由组件
 * 7. 在被激活的组件（即将进入的页面组件）里调用beforeRouteEnter
 * 8. 调用全局的解析守卫beforeResolve
 *  当beforeResolve被调用之后，这个导航就被确认了，
 * 9. 导航被确认
 * 10. 调用全局的后置守卫afterEach
 *  当调用完afterEach后，所以的钩子都已经完成了
 * 11. 触发DOM更新（渲染）
 * 12. 用创建好的实例调用beforeRouterEnter守卫里传给next的回调函数
*/

export default router
