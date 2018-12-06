import Vue from 'vue'
import router from './router'
import Util from '@/plugins/util/'
import ElementUI from 'element-ui'

Vue.use(ElementUI)
Vue.use(Util)

Vue.config.productionTip = false

window.apps = window.apps || {}
window.apps.app2 = new Vue({
  router,
  template: '<router-view />'
})
