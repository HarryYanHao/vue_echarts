<template>
  <div class="index">
	<el-container>
		<el-header style = "height:auto;padding:0px">
			<Menu/>
			
		</el-header>
		<el-main>
			<div class='main-content'>
				<Swiper/>
			</div>
			<div id = 'swiper2' class='main-content'>
				<Swiper2/>
			</div>
			<div class='main-content'>
				<Swiper3/>
			</div>
		</el-main>
		<el-footer>{{$t("admin")}}</el-footer>
	</el-container>
  </div>
</template>
<script>
	import Menu from '@/components/Menu.vue'
	import Swiper from '@/components/Swiper.vue'
	import Swiper2 from '@/components/Swiper2.vue'
	import Swiper3 from '@/components/Swiper3.vue'
	export default {
	name: 'Index',
	components: {
		Menu,
		Swiper,
		Swiper2,
		Swiper3
	},
	data(){
		return{
			
		}
		
	},
	methods:{

	}
}
</script>
<style>
	.el-header, .el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
		height: 5vh;
		background-image: linear-gradient(-45deg, #213052,#304883);	
	}
	.el-menu.el-menu--horizontal{
		background-image: linear-gradient(-45deg, #213052,#304883);	
		border-bottom: none;
	}
	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 0px;
		padding:0px;
	}
	.el-container{
		overflow: hidden
	}
	.main-content{
        border-bottom: solid 5px #4CD31F
	}
</style>
