let Zapya = {
  
  /**
   * 是否在快牙内打开（是否有客户端方法）
   */
  isValidUser () {
    let result = false
    if (typeof _myJSface !== "undefined" && _myJSface != null) {
      result = true
    }
    return result
  },
  
  /**
   * 获取Token
   */
  getToken () {
    let token =null
    if ('getToken' in _myJSface) {
      token = _myJSface.getToken()
    }
    return token
  },
  
  /**
   * 获取UUId
   */
  getUUID () {
    let uuid = null
    if ('getUUID' in _myJSface) {
      uuid = _myJSface.getUUID()
    }
    return uuid
  },
  
  /**
   * 获取UserId
   */
  getUserId () {
    let userId = null
    if ('getUserId' in _myJSface) {
      userId = _myJSface.getUserId()
    }
    return userId
  },
  
  /**
   * 获取渠道
   */
  getChannel() {
    let channel = null
    if ('getChannel' in _myJSface) {
      channel = _myJSface.getChannel()
    }
    return channel
  },
  
  /**
   * 关闭客户端
   */
  close() {
    if ('close' in _myJSface) {
      _myJSface.close()
    }
  },
  
  /**
   * 检查是否登录
   */
  isLogin () {
    let result = null
    if ('isLogin' in _myJSface) {
      result = _myJSface.isLogin()
    }
    return result
  },
  
  /**
   * 弹出登录框
   */
  login () {
    if ('login' in _myJSface) {
      _myJSface.login()
    }
  },
  
  /**
   * 显示左上角分享按钮
   */
  showShareButton () {
    if ('showShareButton' in _myJSface) {
      _myJSface.showShareButton()
    }
  },
  
  /**
   * 隐藏左上角分享按钮
   */
  hideShareButton () {
    if ('hideShareButton' in _myJSface) {
      _myJSface.hideShareButton()
    }
  },
  
  /**
   *
   */
  isVipUser () {
    let result = false
    if (typeof _vipJSface  !== "undefined" && _vipJSface!=null) {
      result = true
    }
    return result
  },
  
  /**
   * 快牙内下载app
   */
  download (type, fileName, url) {
    if ('download' in _vipJSface) {
      _vipJSface.download(type, fileName, url)
    }
  },
  
  /**
   *
   */
  download2 (type, fileName, url, tag) {
    if ('download2' in _vipJSface) {
      _vipJSface.download2(type, fileName, url,tag);
    }
  },
  
  /**
   * 快牙内下载app(传就赚)
   */
  download3 (type, fileName, url,tag,pkg) {
    if ('download3' in _vipJSface) {
      _vipJSface.download3(type, fileName, url,tag,pkg);
    }
  },
  
  /**
   * 客户端小bug(传就赚)
   */
  isNeedJump () {
    if ('isNeedJump' in _vipJSface) {
      return _vipJSface.isNeedJump();
    }
    return false;
  },
  
  /**
   * 客户端打点(传就赚）
   */
  logEvent (code, memo) {
    if ('logEvent' in _vipJSface) {
      _vipJSface.logEvent(code,memo);
    }
  },
  
  /**
   * 快牙内传输app(传就赚)
   */
  transfer (pkg) {
    if ('transfer' in _vipJSface) {
      _vipJSface.transfer(pkg);
    }
  },
  
  /**
   * 客户端打开查看应用使用情况界面（传就赚）
   */
  startUsage (num) {
    if ('startUsage' in _vipJSface) {
      _vipJSface.startUsage(num);
    }
  },
  
  /**
   * 客户端直接跳转传就赚页面（传就赚）
   */
  getFrom () {
    var getFromApp = null;
    if ('getFrom' in _vipJSface) {
      getFromApp = _vipJSface.getFrom();
    }
    return getFrom;
  },
  
  /**
   * 客户端拿版本号
   */
  getVersionCode () {
    let versionCode = null
    if ('getVersionCode' in _myJSface) {
      versionCode = _myJSface.getVersionCode()
    }
    return versionCode
  },
  
  /**
   * 客户端app下载状态:
   *            0  ->  初始化
   *            1  ->  可下载
   *            2  ->  正在下载
   *            6  ->  已下载
   */
  getState (url) {
    var state = null;
    if ('getState' in _vipJSface) {
      state = _vipJSface.getState(url);
    }
    return state;
  },
  
  /**
   * 客户端app下载进度 (%)
   */
  getProgress (url) {
    var process = null;
    if ('getProgress' in _vipJSface) {
      process = _vipJSface.getProgress(url);
    }
    return process;
  },
  
  /**
   * 客户端app暂停下载
   */
  pause (url) {
    if ('pause' in _vipJSface) {
      _vipJSface.pause(url);
    }
  },
  
  /**
   * 客户端app继续下载
   */
  resume (url) {
    if ('resume' in _vipJSface) {
      _vipJSface.resume(url);
    }
  },
  
  /**
   * 客户端打开app
   */
  openApp (pkg) {
    if ('openApp' in _vipJSface) {
      _vipJSface.openApp(pkg);
    }
  },
  
  /**
   * 客户端检测app是否被打开过
   */
  isAppOpened (pkg) {
    var isOpened = null;
    if ('isAppOpened' in _vipJSface) {
      isOpened = _vipJSface.isAppOpened(pkg);
    }
    return isOpened;
  },
  
  /**
   * 客户端安装app
   */
  installApp (url) {
    if ('installApp' in _vipJSface) {
      _vipJSface.installApp(url);
    }
  },
  
  /**
   * 客户端检测是否安装过app
   */
  isAppInstalled (pkg) {
    var isInstalled = null;
    if ('isAppInstalled' in _vipJSface) {
      isInstalled = _vipJSface.isAppInstalled(pkg);
    }
    return isInstalled;
  },
  
  /**
   * 客户端获取app的MD5
   */
  getMd5 (pkg) {
    var md5 = null;
    if ('getMd5' in _vipJSface) {
      md5 = _vipJSface.getMd5(pkg);
    }
    return md5;
  },
}

export {Zapya}
