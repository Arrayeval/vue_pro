<template>
  <div class="self-tabs">
    <div class="tab-item" >
      <img :src="backBtn" alt="back" @click="$router.go(-1)">
      {{navTitle}}
    </div>
  </div>
</template>
<script>

import {getFromStorage} from '@/utils/common.js'
export default {
  props: {
    navTitle:{
      type:String,
      default:''
    }
  },
  data() {
    return {
     backBtn:require('../assets/icons/back.svg')
    };
  },
};
</script>
<style lang='scss' scoped>
.self-tabs{
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  .tab-item{
    text-align: center;
    height: 0.8rem;
    line-height: 0.8rem;
    img{
      float:left;
      height:0.5rem;
      width:0.5rem;
      margin-top: .1rem;
    }
  }
}

</style>
