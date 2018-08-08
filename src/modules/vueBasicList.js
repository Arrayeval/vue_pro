
// 主要用于配置vueBasic的列表数据[包括名字，路由]
export const basicList = [
  {
    routeName: 'v_model',
    headerLag:'view',
    title: 'vue的双向绑定实例',
    shortDes: '实例讲解vue的双向绑定原理，使用对象的get，set方法'
  },
  {
    routeName: 'v_text',
    headerLag:'view',
    title: '区分v-text/v-html',
    shortDes: 'v-text，v-html会把内容进行编译展示到绑定的元素中，不做任何解析，只是做为纯文本进行解析，v-html所对应的内容中可以生成元素，但是此元素绑定事件是不会被触发的'
  },
  {
    routeName: 'v_next_tick',
    headerLag:'view',
    title: '请问vue框架中$nextTick怎么用？？',
    shortDes: '详细说明vue框架中$nextTick的作用，以及正确使用方式，使用场景。'
  }
]
