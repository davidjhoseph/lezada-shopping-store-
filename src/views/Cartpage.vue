<template>
  <div>
    <div class="bannerHeader">
      <div class="banner">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="headerdetails">
                <h1>Shop</h1>
                <span class="links">
                  <router-link :to="{name:'home'}" exact tag="span">
                    <span>Home</span>
                  </router-link>/
                  <router-link :to="{name:'cart',}" active-class="active" exact tag="span">
                    <span>Shopping Cart</span>
                  </router-link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div v-if="cart.length>0" class="col-8">
          <table class="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product,i) in cart" :key="i">
                <td>
                  <div class="pictd">
                    <router-link :to="{name: 'product', params: {productId: product.id}}">
                      <div class="pic" :style="{'background-image': 'url(' + product.image + ')'}"></div>
                    </router-link>
                    <div class="picdetails">
                      <router-link
                        :to="{name: 'product', params: {productId: product.id}}"
                        tag="div"
                      >
                        <div class="name">{{product.name}}</div>
                      </router-link>
                      <div class="color">Color: Black</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="price">
                    <div class="mr-2" :class="{'slash': product.discount}">${{product.price}}.00</div>
                    <div
                      v-if="product.discount"
                    >${{product.price - (product.discount/100 * product.price)}}.00</div>
                  </div>
                </td>
                <td>
                  <div class="quantity">
                    <div class="value">
                      <div>
                        <i @click="reduceQuantity(product)" class="material-icons">remove</i>
                      </div>
                      <div class="quant">
                        <input type="number" v-model="product.quantity" />
                      </div>
                      <div>
                        <i @click="product.quantity++" class="material-icons">add</i>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="total">${{ product.price * product.quantity}}.00</div>
                </td>
                <td>
                  <div class="remove">
                    <div @click="deleteProduct(product)" class="close">
                      <div class="plus">+</div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="coupon">
            <div class="couponCode">
              <input type="text" placeholder="Enter your coupon code" />
              <button>Apply Coupon</button>
            </div>
            <button>Update Cart</button>
          </div>
          <div class="row justify-content-end">
            <div class="col-4">
              <div class="cartTotalBox">
                <h1 class="text-center">Cart totals</h1>
                <div class="row justify-content-between">
                  <div class="col-4 cartTotaltitle">SUBTOTAL</div>
                  <div class="col-4 text-right cartTotalPrice">${{cartTotal}}</div>
                </div>
                <div class="row mt-3 justify-content-between">
                  <div class="col-4 cartTotaltitle">DISCOUNT</div>
                  <div class="col-4 text-right cartTotalPrice">${{discount(product)}}</div>
                </div>
                <div class="row mt-5 justify-content-between">
                  <div class="col-4 cartTotaltitle">TOTAL</div>
                  <div class="col-4 text-right cartTotalPrice1">${{cartTotal - discount(product)}}</div>
                </div>
                <div class="row">
                  <div class="col">
                    <router-link :to="{name:'checkout'}">
                      <button>proceed to checkout</button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-else
          class="col-8 no-product Text-center mt-5"
        >Oops! there is currently no Item in your cart. Please scan through our products.</div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import Footer from "./Footer1";
