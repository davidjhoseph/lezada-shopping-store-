<template>
  <div>
    <top-nav></top-nav>
    <router-view />
  </div>
</template>
<script>
import Topnav from "./views/Topnav";
export default {
  created: function() {
    this.fetchProducts();
  },
  components: {
    topNav: Topnav
  },
  methods: {
    fetchProducts() {
      this.$store.dispatch("getProducts");
    }
  }
};
</script>

<style lang="scss">
</style>
