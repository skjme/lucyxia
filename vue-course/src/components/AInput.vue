<template>
    <!-- 给input绑定@input事件，当handleInput这个值输入修改的话会触发这个@input事件，从而执行handleInput方法，显示的值就是value的值 组件 -->
    <input @input="handleInput" :value="value"/>
</template>
<script>
export default {
    name:'AInput',
    props:{
        value:{
            type:[String, Number],
            //设置默认值暂时为空
            default:''
        }
    },
   methods:{
       //event是引用的事件对象
       handleInput (event) {
           //获取文本框中输入的值，对象（event）目标（target）为value
           const value = event.target.value
           //获取到值后，编辑更改的值传出去，那么使用事件$emit
           //触发input事件，下面的“input”是事件名，然后把value推出去
           this.$emit('input',value)
       }
   } 
}
</script>