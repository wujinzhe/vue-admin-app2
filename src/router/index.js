import Router from 'vue-router'
import menu from './menu'

var router = new Router({
  routes: [
    ...menu
  ]
})

window.apps = window.apps || {}
window.apps.app1 = window.apps.app1 || {}

window.apps.app1.router = router

export default router
