export default [
  {
    parent: '导航一',
    path: '/father',
    title: '父导航',
    name: 'Father',
    component: () => import('../views/ViewApp2.vue')
  },
  {
    path: '/father/sub1',
    title: '子导航1',
    name: 'FatherSub1',
    // isMenu: true,
    component: () => import('../views/ViewApp2Sub1.vue')
  },
  {
    path: '/father/sub2',
    title: '子导航2',
    name: 'FatherSub2',
    // isMenu: true,
    component: () => import('../views/ViewApp2Sub2.vue')
  },
  {
    parent: '导航一',
    path: '/user',
    title: '用户管理',
    name: 'User',
    component: () => import('../views/ViewUser.vue')
  },
  {
    path: '/user/add',
    title: '添加用户',
    name: 'UserAdd',
    component: () => import('../views/ViewUserAdd.vue')
  },
  {
    path: '/user/detail',
    title: '用户详情',
    name: 'UserDetail',
    component: () => import('../views/ViewUserDetail.vue')
  }
]
