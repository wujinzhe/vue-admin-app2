import Router from 'vue-router'
import menu from './menu'

var router = new Router({
  routes: [
    ...menu
  ]
})

window.router = router

window.router = router

export default router
