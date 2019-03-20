<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name:'home'}">Home</router-link> |
      <router-link :to="{name:'about'}">About</router-link>
    </div>
    <transition-group :name="routerTransition">
      <router-view key="default"/>
      <!-- 以下为命名视图  如果有多个视图，并让每一个视图在指定的位置，下面就用到了命名视图,完成后，再到router.js路由里去配置-->
      <router-view key="email" name="email"></router-view>
      <router-view key="tel" name="tel"></router-view>    
    </transition-group>

  </div>
</template>
<script>
export default {
  data() {
    return {
      routerTransition:''
    }
  },
  watch: {
    '$route' (to){
      to.query && to.query.TransitionName && (this.routerTransition = to.query.transitionName)
    }
  }
}
</script>

<style lang="less">
//以下三项是页面进入的效果
//1. 代表页面还没有显示，即将要显示一开始的状态
.router-enter{
  opacity: 0;
}
//2. 设置组件从没有到有的过程状态,时间设置1秒
.router-enter.active{
  transition: opacity 1s ease;
}
//3. 来设置这个页面完全显示之后的状态
.router-enter.to{
  opacity: 1;
}
//以下设置页面注消离开的效果
.router-leave{
  opacity: 1;
}
.router-leave.active{
  transition: opacity 1s ease;
}
.router-leave.to{
  opacity: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
