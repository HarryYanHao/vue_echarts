<template>
  <div id="app">
    <keep-alive>
		  <router-view v-if="$route.meta.keepAlive"></router-view>
	  </keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<style>
body{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,body {
  overflow-y: auto;
}
body::-webkit-scrollbar {
  display: none;
}





</style>

<script>
  //   window.onload = function() {
  //   document.addEventListener('touchstart', function(event) {
  //     if (event.touches.length > 1) {
  //       event.preventDefault()
  //     }
  //   });
  //   document.addEventListener('gesturestart', function(event) {
  //     event.preventDefault()
  //   })
  // };

</script>

