<template>
  <div class="main-view">
  		<div class="note-show"  ref="nodeShow">
				<div class="note">
					<h1 class="title">
						详细说说event对象
					</h1>
					<div class="article-info">
						<div class="author-info">evel.yi</div>
						<div class="time-info">
							<span>2018-06-14 14:50</span>
						</div>
					</div>
				</div>
				<!--introduction -->
				<div class="pre-des">
					<h2 class="title">引子</h2>
					<div class="des-content">
						在事件绑定的时候，经常需要使用到事件的event对象进行操作，例如事件代理（将事件绑定到父元素，每个子元素可以加上自定义属性data-mark='...',进行区分，
            避免子元素重复的绑定同一事件，原理就是利用事件冒泡），或者获取元素进行样式操作等等...
					</div>
				</div>
				<!--deep Analysis-->
				<div class="pre-des">
					<h2 class="title">事实分析</h2>
					<div class="des-content">
					  使用事件触发时（click，touch），我们会经常的拜访event.target。但是有的时候我们想
            不论我的事件触发对象是子元素，还是父元素，我们都希望获得是父元素【事件注册的那个对象】，
            这个时候我们就需要使用到event.currentTarget
            <br>
            <span class="emphasize-word">target:</span>   代表当前目标对象（事件作用的对象） <br>
            <span class="emphasize-word">currentTarget:</span> 代表注册监听器的对象 <br>
					</div>
				</div>
				<!--code des-->
				<div class="code-justify">
					<h2 class="title">精华代码展示</h2>
					<div>
						<code  class="code-html">
							&lt;ul  @click ='runCode'&gt;<br>
								&lt;li&gt;第一个子元素	&lt;/li&gt;<br>
								&lt;li&gt;第一个子元素	&lt;/li&gt;<br>
								&lt;li&gt;第一个子元素	&lt;/li&gt;<br>
							&lt;/ul&gt;
						</code>
					</div>
					<div >
						<code class="code-js">
							 runCode (event) {
									console.log('target',event.target) <br>
									console.log('currentTarget',
									event.currentTarget) <br>
							 }
						</code>
					</div>
				</div>
			</div>
  </div>
</template>
<script>
export default {
  name: 'EventDes',
  data () {
    return {
    }
  },
  methods: {
    runCode (event) {
			console.log('event.target', event.target)
			console.log('event.currentTarget', event.currentTarget)
		}
  }
}
</script>
<style lang="scss" scoped>
</style>
