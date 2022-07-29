<template>
  <div class="Echarts">
  	<BNav />
    <div id="main" style="width: 600px;height:400px;"></div>
    <div id="main1" style="width: 600px;height:400px;"></div>
  </div>
</template>
<script>
import BNav from '@/components/BNav.vue'

export default {
  name: 'Echarts',
  components: {
    BNav,
  },
  methods:{
		myEcharts(){
		// 基于准备好的dom，初始化echarts实例
		var myChart = this.$echarts.init(document.getElementById('main'));

		// 指定图表的配置项和数据
		var option = {
			title: {
				text: 'ECharts 入门示例'
			},
			tooltip: {},
			legend: {
				data:['销量']
			},
			xAxis: {
				data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
			},
			yAxis: {},
			series: [{
				name: '销量',
				type: 'bar',
				data: [5, 20, 36, 10, 10, 20]
			}]
		};

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		},
		basicEcharts(){
		// 基于准备好的dom，初始化echarts实例
		var myChart = this.$echarts.init(document.getElementById('main1'));

		// 指定图表的配置项和数据
		var option = {
			title: {
				text: 'ECharts 入门示例-basic'
			},
			tooltip: {},
			xAxis: {
				type: 'category',
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
			},
			yAxis: {
				type: 'value'
			},
			series: [{
				data: [150, 230, 224, 218, 135, 50, 260],
				type: 'line'
				}]
		};

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		}
  },
  mounted() {
	this.myEcharts();
	this.basicEcharts();
  }
}
</script>