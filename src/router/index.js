import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/father',
      title: '父导航',
      name: 'Father',
      component: () => import('../views/ViewApp2.vue')
    }
  ]
})

export default router
