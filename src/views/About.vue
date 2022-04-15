<template>
	<div class="about">
		<h1>About Me</h1>
		<Nav></Nav>
		<el-container>
  			<el-header height="15vh">
  				<div>
  					<div class = 'avatar' @click="show = !show" style = "vertical-align: top; display:inline-block;max-width: 100px;line-height: 3vh" :style="avatarStyle">
  				 		<el-avatar  size='large' :src="require('../assets/avatar.jpg')" style = "vertical-align: middle;">
  				 		</el-avatar>
  				 		<div  class="head_introduce" v-show="!show">  
  				 		<i class="iconfont icon-jieshao"></i> <span>这家伙很懒</span> </div>
  				 	</div>

  				 	<transition
　  　　enter-active-class='animate__animated animate__backInUp animate__slow'
　　　　leave-active-class='animate__animated animate__backOutUp'
	   v-on:before-enter="avatarAnimate"
	   v-on:after-leave="avatarAnimate">
  				 		<div v-show="show" style="display:inline-block" class = 'head_info' @click="show = !show">
  				 			<div>
  				 				<i class="iconfont icon-name"></i><span>Harry</span><i class="iconfont icon-nansheng"></i><i class="iconfont icon-xuexiao"></i><span>吉林大学珠海学院</span>
  				 			</div>
  				 			<div>
  				 				<i class="iconfont icon-gongzuojingyan"></i><span>深圳迅策科技有限公司</span>
  				 				<i class="iconfont icon-jinengbiaoqian"></i><span>PHPer Python Go Vue</span>
  				 			</div>
  				 			<div>
  				 				<i class="iconfont icon-weibiaoti-"></i><span>深圳 ShenZhen City</span>
  				 			</div>
  				 		</div>
  				 	</transition>
  				</div> 	
  			</el-header>
  				
  			<el-main>
  				<div class="block2" :style="block2">
  					<transition enter-active-class ='animate__animated animate__fadeInUp animate__slower'>
  						<el-image v-show="main_show" :src="require('../assets/block2.jpeg')" ></el-image>
  					</transition>
  						<div :style="block2_div_style">
  							<h4 style="text-align:left">HELLO</h4>
  							<h5 style="text-align:left">关于项目的介绍</h5>
  							<transition enter-active-class ='animate__animated animate__fadeInRight animate__slower'>
  								<p style = "text-align:left" v-show="main_show">这是一个基于vue前端框架构建的项目，是Harry用来学习前端知识的一个练手的小项目。页面展示的所有内容都是由他本人完成～</p>
  							</transition>
  							<router-link to="/gallery"><el-button type="primary">Go Gallery > </el-button></router-link>
  						</div>    				
  				</div>
  				<div class="block1" :style="block1">
						<transition enter-active-class ='animate__animated animate__fadeInDown animate__slower'>
    						<el-image  v-show="main_show" :src="require('../assets/block1.jpeg')"></el-image>
    					</transition>
    					<div :style="block1_div_style">
    						<h4 style="text-align:left">WHO AM I?</h4>
    						<h5 style="text-align:left">我是Harry 一个默默无闻的PHPer</h5>
    						<transition enter-active-class ='animate__animated animate__fadeInLeft animate__slower'>
    							<p v-show="main_show" style="text-align:left">从事php后端开发，使用主流框架laravel，项目中数据持久化使用mysql以及redis。消息队列使用zmq，使用通信引擎swoole以及nodejs socket通信，web服务器为nginx，熟悉其配置。同时也在学习docker容器化部署以及vue前端</p>
    						</transition>
    						<el-button type="primary" @click = 'contactMe'>Contact Me > </el-button></router-link>

    					</div>
  				</div>
  				<div class = "block3">
  					<div :style='block3_div_style'>
  						<h4 style="text-align:left">MY RESUME</h4>
  						<h5 style="text-align:left">个人总结</h5>
  						<transition enter-active-class ='animate__animated animate__fadeInBottomRight animate__slower'>
  							<p v-show="main_show" style="text-align:left">本人对待工作认真负责，待人真诚，善于沟通、协调。有较强的组织能力与团队精神；上进心强、勤于学习能不断进步自身的能力与综合素质。精通熟练计算机IT软硬件技术，对IT周边科技发展有浓厚兴趣；团队意识及适应能力强，抗压能力好，喜欢面对挑战迎难而上；注重生活条理化，工作规划化。在未来的工作生活中，我将以充沛的精力，刻苦钻研的精神来努力完成既定的工作任务，稳步提升自己的工作能力。</p>
  						</transition>
  						<el-button type="primary" @click = 'learnMore'>Learn More > </el-button></router-link>
  					</div>
  				</div>
  				
  		</el-main>
  			<el-footer id = "a1">
  				<i class="iconfont icon-qq"></i><span>393464654</span>
  				<i class="iconfont icon-weibo"></i><span>阿狗Harry</span>
  				<i class="iconfont icon-shouji"></i><span>17722832841</span>
  				<i class="iconfont icon-youxiang"></i><span>harry.yan@xuncetech.com</span>
  			</el-footer>
		</el-container>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
	export default{
		name: 'About',
		components:{
			Nav
		},
		data() {
			return {
				main_show:false,
				show:false,
				is_mobile:false,
				avatarStyle:{},
        block1:{
          'display': '-webkit-flex',
          'justify-content': 'center'
        },
        block2:{
          'display': '-webkit-flex',
          'justify-content': 'center',
          'flex-direction': 'row-reverse'
        },
				block1_div_style:{
					'width': '40vh',
					'margin':'3vh 0 3vh 10vh',
					'vertical-align':'top',
				},
				block2_div_style:{
					'width': '40vh',
					'margin':'3vh 10vh 3vh 0',
					'vertical-align':'top',
				},
				block3_div_style:{
    				'vertical-align': 'top',
    				'position':'relative',
    				'display':'inline-block',
    				'width':'50%'

				},
			}
		},
		mounted() {
			this.main_show = true
			this.isMobile();
			if(this.is_mobile){
				this.block1 = this.block2  = {}
				this.block1_div_style = this.block2_div_style = this.block3_div_style = {'margin':'1vh 3vh'}
			}
		},
		methods:{
			avatar_show(){

			},
			isMobile(){
				this.is_mobile = navigator.userAgent.match(
/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
				return this.is_mobile
			},
			nextAvatar(){
				this.$nextTick(()=>{
					
				})
			},
			learnMore(){
				console.log(this.$blog_host+':'+this.$blog_port)
				window.open(this.$blog_host+':'+this.$blog_port);
				
			},
			contactMe(){
				document.querySelector('#a1').scrollIntoView() 
			},
			avatarAnimate(){
			this.avatarStyle = {}
			let translate = this.show?-(document.body.clientWidth/2 - 250):0
			console.log(translate)
			if(this.isMobile()){
				if(translate == 0){
					this.avatarStyle = {display:'contents'}	
				}else{
					this.avatarStyle = {display:'none'}
				}	
			}else{
				if(translate <= 0){
					this.$anime({
  					targets: '.avatar',
  					translateX: translate,
  					direction: 'normal',
  					easing: 'easeInOutSine'
					});
					
				}
			}
				
			}
			

		}
		
	}
</script>

<style scoped>


  .el-header{
  	font-size:0.9rem;
  }
  .el-header, .el-footer {
    line-height: 3.5vh;
  }
  .el-main{
  	height: 75vh;
  	font-size:1rem;
  }
  .head_info div i{
  	margin-left: 1rem;
  }
  .block1 div:nth-child(1) {
  	height: 25vh
  }
  .block2 div:nth-child(1){
  	height: 25vh
  }
  .block1 div{
  	display: inline-block;
  }
  .block2 div{
  	display: inline-block;
  }
  .el-footer  span{
  	margin-right: 0.5vh;
  }


  


</style>
