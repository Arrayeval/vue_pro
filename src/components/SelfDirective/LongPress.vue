<!--长按指令-->
<template>
    <div class="long-press-wrapper">
        <button v-longpress="incrementPlusTen" @click="incrementPlusOne">{{value}}</button>
    </div>
</template>
<script>
import {longPress} from '@/directives/directives'
export default {
  name: 'LongPress',
  data () {
    return {
      value: 10
    }
  },
  methods: {
    // 增加1
    incrementPlusOne () {
      this.value++
    },
    // 增加10
    incrementPlusTen () {
      this.value += 10
    }
  },
  directives: {
    longpress: longPress
  }
}
</script>
<style lang="scss" scoped>
  .long-press-wrapper{
    padding-top:200px;
  }
</style>

