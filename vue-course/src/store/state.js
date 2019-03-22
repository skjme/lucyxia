// Vuex
//1. 定义用const 
//2.  导出用export default
//3. @/store/index.js引入
//4. 在store/index.js 加载（Vuex）之后
//5. 在store/index.js文件创建一个Vuex实例：Vuex.store这个方法，并把引入的组件作为参数传进去
//6. 在main.js里把 实例引入 （import store from './store'）
//7. 并挂载到Vue的根实例上

//这里是定义一个state
const state = {
    appName: 'admin'
}
export default state
