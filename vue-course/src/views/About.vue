<template>
  <div class="about">
    <h1>This is an about page</h1>
    <b>{{foot}}</b>
  </div>
</template>
<script>
export default {
  //以下为对象模式
  props:{
    foot:{
      type:String,
      default:'apple'
    }
  }
}
</script>