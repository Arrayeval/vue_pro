<template lang="html">
  <div class="main-container">
    <ul class="list-wrapepr">
      <li v-for="(item,key) in basicList" :key='key' class="wrapper-item" @click="goView(item.routeName)">
        <p class="item-title">{{item.title}}</p>
        <p class="item-des">{{item.shortDes}}</p>
        <!-- <p class="item-link" >
          <span>view</span>
        </p> -->
        <!-- <router-link to={{item.routeName}} >goView</router-link> -->
      </li>
    </ul>
  </div>
</template>

<script>
import {basicList} from '@/modules/jsBasicList.js'
export default {
  name: 'jsBasicList',
  data () {
    return {
      basicList: basicList
    }
  },
  methods: {
    goView (route) {
      this.$router.push({name: route})
    }
  }
}
</script>
<style lang="css">
</style>
