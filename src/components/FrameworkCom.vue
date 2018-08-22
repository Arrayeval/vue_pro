<template>
  <div class="main-container">
    <ul class="f-wrappper">
      <li class="f-item" v-for="(item,index) in frameworksConfig" :key="index" @click="goModule(item.route,item.mark)">
        <div class="item-info">
            <p class="shor-des">{{item.shortDes}}</p>
            <p class="info">
              <span class='time'>{{item.time}}</span>
              <span class="name">{{item.author}}</span>
            </p>
        </div>
        <div class="logo-wrapper">
          <img :src="item.logoImage" alt="logo">
        </div>
         <!-- <img src="../assets/logo.png" alt="logo"> -->
      </li>
    </ul>
  </div>
</template>
<script>
import {frameworksConfig, moduleTab} from '@/modules/fontConfig'
export default {
  name: 'FramworkCom',
  data () {
    return {
      frameworksConfig: []
    }
  },
  methods:{
    goModule (route,mark) {
      this.$router.push({name: route})
    }
  },
  created () {
    console.log('framework created')
    this.frameworksConfig = frameworksConfig
    this.bus.$emit('changeHeader','')
/*
    setTimeout(() => {
         this.bus.$emit('changeHeader','')
    }, 30)
    */
  }
}
</script>
<style lang='scss' scoped>
@import '~/scss/mixin.scss';
.main-container{
    padding: 1.2rem 0.3rem 0;
    // @include postion-center;
    // @include bg-image('../../../assets/frameIcon/yff_logo');
    .f-wrappper{
      margin-top: .2rem;
      .f-item{
        display: flex;
        align-items: center;
        height:1.6rem;
        padding: 0 .3rem;
        border-radius: 3px;
        box-shadow: 1px 1px 9px 5px rgba(0, 0, 0, 0.05);
        margin-bottom:0.4rem;
        .item-info{
          padding-right: .3rem;
          flex:1;
          .shor-des{
            margin:.1rem 0;
            font-size: 0.26rem;
            line-height: 0.5rem;
            color: #999;
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            line-height: 0.38rem;
            max-height: 0.76rem;
            -webkit-box-sizing: content-box;
            box-sizing: content-box;
            white-space: normal;
          }
          .info{
            font-size: 0.24rem;
            color: #b1b1b1;
            .name{
            }
          }
        }
        .logo-wrapper{
          flex: 0 0 .8rem;
          img{
            width:  px2rem(40);
            height: px2vwh(40,"h");
            // width:.8rem;
            // height:.8rem;
          }
        }
      }
    }
  }
</style>
