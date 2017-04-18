import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store' // manage data
import VueResource from 'vue-resource' // http request
import './style/common'
import './config/rem'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true // 请求会以 application/x-www-form-urlencoded作为MIME type

const router = new VueRouter({
  routes
})

new Vue({
  router,
  store
}).$mount('#app')
