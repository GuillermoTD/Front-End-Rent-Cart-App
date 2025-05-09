import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import CarsPage from '../views/CarsPage.vue'
import ProfilePage from '../views/ProfilePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/cars', component: CarsPage },
  { path: '/profile', component: ProfilePage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


export default router