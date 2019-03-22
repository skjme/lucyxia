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

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    user
  }

})
