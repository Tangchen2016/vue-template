/**
 * 将时间转化为毫秒数
 * @param {String} str 时间(1s/1h/1d --> 1秒/1小时/1天)
 */
function getsec(str) {
  let str1 = str.substring(1, str.length) // 单位
  let str2 = str.substring(0, 1) * 1  // 时间
  if(str1 == 's') {
    return str2 * 1000
  } else if(str1 == 'h') {
    return str2*1*60*60*1000
  } else if(str1 == 'd') {
    return str2*24*60*60*1000
  }
}

/**
 *  设置cookie
 *  @param  {String} name   cookie名，必选
 *  @param  {String} value  cookie值，必选
 *  @param  {String} time   cookie过期时间，可选，默认7天
 */
export const setCookie = (name, value, time='7d') => {
  var strsec = getsec(time);
  var exp = new Date();
  exp.setTime(exp.getTime() + strsec*1);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

/**
 * 获取cookie
 * @param  {String} name   cookie名，必选
 */
export const getCookie = (name) => {
  let arr, reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)")
  // let arr = document.cookie.match();
  if(arr = document.cookie.match(reg)){
    return (arr[2]);
  }else{
    return null;
  }
}

/**
 * 删除cookie
 * @param {String} name   cookie名，必选
 */
export const delCookie = (name) => {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval= getCookie(name);
  if(cval!=null)
    document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

/**
 * 获取url参数
 * @param {string} name url参数的key，必选
 */
export const getUrlQueryString = (name) => {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2])
  }
  return null
}

/**
 * 定义读写transform内属性的方法
 * @param {HTMLElement} element，操作transform属性的dom对象，必选
 * @param {String} attr，属性名，必选
 * @param {number} value，写操作的属性值，可选
 */
export const transform = (element, attr, value) => {
  let etf = element.transform
  if (!etf) {
    element.transform = {}
  }
  if (arguments.length > 2) { // 写操作
    eft[attr] = value
    let text = ''
    for (var item in etf) {
      switch (item) {
        case 'rotate':
        case 'skew':
        case 'skewX':
        case 'skewY':
          text += item + '(' + eft[item] + 'deg) '
          break
        case 'translate':
        case 'translateX':
        case 'translateY':
          text += item + '(' + eft[item] + 'px) '
          break
        case 'scale':
        case 'scaleX':
        case 'scaleY':
          text += item + '(' + eft[item] + ') '
          break
        default:
          text += ''
      }
    }
    element.style.webkitTransform = element.style.transform = text
  } else {
    // 读取
    value = etf[attr]
    if (typeof value === 'undefined') {
      if (attr == 'scale' || attr == 'scaleX' || attr == 'scaleY') {
        return 1
      } else {
        return 0
      }
    }
    return value
  }
}

/**
 * 判断是否是在微信浏览器内打开
 */
export const isWeiXin = () => {
  let ua = navigator.userAgent.toLowerCase()
  let isWeiXin = false
  if (ua.match(/MicroMessenger/i)=="micromessenger") {
    isWeiXin = true
  }
  return isWeiXin
}

/**
 * 判断是否在IOS浏览器内打开
 */
export const isIOS = () => {
  let isIOS = false
  if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)) {
    isIOS = true
  }
  return isIOS
}

/**
 * 格式化视频时间（秒数 --> 小时：分钟：秒）
 * @param {Number} second 毫秒数
 */
export const transformTime = (second) => {
  // 将秒数转化为 (X时):X分:(X秒) 格式
  let arr  =  [parseInt(second / 60 / 60), parseInt(second / 60 % 60), parseInt(second % 60)];
  if(arr[0]==0) {
    arr.shift();
  }
  return arr.join(":").replace(/\b(\d)\b/g, "0$1");
}

/**
 * 数组去重
 * @param {Array} arr 数组
 */
export const uniqueArray = (arr) => {
  let res = []
  let json = {}
  arr.forEach((item) => {
    if (!json[item]) {
      res.push(item)
      json[item] = 1
    }
  })
  return res
}
