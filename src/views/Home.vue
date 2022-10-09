<template>
  <div class="index">
	<el-container>
		<el-header style = "height:auto;padding:0px">
			<BNav />
		</el-header>
		<el-main>
      <div style="position:relative">
      <b-jumbotron fluid header-level=4  style="background-image: url(/background.jpg); background-size: 100%; margin-bottom: 0;">
      	<template v-slot:header>{{$t('homePage.home_title')}}</template>
      	<template v-slot:lead>
      		{{$t('homePage.home_title2')}}
      	</template>
        <div>
          <p>{{$t('homePage.home_title3')}}</p>
        </div>
        <b-button variant="primary" href="#" @click="goStep">{{$t('homePage.home_button1')}}</b-button>
      </b-jumbotron>
      <i class="el-icon-arrow-down swiper-down" @click='swiperDown'></i>
    </div>
      
			<div id = 'swiper1' class='main-content'>
				<BSwiper/>
			</div>
      <div id = 'step1' ref="step1">
        <BStep ref="bstep"/>
      </div>
      
		</el-main>
		<el-footer id="footer"><Footer /></el-footer>
	</el-container>
	<el-backtop :bottom="60" :visibility-height="vbacktop"><i class="el-icon-arrow-up"></i></el-backtop>
  </div>
</template>
<script>
	import BNav from '@/components/BNav.vue'
	import BSwiper from '@/components/BSwiper.vue'
  	import BStep from '@/components/BStep.vue'
  	import Footer from '@/components/Footer.vue'
	export default {
	name: 'Index',
	components: {
		BNav,
		BSwiper,
    	BStep,
    	Footer
	},
	data(){
		return{
			vbacktop:0
		}
		
	},
	mounted(){
		let clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    	this.vbacktop=document.querySelector('#footer').getBoundingClientRect().top - clientHeight
    	console.log(this.vbacktop)
  	},
	methods:{
    	swiperDown(){
      		// this.$refs.bstep.swiperDown('#swiper1'); //此方法为调用子类方法
      		this.$utils.swiperDown('#swiper1')
    	},
    	goStep(){
			// document.querySelector('#step1').scrollIntoView() //不平滑
			this.$utils.swiperDown('#step1')//平滑滚动
		},
	},
  deactivated(){
    this.$destroy()
  },


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
		color: #2f3542;
    	font-weight: bold;
		text-align: center;
		padding:0px;
    	font-family: sans-serif;
	}
	.el-container{
		overflow: hidden
	}
	
</style>
