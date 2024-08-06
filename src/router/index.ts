import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import FileView from '@/views/FileView.vue'
import HelpView from '@/views/HelpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView
    },

    /**
     * FILE RESOURCES URL
     */
    {
      path: '/file',
      name: 'file',
      component: FileView
    },

    /**
     * HELP RESOURCES URL
     */
    {
      path: '/help',
      name: 'help',
      component: HelpView
    }
  ]
})

export default router
