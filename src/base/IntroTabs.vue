<template>
  <div class="self-tabs" @click="handleClick">
    <div class="tab-item" v-for="(item,index) in tabList"
       :key="index"
       :data-index="index"
       :data-route="item.route"
       :class="{'activeSty':activeName == index}">
      {{item.tabName}}
    </div>
  </div>
</template>
<script>
import {tabList} from '@/modules/fontConfig.js'
import {getFromStorage} from '@/utils/common.js'
export default {
  data() {
    return {
      activeName: getFromStorage('tabNum') || 0,
      tabList: tabList
    };
  },
  methods: {
    handleClick(event) {
      var _route = event.target.dataset.route
      if(_route) {
        this.$router.push({name: _route})
      }
      var _index =  event.target.dataset.index
      this.activeName = _index
    }
  }
};
</script>
<style lang='scss' scoped>
  .self-tabs{
    display: flex;
    width:100%;
    justify-content:space-between;
    text-align: center;
    height: 0.8rem;
    line-height: 0.8rem;
    padding-top: .2rem;
    .tab-item{
      flex:1;
      // span{
      //   height: .5rem;
      //   line-height: 0.4rem;
      //   display: inline-block;
      // }
      &.activeSty{
        color:#55a5f6
      }
    }
  }
</style>
