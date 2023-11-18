import { createRouter, createWebHistory } from 'vue-router'
import LayoutHome from '../views/LayoutHome.vue'
import Admin from '../components/Admin.vue'
import Publication from '../components/Publication.vue'
import MitraRashmi from '../components/MitraRashmi.vue'
import DailyArticle from '../components/DailyArticle.vue'
import Events from '../components/Events.vue'
import Articles from '../components/Articles.vue'
import OrderBooksFormVue from '@/views/OrderBooksForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // trailingSlash: false,
  scrollBehavior() {
    return { top: 0, left: 0 }
  },
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
      path: '/articles',
      name: 'articles',
      component: Articles
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: OrderBooksFormVue
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
      props: { title: 'ಆರೋಗ್ಯ ಸುಭಾಷಿತಗಳು', folderName: 'arogya_subashita/', img1: 'ayurveda-medicine03.png', img2:'ayurveda-medicine03.png' }
    },
    {
      path: '/nityasubashita',
      name: 'nityasubashita',
      component: DailyArticle,
      props: { title: 'ನಿತ್ಯ ಸುಭಾಷಿತಗಳು', folderName: 'nitya_subashita/', img1: 'folded-hands.png', img2:'om.png' }
    },
    {
      path: '/suvachana',
      name: 'suvachana',
      component: DailyArticle,
      props: { title: 'ಸುವಚನಗಳು', folderName: 'suvachana/', img1: '', img2:'' }
    },
    {
      path: '/news',
      name: 'news',
      component: DailyArticle,
      props: { title: 'News', folderName: 'news/SS/' }
    }
  ]
})

export default router
