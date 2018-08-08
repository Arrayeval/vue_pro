<template>
  <div class="main-view">
  		<div class="note-show"  ref="nodeShow">
				<div class="note">
					<h1 class="title">
						vue双向数据绑定
					</h1>
					<div class="article-info">
						<div class="author-info">evel.yi</div>
						<div class="time-info">
							<span>2018-05-17 14:58</span>
						</div>
					</div>
				</div>
				<!--introduction -->
				<div class="pre-des">
					<h2 class="title">引子</h2>
					<div class="des-content">
						在vue中的input输入框使用“v-model”进行数据绑定，另一个元素（例如：span）用“v-bind”进行绑定，改变输入框的值会自动修改span元素的值，我们称之为双向绑定...
					</div>
				</div>
				<!--deep Analysis-->
				<div class="pre-des">
					<h2 class="title">原理剖析</h2>
					<div class="des-content">
						vue中的双向数据数据绑订使用的是Object.defineProperty()的get,set函数的自行出发回调。
						简单的说，我们在定义组件的时候，会定义一个data() {return {....}}对象，在里面定义我们需要使用数据。
						每个对象的属性都拥有一个get(),set()方法，每一次的对象属性的赋值会触发set 方法，每一次的对象属性的赋值会触发set，
						每一次的取值会触发get；如果我们能在set，get方法里面进行数据监控处理，那么就很好实现数据的双向绑定了。
					</div>
				</div>
				<!--code des-->
				<div class="code-justify">
					<h2 class="title">事实说话</h2>
					<textarea name="codeHtml"  v-model="codeHtml">
					</textarea>
					<textarea class="code-wrapper" name="codeJS"  v-model="codeJS">
					</textarea>
					<span class='runBtn' @click='getCodeJS'>在线运行</span>
				</div>
			</div>
			<!--代码实例子-->
			<div class="exercise-code">
				<span class="label-nav">实例结果</span>
				<div v-html="codeHtml"></div>
			</div>
  </div>
</template>
<script>
import {watchScroll}  from '@/utils/common.js'
import {moduleTab} from '@/modules/fontConfig'
export default {
  name: "VueBasic",
  data() {
    return {
			msg: "this is a cloumns for vue basic info",
			codeHtml: `<div class="exercise-code">
						<input type="text" id ="userName" />
						<span id="uName"></span>
					</div>`,
			codeJS: `var obj = {};
						Object.defineProperty(obj, "evel", {
  						get: function() {
  						console.log("get init");
  						},
  						set: function(val) {
  						document.getElementById("uName").innerText = val;
  						}
						});
						document.getElementById("userName")
  						.addEventListener("keyup", function(event) {
  						obj.evel = event.target.value;
						});
						`
    };
  },
  methods: {
    _initFun() {
      var obj = {};
      Object.defineProperty(obj, "evel", {
        get: function() {
          console.log("get init");
        },
        set: function(val) {
          document.getElementById("uName").innerText = val;
        }
      });
      document
        .getElementById("userName")
        .addEventListener("keyup", function(event) {
          obj.evel = event.target.value;
        });
		},
		getCodeJS () {
			eval(this.codeJS)
		}
	},
  created () {
    this.bus.$emit('changeHeader',{title:'vue双向数据绑定', headerLag:'view'})
  },
	mounted () {
		this._initFun()
		// var a = this.$refs.nodeShow
	 //	this.bus.$emit('scrollDOM',a)
  }
};
</script>
<style>
</style>
