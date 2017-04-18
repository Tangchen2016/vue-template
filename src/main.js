import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store' // manage data
import './style/common'
import './config/rem'
import ElementUI from 'element-ui'

Vue.use(VueRouter)
Vue.use(ElementUI)

const router = new VueRouter({
  routes
})

new Vue({
  router,
  store
}).$mount('#app')
