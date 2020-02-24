import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/category.vue')
const Cart = () => import('../views/cart/cart.vue')
const Profile = () => import('../views/profile/profile.vue')
const Detail = () => import('../views/detail/detail.vue')
Vue.use(VueRouter)
 
const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:category/:id',
    component: Detail
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
 
export default router