export default {
  components: {
    foot: Footer
  },
  computed: {
    cart() {
      return this.$store.state.cart.items;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    }
  },
  methods: {
    reduceQuantity(product) {
      if (product.quantity > 1) {
        product.quantity--;
      }
    },
    updateCart() {},
    discount(product) {
      let discount = 0;
      this.cart.forEach(item => {
        if (item.discount) {
          discount += (item.discount / 100) * item.price;
        }
      });
      return discount;
    },
    deleteProduct(product) {
      let item = Object.assign({}, product);
      let cart = this.cart;
      var found = false;
      for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === item.id) {
          found = true;
          break;
        }
      }
      if (found) {
        cart.forEach(prod => {
          if (prod.id === item.id) {
            let index = cart.indexOf(prod);
            cart.splice(index, 1);
          }
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.bannerHeader {
  padding-top: 70px;
  .active {
    color: #333333;
  }
  .banner {
    width: 100%;
    height: 260px;
    background-image: url(https://demo.hasthemes.com/lezada-preview/lezada/assets/images/breadcrumb-bg/background-heading-page.png);
    background-size: cover;
    background-position: center center;
    .headerdetails {
      height: 260px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-transform: uppercase;
      letter-spacing: 1px;
      h1 {
        font-size: 50px;
        margin-bottom: 20px;
      }
      .links {
        color: #999999;
        text-decoration: none;
        font-weight: 500;
        span {
          cursor: pointer;
        }
      }
    }
  }
}

table {
  margin-top: 100px;
  width: 100%;
  border: 1px solid #ededed;
  thead {
    text-transform: uppercase;
    font-size: 18px;
    color: #333;
    // font-weight: 100;
  }
  tbody {
    tr {
      // width: 100%;
      .pictd {
        display: flex;
        flex-direction: row;
        align-items: center;
        .pic {
          width: 100px;
          height: 150px;
          // margin-right: 30px;
          margin: 10px 30px 10px 10px;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }
        .picdetails {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
      .price {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 170px;
        color: #212529;
        font-weight: 600;
        .slash {
          text-decoration: line-through;
          color: #aaaaaa;
        }
      }
      .quantity {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 170px;
        color: #212529;
      }
      .total {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 170px;
        color: #212529;
        font-weight: 600;
        width: 40px;
      }
      .remove {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 170px;
        font-weight: 600;
        .close {
          width: 50px;
          height: 50px;
          border: 2px solid #e6e6e6;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ababab;
          cursor: pointer;
          font-weight: 0;
          .plus {
            transform: rotate(45deg);
            font-size: 40px;
            line-height: 41px;
            font-weight: 0;
          }
          &:hover {
            color: #dc3545 !important;
            border: 2px solid #dc3545;
          }
        }
      }
      .name {
        cursor: pointer;
        color: #777777;
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 20px;
        &:hover {
          color: #212529;
        }
      }
      .color {
        color: #ababab;
        font-size: 18px;
      }
      .value {
        width: 55%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 50px;
        border-bottom: 2px solid #ccc;
        i {
          cursor: pointer;
          font-size: 16px;
        }
        .quant {
          font-size: 16px;
          input {
            border: none;
            margin-bottom: 10px;
            width: 100px;
            text-align: center;
            color: #212529;
            font-weight: 600;
            &:focus {
              outline: none;
            }
          }
          input::-webkit-inner-spin-button,
          input::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }
      }
    }
  }
}
.coupon {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 15px 0;
  border-bottom: 1px solid #ededed;
  .couponCode {
    display: flex;
    flex-direction: row;
    align-items: center;
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
  input {
    border: none;
    border-bottom: 2px solid #cccccc;
    width: 350px;
    padding: 10px 0;
    transition: all 0.7s ease;
    font-size: 16px;
    margin-right: 30px;
    &:hover {
      border-bottom: 2px solid #333;
    }
    &:focus {
      outline: none;
      border-bottom: 2px solid #333;
    }
  }
}
.cartTotalBox {
  width: 400px;
  height: 420px;
  background-color: #f7f7f7;
  padding: 40px;
  margin: 100px 0;
  letter-spacing: 1px;
  h1 {
    color: #212529;
    margin-bottom: 80px;
  }
  .cartTotaltitle {
    color: #212529;
    font-size: 18px;
    font-weight: 600;
  }
  .cartTotalPrice {
    color: #212529;
    font-size: 15px;
    font-weight: 600;
  }
  .cartTotalPrice1 {
    color: #212529;
    font-size: 25px;
    font-weight: 600;
  }
  button {
    text-transform: uppercase;
    width: 100%;
    background-color: #333;
    color: white;
    height: 50px;
    border: none;
    margin: 50px 0;
    font-weight: 500;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    margin-right: 20px;
    &:hover {
      color: #333;
      background-color: white;
      border: 1px solid #333;
    }
    &:focus {
      outline: none;
    }
  }
}
.no-product {
  height: 25vh;
}
</style>