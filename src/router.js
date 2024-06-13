// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import News from './views/News.vue'
import Work from './views/Work.vue'
import Course from './views/Course.vue'
import QodeshHaQodashim from './holyofholies/QodeshHaQodashim.vue'
import Login from './holyofholies/Login.vue'
import HolyofHolies from './holyofholies/HolyofHolies.vue'
import MountPisgah from './views/MountPisgahLayout.vue'

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
      // { path: '', component: Login },
      { path: '/dashboard', component: HolyofHolies }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
