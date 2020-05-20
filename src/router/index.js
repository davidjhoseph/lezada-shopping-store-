import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import VTooltip from "v-tooltip";
import CartPage from "../views/Cartpage";
import CheckoutPage from "../views/Checkout";
import ProductPage from "../views/Productpage";
import Login from "../views/Login";
import Register from "../views/Register";

Vue.use(VueRouter);
Vue.use(VTooltip);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/account/login",
    name: "login",
    component: Login,
  },
  {
    path: "/account/register",
    name: "register",
    component: Register,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartPage,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckoutPage,
  },
  {
    path: "/product/:productId",
    name: "product",
    component: ProductPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
