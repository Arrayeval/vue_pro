import {setInStorage} from '@/utils/common.js'
export default (to, from, next) => {
  // 入口页 三大分类，高亮标记
  if (to.meta && to.meta.tabNum !== '') {
    setInStorage('tabNum',to.meta.tabNum)
  }
  // list 页面title 的存储
  if(to.meta && to.meta.listTitle !='') {
    setInStorage('listTitle',to.meta.listTitle)
  }
 /*
  1.<code>next()</code> 默认跳转
  2.<code>next(false)</code>保持当前路由不进行跳转
  3.<code>next('路由路径') </code>指定路由跳转
  */
  next()
}
