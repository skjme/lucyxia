import Home from '@/views/Home.vue'
//二.以下为定义路由
export default [
  {
    path: '/',
    //下面是定义别名,为了区分，取名后面加上_page,当访问一个路径的时候，可以定义一个别名（用另外一个路径访问当前路径效果是一样的）
    alias:'/home_page',
    //下面的 name: 'home'，是为了设置命名路由
    name: 'home',
    component: Home,
    //第三种是函数模式，传给它的是一个函数,下面用ES6的形式来写，"route"是当前路由对象的参数
    //下面是返回对象，我用的简写方法，其实与return{ }是相同的
    props: route => ({
      food: route.query.food
    }),
      //路由独享的守卫，下面只对home页守卫的
      //用了beforeEnter一定记住，最后一定要调用 next()，不然就不会去跳转
    beforeEnter: (to, from, next) => {
      // if(from.name === 'login') {
      //   alert('这是从登录页来的');
      // }else{
      //   alert('这不是从登录页来的');
      // }
      console.log('to', to);
      console.log('from', from);
      next()
    }
  },

  {
 //路由配置login页面
  path:'/login',
  name:'login',
  component: () => import('@/views/login.vue')
  },
 {
    //加载完 path: '/about',后，才去加载下面
    path: '/about',
    name: 'about',
      // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //下面是ES6的箭头函数
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    //第二种是对象模式
    props: {
      food: 'banana'
    },
    //根据每一个不同的相关页面title显示不同的内容设置，现在给about页面设置
    meta: {
      title: '关于'
    }
  },
  {
    //下面是动态路由匹配
    path: '/argu/:name',
    name:'argu',
    component: () => import('@/views/argu.vue'),
    //第一种是布尔模式
    props:true
  },
  {
 //嵌套路由
    path: '/parent',
    name: 'parent',
    component:() => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  //命名视图的设置
  {
    path: '/named_view',
    //下面代表要加载多个组件，所以最后多一个“ S ”结尾，
    components: {
      //下面第一个是没有命名，所以用default
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  //重定项,下面重定项到Home页里去了
 {
   path: '/main',
  //  redirect: '/'
  //redirect: to => '/'
  redirect: to => {
    return{
      name:'home'
    }
  }
 },
 //以下*号是匹配任何的路径,但一定要放在页面的最后面
 //所有页面当匹配不到静态资源，所有都指向index.html，但还有一个问题，当匹配不到静态资源，而且前端路由也匹配不到组件的话，所以在路由(router.vue)列表最后设置一个匹配的规则
 {
  path: '*',
  //并给component设置一个组件,那就是下面路径的404组件
  component: () => import ('@/views/reeor_404.vue')
 }
   
]

