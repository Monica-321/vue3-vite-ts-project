// 常用工具函数

/**
 * 脱敏处理用户姓名(中间用*替换)
 * name 入参
 * 返回 脱敏后的姓名
*/
function dealName (name:String) {
  if (!name) {
    return ''
  } else {
    let len = name.length
    if (len <= 2) {
      return `${name[0]}*`
    } else {
      return `${name[0]}*${name[len - 1]}`
    }
  }
}

/**
 * 防抖函数(计时器简易版)
 * 多次触发事件，事件处理函数只能执行一次，并在触发操作结束时执行（最后一次）
 * 入参 fn要被处理的函数，delay规定的时间
 * 返回
*/
function debounce (fn: Function, delay: number) {
  let timer:number|null = null
  return function (this:object) {
    if (timer) {
      clearTimeout(timer)
    }
    // timer接收的不是函数，返回值是timeoutID为正整数用于传入clearTimeout
    timer = window.setTimeout(() => {
      fn.call(this)
    }, delay)
  }
}

/**
 * 节流函数(时间戳简易版)
 * 事件触发调用处理后，规定时间内，事件处理函数不能再次被调用（第一次）
 * 入参 fn要被处理的函数，delay规定的时间
 * 返回 
*/
function throttle (fn: Function, delay: number) {
  let lastTime = 0
  return function (this:object) {
    let nowTime = Date.now()
    if (nowTime - lastTime > delay) {
      fn.call(this)
      lastTime = nowTime
    }
  }
}

export {
  dealName,
  debounce,
  throttle
}