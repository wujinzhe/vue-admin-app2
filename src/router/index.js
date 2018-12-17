import Router from 'vue-router'
import menu from './menu'

var router = new Router({
  routes: [
    ...menu
  ]
})

export default router
