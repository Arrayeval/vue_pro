// tabs配置
export const tabList = [
 {tabID:'vue', tabName: '框架引入', route: '/'},
 {tabID:'angularJS', tabName: 'js基础', route: 'js_basic'},
 {tabID:'react',tabName: 'css基础 ', route: 'css_basic'}
]

export const moduleTab = {
  vue:{
    title:'关于vue2.0的记录',
    headerID:'vue',
    headerLag:'list'
  },
  angularJS:{
    title:"关于angularJS的记录",
    headerID:"angualrJS",
    headerLag:'list'
  },
  react:{
    title:"关于react的记录",
    headerID:"react",
    headerLag:'list'
  }
}
// 概括页config
export const frameworksConfig = [
   {
    route: 'vue_basic',
    mark:'vue',
    logoImage: require('../assets/vue.png'),
    shortDes: '此模块主要记录vue2.0框架在项目开发中遇到的一些心得，或者记录一些难点',
    author: 'evel.yi',
    time: '2018-6-15'
  },
  {
    route: 'angular_list',
    mark:'angualrJS',
    logoImage: require('../assets/angularJS.jpg'),
    shortDes: '此模块主要记录angularJS(MVC)框架在项目开发中遇到的一些心得，或者记录一些难点',
    author: 'evel.yi',
    time: '2018-6-15'
  },
  {
    route: 'react_list',
    mark:'react',
    logoImage: require('../assets/react.jpg'),
    shortDes: '此模块主要记录react框架在项目开发中遇到的一些心得，或者记录一些难点',
    author: 'evel.yi',
    time: '2018-6-15'
  }
]
