//根级别的getter
const getters = {
    appNameWithVersion: (state) => {
        return state.appName + 'v2.0'      
        //使用ES6的模板语法会更简单一些
        // return '${state.appName}v2.0' 
    }
}
export default getters