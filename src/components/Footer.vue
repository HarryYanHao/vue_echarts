<template>
  <div id="footer" style="height: 100%">
    <div  class="copyright" >
      <p>{{$t("copyright")}}</p>
    </div>
    <div class = "lang">
      <p>
      <span>{{$t('language.zh')}}</span>｜<span>{{$t('language.en')}}</span>
    </p>
    </div>

    
  </div>
</template>
<style scope>
.copyright,.lang{
  color: rgba(255,255,255,.75);
  display: inline-block;
  height: 100%;
}
.lang{
  float: right;
}
  
</style>
<script>
export default {
  name: 'Footer',
  props: {

  },
  methods:{
      

  }
}
</script>