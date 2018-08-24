// 长按指令
export const longPress = {
  bind: function (el, binding, vNode) { // el:指令所绑定的元素，可以用来直接操作 DOM  ,binding:一个对象, vNode:Vue 编译生成的虚拟节点,
    // 确保提供的表达式是函数
    if (typeof binding.value !== 'function') {
      // 获取组件名称
      const compName = vNode.context.name
      // 将警告传递给控制台
      let warn = `[longpress:] provided expression '${binding.expression}' is not a function, but has to be `
      if (compName) { warn += `Found in component '${compName}' ` }
      console.warn(warn)
    }

    // 定义变量
    let pressTimer = null

    // 定义函数处理程序
    // 创建计时器（ 1秒后执行函数 ）
    let start = (e) => {
      // click：按下并且弹起，mousedown：按下即可触发
      if (e.type === 'click' && e.button !== 0) { // e.button== 0：鼠标左键，1：中键，2：右键
        return
      }

      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          // 执行函数
          handler()
        }, 3000) // 长按三秒触发
      }
    }

    // 取消计时器
    let cancel = (e) => {
      // 检查计时器是否有值
      if (pressTimer !== null) {
        clearTimeout(pressTimer)
        pressTimer = null
      }
    }

    // 运行函数
    const handler = (e) => {
      // 执行传递给指令的方法 [binding.value:指令的绑定值,这里是个函数，故而可以直接函数执行]
      binding.value(e)
    }

    // 添加事件监听器
    el.addEventListener('mousedown', start)
    el.addEventListener('touchstart', start)

    // 取消计时器
    el.addEventListener('click', cancel)
    el.addEventListener('mouseout', cancel)
    el.addEventListener('touchend', cancel)
    el.addEventListener('touchcancel', cancel)
  }
}
