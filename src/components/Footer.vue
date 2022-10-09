<template>
  <div id="footer" style="height: 100%">
    <b-row class="foot_row">
      <b-col cols="7">
        <div  class="copyright" >
          <p>{{$t("copyright")}}</p>
        </div>
      </b-col>
      <b-col>
        <div class = "lang">
          <p>
           <span :class="{active:langActive == 'zh'}" @click="i18nselect('zh')">{{$t('language.zh')}}</span>｜<span :class="{active:langActive == 'en'}" @click="i18nselect('en')">{{$t('language.en')}}</span>
          </p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<style scope>
.copyright,.lang{
  color: rgba(255,255,255,.75);
  display: inline-block;
  height: 100%;
}
.copyright,.lang{
  float: right;
}
.copyright p,.lang p{
  margin-bottom: 0px;
}
.active{
  font-weight: bold;
}
.foot_row{
  height: 100%;
  align-items: center;
}
  
</style>
<script>
export default {
  name: 'Footer',
  props: {

  },
  data(){
    return {
      langActive: this.$i18n.locale
    }
  },
  methods:{
    i18nselect(item){
        this.$i18n.locale = item
        this.langActive = item
    }

  }
}
</script>