import Vue from "vue";
import Vuex from "vuex";
import productlist from "./products";
import axios from "axios";
import VuexPersistence from "vuex-persist";
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [new VuexPersistence().plugin],
  state: {
    isLoggedIn: false,
    loggedInUser: null,
    products: [],
    viewCart: false,
    viewSaved: false,
    cart: {
      items: [],
    },
    saved: {
      items: [],
    },
  },
  mutations: {
    getProducts(state, payload) {
      state.products = payload.data;
    },
    getToken(state, payload) {
      localStorage.setItem("token", payload.token);
      localStorage.setItem("user", payload.user);
    },
    getAuthenticatedUser(state, payload) {
      state.isLoggedIn = true;
      state.loggedInUser = payload.user;
    },
    emptyCart(state) {
      state.cart.items = [];
    },
    addToCart(state, payload) {
      let product = Object.assign({}, payload);
      let cart = state.cart.items;
      var found = false;
      var quantity = null;
      for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === product.id) {
          found = true;
          break;
        }
      }
      if (!found) {
        product.quantity = 1;
        cart.push(product);
        let toast = Vue.toasted.show(product.name + " has been added to cart", {
          theme: "toasted-primary",
          position: "bottom-right",
          duration: 1500,
        });
      } else {
        cart.forEach((item) => {
          if (item.id === product.id) {
            item.quantity++;
            quantity = item.quantity;
            return;
          }
        });
        let toast = Vue.toasted.show(
          product.name + " now has" + " " + quantity + " items in the cart",
          {
            theme: "toasted-primary",
            position: "bottom-right",
            duration: 1500,
          }
        );
      }
    },
    addProductToCart(state, payload) {
      let product = Object.assign({}, payload);
      let cart = state.cart.items;
      var found = false;
      for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === product.id) {
          found = true;
          break;
        }
      }
      if (!found) {
        cart.push(product);
      } else {
        cart.forEach((item) => {
          if (item.id === product.id) {
            item.quantity += product.quantity;
            return;
          }
        });
      }
    },
    addToSaved(state, payload) {
      let product = Object.assign({}, payload);
      let saved = state.saved.items;
      var found = false;
      for (var i = 0; i < saved.length; i++) {
        if (saved[i].id === product.id) {
          found = true;
          break;
        }
      }
      if (!found) {
        saved.push(product);
      } else {
        saved.forEach((item) => {
          if (item.id === product.id) {
            let index = saved.indexOf(item);
            saved.splice(index, 1);
          }
        });
      }
    },
  },
  actions: {
    getAuthenticatedUser(context, payload) {
      context.commit("getAuthenticatedUser", payload);
    },
    emptyCart(context) {
      context.commit("emptyCart");
    },
    getToken(context, payload) {
      context.commit("getToken", {
        token: payload.access_token,
        user: JSON.stringify(payload.user),
      });
    },
    getProducts(context) {
      return new Promise((resolve, reject) => {
        axios
          .get("http://localhost:8000/api/products")
          .then((response) => {
            context.commit("getProducts", {
              data: response.data.data,
            });
            resolve();
          })
          .catch((err) => {
            reject(err);
            console.log(err);
          });
      });
    },
  },
  getters: {
    cartTotal(state) {
      let total = 0;
      state.cart.items.forEach((item) => {
        if (item.discount) {
          let itemPrice = item.price - (item.discount / 100) * item.price;
          itemPrice = itemPrice * item.quantity;
          total += itemPrice;
        } else {
          let itemPrice = item.price * item.quantity;
          total += itemPrice;
        }
      });
      return total;
    },
  },
  modules: {},
});
