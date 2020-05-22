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
    // var user = JSON.parse(localStorage.getItem("user"));
    // console.log(user.data);
    if (localStorage.getItem("user") !== null) {
      var user = JSON.parse(localStorage.getItem("user"));
      this.$store.dispatch("getAuthenticatedUser", {
        user: user
      });
    }
    // localStorage.removeItem("token");
    // localStorage.removeItem("user");
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
