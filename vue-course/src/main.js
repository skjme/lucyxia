import Vue from 'vue'
import App from './App.vue'
//引入实例
import router from './router/index'
import store from './store'
import Bus from './lib/bus'

Vue.config.productionTip = false
//Bus注册到根实例
Vue.prototype.$bus = Bus

//挂载到Vue
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
