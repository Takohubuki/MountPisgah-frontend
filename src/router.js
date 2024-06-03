// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import News from './views/News.vue'
import Work from './views/Work.vue'
import Course from './views/Course.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/news', component: News },
  { path: '/work', component: Work },
  { path: '/course', component: Course }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
