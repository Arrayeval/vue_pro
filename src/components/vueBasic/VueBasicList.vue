<template>
  <div class="main-container">
    <ul class="list-wrapepr">
      <li v-for="(item,key) in basicList" :key='key' class="wrapper-item" @click="goView(item)">
        <p class="item-title">{{item.title}}</p>
        <p class="item-des">{{item.shortDes}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import {basicList} from '@/modules/vueBasicList'
import {moduleTab} from '@/modules/fontConfig'
import {setInStorage}  from '@/utils/common.js'

export default {
  data () {
    return {
      basicList: []
    }
  },
  methods: {
    goView (item) {
      this.$router.push({name: item.routeName})
      this.bus.$emit('changeHeader',item)
    }
  },
  created () {
    this.basicList =basicList
    this.bus.$emit('changeHeader',moduleTab.vue)
  }
}
</script>
<style lang="scss">
</style>
