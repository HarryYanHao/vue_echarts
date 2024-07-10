<template>
   <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <!-- Text slides with image -->
      <b-carousel-slide>
      <template v-slot:img>
        <b-img src="../assets/images/swiper2.jpg"  fluid class= "tablet-hidden"></b-img>
        <b-img src="../assets/images/swiper1.jpg"  fluid class="mobile-hidden"></b-img>
      </template>
      <b-jumbotron class='swiper-text1' lead="Harry's Home Page" style="background-color:transparent" header-level="3"> 
        <template v-slot:header>{{$t('homePage.swiper_title1')}}</template>
        <template v-slot:lead>{{$t('homePage.swiper_title2')}}</template>
        <p>{{$t('homePage.swiper_title3')}}</p>
        <b-button variant="primary" href="#" @click="goStep()">{{$t('homePage.swiper_button1')}}</b-button>
      </b-jumbotron>
      <!-- <div class='swiper-text1'>
          <h1>Welcome</h1>
          <h2>Harry's Home Page</h2>
          <p>It's responsive theme UI</p>
          <b-button variant="primary" href="#">More</b-button>
      </div> -->
      </b-carousel-slide >

      <!-- Slides with custom text -->
<!--       <b-carousel-slide
      caption="Second slide"
      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      >
      <template v-slot:img>
        <b-img src="../assets/blog2.png"  fluid class= "tablet-hidden"></b-img>
        <b-img src="../assets/blog1.png"  fluid class="mobile-hidden"></b-img>
      </template>
       
      </b-carousel-slide> -->
      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
       <b-carousel-slide img-blank img-alt="Blank image" background="#2f3542">
        <div class="hero" style="height:100%">
          <b-img src="../assets/hero.png" alt="hero" fluid style="width: 50%;height: 50%;display:none"></b-img> 
          <h1 id="main-title">Harry's Blog</h1> 
          <p class="description">
            生活，成长
          </p> 
          <p class="action-button"><a @click="goBlog()" class="nav-link action-button">开启 →</a></p>
        </div>
      </b-carousel-slide> 
    </b-carousel>
</template>

<script>
  export default {
  name: 'BSwiper',
  components: {
    
  },
  data(){
    return{
      slide: 0,
    }
    
  },
  methods:{
    goStep(){
      window.open(window.location.href,'harry', 'width=390,height=800');
    },
    goBlog(){
      console.log
      window.open(this.$blogUrl,'_blank')
    }
  }
}
</script>
<style >
  .carousel-caption{
    bottom:0px;
    top:1rem;
    padding-top: 0;
  }
  .swiper-text1{
    z-index: 1;
    color: white;
    text-align: left;
    border-left: 0.2rem solid #D16832;
  }
  .swiper-text1 p ,.swiper-text1{
    margin-bottom: 0;
    font-size: 1.25rem;
    margin-top: 1rem;
  }
  .swiper-text1 a{
    margin: 1rem 0;
  }
  .lead{
    font-size: 1.5rem
  }
  .carousel-item{
    height: 70vh;
  }
  .carousel-item img{
    width: 100%;
    height: 100%;
  }
  .hero .action-button {
    display: inline-block;
    font-size: 0.8rem;
    color: #fff;
    background-color: #f33;
    padding: 0.4rem 1.6rem;
    border-radius: 4px;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    border-bottom: 1px solid #ff1414;
  }
  .hero{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 768px) {
  .tablet-hidden{
    display: none;
  }

}
  @media only screen and (min-width: 769px){
  .mobile-hidden{
    display: none;
  }
}



  

</style>