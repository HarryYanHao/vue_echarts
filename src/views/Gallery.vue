<template>
  <div class="index" id="index">
	<BNav />
    <h1>Harry's Gallery</h1>
    <Nav></Nav>
    <el-container>
		<el-header>
			<span>
			<el-input v-model="input" placeholder="请输入内容" style = "width:50%;margin-right:5px" clearable @keyup.enter.native="search"></el-input>
			<el-button type="primary" icon="el-icon-search" v-on:click="search">搜索</el-button>
			</span>
		</el-header>
		<el-main>
			<div class="infinite-list-wrapper" style="height:100vh;overflow:scroll" infinite-scroll-immediate="false">
			<el-backtop target=".infinite-list-wrapper" ></el-backtop>
			<ul class="list" v-infinite-scroll="load" style="padding-left: 0px">
			<!-- <el-image ref="preview" v-for="(url,index) in urls" :key="index" :src="url" :preview-src-list="full_urls" lazy @click="onPreview(index)" :on-close="closeViewer"></el-image> -->
			<viewer :images="imgs">
            <!-- <img v-for="(item,index) in imgs" :src="require('../assets/img'+item.file)" :key="index" :data-source="require('../assets/img' + item.full_file)"> -->
            <img v-for="(item,index) in imgs" :src="item.url" :key="index" :data-source="item.full_url">
        	</viewer>
			</ul>
		</div>
		</el-main>
	</el-container>
	</div>
	
</template>

<script>
import Nav from '@/components/Nav.vue'
import BNav from '@/components/BNav.vue'
export default {
	components:{
		Nav,
		BNav
	},
	data() {
	return {
		input: '',
		count: 0,
		imgs: [],
		data: '',
		}
	},
	methods:{
		search(){
			console.log(this.input)
			let keyword = this.input
			this.$axios.get('search_key',{
				params: {
					keyword: keyword
				}
			}).then(res => {
				//请求的数据存储在res.data 中
				var rs = res.data.data
				var imgs = []
				rs.forEach(function(item){
					imgs.push(item)
				
				})
				this.data = rs
				this.imgs = imgs
			})
		},
		load () {
        this.count += 2
		},
		init (){
			console.log(this.$axios)
			this.$axios.get('list').then(res => {
				//请求的数据存储在res.data 中
				var rs = res.data.data
				var imgs = []
				rs.forEach(function(item){
					imgs.push(item)
				
				})
				this.data = rs
				this.imgs = imgs
				
			})
		},
		onPreview (){
			console.log()
		}
		


		
	},
	mounted(index){
		this.init(index)		
	}
}
</script>
