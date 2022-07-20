<template>
  <!--基础存放容器-->
  <div class="swiper-container swiper-container2">
    <!-- 需要进行轮播的部分 -->
    <div class="swiper-wrapper">
      <!-- 每个节点 -->
      <div class="swiper-slide">
        <img src="../assets/images/banner1.jpg" alt="图片4" />
      </div>
      <div class="swiper-slide">
        <img src="../assets/images/banner2.jpg" alt="图片5" />
      </div>
      <div class="swiper-slide">
        <img src="../assets/images/banner3.png" alt="图片6" />
      </div>
    </div>

    <!--如果需要使用分页器-->
    <div class="swiper-pagination swiper-pagination-white swiper-pagination2"></div>

    <!-- 如果需要使用前进后退按钮 -->
    <div class="swiper-button-prev swiper-button-white swiper-button-prev2"></div>
    <div class="swiper-button-next swiper-button-white swiper-button-next2"></div>
  </div>
</template>
<script>
  // Import Swiper Vue.js components
  import Swiper from "swiper";


  export default {
    name:'Swiper2',
    mounted() {
      this.initSwiper();
    },
    methods: {
    initSwiper() {
      new Swiper(".swiper-container2", {
        //设置轮播的循环方式
        loop: true,

        //设置自动播放间隔时间
        autoplay: 2000,

        // 轮播效果,默认为平滑轮播
        effect: "slide",

        //分页器
        pagination: ".swiper-pagination2",
        paginationClickable :true,

        //前进后退按钮
        prevButton: ".swiper-button-prev2",
        nextButton: ".swiper-button-next2",

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
  .swiper-slide > img{
    width: 100%;
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