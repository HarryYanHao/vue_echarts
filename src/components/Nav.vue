<template>
  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/echarts">ECharts</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/gallery">Gallery</router-link>
  </div>
</template>
<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #409EFF;
}
</style>
<script>
export default {
  name: 'Nav',
  props: {
  
  }
}
</script>