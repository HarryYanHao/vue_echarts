<template>
  <!--基础存放容器-->
  <div class="swiper-container swiper-container1">
    <!-- 需要进行轮播的部分 -->
    <div class="swiper-wrapper">
      <!-- 每个节点 -->
      <div class="swiper-slide">
        <div class='swiper-text'>
          <p>欢迎来到</p>
          <p>TRY德瑞茵精密科技</p>
          <p>这是一家专注于半导体电子精密检测系统研究，生产和销售的高科技企业，并以获得诸多国际认可信赖</p>
          <el-button type="primary" size="small" round>了解更多信息</el-button>
        </div>
        <img src="../assets/images/banner3.png" alt="图片1" />
      </div>
      <div class="swiper-slide">
        <img src="../assets/images/banner2.jpg" alt="图片2" />
      </div>
      <div class="swiper-slide">
        <img src="../assets/images/banner1.jpg" alt="图片3" />
      </div>
    </div>

    <div class='i18n-select'>
      <el-link :underline="false" @click="i18nselect('zh')">中文</el-link>|<el-link :underline="false" @click="i18nselect('en')">EN</el-link>
    </div>
    <i class="el-icon-arrow-down swiper-down" @click='swiperDown'></i>
    <!--如果需要使用分页器-->
    <div class="swiper-pagination swiper-pagination-white swiper-pagination1"></div>

    <!-- 如果需要使用前进后退按钮 -->
    <!-- <div class="swiper-button-prev swiper-button-white"></div>
    <div class="swiper-button-next swiper-button-white"></div> -->


  </div>
</template>
<script>
  // Import Swiper Vue.js components
  import Swiper from "swiper";


  export default {
    name:'Swiper',
    mounted() {
      this.initSwiper();
    },
    methods: {
    initSwiper() {
      new Swiper(".swiper-container1", {
        //设置轮播的循环方式
        loop: true,

        //设置自动播放间隔时间
        autoplay: 0,

        // 轮播效果,默认为平滑轮播
        effect: "slide",

        //分页器
        pagination: ".swiper-pagination1",
        paginationClickable :true,

        //前进后退按钮
        // prevButton: ".swiper-button-prev",
        // nextButton: ".swiper-button-next",

        // 用户中断轮播后续播
        autoplayDisableOnInteraction: false,
      });
    },
    swiperDown(){
        // document.querySelector('#swiper2').scrollIntoView({
        //  behavior: "smooth"
        // }); 
        this.sh = document.documentElement.scrollTop || document.body.scrollTop
        this.scroll(document.querySelector('#swiper2'), 100);
      },
    scroll(e, frame) {
            var eTop = e.getBoundingClientRect().top; 
            var eAmt = eTop / frame;  
            var curTime = 0;
            console.log(this.sh)
            while (curTime < frame) {
                curTime += 1;  
                window.setTimeout(this.scrollH, curTime * (200 / frame) , eTop - ((frame - curTime) * eAmt)+this.sh);
            }
        },
        scrollH(height) {
            window.scrollTo({
                top: height
            })
        },
        i18nselect(item){
          this.$i18n.locale = item
        }
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
  .swiper-down{
    position: absolute;
    z-index: 1;
    bottom: 0%;
    font-size: 4em;
    color: white;
  }
  .swiper-text{
    position: absolute;
    z-index: 1;
    top: 200px;
    left: 300px;
    color: white;
    text-align: left;
    border-left: 4px solid #D16832;
    height:100%;
    width: 100%
  }
  .swiper-text > p,.swiper-text .el-button{
    margin-left: 3vh;
  }
  .swiper-text > p{
    line-height: 30px;
    margin-top: 0px
  }
  .swiper-text>p:first-child{
    font-size: 2rem;
    font-weight: 400;
    margin-bottom:25px;
  }
  .swiper-text>p:nth-child(2){
    font-size: 3rem;
    font-family: system-ui;
    font-weight: 800;
    margin-bottom:50px;
  }
  .swiper-text>p:nth-child(3){
    width: 450px;
    margin-bottom:50px;

  }
  .i18n-select{
    position: absolute;
    z-index: 1;
    top: 10px;
    right: 30px;
    color: white;
  }
  .el-link.el-link--default{
    color: white;
    line-height: 30px;
    margin: 0px 5px;
  }
</style>