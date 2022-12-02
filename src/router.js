import { createRouter, createWebHistory } from 'vue-router'
// import home from '@/pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: null
    },
    {
      path: '/about',
      name: 'about',
      component: null
    }
  ]
})

export default router
