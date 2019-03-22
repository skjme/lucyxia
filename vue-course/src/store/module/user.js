const state = {
    // userNme:'Lison'
    userName:'Lison'
}
//模块里定义的getters,想要获取Lison的第一个字母
const getters = {
    firstLetter: (state) => {
        return state.userName.substr(0, 1)
    }
}
const mutations = {
    // 在模块中定义mutations，来修改顶部userName:Lison里的内容
    SET_USER_NAME (state, params) {
        state.userName = params
    }
}
const actions = {
    //
}

export default {
    //设置命名空间为：“ true ”
    namespaced:true,
    getters,
    state,
    mutations,
    actions
}