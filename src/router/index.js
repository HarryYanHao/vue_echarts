import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{title:'Home',keepAlive:false}
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Calendar.vue'),
    meta:{title:'Calendar',keepAlive:true}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{title:'About Me',keepAlive:false}
  },
  {
    path: '/echarts',
    name: 'ECharts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ECharts.vue'),
    meta:{title:'ECharts',keepAlive:false}
  },
  {
    path: '/gallery',
    name: 'Gallery',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Gallery.vue'),
    meta:{title:"Harry's Gallery",keepAlive:false}
  },
  {
    path: '/test',
    name: 'test',
    component: ()=> import(/* webpackChunkName: "about" */ '../views/Test.vue'),
    meta:{title:'Home',keepAlive:true}
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.meta.title)
  {
    document.title = to.meta.title
  }
  next()
})

export default router
