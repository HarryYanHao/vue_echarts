<template>
  <div class="index">
	<el-container>
		<el-header style = "height:auto;padding:0px">
			<BNav />
		</el-header>
		<el-main>
      <div style="position:relative">
      <b-jumbotron fluid header="BootstrapVue" header-level=4 lead="Bootstrap v4 Components for Vue.js 2" style="background-image: url(/background.jpg); background-size: 100%; margin-bottom: 0;">
        <div>
          <p>For more information visit website</p>
        </div>
        <b-button variant="primary" href="#">More Info</b-button>
      </b-jumbotron>
      <i class="el-icon-arrow-down swiper-down" @click='swiperDown'></i>
    </div>
      
			<div id = 'swiper1' class='main-content'>
				<BSwiper/>
			</div>
			<div id = 'swiper2' class='main-content'>
		<b-card-group deck>
      <b-card bg-variant="dark" text-variant="white" img-alt="Image" img-top>
           <template v-slot:header>
            <b-img src="../assets/images/banner1.jpg" rounded="circle" style="max-width:20rem"></b-img>
          </template>
          <b-card-body title="Title">
            <b-card-text>This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.</b-card-text>
          </b-card-body>
      <!-- <template v-slot:footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template> -->
      </b-card>
      

    <b-card bg-variant="dark" text-variant="white" img-alt="Image" img-top>
      <template v-slot:header>
            <b-img src="../assets/images/banner2.jpg" rounded="circle" style="max-width:20rem"></b-img>
          </template>
      <b-card-body title="Title">
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
    </b-card-body>
    </b-card>


    <b-card bg-variant="dark" text-variant="white" img-alt="Image" img-top>
      <template v-slot:header>
            <b-img src="../assets/images/banner3.png" rounded="circle" style="max-width:20rem"></b-img>
          </template>
      <b-card-body title="Title">
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
      </b-card-text>
    </b-card-body>
    </b-card>
  </b-card-group>
  

  
			</div>
		</el-main>
		<el-footer>{{$t("admin")}}</el-footer>
	</el-container>
  </div>
</template>
<script>
	import BNav from '@/components/BNav.vue'
	import Swiper from '@/components/Swiper.vue'
	import BSwiper from '@/components/BSwiper.vue'
	export default {
	name: 'Index',
	components: {
		BNav,
		Swiper,
		BSwiper,
	},
	data(){
		return{
			
		}
		
	},
	methods:{
    swiperDown(){
        // document.querySelector('#swiper2').scrollIntoView({
        //  behavior: "smooth"
        // }); 
        this.sh = document.documentElement.scrollTop || document.body.scrollTop
        this.scroll(document.querySelector('#swiper1'), 100);
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
	}
}
</script>
<style scoped>
	.el-header, .el-footer {
		background-image: linear-gradient(-45deg, #213052,#304883);
	}
	.el-menu.el-menu--horizontal{
		background-image: linear-gradient(-45deg, #213052,#304883);	
		border-bottom: none;
	}
  .swiper-down{
    position: absolute;
    z-index: 1;
    bottom: 0%;
    left:50%;
    font-size: 2rem;
    color: gray;
  }
	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		padding:0px;
	}
	.el-container{
		overflow: hidden
	}
  .main-content{
    background-color: #CCC;
  }
  #swiper2 .card-deck{
    padding: 0.5rem
  }
  @media(min-width:576px) .card-deck .card{
    margin-right: 25px;
    margin-bottom: 10px;
    margin-left: 25px;
    margin-top: 25px;
  }
	
</style>
