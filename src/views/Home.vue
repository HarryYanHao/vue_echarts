<template>
  <div class="index">
	<el-container>
		<el-header style = "height:auto;padding:0px">
			<BNav />
		</el-header>
		<el-main>
	<div  class style="position:relative;">
		<div  class = "homePage" :style="{height:homeHeight}">
      		<div class="homeTitle" style="font-size: -webkit-xxx-large;">{{$t('homePage.home_title')}}</div>
      		<div class="homeTitle" style="font-size: x-large;font-weight: normal;">{{$t('homePage.home_title2')}}</div>
        	<div class="homeTitle" style="font-weight: normal;">{{$t('homePage.home_title3')}}</div>
        	<div><b-button variant="primary" href="#" @click="goStep">{{$t('homePage.home_button1')}}</b-button></div>
			
			<i class="el-icon-sort-down" v-show="!isActive" style="display:block;margin-right: 1rem; font-size: 1.5rem;
    font-weight: bolder;text-align:right" @click='swiperDown'></i>
			<i class="el-icon-arrow-down swiper-down" :class="{'expendActive':isActive}"  @click='expendHomePage'></i>
			
		</div>
		
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
import { TransitionGroup } from 'vue';
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
			vbacktop: 0,
			homeHeight:'auto',
			clientHeight:0,
			initHomeHeight:0,
			isActive:false
		}
		
	},
	mounted(){
		let clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		this.clientHeight = clientHeight
    	this.vbacktop = document.querySelector('#footer').getBoundingClientRect().top - clientHeight
		this.homeHeight = document.querySelector('.homePage').offsetHeight + 'px' 
		this.initHomeHeight = this.homeHeight
    	console.log(this.vbacktop)
  	},
	methods:{
    	swiperDown(){
      		// this.$refs.bstep.swiperDown('#swiper1'); //此方法为调用子类方法
      		this.$utils.swiperDown('#step1')
    	},
    	goStep(){
			// document.querySelector('#step1').scrollIntoView() //不平滑
			this.$utils.swiperDown('#swiper1')//平滑滚动
		},
		expendHomePage(){
			let clientHeight = this.clientHeight - document.querySelector('#head').offsetHeight + 'px'
			console.log(this.homeHeight,clientHeight)
			if(this.homeHeight < clientHeight){
				this.homeHeight = clientHeight
				this.isActive = true
			}else{
				this.homeHeight = this.initHomeHeight ;
				this.isActive = false
			}
			
			
		}
	},
  deactivated(){
    this.$destroy()
  },


}
</script>
<style scoped>
	.el-menu.el-menu--horizontal{
		background-image: linear-gradient(-45deg, #213052,#304883);	
		border-bottom: none;
	}
  .swiper-down{
    z-index: 1;
    bottom: 0%;
    font-size: 2rem;
    color: gray;
	margin: 2rem 0 0 0;
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
	.homeTitle{
		margin:1rem 0;
	}
	.homePage{
		transition: height 1s linear;
		background-image: url(/background.jpg);
		background-size: cover;
	}
	.expendActive{
		transform: rotate(180deg);
	}
	
	
</style>
