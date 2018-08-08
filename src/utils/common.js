// 判断是否是pc[true] moblie[false]
export function IsPC () {
  let userAgentInfo = navigator.userAgent
  let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  let flag = true
  for (var i = 0; i < Agents.length; i++) {
    if (userAgentInfo.indexOf(Agents[i]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

// 'ontouched' 是否支持触屏事件
export function canTouch () {
  if ('ontouchend' in  document) {
    return true
  } else {
    return false
  }
}

// 监听touchMove 事件
export function watchMove () {
  if (IsPC()) {
    document.addEventListener('DOMMouseScroll',function(){
      console.log('pcpcp')
    }, false)
  } else {
    document.addEventListener('touchstart', function(){
      console.log('mobile')
    }, false)
  }
}

// 监听滑动事件
export function watchScroll (callBack) {
  if (IsPC()) {
    document.addEventListener('DOMMouseScroll',callBack, false)
  } else {
    document.addEventListener('scroll', callBack, false)
  }
}

// 从 localStorage中获取数据
export function getFromStorage (name) {
  if (window.localStorage && window.localStorage[name]) {
    return localStorage[name]
  } else {
    return ''
  }
}

// 存储数据localStorage
export function setInStorage (name,data) {
  if (window.localStorage) {
    localStorage[name] = data
  } else {
    return ''
  }
}
