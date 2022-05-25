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
    
  },
  data(){
    return {
        events: [{
          title: '事件内容',  // 事件内容
          start: '2019-05-20 09:00:00', // 事件开始时间
          end: '2019-05-21 12:00:00',   // 事件结束时间
          color: 'rgba(9, 9, 9, 0.2)'       // 事件的显示颜色
        }],
        config: {
          buttonText: { today: "今天", month: "月", week: "周", day: "日" },
          locale: "zh-cn",
          editable: false, //是否允许修改事件
          selectable: false,
          eventLimit: 4, //事件个数
          allDaySlot: false, //是否显示allDay
          defaultView: "month", //显示默认视图
          eventClick: this.eventClick, //点击事件
          dayClick: this.dayClick, //点击日程表上面某一天
       }
     }
   },
   methods:{
    // 点击事件
     eventClick (event, jsEvent, pos) {
       console.log('eventClick', event, jsEvent, pos)
     },
     // 点击当天
     dayClick (day, jsEvent) {
        console.log('dayClick', day, jsEvent)
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
</style>