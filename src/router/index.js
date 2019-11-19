import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import VTooltip from 'v-tooltip'
import CartPage from '../views/Cartpage'
import CheckoutPage from '../views/Checkout'
import ProductPage from '../views/Productpage'
Vue.use(VueRouter)
Vue.use(VTooltip)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage,
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutPage,
  },
  {
    path: '/product/:productId',
    name: 'product',
    component: ProductPage,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
