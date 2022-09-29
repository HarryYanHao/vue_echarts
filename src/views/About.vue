<template>
	<div class="about">
    <BNav />
		<h1>About Me</h1>
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
  				<div class="block2">
           <b-card  class="mb-3">
            <b-row style="flex-direction: row-reverse;">
              <b-col md="4">
                <el-image  v-show="main_show" :src="require('../assets/block2.jpeg')"></el-image>
              </b-col>
              <b-col>
                <b-card-text>
                <h4>HELLO</h4>
                <h5>关于项目的介绍</h5>
                <transition enter-active-class ='animate__animated animate__fadeInRight animate__slower'>
                  <p v-show="main_show">这是一个基于vue前端框架构建的项目，是Harry用来学习前端知识的一个练手的小项目。页面展示的所有内容都是由他本人完成～</p>
                </transition>
                <router-link to="/gallery"><el-button type="primary">Go Gallery > </el-button></router-link>
                </b-card-text>
              </b-col>
            </b-row>
          </b-card>
          </div>
  				<div class="block1">
           <b-card  class="mb-3">
            <b-row>
              <b-col md="4">
                <el-image  v-show="main_show" :src="require('../assets/block1.jpeg')"></el-image>
              </b-col>
              <b-col>
                <b-card-text>
               <h4>WHO AM I?</h4>
                <h5>我是Harry 一个默默无闻的PHPer</h5>
                <div class ='wow animate__animated animate__fadeInLeft animate__slower'>
                  <p v-show="main_show">从事php后端开发，使用主流框架laravel，项目中数据持久化使用mysql以及redis。消息队列使用zmq，使用通信引擎swoole以及nodejs socket通信，web服务器为nginx，熟悉其配置。同时也在学习docker容器化部署以及vue前端</p>
                </div>
                <el-button type="primary" @click = 'contactMe'>Contact Me > </el-button></router-link>
                </b-card-text>
              </b-col>
            </b-row>
          </b-card>
          </div>
  				<div class = "block3">
  					<div :style='block3_div_style'>
  						<h4 style="text-align:left">CONTACT ME</h4>
  						<h5 style="text-align:left">联系我</h5>
  						<div class ='wow animate__animated animate__fadeInBottomRight animate__slower'>
  							<p v-show="main_show" style="text-align:left"></p>
  						</div>
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
import BNav from '@/components/BNav.vue'
import wow from "wowjs";
	export default{
		name: 'About',
		components:{
			Nav,
      BNav
		},
		data() {
			return {
				main_show:false,
				show:false,
				is_mobile:false,
				avatarStyle:{},
        block3_div_style:{}

			}
		},
		mounted() {
			this.main_show = true
			this.is_mobile = this.$utils.isMobile();
			if(this.is_mobile){
				 this.block3_div_style = {'margin':'1vh 3vh'}
			}
      new wow.WOW().init({//新建实列
      boxClass: 'wow',//class名字
      animateClass: 'animate__animated',//animateclass动画库类名,和当前animate动画库决定
      offset: 0,//到元素距离触发动画（当默认为0）
      mobile: true,//在移动设备上触发动画（默认为true）
      live: true//对异步加载的内容进行操作（默认为true）
    })
		},
		methods:{
			avatar_show(){

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
			if(this.is_mobile){
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
  .el-footer{
    background-image: linear-gradient(-45deg, #213052,#304883);
  }
  .el-main{
  	height: 75vh;
  	font-size:1rem;
    height: 100%;
    overscroll-behavior: none;
  }
  .head_info div i{
  	margin-left: 1rem;
  }

  .el-footer  span{
  	margin-right: 0.5vh;
  }
  .col{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .about{
    background-color: #CCC;
  }
  .block2{
    box-shadow: 10px -10px 5px #888888;
  }
  .block1{
    box-shadow: -10px 10px 5px #888888;
  }
  .card-text p,.block3 p{
    font-family: sans-serif;
    color: #747d8c;
    font-size: 14px;
    text-align: left;
  }
  .card{
    background-color: #E9EEF3;
  }
  
  
  


  


</style>
