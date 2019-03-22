<template>
    <div>
     <!-- 3. 使用组件。  用v-model双向绑定inputValue这个值,然后inputValue这个值在date返回 -->
     <a-input v-model="inputValue"/>
     <p>{{inputValue}}</p>
     <!-- 绑定一个content值为：inputValue -->
     <a-Show :content="inputValue"/>
     <p>{{appName}}, appNameWithVersion : {{ appNameWithVersion }}</p>
     <p>userName : {{userName}}</p>
    </div>
</template>
<script>


//1. 引入组件
//2. 注册组件
//3. 使用组件

//1. 引入组件
import AInput from '_c/AInput'
import AShow from '_c/AShow'
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
        appName () {
            return this.$store.state.appName
        },
        userName () {
            return this.$store.state.user.userName
        },
        appNameWithVersion (){
            return this.$store.getters.appNameWithVersion
        }
    }
}
</script>
