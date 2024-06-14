// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import About from './views/MountPisgah/About.vue'
import News from './views/MountPisgah/News.vue'
import Work from './views/MountPisgah/Work.vue'
import Course from './views/MountPisgah/Course.vue'
import QodeshHaQodashim from './views/holyofholies/QodeshHaQodashim.vue'
import HolyofHolies from './views/holyofholies/HolyofHolies.vue'
import MountPisgah from './views/MountPisgah/MountPisgahLayout.vue'

const routes = [
  { path: '/', component:  MountPisgah},
  { path: '/about', component: About },
  { path: '/news', component: News },
  { path: '/work', component: Work },
  { path: '/course', component: Course },
  {
    path: '/holyofholies',
    component: QodeshHaQodashim,
    children: [
      { path: '', component: HolyofHolies },
      { path: 'course', component: () => import('./views/holyofholies/Course.vue') },
      { path: 'news', component: () => import('./views/holyofholies/News.vue') },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
