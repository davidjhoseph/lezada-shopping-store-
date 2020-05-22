<template>
  <div class="container-fluid">
    <div class="hold">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="row tabs justify-content-center">
            <div class="col-md-2 text-center">
              <div :class="{'active' : activeTab == 'new'}" @click="activateTab('new')">New</div>
            </div>
            <div class="col-md-4 text-center">
              <div
                :class="{'active' : activeTab == 'popular'}"
                @click="activateTab('popular')"
              >Popular</div>
            </div>
            <div class="col-md-2 text-center">
              <div :class="{'active' : activeTab == 'sale'}" @click="activateTab('sale')">Sale</div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="activeTab=='new'" class="row justify-content-center mt-5">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-4" v-for="(product, i) in newProducts" :key="i">
              <product-box :product="product"></product-box>
            </div>
          </div>
        </div>
      </div>
      <div v-if="activeTab=='popular'" class="row justify-content-center mt-5">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-4" v-for="(product, i) in popProducts" :key="i">
              <product-box :product="product"></product-box>
            </div>
          </div>
        </div>
      </div>
      <div v-if="activeTab=='sale'" class="row justify-content-center mt-5">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-4" v-for="(product, i) in saleProducts" :key="i">
              <product-box :product="product"></product-box>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productbox from "./Productbox";
export default {
  data() {
    return {
      activeTab: "new"
    };
  },
  methods: {
    activateTab(tab) {
      this.activeTab = tab;
    }
  },
  computed: {
    newProducts() {
      return this.$store.state.products.filter(product => {
        return product.isNew;
      });
    },

    popProducts() {
      return this.$store.state.products.filter(product => {
        return product.isPopular;
      });
    },
    saleProducts() {
      return this.$store.state.products.filter(product => {
        return product.isSale;
      });
    }
  },
  components: {
    productBox: productbox
  }
};
</script>

<style scoped lang="scss">
.hold {
  font-size: 45px;
  font-weight: 400;
  color: #ccc;
  margin-top: 100px;
  .tabs {
    div {
      cursor: pointer;
    }
    .active {
      color: black;
    }
  }
}
</style>