<template>
  <div>
    <el-header id='head' style = "height:auto;padding:0px">
			<BNav />
		</el-header>
   
    <el-container>
      <h1>{{$t('rss')}}</h1>
      <el-main>
        <el-skeleton :rows="10" animated :style="{height:clientHeight}" v-if="loading"/>
        <el-collapse  accordion  v-if="!loading">
          <el-collapse-item v-for="(item,index) in items" :key="item.link" :title="sliceTitle(item.title)" :name="index">
            <div v-html="item.content "></div>
          </el-collapse-item>
        </el-collapse>
      </el-main>
      <el-footer><Footer /></el-footer>
    </el-container>
  </div>
</template>

<script>
import BNav from '@/components/BNav.vue'
import Footer from '@/components/Footer.vue'
import Parser from 'rss-parser';


export default {
  components: {
		BNav,
    Footer
	},
  mounted() {
    this.is_mobile = this.$utils.isMobile()
    let clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.clientHeight = clientHeight - document.querySelector('#head').offsetHeight + 'px'
  },
  methods:{
    sliceTitle(title){
      let maxLength = 25
      console.log(title.length);
      if (this.$utils.isMobile() && title.length > maxLength) {
      title = title.substr(0, maxLength) + '...';
    }
      return title
    }
  },

  data() {
    return {
      items: [],
      is_mobile: false,
      loading: true,
      clientHeight: 0,
      error:"",
    };
  },  async created() {
    const parser = new Parser();
    const feedurl = 'http://rsshub.harrystar.top/36kr/hot-list/24'; // 替换为你的RSS源URL
    const feed2url = 'http://rsshub.harrystar.top/huxiu/article'
    this.$axios.get(feedurl).then(res => {
         // 使用 rss-parser 解析获取到的XML内容 
        parser.parseString(res.data)
      .then(feed => {
        // 处理解析后的 RSS 提要对象
        this.items = feed.items
      })
      .catch(error => {
        console.error('Error parsing RSS feed:', error);
      });  
        
      }).catch(error => {
        console.error('Error fetching RSS feed:', error);
      });


      this.$axios.get(feed2url).then(res => {
         // 使用 rss-parser 解析获取到的XML内容 
        parser.parseString(res.data)
      .then(feed => {
        // 处理解析后的 RSS 提要对象
        this.items = this.items.concat(feed.items)
        this.loading = false;
      })
      .catch(error => {
        console.error('Error parsing RSS feed:', error);
      });  
        
      }).catch(error => {
        console.error('Error fetching RSS feed:', error);
      });
      
      
  }
}
</script>
<style>
div{
  padding-bottom: 0 !important;
}
video,img{
  width: 100%;
}

ul{
  list-style:none;
}
a{
  color:red;
}

</style>