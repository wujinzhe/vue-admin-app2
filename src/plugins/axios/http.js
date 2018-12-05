import api from './api'

export default {
  install (Vue) {
    Vue.prototype.$Http = api
  }
}
