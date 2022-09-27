<template>
  <b-container fluid>
    <b-row>
      <b-col sm="2" class="mt-4">
        <div class="block" style="height:100%">
          <el-timeline>
            <span @click="timelineClick(1)">
              <el-timeline-item  type="primary" :class="{active:active === 1}">基本信息</el-timeline-item>
            </span>
            <span @click="timelineClick(2)">
              <el-timeline-item :class="{active:active === 2}">专业技能</el-timeline-item>
            </span>
            <span @click="timelineClick(3)" :class="{active:active === 3}">
              <el-timeline-item>个人经历</el-timeline-item>
            </span>
            <span @click="timelineClick(4)" :class="{active:active === 4}">
              <el-timeline-item>作品展示</el-timeline-item>
            </span>
          </el-timeline>
        </div>
      </b-col>
      <b-col sm="10">
        <div class="introduce" :class="{active:active === 1}">
          <p>基本信息</p>
        </div>
        <div class="skill" :class="{active:active === 2}" >
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
        <div class="introduce" :class="{active:active === 3}">
          <p>个人经历</p>
        </div> 
        <div class="experience" :class="{active:active === 4}">
          <div id = 'swiper2' class='main-content animate__animated animate__fadeInRight'>
        <b-card-group deck>
          <b-card bg-variant="dark" text-variant="white" img-alt="Image" img-top>
             <template v-slot:header>
              <b-img src="../assets/images/banner1.jpg" rounded="circle" style="width:100%"></b-img>
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
              <b-img src="../assets/images/banner2.jpg" rounded="circle" style="width:100%"></b-img>
             </template>
            <b-card-body title="Title">
              <b-card-text>
                This card has supporting text below as a natural lead-in to additional content.
              </b-card-text>
             </b-card-body>
          </b-card>


          <b-card bg-variant="dark" text-variant="white" img-alt="Image" img-top>
            <template v-slot:header>
              <b-img src="../assets/images/banner3.png" rounded="circle" style="width:100%"></b-img>
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
      </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
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
      pc:0
    }
    
  },
  mounted(){
  
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
    timelineClick(i){
      this.active = i
      if(i==2){
        this.skillInit()
      }else{
        this.pp=this.pv=this.pc=this.pph=0
      }
      
    },
    skillInit(){
      setTimeout(() => {
          this.pp=80
          this.pv=70
          this.pc=20
          this.pph=100
      }, 200);
    }
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
  }
  /deep/.el-timeline-item__content{
    text-align: left;
  }
  /deep/.block span,.el-timeline-item{
    height: 100%;
  }
  .iconfont{
    font-size:24px;
    margin: 1rem
  }
  .introduce , .skill, .experience{
    display: none;
  }
  .active{
    display: block
  }
  /deep/.active .el-timeline-item__node{
    background-color:rgb(33, 48, 82);
  }
  /deep/.active .el-timeline-item__content{
    color: #2f3542;
    font-family: bold;
    font-weight: 800;
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

  .card-deck {
    margin-right: 0;
    margin-left: 0;
  }
  .row{
    background: #dfe4ea
  }
  

</style>
