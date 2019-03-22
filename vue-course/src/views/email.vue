<template>
    <div class="email">
       <button @click="handleClick">按我</button>
    </div>
</template>
<script>
export default {
    methods:{
        handleClick (){
            //要在tel.vue里接收$emit事件,事件名为"on-click"
            //$emit这个方法是能够触发当前实例上的一些事件
            //现在on-click事件是绑定在this.$bus这个vue上
            this.$bus.$emit('on-click','hello')
        }
    }
}
</script>
<style>
.email{
    border: solid 1px green;
}
</style>

