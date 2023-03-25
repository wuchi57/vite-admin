import Layout from 'layout/index.vue'

export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('views/Login.vue'),
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('views/Home.vue'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('views/About.vue'),
  },
]
