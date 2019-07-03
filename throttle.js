// 节流
function throttle(func, wait, mustRun) {
  var timeout, startTime = new Date();
  return function () {
    var context = this,
    args = arguments,
    curTime = new Date();

    clearTimeout(timeout)
    // 如果达到了规定的触发时间间隔，触发 handler
    if (curTime - startTime >= mustRun) {
      func.apply(context, args);
      startTime = curTime;
      console.log('========')
      // 没达到触发间隔，重新设定定时器
    } else {
      console.log('===timeout=====')
      timeout = setTimeout(func, wait)
    }
  }
}

// 实际想绑定在 scroll 事件上的 handler
function realFunc(){
  console.log("Success");
}
// 采用了节流函数
window.addEventListener('resize',throttle(realFunc,500,1000));
