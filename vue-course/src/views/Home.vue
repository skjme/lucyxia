<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="@/assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- //下面按钮是通过编程的方式来控制页面跳转、返回 -->
    <b>{{food}}</b>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">转跳到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '_c/HelloWorld.vue'
import { type } from 'os';

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  //第三种是函数模式
  props: {
    food: {
      type:String,
      default:'apple'
    }
  },
  //to指的是当前对象，from指上一个对象
  beforeRouteEnter (to, from, next) {
    //不能用当前以this，因为还没有渲染到,如果实在要用，就在next()回调函数使用
    // next()
    next( vm => {
      console.log(vm)
    })
  },
  //当用户编辑完一些内容要离开，但没有保存，这时就要提醒用户是否要保存，这时候就要用到beforeRouteLeave 这个钩子函数
  beforeRouteLeave (to, from, next) {
    ////这里用this是可以访问当前home.vue实例的
    //当用户要离开时，提醒是否确定离开
    const leave = confirm('你确定要离开吗？');
    console.log(leave)
     // 记住一定要调用next() ，如果用户选leave，一往下走  
    if (leave) {
      next();
    }else { 
      //如果用户不离开，设置成next(false)就不会离开了
      next(false);
    }
  },
  methods: {
    //编程式的导航路由实例
    handleClick(type){
      //下面是获取路由实例的方法,$router是在main.js里设置过的名字（返回上一页），除了back方法，还可以用go方法
      // this.$router.back(-1)
      //我们用下面js的（路由$router）方法跳转到parent.vue这个页面，用下面的判断方法，并给上面设置一个“type”的参数
      if (type === 'back') this.$router.back()
      else if (type === 'push') {
          this.$router.push({
          //下面是使用命名路由，共有三种写法，但我只写了两种
          name:'argu',
          //给地址栏添加了一个带有lison的后缀的参数
          params: {
            name:'lison'
          }
          //query这个对象，会让地址栏多出lison后缀名
          // query: {
          //   name:'lison'
          // }
        })
      } else if (type === 'replace') {
        //replace就是替换
        this.$router.replace({
          name: 'parent'
        })
      }

    }
  }
}
</script>
