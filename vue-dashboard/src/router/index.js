import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/HomePage.vue'),
    
    },
    {
      path: '/send',
      name: 'send',
      component: () => import('../views/SendMessage.vue')
    }
  ]
})

export default router
