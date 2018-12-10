import Router from 'vue-router'
import menu from './menu'

var router = new Router({
  routes: [
    ...menu
  ]
})

window.apps = window.apps || {}

window.apps.app2 = router

export default router
