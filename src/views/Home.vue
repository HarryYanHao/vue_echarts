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
      <div id = 'step1' ref="step1">
        <BStep ref="bstep"/>
      </div>
      
		</el-main>
		<el-footer id="footer">{{$t("admin")}}</el-footer>
	</el-container>
	<el-backtop :bottom="60" :visibility-height="vbacktop"><i class="el-icon-arrow-up"></i></el-backtop>
  </div>
</template>
<script>
	import BNav from '@/components/BNav.vue'
	import BSwiper from '@/components/BSwiper.vue'
  import BStep from '@/components/BStep.vue'
	export default {
	name: 'Index',
	components: {
		BNav,
		BSwiper,
    BStep,
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
      		this.$refs.bstep.swiperDown('#swiper1');
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
