<template>
	<div class="test">
		<h1 class = "d-none d-lg-block">Test Page</h1>
		<BNav></BNav>
		<div>
  			<b-jumbotron header="BootstrapVue" header-level=4 lead="Bootstrap v4 Components for Vue.js 2" style="background-image: url(http://img.yipic.cn/thumb/34ede572/8bf2cabc/8d2dddc2/d8a8dedd/effect_big_34ede5728bf2cabc8d2dddc2d8a8dedd.jpg?x-oss-process=image/format,webp/sharpen,100); background-size: 100%;">
    			<div>
    				<p>For more information visit website</p>
    			</div>
    			<b-button variant="primary" href="#">More Info</b-button>
  			</b-jumbotron>
		</div>
		<div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      >
      	<template v-slot:img>
      	<b-img src="../assets/images/swiper2.jpg"  class= 'img-fluid w-100 tablet-hidden'></b-img>
      	<b-img src="../assets/images/swiper1.jpg"  class="img-fluid w-100 mobile-hidden"></b-img>
      </template>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
  </div>
	</div>
</template>
<script>
	import BNav from '@/components/BNav.vue'
	export default {
	name: 'Test',
	components: {
		BNav
	},
	data(){
		return{
			slide: 0,
        	sliding: null
		}
		
	},
	methods:{
		onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
	}
}
</script>
<style>
@media only screen and (max-width: 479px) {
	.tablet-hidden{
		display: none;
	}

}
@media only screen and (min-width: 480px){
	.mobile-hidden{
		display: none;
	}
}
</style>
	
