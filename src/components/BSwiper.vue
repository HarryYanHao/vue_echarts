<template>
   <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <!-- Text slides with image -->
      <b-carousel-slide>
      <template v-slot:img>
        <b-img src="../assets/images/swiper2.jpg"  class= 'img-fluid w-100 tablet-hidden'></b-img>
        <b-img src="../assets/images/swiper1.jpg"  class="img-fluid w-100 mobile-hidden"></b-img>
      </template>
      <b-jumbotron class='swiper-text1' header="Welcome" lead="Harry's Home Page" style="background-color:transparent" header-level="3"> 
        <p>It's responsive theme UI</p>
        <b-button variant="primary" href="#">More</b-button>
      </b-jumbotron>
      <!-- <div class='swiper-text1'>
          <h1>Welcome</h1>
          <h2>Harry's Home Page</h2>
          <p>It's responsive theme UI</p>
          <b-button variant="primary" href="#">More</b-button>
      </div> -->
      </b-carousel-slide >

      <!-- Slides with custom text -->
      <b-carousel-slide
      caption="Second slide"
      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      >
      <template v-slot:img>
        <b-img src="../assets/images/swiper2.jpg"  class= 'img-fluid w-100 tablet-hidden'></b-img>
        <b-img src="../assets/images/swiper1.jpg"  class="img-fluid w-100 mobile-hidden"></b-img>
      </template>
       
      </b-carousel-slide>
      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Hello world!" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
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