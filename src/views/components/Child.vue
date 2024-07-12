<template>
  <div>
    <h2>{{ title }}</h2>
    <input type="text" v-model="message" placeholder="请输入消息">
    <button @click="sendMessage">发送消息</button>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  props: {
    title: {
      type: String,
      default: '子组件'
    },
    
  },
  data() {
    return {
      message: '',
      authorSync:{
        type:String,
        default: 'harry'
    }
    }
  },
  methods: {
    sendMessage() {
        this.authorSync = 'roboter'
      this.$emit('sendMessage', 'son:'+this.message)
      this.$emit('update:author',this.authorSync)
    }
  }
}
</script>