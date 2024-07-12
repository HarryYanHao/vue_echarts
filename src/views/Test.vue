<template>
  <div>
    <BNav></BNav>
    <h1>父组件</h1>
    <child-component :title="title" :author.sync="authorSync" @sendMessage="receiveMessage"></child-component>
    <p>子组件发送的消息：{{ message }}</p>
    <h3>作者：{{ computeAuthor }}</h3>
  </div>
</template>

<script>
import ChildComponent from './components/Child.vue'
import BNav from './../components/BNav.vue'

export default {
  name: 'ParentComponent',
  components: {
    ChildComponent: ChildComponent,
    BNav
  },
  data() {
    return {
      title: '这是子组件标题',
      computeAuthor:'Harry',
      message: '',
    }
  },
  methods: {
    receiveMessage(msg) {
      this.message = msg
    }
  },
  computed: {
    authorSync: {
      get() {
        console.log(this.computeAuthor)
      },
      set(val) {
        this.computeAuthor = val
      }
    }
  }
}
</script>