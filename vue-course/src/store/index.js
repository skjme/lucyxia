import Vue from 'vue'
import Vuex from 'vuex'

//下面三部分是自己定义的
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import user from './module/user'

//以下是引入index.js的配置对象
// import config from './config/index'

//（调用 Vue.use(Vuex)）将状态从根组件“注入”到每一个子组件中
Vue.use(Vuex)

//一定要用Vuex.Store来创建实例
export default new Vuex.Store({
  // 以下作为参数传进去
  state,
  mutations,
  actions,
  getters,
  modules:{
    user
  }

})
