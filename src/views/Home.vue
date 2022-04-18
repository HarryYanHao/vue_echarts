<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/pig1.jpeg" style="width:30%">
    <Nav></Nav>
    <!-- <HelloWorld msg="MW大傻逼"/> -->
    <h1>MW大傻逼</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Nav
  }
}
</script>
