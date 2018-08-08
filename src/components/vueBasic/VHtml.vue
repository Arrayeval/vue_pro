<template>
  <div class="self-container">
    这是个v-html 实例
    <p v-html="mes" @click='getPhone'></p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      mes: `这是一个测试用例，主要是讲解v-html的使用<span class='link-word'>联系我们</span>`
    }
  },
  methods: {
    getPhone (e) {
      if(e.target.nodeName === 'SPAN'){
        alert("you can get node span")
      }
    }
  }
}
</script>

<style lang="css">
.link-word{
  color:red;
}
</style>
