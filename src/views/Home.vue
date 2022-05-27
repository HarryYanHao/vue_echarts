<template>
  <div class="home">
   <!--  <img alt="Vue logo" src="../assets/logo.png"> -->
    <Nav></Nav>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
      <vue-particles
        class = "particles"
        color="#2c3e50"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#2c3e50"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="200"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      
      >
      </vue-particles>
      <div class="test-clock-container">
          <flip-clock />
        </div>
      <div>
      <full-calendar
        :config="config"
        :events="events"
      ></full-calendar>
    </div>
  <el-dialog title="新建日程" :visible.sync="dialogFormVisible" width='30%'>
  <el-form :model="form">
     <div class="block">
    <div>
     <span class="demonstration">日程时间</span>
      <el-date-picker
        v-model="selectDate"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
   </div>
    <div>
     <span class="demonstration">日程简介</span>
      <el-input v-model="scheduleTitle" autocomplete="off" size="medium" maxlength="30"
  placeholder="请输入内容"></el-input>
    </div>
  </div>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="addEvent">确 定</el-button>
  </div>
</el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Nav from '@/components/Nav.vue'
import FlipClock from 'kuan-vue-flip-clock'
import  {FullCalendar}  from 'vue-full-calendar'
import "fullcalendar/dist/fullcalendar.css";

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Nav,
    FlipClock,
    FullCalendar
  },
  mounted(){
    this.is_mobile = this.$utils.isMobile()
    this.init()
  },
  data(){
    return {
        is_mobile:false,
        events: [{
          title: '事件内容',  // 事件内容
          start: '2022-05-25 09:00:00', // 事件开始时间
          end: '2022-05-26 12:00:00',   // 事件结束时间
          color: 'rgba(9, 9, 9, 0.2)'       // 事件的显示颜色
        }],
        config: {
          buttonText: { today: "今天", month: "月", week: "周", day: "日" },
          locale: "zh-cn",
          editable: true, //是否允许修改事件
          selectable: true,
          eventLimit: 4, //事件个数
          allDaySlot: false, //是否显示allDay
          defaultView: "month", //显示默认视图
          eventClick: this.eventClick, //点击事件
          dayClick: this.dayClick, //点击日程表上面某一天
       },
       weather:[],
        dialogFormVisible: false,
        form: {},
        selectDate:[],
        scheduleTitle:'',
        formLabelWidth: '120px'
     }
   },
   methods:{
    // 点击事件
     eventClick (event, jsEvent, pos) {
       console.log('eventClick', event, jsEvent, pos)
     },
     // 点击当天
     dayClick (day, jsEvent) {
        //console.log('dayClick', day, jsEvent)
        let click_date=this.format(day._i)
        if(this.weather.hasOwnProperty(click_date)) {
          let weather_msg = '白天气温：'+this.weather[click_date]['tem_day']+'℃ 夜晚气温：'+this.weather[click_date]['tem_night']+'℃ 天气：'+this.weather[click_date]['wea']+' 风向：'+this.weather[click_date]['win'] + ' 风力：'+this.weather[click_date]['win_speed']
          this.$notify({
          title: click_date,
          message:weather_msg,
          position: 'bottom-right',
          duration:6500,
        });
        }
        if(!this.is_mobile){
          this.dialogFormVisible=true
        }
        let click_date_arr = click_date.split('-');
        this.selectDate = [new Date(click_date_arr[0], click_date_arr[1]-1, click_date_arr[2], 0, 0), new Date(click_date_arr[0], click_date_arr[1]-1, click_date_arr[2], 23, 59)]
        
     },
     addEvent(){
        this.dialogFormVisible = false;

        let event_start_date = this.format2(this.selectDate[0].getTime())
        let event_end_date = this.format2(this.selectDate[1].getTime())
        let event = {
          title: this.scheduleTitle,  // 事件内容
          start: event_start_date, // 事件开始时间
          end: event_end_date,   // 事件结束时间
          color: 'rgba(9, 9, 9, 0.2)'       // 事件的显示颜色
        }
        this.events.push(event)
        this.scheduleTitle = ''
     },
     init (){
      this.$axios.get('weather').then(res => {
        //请求的数据存储在res.data 中
        let weather = res.data.data
        let weather_list = []
        weather.forEach(function(item){
          weather_list[item['date']] = item
        })
        this.weather = weather_list
      })
    },
    add0(m){return m<10?'0'+m:m },
    format(i){
      let time = new Date(i);
      let y = time.getFullYear();
      let m = time.getMonth()+1;
      let d = time.getDate();
      return y+'-'+this.add0(m)+'-'+this.add0(d)
    },
    format2(i){
      let time = new Date(i);
      let y = time.getFullYear();
      let m = time.getMonth()+1;
      let d = time.getDate();
      let H = time.getHours();
      let M = time.getMinutes();
      let S = time.getSeconds();
      return y+'-'+this.add0(m)+'-'+this.add0(d)+' '+this.add0(H)+':'+this.add0(M)+":"+this.add0(S);
    }
  }

}
</script>
<style>
  .test-clock-container {
    font: normal 12px 'Helvetica Neue', Helvetica, sans-serif;
    user-select: none;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
    /*background: radial-gradient(ellipse at center, #969696 0%, #595959 100%);*/
    display: inline-block;
  }
  .particles{
    height: 100%; 
    width: 100%;
    position: absolute;
  }
  .flip{
       height: 10vh !important;
        width: 3vh !important;
        margin: 0.2vh !important;
  }
  .el-input{
    width: 30% !important;
    margin: 1vh !important;
  }
</style>