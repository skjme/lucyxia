<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name:'home'}">Home</router-link> |
      <router-link :to="{name:'about'}">About</router-link>
    </div>
    <router-view/>
    <!-- 以下为命名视图  如果有多个视图，并让每一个视图在指定的位置，下面就用到了命名视图,完成后，再到router.js路由里去配置-->
    <router-view name="email"></router-view>
    <router-view name="tel"></router-view>
  </div>
</template>

<style lang="less">
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
