import { createRouter, createWebHistory} from 'vue-router'

import HomePage from '../views/HomePage.vue'
import CarsPage from '../views/CarsPage.vue'
import CarItemPage from '../views/CarItemPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import SearchPage from '../views/SearchPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/cars', component: CarsPage },
  { path: '/cars:type', component: CarItemPage },
  { path: '/profile', component: ProfilePage },
  { path: '/search', component: SearchPage },
  { path: '/search/:type', component: SearchPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router