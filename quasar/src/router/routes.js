
const routes = [
  {
    path: '/',
    component: () => import('layouts/dark.vue'),
    children: [
      { path: '', component: () => import('pages/Index') }
    ]
  },
  {
    path: '/products',
    component: () => import('layouts/dark.vue'),
    children: [
      { path: '', component: () => import('pages/products/list') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
