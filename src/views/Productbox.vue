<template>
  <div @mouseenter="hovered = true" @mouseleave="hovered = false" class="box">
    <router-link :to="{name: 'product', params: {productId: product.id}}" exact>
      <div
        class="pic"
        :style="{'background-image': product.hoveredimage && hovered ? 'url(' + product.hoveredimage +')' : 'url(' + product.image +')' }"
      >
        <div v-if="hovered" class="element-holder">
          <div @click="addToSaved(product)" class="element">
            <i class="material-icons">{{isSaved? 'favorite': 'favorite_border'}}</i>
          </div>
          <div class="element">
            <i class="material-icons">shuffle</i>
          </div>
          <div class="element">
            <i class="material-icons">search</i>
          </div>
        </div>
        <div v-if="product.discount" class="discount">-{{product.discount}}%</div>
      </div>
    </router-link>
    <div class="product-details">
      <div v-if="!hovered" class="name mt-3">{{product.name}}</div>
      <div v-if="hovered" @click="addToCart(product)" class="adding mt-3">+ Add to cart</div>
    </div>
    <div class="price mt-3">
      <span :class="{'slash' : product.discount}" class="mr-2">${{product.price}}.00</span>
      <span v-if="product.discount">${{product.price - (product.discount/100*product.price)}}.00</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hovered: false
      // isSaved: false
    };
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    isSaved() {
      return this.saved.find(item => item.id == this.product.id);
    },
    cart() {
      return this.$store.state.cart.items;
    },
    saved() {
      return this.$store.state.saved.items;
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit("addToCart", product);
    },
    addToSaved(product) {
      this.$store.commit("addToSaved", product);
    }
  }
};
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  height: 700px;
  color: black;
  font-size: 16px;
  transition: all 1s ease;
  .pic {
    height: 80%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;

    .element-holder {
      position: absolute;
      top: 10px;
      right: 20px;
      .element {
        width: 40px;
        height: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
        margin-top: 10px;
        color: #7e7e7e;
        cursor: pointer;
        animation: mymove 0.7s ease;
      }
    }
    .discount {
      display: flex;
      flex-direction: column;
      position: absolute;
      justify-content: center;
      align-items: center;
      color: white;
      top: 10px;
      left: 10px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #98d8ca;
    }
  }
  .product-details {
    transition: all 5s ease;
    .name {
      font-size: 20px;
      letter-spacing: 1px;
      color: #777777;
      font-weight: 500;
    }
    .adding {
      font-size: 20px;
      color: #d3122a;
      font-weight: 700;
      cursor: pointer;
      animation: mymove 0.7s ease;
    }
  }
  .price {
    font-size: 14px;
    font-weight: 600;

    .slash {
      text-decoration: line-through;
      color: #aaaaaa;
    }
  }
  @keyframes mymove {
    0% {
      transform: translateY(20px);
      opacity: 0;
    }
    // 50%  {transform: translateY(50px); opacity: 0.5;}
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>