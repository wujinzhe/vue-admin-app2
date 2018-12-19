import router from './router'
import store from './store'
import api from '@/plugins/axios/api'

window.apps = window.apps || {}
window.apps.app2 = {
  router,
  store,
  api
}
