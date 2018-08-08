<template lang="html">
  <div class="swiper-container">
    <swiper :options="swiperOption" ref="mySwiper">
       <swiper-slide>
         <img :src="logoOne" alt="logo">
       </swiper-slide>
       <swiper-slide>
          <img :src="logoTwo" alt="logo">
        </swiper-slide>
       <swiper-slide>
         <div class="word-wrapper">
           <p>
              学而不思则罔，思而不学则殆
           </p>
           <button type="button" name="button" @click="goIntro">进入学习</button>
         </div>
       </swiper-slide>
       <div class="swiper-pagination" slot="pagination"></div>
     </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name:'ScanView',
  computed: {
     swiper() {
       return this.$refs.mySwiper.swiper
     }
   },
  data(){
    return {
      logoOne:require('../assets/scan/scan-01.png'),
      logoTwo:require('../assets/scan/scan-02.png'),
      swiperOption: {
           direction: 'vertical',
           slidesPerView: 1,
           spaceBetween: 30,
           mousewheel: true,
           pagination: {
             el: '.swiper-pagination',
             clickable: true
           },
           effect:'fade'
       },
      timer:'',
      num:0
    }
  },
  components:{
    swiper,
    swiperSlide
  },
  methods:{
    goIntro () {
      this.$emit('hideScan',false)
      clearInterval(this.timer)
    },
    autoSwiper () {
       this.timer = setInterval(()=>{
          this.num++
          if(this.num >= 3) {
            this.goIntro()
            clearInterval(this.timer)
          } else {
            this.swiper.slideTo(this.num, 1000, false)
          }
       },1500)
    }
  },
  mounted () {
    this.autoSwiper()
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        img{
          width:4rem;
          height:4rem
        }
    }
    .word-wrapper{
      p{
        font-size: 0.4rem;
      }
      button{
        width: 2rem;
        height: 0.6rem;
        margin-top: 0.5rem;
        font-size: 0.3rem;
        border-radius: 0.5rem;
        outline: none;
        border: 0;
        background: #12a9d5;
        -webkit-box-shadow: 1px 1px 1px 1px #aacfda;
        color: #fff;
        box-shadow: 1px 1px 4px 5px #aacfda;
      }
    }
}
</style>
