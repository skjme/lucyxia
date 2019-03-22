<template>
    <div class="tel">
        <p>{{message}}</p>
    </div>
</template>
<script>
export default {
    data () {
        return {
            message: ''
        }
    },
    //mounted是生命周期钩子
    mounted () {
        //添加一个事件监听，监听事件名为“on-click”，“mes”是参数
        //this.$bus是给当前事监听一个on-click事件
        this.$bus.$on('on-click', mes => {
            this.message = mes
        })
    }
}
</script>

<style>
.tel{
    border: solid 1px red;
}    
</style>
