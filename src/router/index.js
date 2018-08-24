import Vue from 'vue'
import Router from 'vue-router'
import routeGuard from '@/router/routeGuard.js'

import {vueBasicRoute} from '@/router/vueBasic.js'
import {jsBasicRoute} from '@/router/jsBasic.js'
import {SelfComponentRoute} from '@/router/selfComponent.js'
import {selfDirective} from '@/router/selfDirective.js'

import FrameworkCom from '@/components/FrameworkCom'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    { // 默认页
      path: '*',
      meta:{
        tabNum: 0
      },
      redirect: to => {
        return '/'
      }
    },
    {
      path: '/',
      name:'/',
      meta:{
        tabNum: 0
      },
      component: FrameworkCom,
    },
    ...vueBasicRoute,
    ...jsBasicRoute,
    ...SelfComponentRoute,
    ...selfDirective
  ]
})

router.beforeEach(routeGuard)
export default router
