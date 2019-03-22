import vue from 'vue'

//1. 创建一个叫做mutations的对象
//2. 进入index.js里引入
//3. index.js里参数传入
//4. 到根及别的state.js

//创建一个叫做mutations的对象
const mutations = {
    //定义方法
    SET_APP_NAME (state, params) {
        state.appName = params.appName
    },
     //2. 在state.js里假如没有定义版本号，在这里添加进去，
     // 3. 需要用到一个vue的方法，在mutations.js头部引入 
    SET_APP_VERSION ( state){
        //4. 使用vue.set()方法给state对象 ,第一个值state是要给谁设置值，第二个appVersion是要设置的名字,第三个值是要给它设置的值
        //5. 返回到store.js
        vue.set(state, 'appVersion', 'v2.0')
    }
}
export default mutations