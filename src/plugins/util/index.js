let Util = {
  test () {
    console.log('test')
  }
}
export default {
  install (Vue) {
    Vue.prototype.$Util = Util
  }
}
