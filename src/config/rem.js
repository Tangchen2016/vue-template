(function (doc, win) {
  const WIDTH = 720  // 设计图宽度
  const FONTSIZE = 100  // 设计图fontsize
  const docEl = doc.documentElement
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  const recalc = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = FONTSIZE * (clientWidth / WIDTH) + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
