export default {
  '导航一': [
    {
      path: '/father',
      title: '父导航',
      name: 'Father',
      component: () => import('../views/ViewFather.vue')
    },
    {
      path: '/father/sub1',
      title: '子导航1',
      name: 'FatherSub1',
      component: () => import('../views/ViewFatherSub1.vue')
    },
    {
      path: '/father/sub2',
      title: '子导航2',
      name: 'FatherSub2',
      component: () => import('../views/ViewFatherSub2.vue')
    }
  ]
}
