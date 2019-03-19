<template>
    <div>
        <!-- 这是一个动态路由匹配，$router表示当前路由对象，里面包含了params参数， -->
        {{ name }}
    </div>
</template>
<script>
export default {
    //下面是动态匹配路由
    props: {
        name:{
            //name是一个名字，就设置成字符串String类型
            type: String,
            //传给一个默认值，浏览器地址后缀会是固定的lison，想用动态输入的值，就要到router.vue里去设置成布尔值
            default: 'lison'
        }
    },
    //这个钩子函数是在组件路由发生变化，组件被复用的时候调用，它也有三个参数
    beforeRouteUpdate (to, from, next){
        //这里用this是可以访问当前argu.vue实例的
        console.log(to.name, from.name)
    }
}
</script>
