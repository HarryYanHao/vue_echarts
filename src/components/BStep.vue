<template>
  <b-container fluid>
    <b-row>
      <b-col sm="2" class="left mt-4">
        <div class="block" style="height:100%">
          <el-timeline>
            <span @click="timelineClick(1,'introduce')" :class="{active:active === 1}" :style="{flex:flexIntroduce}">
              <el-timeline-item  type="primary"><span>个人信息</span></el-timeline-item>
            </span>
            <span @click="timelineClick(2,'skill')" :class="{active:active === 2}" :style="{flex:flexSkill}">
              <el-timeline-item ><span>专业技能</span></el-timeline-item>
            </span>
            <span @click="timelineClick(3,'experience')" :class="{active:active === 3}" :style="{flex:flexExperience}">
              <el-timeline-item><span>项目经历</span></el-timeline-item>
            </span>
            <span @click="timelineClick(4,'stage')" :class="{active:active === 4}" :style="{flex:flexStage}">
              <el-timeline-item><span>作品展示</span></el-timeline-item>
            </span>
            <span @click="timelineClick(5,'resume')" :class="{active:active === 5}" :style="{flex:flexResume}">
              <el-timeline-item><span v-html="resumeHtml"></span></el-timeline-item>
            </span>
          </el-timeline>
        </div>
      </b-col>
      <b-col sm="10" class="right mt-4">
        <div class="introduce mb-4" id="introduce">
          <div>
            <el-divider content-position="center">基本信息</el-divider>
            <span>Harry</span>
            <el-divider direction="vertical"></el-divider>
            <span>男</span>
            <el-divider direction="vertical"></el-divider>
            <span>29</span>
            <el-divider direction="vertical"></el-divider>
            <span>深圳</span>
            <el-divider content-position="center"><i class="el-icon-mobile-phone"></i></el-divider>
            <span> (+86) 17722832841 </span>
            <el-divider direction="vertical"></el-divider>
            <span> harry.yan@xuncetech.com </span>
            <el-divider direction="vertical"></el-divider>
            <span> 51800 </span>
            <el-divider content-position="center"><i class="el-icon-school"></i></el-divider>
            <span>吉林大学珠海科技学院</span>
            <el-divider direction="vertical"></el-divider>
            <span>计算机科学与技术</span>
            <el-divider direction="vertical"></el-divider>
            <span>2015级</span>
            <el-divider direction="vertical"></el-divider>
            <span>学士</span>
            <el-divider content-position="center"><i class="el-icon-office-building"></i></el-divider>
            <span>前后端全栈工程师</span>
            <el-divider direction="vertical"></el-divider>
            <span>迅策科技有限公司</span>
            <el-divider direction="vertical"></el-divider>
            <span>6+</span>

          </div>
        </div>
        <div class="skill mb-4" id="skill">
          <el-progress class="mt-2" :text-inside="true" :stroke-width="24" :percentage="pph" color="blueviolet" :format="format"></el-progress>
          <el-progress class="mt-2" :text-inside="true" :stroke-width="24" :percentage="pv" status="success" :format="format"></el-progress>
          <el-progress class="mt-2" :text-inside="true" :stroke-width="24" :percentage="pc" :format="format"></el-progress>
          <el-progress class="mt-2" :text-inside="true" :stroke-width="24" :percentage="pp" status="warning" :format="format"></el-progress>
          <p>
            <i class="iconfont icon-PHPkaifa"></i>
            <i class="iconfont icon-cyuyan"></i>
            <i class="iconfont icon-Pythonyuyan"></i>
            <i class="iconfont icon-Goyuyan"></i>
            <i class="iconfont icon-SQLyuyan"></i>
            <i class="iconfont icon-JSyuyan"></i>
          </p>
          <p>
            <i class="iconfont icon-terminal"></i>
            <i class="iconfont icon-MySQL"></i>
            <i class="iconfont icon-redis"></i>
          </p>
        </div>
        <div class="experience mb-4" id="experience">
          <div class="experience_title">
            <span>迅策资产管理系统</span>
            <el-divider direction="vertical"></el-divider>
            <span class="co">迅策科技</span>
          </div>
          <div class="experience_contents">
            <p>
              1.项目概况：后台系统主要由API模块，脚本任务模块，数据模块组成。整套系统对应不同的用户部署在券商的私有服务器上，数据服务基于Mysql和Redis，我们服务的调用方式都是基于HTTP连接和WebSocket推送。
            </p>
            <p>
              2.参与项目：oms负责资管系统提供数据接口，bms负责提供底层账户信息，以及报表数据，rms提供风控管理，ipb指令管理，uds组负责处理上下行数据 oms通过curl调用和rpc接口与其他系统紧密结合或使用websocket推送行情以及旁路数据。
            </p>
            <p>
              3.我的责任：前期了解项目，参与ipb组随迭代版本参与开发工作，分析版本需求，输出接口文档，中期参与开发编码。主要实现的模块和功能有，websocket消息推送，指令下单，修改功能，，委托管理功能，解析数据，脚本处理数据同步，数据分析功能以及报表。优化代码和数据库结构。后期主要定位线上问题，根据用户数据以及现场环境的现象分析bug原因，解决代码或用户使用问题
            </p>
            <p>
            项目功能从单一逐渐丰富，代码逻辑清晰，接口耗时缩短，并发的异常情况得到控制。线上问题快速定位
            </p>
          </div>
          <div class="experience_title">
            <span>股神对对碰游戏平台</span>
            <el-divider direction="vertical"></el-divider>
            <span class="co">财智叁陆伍科技有限公司</span>
          </div>
          <div class="experience_contents">
            <p>1.项目概况：微交易系统平台，金融娱乐化产品，管理后台</p>
            <p>2.人员分工：php组负责管理后台页面展示，提供管理后台和用户前置的json数据接口，数据交互。
              web组负责微信端用户入口，用户前置的页面的展示，调用php接口或websocket直接连接行情服务。
              c++组负责提供交易服务数据和行情服务数据，php通过rpc接口获得数据，和使用kafka通知c++已修改的数据。
              java组负责出入金与报表数据生成。
            </p>
            <p>3.我的责任：前期了解项目架构，参与架构设计讨论，框架技术的选型。中期参与php组与web组，前置微信相关功能、管理后台页面展示、数据交互、与交易行情服务交互的具体实现的编码，以及所需要使用到的数据库的结构的设计。后期参与bug修复，用户线上问题的处理，以及实现产品变更的需求。
            </p>
          </div>
          <div class="experience_title">
            <span>自适应官网</span>
            <el-divider direction="vertical"></el-divider>
            <span class="co">深圳市南方风尚有限公司</span>
          </div>
          <div class="experience_contents">
            <p>微信微官网搭建，PC站官网搭建。使用smarty模版引擎，提供api或输出页面缓存。服务器端优化方面：页面静态化，开启opcache编译压缩php代码，开启proxy_pass对服务器静态资源进行缓存。前端优化方面：静态资源cdn托管，图片压缩，使用雪碧图，使用懒加载。安全方面：对用户提交的数据进行验证，过滤非法字符，防止sql注入和xss攻击。
            </p>
          </div>

        </div>
        </div> 
        <div class="stage mb-4" id="stage">
          <div id = 'swiper2' class='wow main-content animate__animated animate__fadeInRight'>
        <b-card-group deck>
          <b-card bg-variant="dark" text-variant="white" img-alt="Image" img-top>
             <template v-slot:header>
              <b-img src="../assets/images/project2.png"  style="width:100%"></b-img>
              </template>
          <b-card-body title="迅鹰资产管理平台">
            <b-card-text>资产管理平台，为私募客户服务，主要功能包含：集成下单，风控，综合报表，交易数据查询等功能。头部客户有景林高毅等。是迅策科技早期产品之一</b-card-text>
            </b-card-body>
      <!-- <template v-slot:footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template> -->
          </b-card>
      

          <b-card bg-variant="dark" text-variant="white" img-alt="Image" img-top>
            <template v-slot:header>
              <b-img src="../assets/images/project1.png"  style="width:100%"></b-img>
             </template>
            <b-card-body title="桥银环保">
              <b-card-text>
                上市公司官网搭建，包含前端页面自适应页面以及后台数据管理功能，南方风尚时期完成的作品。
              </b-card-text>
             </b-card-body>
          </b-card>


          <b-card bg-variant="dark" text-variant="white" img-alt="Image" img-top>
            <template v-slot:header>
              <b-img src="../assets/images/project3.jpg"  style="width:100%"></b-img>
            </template>
          <b-card-body title="股神对对碰游戏平台">
              <b-card-text>
                泛金融娱乐化产品，二元期权交易平台，因金融监管政策改变，此类平台被认为是违法违规的金融交易平台
              </b-card-text>
            </b-card-body>
          </b-card>
        </b-card-group>
        </div>
      </div>
      <div class="resume mb-4" id="resume">
        <b-container fluid="lg">
          <b-row class="resume_row">
            <b-col md="4" class="wow main-content animate__animated animate__rotateInUpLeft">
             <el-image :src="require('../assets/images/me.jpg')" class="resume_img"></el-image> 
            </b-col>
            <b-col md="8" class="wow main-content animate__animated animate__lightSpeedInRight">
              本人对待工作认真负责，待人真诚，善于沟通、协调。有较强的组织能力与团队精神；上进心强、勤于学习能不断进步自身的能力与综合素质。精通熟练计算机IT软硬件技术，对IT周边科技发展有浓厚兴趣；团队意识及适应能力强，抗压能力好，喜欢面对挑战迎难而上；注重条理和规划。在未来的工作生活中，我将以充沛的精力，刻苦钻研的精神来努力完成既定的工作任务，稳步提升自己的工作能力。
            </b-col>
          </b-row>
        </b-container>
        <div>
          
        </div>
      </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import wow from 'wowjs'
  export default {
  name: 'BStep',
  components: {

  },
  data(){
    return{
      active:1,
      pp:0,
      pph:0,
      pv:0,
      pc:0,
      resumeHtml:"总结&#12288;&#12288;",
      flexIntroduce:0,
      flexSkill:0,
      flexStage:0,
      flexExperience:0,
      flexResume:0
    }
    
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll,true)
    new wow.WOW().init({//新建实列
      boxClass: 'wow',//class名字
      animateClass: 'animate__animated',//animateclass动画库类名,和当前animate动画库决定
      offset: 0,//到元素距离触发动画（当默认为0）
      mobile: true,//在移动设备上触发动画（默认为true）
      live: true//对异步加载的内容进行操作（默认为true）
    })
    let scrollHeight = document.querySelector('.right').scrollHeight
    //let introduce_offsetTop = document.getElementById('introduce').offsetTop  //元素距离顶部的高度
    let introduce_offsetTop = document.querySelector('#introduce').scrollHeight  //元素距离顶部的高度
    let skill_offsetTop = document.querySelector('#skill').scrollHeight  //元素距离顶部的高度
    let experience_offsetTop = document.querySelector('#experience').scrollHeight
    let stage_offsetTop = document.querySelector('#stage').scrollHeight
    let resume_offsetTop = document.querySelector('#resume').scrollHeight
    this.flexIntroduce = introduce_offsetTop / scrollHeight * 10
    this.flexSkill = skill_offsetTop / scrollHeight * 10
    this.flexExperience = experience_offsetTop / scrollHeight * 10
    this.flexStage = stage_offsetTop / scrollHeight * 10
    this.flexResume = resume_offsetTop / scrollHeight * 10
  },
  computed:{
      setTimeLineStyle() {
        return function(cls){
          this.next
          let introduce_offsetTop = document.querySelector('#'+cls).getBoundingClientRect().top  //元素距离顶部的高度
          console.log(introduce_offsetTop)
        }
        
        
      }
  },
  methods:{
    load(){

    },
    format(percentage){
      if(percentage===70){
        return 'vue'
      }
      if(percentage===20){
        return "c++"
      }
      if(percentage===80){
        return "python"
      }
      if(percentage===100){
        return "php"
      }
    },
    timelineClick(index,id){
      this.active = index
      this.swiperDown('#'+id,-300)
      
    },
    skillInit(){
      setTimeout(() => {
          this.pp=80
          this.pv=70
          this.pc=20
          this.pph=100
      }, 200);
    },
    handleScroll(){
        //  对文档中某一处元素的scroll事件@scroll="handleScroll",则可使用e.target.scrollTop
        //let scrollTop = Math.round(document.documentElement.scrollTop || document.body.scrollTop)
        let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        let clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        //let introduce_offsetTop = document.getElementById('introduce').offsetTop  //元素距离顶部的高度
        let introduce_offsetTop = document.querySelector('#introduce').getBoundingClientRect().top  //元素距离顶部的高度
        let skill_offsetTop = document.querySelector('#skill').getBoundingClientRect().top  //元素距离顶部的高度
        let experience_offsetTop = document.querySelector('#experience').getBoundingClientRect().top
        let stage_offsetTop = document.querySelector('#stage').getBoundingClientRect().top
        let resume_offsetTop = document.querySelector('#resume').getBoundingClientRect().top
        if(resume_offsetTop - clientHeight < 0 ){
          this.active=5
          return
        }
        else if(stage_offsetTop - clientHeight <  0 ){
          this.active = 4
          return

        }
        else if(experience_offsetTop - clientHeight < 0){
          this.active = 3
          return

        }
        else if (skill_offsetTop  - clientHeight < 0) {
            this.active = 2
            this.skillInit()
            return 
        }
        else if (introduce_offsetTop - clientHeight < 0 ){
          this.active = 1
          return
        }
        
      },
      swiperDown(i){
        // document.querySelector('#swiper2').scrollIntoView({
        //  behavior: "smooth"
        // }); 
        this.sh = document.documentElement.scrollTop || document.body.scrollTop
        this.scroll(document.querySelector(i), 100);
      },
    scroll(e, frame) {
        var eTop = e.getBoundingClientRect().top; 
        var eAmt = eTop / frame;  
        var curTime = 0;
        console.log(this.sh)
        while (curTime < frame) {
            curTime += 1;  
              window.setTimeout(this.scrollH, curTime * (200 / frame) , eTop - ((frame - curTime) * eAmt)+this.sh );
          }
        },
    scrollH(height) {
        window.scrollTo({
          top: height
        })
      }
  },
  destroyed(){
    window.removeEventListener('scroll',this.handleScroll,true);
  }
}
</script>
<style scoped>
  .el-timeline{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    height: 100%;
    flex-direction: column;
    align-items: center;
  }
  /deep/.el-timeline-item__content{
    text-align: left;
  }
  /deep/.block span,.el-timeline-item{
    height: 100%;
  }
  .iconfont{
    font-size:24px;
    margin: 1rem;
    color: #333;
  }
  .active{
    display: block
  }
  /deep/.active .el-timeline-item__node{
    background-color:rgb(33, 48, 82);
  }
  /deep/.active .el-timeline-item__content span{
    color: #409EFF;
    font-family: bold;
    font-weight: 800;
  }

  #swiper2 .card-deck{
    padding: 0.5rem
  }
  .row{
    background: #dfe4ea
  }
  .el-divider,.el-divider__text{
    background-color: #70a1ff;
    color:white;
  }
  .el-divider--horizontal{
    width: 50%;
    margin: 24px auto;
  }
  .experience_title{
    text-align: left;
  }
  .experience_contents p,.resume div{
    font-weight: initial;
    font-family: sans-serif;
    color: #747d8c;
    font-size: 14px;
    text-align: left;
  }
  .resume div{
    text-align: left;
    color: #2f3542;
    font-weight:500;
    font-family: 'dream';
    font-size: 1.2rem;
  }
  .right{
    display: flex;
    flex-direction: column;
  }
  /deep/.el-timeline-item__content span:first-child{
    white-space: pre;
  }
    @media (min-width: 576px) and (max-width: 768px) {
    .card-deck{
      display: block;
    }
    .card-deck .card {
      margin-bottom: 15px;
    }
  }
  .resume_row{
    align-items: center;
  }
  .resume_img{
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;
    border-bottom-left-radius: 3rem;
    border-bottom-right-radius: 3rem
  }
  .co{
    color:#5352ed;
    font-size: 0.9rem
  }
  
  

</style>
