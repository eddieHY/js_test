// 防抖
function  debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) {
        return func.apply(context, args)
      } 
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout);
    timeout = setTimeout(later, wait)
    if (callNow) {
      func.apply(context, args)
    }
  }
}

var myEfficientFn = debounce(function() {
  console.log('call me')
}, 250);

var usuall = function () {
  console.log('没有防抖')
}

window.addEventListener('resize', myEfficientFn);
// window.addEventListener('resize', usuall);
