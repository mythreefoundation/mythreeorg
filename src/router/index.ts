import { createRouter, createWebHistory } from 'vue-router'
import LayoutHome from '../views/LayoutHome.vue'
import AboutView from '../views/AboutView.vue'
import Home from '../components/Home.vue'
import Publication from '../components/Publication.vue'
import Events from '../components/Events.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LayoutHome
    },
    {
      path: '/books',
      name: 'books',
      component: Publication
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    }
  ]
})

export default router
