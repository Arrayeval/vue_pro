<!-- 模态弹窗 -->
<template>
    <div class="self-modal" :class= "showModal === false ? 'hide-modal' : 'show-modal'" @click="cancelClick" v-bind:style="styleObj" @touchmove.stop.prevent>
      <!-- 自定义内容 -->
      <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'selfModal',
  data () {
    return {
      showModal: false
    }
  },
  props: {
    styleObj: { // 用于承接样式类
      type: Object,
      default: function () {
        return {
          position: 'fixed',
          bottom: 0,
          top: 0,
          left: 0,
          width: '100%',
          background: 'rgba(113,111,111,0.5)'
        }
      }
    }
  },
  methods: {
    // 确定
    sureClick () {
      this.showModal = true
      this.bus.$emit('modalIsShow', this.showModal)
      return new Promise(function (resolve) {
        resolve('sure')
      }, function (reject) {
        reject('err')
      })
    },
    // 取消
    cancelClick () {
      this.showModal = false
      this.bus.$emit('modalIsShow', this.showModal)
      return new Promise(function (resolve) {
        resolve('cancel')
      }, function (reject) {
        reject('err')
      })
    }
  }
}
</script>
<style scoped lang='scss'>
.self-modal{
  z-index: 3000;
  &.show-modal{
    opacity: 1;
  }
  &.hide-modal{
    opacity: 0;
    left:-200% !important;
  }
}
</style>
