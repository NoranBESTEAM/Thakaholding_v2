import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import StoryView from '../views/StoryView.vue'
import PartnerView from '../views/PartnerView.vue'
import NewsView from '../views/NewsView.vue'
import ContactUsView from '../views/ContactUsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: AboutView
  },
  {
    path: '/story',
    name: 'story',
    component: StoryView
  },
  {
    path: '/partner',
    name: 'partner',
    component: PartnerView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: ContactUsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
