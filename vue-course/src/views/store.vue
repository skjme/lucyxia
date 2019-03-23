<template>
    <div>
     <!-- 3. 使用组件。  用v-model双向绑定inputValue这个值,然后inputValue这个值在date返回 -->
     <a-input v-model="inputValue"/>
      <!-- <a-input :value="inputValue" @input="handleInput"/> -->

       <!-- 
           <input v-model="inputValue" />
           === 等价
           <input :value="inputValue" @input="handleInput"/>
           <input :value="inputValue" @input="inputValue = $event.target.value"/> 
            -->

     <!-- 
     等价以上语法糖代码
     <a-input :value="inputValue" @input="handleInput"/>
     <a-input :value="inputValue" @input="inputValue = $event.target.value"/> -->
     <p>{{inputValue}} -> lastLetter is {{ inputValueLastLetter }}</p>
     <!-- 绑定一个content值为：inputValue -->
     <!-- <a-Show :content="inputValue"/> -->
     <p>appName:{{appName}}, appNameWithVersion : {{ appNameWithVersion }}</p>
     <p>userName : {{ userName }}, firstLetter is: {{ firstLetter }}</p> 
     <button @click="handleChangeAppName">修改appName</button>
     <p>{{ appVersion }}</p>
     <button @click="changeUserName">修改用户名</button>
    </div>
</template>
<script>
//1. 引入组件
//2. 注册组件
//3. 使用组件

//1. 引入组件
import AInput from '_c/AInput'
import AShow from '_c/AShow'
//工具函数,这种写法是ES6的结构负值，用结构负值就方便很多
import { mapState, mapGetters, mapMutations } from 'vuex'

import { stat } from 'fs';
import { log } from 'util';

export default {
    name: 'store',
    data(){
        return{
            inputValue:''
        }
    },
//2. 注册组件
    components: {
        AInput,
        AShow
    },
    //计算属性
    computed:{
        // 方法2：用对象
        // ...mapState({
        //     appName: state => state.appName,
        //     userName: state => state.user.userName
        // }),
     
         ...mapState('user',{
            userName: state => state.userName
        }),
        //给mutations.js添加版本
        ...mapState({
            appVersion: state => state.appVersion
        }),   
        //给添加了一个模块名：“user”
        ...mapGetters('user', [
            // 'appNameWithVersion',
            'firstLetter'
        ]),                    
        appName () {
            return this.$store.state.appName
        },
        
        // userName () {
        //     return this.$store.state.user.userName
        // },

        //方法1：三个...是ES6里的展开操作符，它会展开一个对象，...mapState 会返回一个对象
        // ...mapState ([
        //     'appName'
        // ]),
       
        // ...mapState ( 'user',{
        //     userName: state => state.userName
        // }),
    
        inputValueLastLetter (){
            return this.inputValue.substr(-1, 1)
        },

        appNameWithVersion (){
            return this.$store.getters.appNameWithVersion
        }
    },
    methods: {
        //使用mutations工具函数就会简单一些
        //mapMutations(namespace?(命名空间): string, map: Array<string> | Object<string | function>): Object
        //第一个参数是可选的，可以是一个命名空间字符串。
        //对象形式的第二个参数的成员可以是一个函数。function(commit: function, ...args: any[])
        ...mapMutations('user',[
            'SET_USER_NAME',
        ]),
        ...mapMutations([
            'SET_APP_NAME'
        ]),        
        //用mutations去改变appName写法之一
        // handleChangeAppName () {
        //     //我们不可以通过appName等于一个NewAppName
        //     this.$store.commit('SET_APP_NAME', {
        //         appName:'newAppName'
        //     })
        // },

        //用mutations去改变appName写法之二：用对象写法来提交
        handleChangeAppName () {
            // this.$store.commit({
            //     //type里包含的是要提交的名称：mutations.js里面的名称：SET_APP_NAME
            //     type:'SET_APP_NAME',
            //     appName:'newAppName'
            // }),
            //使用mutations工具函数就可以把以上代码注册掉，在下面写一行就可以了
            this.SET_APP_NAME({
                appName:'newAppName'
            })
            // this.$store.commit('SET_APP_VERSION')
        },
        changeUserName () {
            console.log(this);
            this.SET_USER_NAME('vue-cource') 
            
        },

        handleInput(e){
        //    console.log('@input事件触发了')
        //    const value = e.target.value
        //    console.log("value", value);
        //     this.inputValue = value;
            // this.inputValue = e.target.value;
        }

    }
}
</script>
