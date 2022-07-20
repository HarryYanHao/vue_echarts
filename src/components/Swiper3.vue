<template>
  <!--基础存放容器-->
  <div class="swiper-container swiper-container3">
      <div class="swiper3-cotent">
        <span>
          德瑞茵专注于半导体微电子精密检测系统研究、生产和销售的高科技企业，我们一直坚持自主创新，不断强化校心领域技术的研发，在自动化控制和精密计量领域具有多项国家专利。性能全球业界领先、居同类设备亚太区域主流地位。
        </span>
      </div>
    <!-- 需要进行轮播的部分 -->
    <div class="swiper-wrapper">
      <!-- 每个节点 -->
      <div class="swiper-slide">
        <div class='content-item'>
          <el-image style="width: 250px; height: 200px" src="require('../assets/images/banner2.jpg')" fit="fit"></el-image>
          <p>最近新闻</p>
          <p>123123123</p>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="../assets/images/banner2.jpg" alt="图片5" />
      </div>
    </div>

    <!--如果需要使用分页器-->
    <div class="swiper-pagination swiper-pagination-white swiper-pagination3"></div>

    <!-- 如果需要使用前进后退按钮 -->
    <div class="swiper-button-prev swiper-button-white swiper-button-prev3"></div>
    <div class="swiper-button-next swiper-button-white swiper-button-next3"></div>
  </div>
</template>
<script>
  // Import Swiper Vue.js components
  import Swiper from "swiper";


  export default {
    name:'Swiper3',
    mounted() {
      this.initSwiper();
    },
    methods: {
    initSwiper() {
      new Swiper(".swiper-container3", {
        //设置轮播的循环方式
        loop: true,

        //设置自动播放间隔时间
        autoplay: 0,

        // 轮播效果,默认为平滑轮播
        effect: "slide",

        //分页器
        pagination: ".swiper-pagination3",
        paginationClickable :true,

        //前进后退按钮
        prevButton: ".swiper-button-prev3",
        nextButton: ".swiper-button-next3",

        // 用户中断轮播后续播
        autoplayDisableOnInteraction: false,
      });
    },
  },
};
</script>
<style>
  /* 引入swipercss */
  @import "../../node_modules/swiper/dist/css/swiper.css";
  .swiper-container3{
    width: 1200px;
    height: 100%;
  }
  .swiper3-cotent{
    line-height: 100%;
    margin: 40px 0px;
    text-align: left;
    color:#007DBB;
    font-family: ui-serif;
    font-size: 1.1rem
  }
  .swiper3-cotent span{
    line-height: 30px

  }
  .content-item{
    float: left;
  }
  .content-item p{
    text-align: left;
    margin-top: 30px;
    line-height: 100%;
  }
  .content-item p:first-child{
    font-size: 2rem;
    color:red;
  }
  .swiper-pagination-bullet-active{
    background-color: #4CD31F !important;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets{
    text-align: right;
    margin-left: -5vh;
    bottom:3vh;
  }
  .swiper-pagination-bullet{
    width: 20px;
    height: 5px;
    display: inline-block;
    border-radius: 0%; 
    background: #000;
    opacity: 1;
  }

  
  </style>