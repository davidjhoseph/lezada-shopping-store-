<template>
  <div class="checkout">
    <div v-if="!checkout">
      <div
        v-if="cartProducts.length<1"
        class="text-danger"
      >Sorry there is nothing to checkout, try adding some items to your cart!</div>
      <div v-else>
        <div @click="goBack()">Back</div>
        <div class="container">
          <h1 class="text-center">Checkout Page</h1>
          <div class="row">
            <div class="col-3">
              <h4>Product</h4>
            </div>
            <div class="col-3">
              <h4>Price</h4>
            </div>
            <div class="col-3">
              <h4>Quantity</h4>
            </div>
            <div class="col-3">
              <h4>Total Price</h4>
            </div>
          </div>
          <div v-for="product in cartProducts" :key="product.id">
            <div class="row justify-content-between mb-2">
              <div class="col-3">
                <div>{{product.name}}</div>
              </div>
              <div class="col-3">
                <div>{{product.price}}</div>
              </div>
              <div class="col-3">
                <div class="d-flex align-items-center">
                  <div>X</div>
                  <div>{{product.quantity}}</div>
                </div>
              </div>
              <div class="col-3">
                <div>{{product.quantity*product.price}}</div>
              </div>
            </div>
          </div>
          <div v-if="!addressInfo" class="text-center">
            <button @click="addressInfo=true">Continue</button>
          </div>
          <div v-if="addressInfo" class="text-center showAddress mt-2">
            <input type="text" v-model="address" placeholder="Please insert your address!" />
            <button class="order" @click="submitOrder()">Complete Order</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-success">Order has been made successfully</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      checkout: false,
      addressInfo: false,
      address: ""
    };
  },
  computed: {
    cartProducts() {
      return this.$store.state.cart.items;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    submitOrder() {
      axios
        .post("http://localhost:8000/api/order", {
          products: this.cartProducts,
          address: this.address
        })
        .then(response => {
          console.log(response.data);
          this.checkout = true;
          this.$store.dispatch("emptyCart");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.checkout {
  padding: 120px 200px;
  input {
    width: 100%;
    // border: none;
  }
  button {
    text-transform: uppercase;
    width: 200px;
    background-color: #333;
    color: white;
    height: 50px;
    border: none;
    margin: 30px 0;
    font-weight: 500;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    &:hover {
      color: #333;
      background-color: white;
      border: 1px solid #333;
    }
    &:focus {
      outline: none;
    }
  }
  .showAddress {
    transition: all 1s ease-in;
  }
}
</style>