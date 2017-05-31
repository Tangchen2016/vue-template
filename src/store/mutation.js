import {Zapya} from '../config/zapya'
// import {Zapya} from '../config/fakeClient'

const INIT_ZAPYA = 'INIT_ZAPYA'

export default {
  [INIT_ZAPYA](state) {
    state.isValidUser = Zapya.isValidUser();
    if(!state.isValidUser) return; // 快牙外，不执行下面的操作
    state.isLogin = Zapya.isLogin();
    state.vCode = Zapya.getVersionCode()
    state.userInfo = {
      uid : Zapya.getUserId(),
      uuid : Zapya.getUUID(),
      token : Zapya.getToken().split('=')[1]
    }
  }
}
