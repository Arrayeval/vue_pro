<template>
  <div class="main-wrapper" :class="{'hide-elem':hideTabs}"  ref='tabHeader'>
    <!--intro nav-->
    <IntroTabs @clickTab = "clickTarTab"  v-if="!headerLag"/>
    <!--列表页haader-->
    <ListHeader  :navTitle="title" v-if="headerLag === 'list'"/>
    <!--详情页headere-->
    <ViewHeader :navTitle="title" v-if="headerLag === 'view'"/>
  </div>
</template>
<script>
import IntroTabs from '@/base/IntroTabs.vue'
import ListHeader from '@/base/ListHeader.vue'
import ViewHeader from '@/base/ViewHeader.vue'
import {watchScroll,getFromStorage,setInStorage}  from '@/utils/common.js'
export default {
  name: 'HeaderNav',
  data () {
    return {
      scrollElment: '',
      hideTabs: false,
      documentFontSize:'',
      tabHeaderHeight: 0,
      headerLag: getFromStorage('headerLag') || '',
      title: getFromStorage('title') || '',
      tabHeaderHeight: 0
    }
  },
  components: {
    IntroTabs,
    ListHeader,
    ViewHeader
  },
  methods: {
    /*初始化[滚动监听的回调函数]*/
    init () {
      this.hideTabsFn()
    },

    /*控制tabs的显示隐藏*/
    hideTabsFn () {
      var scollTop = Number(document.body.scrollTop || document.documentElement.scrollTop)
      if (scollTop > 0.6 * this.documentFontSize ) {
        this.hideTabs = true
      } else {
        this.hideTabs = false
      }
    },

    /*点击tab高亮*/
    clickTarTab (route) {
      this.$router.push({name:route})
    },

    //获取fontSize
    getFontSize () {
     var _pxNum = document.documentElement.style.fontSize || document.body.style.fontSize
     var _px = _pxNum.indexOf('px')
     this.documentFontSize = Number(_pxNum.substr(0,_px))
   },

    // $on changeHeader
    watchChangeHeader () {
      this.bus.$on('changeHeader', info => {
        if (info) {
          setInStorage('headerLag',info.headerLag)
          this.headerLag = info.headerLag
          setInStorage('title',info.title)
          this.title = info.title
        } else {
           this.headerLag =''
           setInStorage('headerLag','')
        }
      })
    }
  },
  created () {
   this.watchChangeHeader()
  },
  mounted () {
    this.getFontSize()
    /*监听滚动事件*/
    watchScroll(this.init)
  }}
</script>
<style scoped lang='scss'>
.main-wrapper{
  padding:0 .3rem;
  position: fixed;
  top:0;
  background: #fff;
  width:100%;
  box-sizing: border-box;
  border-bottom: 1px solid #7bcce4;
  box-shadow: 1px 1px 1px 1px #aacfda;
  &.hide-elem{
    opacity: 0;
    top:100;
    transition: all .3 linear;
  }
}
</style>
