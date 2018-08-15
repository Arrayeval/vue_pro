<template>
  <div class="img-upload-wrapper"  @touchmove.stop.prevent>
    <ul class="file-list-wrapper">
      <li class="file-item" v-for="(item, index) in imgFileUrl" :key="index" >
        <img :src="item.imgUrl" alt="fileImg" class="img-show">
        <div class="modal-show">
          <span class="show-image" @click="showImage(item.imgUrl)"></span>
          <span class="delete-image" @click="deleteImage(index)"></span>
        </div>
      </li>
      <li class="file-item default-add-file"  v-show="canUpload && inCount">
        <input id="inputArea" ref="inputArea" class="file-input" type="file" value="" @change="initFileStatus"/>
      </li>
    </ul>
    <self-modal ref="imgModal">
      <img :src="tarImg" alt="showImg" class="img-dis" id="image"/>
    </self-modal>
    <!--初步上上传的img-->
    <canvas id="imgCanvas" height='300' width='300'></canvas>
    <!--截裁之后的img-->
    <canvas id="resultCanvas" height='100' width='200'></canvas>
    <p class="action-btn-group" v-show="showBtnGroup">
      <button class="sure-btn" @click="sureImage" v-show="canView">确定</button>
      <button class="sure-btn" @click="cancelImage"  v-show="canDelete">取消</button>
    </p>
  </div>
