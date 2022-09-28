<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top" :sticky=true>  
    <b-navbar-brand href="#" >Harry</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav justified style='width:100%'>
        <b-nav-item href="#" to='/' exact-active-class="active">Home</b-nav-item>
        <b-nav-item href="#" to='/calendar' active-class="active">Calendar</b-nav-item>
        <b-nav-item href="#" to='/echarts' active-class="active">ECharts</b-nav-item>
        <b-nav-item href="#" to='/about' active-class="active">About</b-nav-item>
        <b-nav-item href="#" to='/gallery' active-class="active">Gallery</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
  </div>
</template>

<style scoped>
  .navbar{
    padding:0rem;
  }
  .bg-dark{
    background-image: linear-gradient(-45deg, #213052,#304883);
  }
  .nav-item:hover{
     background-color: #fff;
     border-bottom: solid 0.2rem #409EFF;
  }
  .nav-item:hover .nav-link,.navbar-dark .navbar-nav, .navbar-dark .navbar-nav .nav-link:hover{
    color:#303133;
  }
  .navbar-brand{
    padding-left:1rem;
  }
  .nav-item{
    padding: 1rem;
    height:5rem;
  }
  

</style>


<script>
export default {
  name: 'BNav',
  props: {
  
  },


}
</script>
