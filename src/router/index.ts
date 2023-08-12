import { createRouter, createWebHistory } from 'vue-router'
import LayoutHome from '../views/LayoutHome.vue'
import AboutView from '../views/AboutView.vue'
import Home from '../components/Home.vue'
import Publication from '../components/Publication.vue'
import MitraRashmi from '../components/MitraRashmi.vue'
import DailyArticle from '../components/DailyArticle.vue'
import Events from '../components/Events.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // trailingSlash: false,
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
      path: '/mitrarashmi',
      name: 'mitrarashmi',
      component: MitraRashmi
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
    },
    {
      path: '/arogyasubashita',
      name: 'arogyasubashita',
      component: DailyArticle,
      props: { title: 'ಆರೋಗ್ಯ ಸುಭಾಷಿತಗಳು', folderName: 'arogya_subashita' }
    },
    {
      path: '/nityasubashita',
      name: 'nityasubashita',
      component: DailyArticle,
      props: { title: 'ನಿತ್ಯ ಸುಭಾಷಿತಗಳು', folderName: 'nitya_subashita' }
    }
  ]
})

export default router