</template>
<script>
import SelfModal from '@/base/selfModal/modal'
export default {
  name: 'FileUpload',
  data () {
    return {
      showBtnGroup: false,
      inCount: true,
      imgFileUrl: [],
      tarImg: '',
      img: '',
      theCanvas: '',
      canvasImg: '',
      resultCanvas: '',
      resultImg: '',
      cutData: '',
      resultFile: ''
    }
  },
  props: {
    canCut: { // 用于控制是否支持裁剪功能
      default: false,
      type: Boolean
    },
    canView: {
      default: true, // 支持放大查看
      type: Boolean
    },
    canDelete: { // 支持删除
      default: true,
      type: Boolean
    },
    canUpload: { // 支持上传
      default: true,
      type: Boolean
    },
    fileCounts: { // 支持上传图片数量
      default: 2,
      type: Number
    }
  },
  // watch: {
  //   imgFileUrl: (newVal, oldVal) => {
  //     if (newVal.length >= this.fileCounts) { // 达到上传文件最大数量
  //       this.inCount = false
  //     } else {
  //       this.inCount = true
  //     }
  //   }
  // },
  methods: {
    isContinueUpload () {
      if (this.imgFileUrl && this.imgFileUrl.length >= this.fileCounts) { // 达到上传文件最大数量
        this.inCount = false
        return ''
      } else {
        this.inCount = true
      }
    },
    showImage (tarImg) {
      this.$refs.imgModal.showModal = true
      this.tarImg = tarImg
    },
    deleteImage (index) {
      this.$ref.inputArea.value = '' // 每一次删除文件情况input[type="file"]的value值,解决重复上传相同image不触发change 事件的bug
      this.imgFileUrl.splice(index, 1)
      this.isContinueUpload()
    },
    initFileStatus () {
      var imgFrom = document.getElementById('inputArea')
      let myFrom = new FormData()
      let imageData = imgFrom.files[0]// 获取表单中第一个文件
      myFrom.append('image', imageData)// 向表单中添加一个键值对
      this.getFileData(imageData)
    },
    getFileData (imageData) {
      var reader = new FileReader() // 调用FileReader对象
      reader.readAsDataURL(imageData) // 通过DataURL的方式返回图像
      reader.onload = (e) => {
        this.imgFileUrl.push({imgUrl: e.target.result})
        this.isContinueUpload()
        if (this.canCut) { // canCut: true进行裁剪 默认false
          this.initCanvas(e) // canvas绘图
        }
      }
    },
    initCanvas (e) {
      this.img = new Image()
      this.img.src = e.target.result
      this.img.onload = () => {
        this.theCanvas = document.getElementById('imgCanvas')
        this.canvasImg = this.theCanvas.getContext('2d')
        this.resultCanvas = document.getElementById('resultCanvas')
        this.resultImg = this.resultCanvas.getContext('2d')
        this.theCanvas.width = this.img.width
        this.theCanvas.height = this.img.height
        this.canvasImg.drawImage(this.img, 0, 0)
        // 自定义剪裁图片
        // this.cutData = this.canvasImg.getImageData(100, 100, 200, 200)
        // this.initResultCanvas(this.cutData) // 绘制裁剪之后的image
        this.listenerMoveMouse()
      }
    },
    initResultCanvas (cutData, tarCanvas) {
      if (tarCanvas && Object.keys(tarCanvas).indexOf('putImageData')) {
        tarCanvas.putImageData(cutData, 0, 0)
      }
    },

    // 监听用户的鼠标移动,获取截裁img
    listenerMoveMouse () {
      var flag = false // 记录是否为点击状态的标记
      var W = this.img.width
      var H = this.img.height
      var startX = 0
      var startY = 0
      this.theCanvas.addEventListener('mousedown', (e) => {
        flag = true
        // 改变标记状态，置为点击状态
        startX = e.clientX
        // 获得起始点横坐标
        startY = e.clientY
        // 获得起始点纵坐标
      })
      this.theCanvas.addEventListener('mousemove', (e) => {
        if (flag) {
          this.canvasImg.clearRect(0, 0, W, H)
          this.resultImg.clearRect(0, 0, this.cutData.width, this.cutData.height)
          this.canvasImg.drawImage(this.img, 0, 0)
          this.canvasImg.fillStyle = 'rgba(255, 255, 255, 0.6)' // 设定半透明的白色
          this.canvasImg.fillRect(0, 0, e.clientX, startY)
          this.canvasImg.fillRect(e.clientX, 0, W, e.clientY)
          this.canvasImg.fillRect(startX, e.clientY, W - startX, H - e.clientY)
          this.canvasImg.fillRect(0, startY, startX, H - startY)
          var sourceWidth = 1
          var sourceHeight = 1
          if (e.clientX - startX !== 0) {
            sourceWidth = e.clientX - startX
          }
          if (e.clientY - startY !== 0) {
            sourceHeight = e.clientY - startY
          }
          this.cutData = this.canvasImg.getImageData(startX, startY, sourceWidth, sourceHeight)
          // 绘制裁剪之后的image
          // this.resultImg.putImageData(this.cutData, 0, 0)
          // this.initResultCanvas(this.cutData, this.resultImg)
        }
      })
      this.theCanvas.addEventListener('mouseup', (e) => {
        this.showBtnGroup = true
        // this.resultCanvas.toBlob(blob => {
        //   this.resultFile = blob
        //   console.log(blob)
        // })
        flag = false
      })
    },
    sureImage () {
      this.showBtnGroup = false
      this.canvasImg.clearRect(0, 0, this.img.width, this.img.height)
      this.initResultCanvas(this.cutData, this.canvasImg)
    },
    cancelImage () {
      this.showBtnGroup = false
      this.canvasImg.clearRect(0, 0, this.img.width, this.img.height)
      this.resultImg.clearRect(0, 0, this.cutData.width, this.cutData.height)
      this.canvasImg.drawImage(this.img, 0, 0) // 设定半透明的白色
      this.canvasImg.fillStyle = 'rgba(255, 255, 255, 0.6)'
    }
  },
  components: {
    SelfModal
  }
}
</script>
<style lang="scss" scoped>
@import '~/sass/mixin.scss';
  .file-list-wrapper{
    display:flex;
    flex-wrap: wrap;
    .file-item{
      flex:0 0 1.5rem;
      height:1.5rem;
      margin-right:.2rem;
      margin-bottom:.1rem;
      position: relative;
      .img-show{
        width:100%;
        height:100%;
      }
      .modal-show{
        display: block;
        position: absolute;
        z-index: 1000;
        top: 0;
        left: 0;
        width:100%;
        height:100%;
        background: rgba(146,146,150,0.7);
        display:flex;
        align-items: center;
        justify-content:space-around;
        .show-image, .delete-image{
          display: inline-block;
          width:.4rem;
          height:.4rem;
          background: url("../../assets/icons/empty.svg")  no-repeat ;
        }
        .show-image{
          background: url("../../assets/icons/view.svg")  no-repeat ;
        }
      }
      &.default-add-file{
        background: url("../../assets/icons/img-upload.png")  no-repeat ;
        background-size:contain;
        .file-input{
          width:1.2rem;
          height:1.2rem;
          background: transparent;
          opacity: 0;
        }
      }
    }
  }
  .img-dis{
    width: 5rem;
    height:5rem;
    border-radius: 4px;
    margin: 0 auto;
    @include postion-center;
  }
</style>
