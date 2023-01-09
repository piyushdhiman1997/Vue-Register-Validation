import { createRouter, createWebHistory } from 'vue-router'
import home from "@/views/HomeView.vue"
import RegesTration from "@/components/Registeration.vue"

const routes = [
  {
    path: '/',
    name: 'ho-me',
    component: home
  },
  {
    path: '/signup',
    name: 'RegesTration',
    component: RegesTration,  
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
