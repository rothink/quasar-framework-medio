
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
  },
  {
    path: '/products/create',
    component: () => import('layouts/dark.vue'),
    children: [
      { path: '', component: () => import('pages/products/create') }
    ]
  },
  {
    path: '/products/:id',
    component: () => import('layouts/dark.vue'),
    children: [
      { path: '', component: () => import('pages/products/details') }
    ]
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
