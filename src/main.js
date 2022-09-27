import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import echarts from "echarts"
import ElementUI from "element-ui"
import axios from "axios"
import 'element-ui/lib/theme-chalk/index.css'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import animated from 'animate.css'
import anime from 'animejs'
import './assets/icon/iconfont.css'
import VueParticles from 'vue-particles'
import utils from './utils/utils'
import i18n from './lang'
import './assets/style/global.css'



Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.prototype.$viewer = Viewer
Vue.prototype.$axios.defaults.baseURL = 'http://192.168.5.140:8188/'
Vue.prototype.$anime = anime
Vue.prototype.$blog_host = 'http://127.0.0.1'
Vue.prototype.$blog_port = '8889'
Vue.prototype.$utils = utils

Vue.config.productionTip = false
Vue.config.silent = false



Vue.use(ElementUI);
Vue.use(Viewer);
Vue.use(VueParticles);
Vue.use(animated);



Viewer.setDefaults({
  'inline':false,
  'button':true, //右上角按钮
  "navbar": true, //底部缩略图
  "title": false, //当前图片标题
  "toolbar": true, //底部工具栏
  "tooltip": false, //显示缩放百分比
  "movable": true, //是否可以移动
  "zoomable": true, //是否可以缩放
  "rotatable": true, //是否可旋转
  "scalable": true, //是否可翻转
  "transition": true, //使用 CSS3 过度
  "fullscreen": true, //播放时是否全屏
  "keyboard": true, //是否支持键盘
  "url": "data-source"
  
});



new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')





