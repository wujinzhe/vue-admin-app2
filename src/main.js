import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App'
import Router from 'vue-router'
import Util from '@/plugins/util/'
import ElementUI from 'element-ui'

Vue.use(ElementUI)
Vue.use(Util)
Vue.use(Router)
Vue.use(store)

Vue.config.devtools = true
Vue.config.productionTip = false

console.log('session', sessionStorage.getItem('userInfo'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App />'
})
