import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import OurStoryView from '../views/OurStoryView.vue'
import OurPartnerView from '../views/OurPartnerView.vue'
import NewsView from '../views/NewsView.vue'
import ContactUsView from '../views/ContactUsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      title: 'الرئيسية',
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: AboutView,
    meta:{
      title: 'من نحن',
    }
  },
  {
    path: '/our-story',
    name: 'our-story',
    component: OurStoryView,
    meta:{
      title: 'قصتنا',
    }
  },
  {
    path: '/our-partner',
    name: 'our-partner',
    component: OurPartnerView,
    meta:{
      title: 'الشركات التابعة',
    }
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
    meta:{
      title: 'الأخبار',
    }
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: ContactUsView,
    meta:{
      title: 'اتصل بنا',
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {

  // https://www.youtube.com/watch?v=W6qpsmkuJ8c

  if(to.meta.title !== undefined){
    document.title = `${process.env.VUE_APP_TITLE} | ${to.meta.title}`;
  } else {
    if(to.name !== null){
      document.title = `${process.env.VUE_APP_TITLE} | ${to.name}`;
    } else{
      document.title = `${process.env.VUE_APP_TITLE}`;
    }
  }

  next();
});

export default router
