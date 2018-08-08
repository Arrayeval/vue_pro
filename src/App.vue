<template>
  <div id="app">
    <div class="" v-if="showScan">
        <ScanView class="scan-sty" @hideScan="hideScan" />
    </div>
    <div class="" v-if="!showScan">
      <HeaderNav/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import HeaderNav  from '@/components/HeaderNav.vue'
import ScanView from '@/base/ScanView.vue'
import {setInStorage, getFromStorage} from '@/utils/common.js'
// import VConsole from 'VConsole'
if (window.location.href.indexOf('http://localhost') > -1) {
  var VConsole = require('VConsole')
  var vConsole = new VConsole()
} else {
  var VConsole = require('VConsole')
  var vConsole = new VConsole()
}
export default {
  name: 'App',
  data () {
    return {
      showScan: ''
    }
  },
  components: {
    HeaderNav,
    ScanView
  },
  methods:{
    hideScan (tag) {
      this.showScan = tag
      setInStorage('showScan',tag)
    },
    getShoScanFlag () {
      if (getFromStorage('showScan') === '') {
        this.showScan = true
      } else {
        this.showScan = false
      }
    }
  },
  created (){
    this.getShoScanFlag()
  }
}
</script>
<style  lang="scss" src="./scss/reset.scss"></style>
<style  lang="scss" src="./scss/common.scss"></style>
<style  lang='scss'>
.scan-sty{
  position: fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  z-index:3;
}

</style>
