<template>
  <div id="app">
    <button @click="toggle ">Toggle</button>
    
      <div :class='{content:show,box:show1}'  style="background-color: red;transition: height 1s">
        这里是需要过渡的内容
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      show: false,
      show1:true,
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
      this.show1 = !this.show1;
    },
  },
};
</script>
 
<style>
/* 定义过渡样式 */

.content{
  height:300px;
}
.box{
  height: 100px;
}
</style>