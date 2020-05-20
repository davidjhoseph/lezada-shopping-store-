<template>
  <div class="holder">
    <div style="width:100%" class="row align-items-center justify-content-between">
      <div class="col-md-3">
        <router-link :to="{name: 'home'}" tag="div">
          <div class="brand-name ml-4 text-center text-md-left">LEZADA</div>
        </router-link>
      </div>
      <div class="col-md-3 text-center text-md-left">
        <div class="links">
          <router-link :to="{name:'home'}" tag="div">
            <div class="mr-3">Home</div>
          </router-link>
          <div class="mr-3">Shop</div>
          <div class="mr-3">Elements</div>
          <div class="mr-3">Pages</div>
          <div class="mr-3">Blog</div>
        </div>
      </div>
      <div class="col-md-2">
        <div class="icons">
          <i class="material-icons">search</i>
          <router-link :to="{name:'login'}" tag="i">
            <i class="material-icons">person</i>
          </router-link>
          <i @click="openSaved()" class="material-icons">
            favorite_border
            <div v-if="savedItems.length>0" class="red">{{savedItems.length}}</div>
          </i>
          <i @click="openCart()" class="material-icons">
            local_grocery_store
            <div v-if="cartItems.length>0" class="red">{{cartItems.length}}</div>
          </i>
        </div>
      </div>
    </div>
    <cart v-show="viewCart" />
    <saved v-show="viewSaved" />
  </div>
</template>

<script>
import Cart from "./Cart";
import Saved from "./Saved";
export default {
  components: {
    Cart,
    Saved
  },
  computed: {
    cartItems() {
      return this.$store.state.cart.items;
    },
    viewCart: {
      get() {
        return this.$store.state.viewCart;
      },
      set(value) {
        this.$store.state.viewCart = value;
      }
    },
    viewSaved: {
      get() {
        return this.$store.state.viewSaved;
      },
      set(value) {
        this.$store.state.viewSaved = value;
      }
    },
    savedItems() {
      return this.$store.state.saved.items;
    }
  },
  methods: {
    openCart() {
      this.viewCart = !this.viewCart;
    },
    openSaved() {
      this.viewSaved = !this.viewSaved;
    }
  }
};
</script>
<style lang="scss" scoped>
.holder {
  height: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  z-index: 999;
  position: fixed;
  width: 100%;
  background-color: white;
  .brand-name {
    font-size: 35px;
    color: #212529;
    letter-spacing: 7px;
    cursor: pointer;

    // #777777; color used for the other navs
  }
  .links {
    // width: 20%;
    color: #777777;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    div {
      cursor: pointer;
      &:hover {
        color: black;
        text-decoration: underline;
      }
    }
  }
  .icons {
    // width: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    i {
      cursor: pointer;
      position: relative;
      .red {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #d3122a;
        position: absolute;
        top: -10px;
        right: -10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 14px;
      }
    }
  }
}
</style>