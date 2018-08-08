<template>
  <div class="main-view">
  		<div class="note-show"  ref="nodeShow">
				<div class="note">
					<h1 class="title">
						$nextTick怎么用？
					</h1>
					<div class="article-info">
						<div class="author-info">evel.yi</div>
						<div class="time-info">
							<span>2018-06-15 11:14</span>
						</div>
					</div>
				</div>
				<!--introduction -->
				<div class="pre-des">
					<h2 class="title">引子</h2>
					<div class="des-content">
					 在实际项目开发中是不提倡直接操作DOM的，因为会造成页面重绘或者重排，这是一种十分消耗性能的操作，
           但是有时候又必须进行DOM节点的直接操作。
					</div>
				</div>
				<!--deep Analysis-->
				<div class="pre-des">
					<h2 class="title">原理剖析</h2>
					<div class="des-content">
					 浏览器进行页面渲染的时候，会有一个先后顺序的问题，正是这一问题，所以就出现了window.onload=function() {...}、$(function(){....})等
           些许等待执行的方式，然而这些不是这篇文章的重点。在进行dom操作的时候，毫无疑问首先要保证这个dom节点是存在的。在vue框架中组件生命周期这一概念
           无处不在，new Vue(), beforeCreate, created, beforeMounted, mounted, beforeUpdate, updated, beforeDestory, destoryed。$nextTick的作
           用就是保证你每次操作DOM的时候，保证DOM是真实存在的。文档原话是这样说的：
           <span class="emphasize-word">
            虽然 Vue.js 通常鼓励开发人员沿着“数据驱动”的方式思考，
            避免直接接触 DOM，但是有时我们确实要这么做。为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用 Vue.nextTick(callback) 。
            这样回调函数在 DOM 更新完成后就会调用。
           </span>
           那么我们就可将任何与DOM相关的操作放入Vue.nextTick(function(){...})中
					</div>
      	</div>
        <div class="code-justify">
          <h2 class="title">事实说话</h2>
          <div class="des-content">
            最简单的就是在在组件的template中申明一个<code>	&lt;div id="demo"&gt;测试元素&lt;/div&gt;  </code>
            生命周期函数created()中输出 console.log('document.getElementById('demo')')  结果就是null，分析可知组件还没有渲染成功，自然获取不到元素节点，但是
            我们就像在created中使用这个元素节点，那我们就可使用$nextTick(()=>{ console.log('document.getElementById('demo')') })，你就可以获取这个元素节点了。
					</div>
        </div>
    	</div>
      <div id="demo"></div>
  </div>
</template>
<script>
import {watchScroll}  from '@/utils/common.js'
export default {
  name: "VueBasic",
  data() {
    return {}
  },
  created () {
    console.log("created",document.getElementById('demo'))
    this.$nextTick(() => {
      console.log("$nextTick in created",document.getElementById('demo'))
    })
  },
	mounted () {
    console.log("mounted",this.$el.textContent)
  }
};
</script>
<style>
</style>
