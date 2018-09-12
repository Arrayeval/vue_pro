/**
 * 手把手实现vue 的订阅者，观察者模式
 * **/
let data = {price: 5, quantity: 2}
let target = null
class Dep {
  constructor () {
    this.subscribers =[]
  }
  // 添加
  depend (target) {
    if (target && !this.subscribers.includes(target)) {
      this.subscribers.push(target)
    }
  }
  // 执行
  notify () {
    this.subscribers.forEach(sub => sub())
  }
}
Object.keys(data).forEach(key => {
  let internalValue = data[key]
  const dep = new Dep()
  Object.defineProperty(data, key, {
    get () {
      dep.depend(target)
      return internalValue
    },
    set (newVal) {
       internalValue = newVal
       dep.notify()
    }
  })
})
target = () => {
  data.total = data.price * data.quantity
}
target()
data.price = 33
data.total