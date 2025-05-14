import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import CarsPage from '../views/CarsPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import SearchPage from '../views/SearchPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/cars', component: CarsPage },
  { path: '/profile', component: ProfilePage },
  { path: '/search', component: SearchPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


export default router