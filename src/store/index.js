import Vue from 'vue'
import Vuex from 'vuex'
import productlist from './products'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: productlist.products,
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
    addToCart(state, payload) {
      let product = Object.assign({}, payload);
      let cart = state.cart.items;
      var found = false;
      for(var i=0;i< cart.length; i++){
        if(cart[i].id === product.id){
          found = true;
          break;
        }
      }
      if (!found) {
        product.quantity = 1;
        cart.push(product);
      } else {
        cart.forEach((item) => {
          if (item.id === product.id) {
            item.quantity++;
            return;
          }

        })
      }

    },
    addProductToCart(state, payload) {
      let product = Object.assign({}, payload);
      let cart = state.cart.items;
      var found = false;
      for(var i=0;i< cart.length; i++){
        if(cart[i].id === product.id){
          found = true;
          break;
        }
      }
      if (!found) {
        cart.push(product);
      } else {
        cart.forEach((item) => {
          if (item.id === product.id) {
            item.quantity+=product.quantity;
            return;
          }

        })
      }

    },
    addToSaved(state, payload) {
      let product = Object.assign({}, payload);
      let saved = state.saved.items;
      var found = false;
      for(var i=0;i< saved.length; i++){
        if(saved[i].id === product.id){
          found = true;
          break;
        }
      }
      if (!found) {
        saved.push(product);
      } else {
        saved.forEach((item)=>{
          if(item.id === product.id){
            let index = saved.indexOf(item);
            saved.splice(index, 1)
          }
        })
      }

    }
  },
  actions: {
  },
  getters: {
    cartTotal(state) {
      let total = 0
      state.cart.items.forEach((item)=>{
        if(item.discount){
          let itemPrice = item.price-(item.discount/100* item.price) 
          itemPrice = itemPrice * item.quantity
          total +=itemPrice
        }else{
          let itemPrice = item.price * item.quantity
          total +=itemPrice
        }
      })
      return total
  }
  },
  modules: {
  }
})
