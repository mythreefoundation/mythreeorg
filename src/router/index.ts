import { createRouter, createWebHistory } from 'vue-router'
import LayoutHome from '../views/LayoutHome.vue'
import Admin from '../components/Admin.vue'
import Publication from '../components/Publication.vue'
import MitraRashmi from '../components/MitraRashmi.vue'
import DailyArticle from '../components/DailyArticle.vue'
import Events from '../components/Events.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // trailingSlash: false,
  routes: [
    { path: '/:pathMatch(.*)*', redirect: { name: 'home' } }, // catch-all route
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
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
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
