<template>
  <div id="menu">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title"><span class = 'about'>关于我们</span></template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
      <el-menu-item index="3">六大优势</el-menu-item>
      <el-menu-item index="4">行业解决方案</el-menu-item>
      <el-menu-item index="5">我们的产品</el-menu-item>
      <el-menu-item index="6">最近新闻</el-menu-item>

    </el-menu>
  </div>
</template>
<style scope>
  .el-menu{
    display: flex;
  }
  .el-menu--horizontal>.el-menu-item{
    color:white;
  }

  .el-menu--popup {
    flex-direction: column;
  }
  .about,.el-menu--horizontal>.el-menu-item.is-active{
    color:white;
  }
  .el-submenu:hover .about,.about:focus,.about:hover{
    color:#303133;
  }
  
</style>
<script>
export default {
  name: 'Menu',
  props: {

  },
  data(){
    return {
      activeIndex:'0'
    }
  },
  methods:{
      handleSelect(){

      },

  }
}
</script>