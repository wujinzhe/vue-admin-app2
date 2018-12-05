import Vue from 'vue'
import router from './router'
import App from './App'
import Util from '@/plugins/util/'
import ElementUI from 'element-ui'

Vue.use(ElementUI)
Vue.use(Util)

Vue.config.devtools = true
Vue.config.productionTip = false

window.apps = window.apps || {}
window.apps.app2 = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />'
})
