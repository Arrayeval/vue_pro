import VueBasicList from '@/components/vueBasic/VueBasicList'
import VModel from '@/components/vueBasic/VModle'
import VNextTick from '@/components/vueBasic/NextTick'
export const vueBasicRoute = [
  {
    path: '/vue_basic',
    name: 'vue_basic',
    component: VueBasicList,
    meta:{
      tabNum: 0
    }
  },
  {
    path: '/v_model', // vue的双向绑定
    name: 'v_model',
    component: VModel,
    meta:{
      tabNum: 0
    }
  },
  {
    path: '/v_next_tick', // nextTick的讲解
    name: 'v_next_tick',
    component: VNextTick,
    meta:{
      tabNum: 0
    }
  }
]
