import Vue from 'vue'
import router from './router'
import App from './App'
import Util from '@/plugins/util/'
import ElementUI from 'element-ui'

Vue.use(ElementUI)
Vue.use(Util)

Vue.config.devtools = true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />'
})

// 可以为了调试使用
window.apps = window.apps || {}
window.apps.app2 = new Vue({
  router,
  template: '<router-view />'
})
