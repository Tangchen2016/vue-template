import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store' // manage data
import './style/base'
import './style/common'
import './config/rem'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRouter)
Vue.use(ElementUI)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  store
}).$mount('#app')
