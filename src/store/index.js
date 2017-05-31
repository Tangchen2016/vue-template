import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutation'

Vue.use(Vuex);

const state = {
  isValidUser: false,    // 是否在快牙内
  isLogin: false,        // 是否登录
  vCode: '',             // 版本号
  userInfo: {            // 用户信息
    token: '',           // token值
    uuid: '',            // 设备id
    uid: ''              // 用户id
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
