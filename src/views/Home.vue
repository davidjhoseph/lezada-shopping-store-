<template>
<div class="home">
    <div class="cart"></div>
    <top-nav></top-nav>
    <div style=" margin-top: 103px;"></div>
    <carousel></carousel>
    <nps></nps>
    <ban></ban>
    <bottom></bottom>
</div>

</template>

<script>
import nav from './Topnav'
import bottom from './Footer1'
import carousel from './Carousel'
import NPS from './NPS'
import Banner from './Banner'
import Cart from './Cart'
export default {
    components: {
        topNav: nav,
        bottom: bottom,
        carousel: carousel,
        nps: NPS,
        ban: Banner,
        cart: Cart
    },
    computed: {
        cart() {
            return this.$store.state.cart.items
        },
    }
}
</script>

<style scoped lang="scss">
* {
    padding:0;
    margin: 0;
    font-family:  "Work Sans", sans-serif;
    overflow: hidden;
}
.home{
    position: relative;
    // height: 4150px;
    // .cart{
    //     position: absolute;
    //     height: 100%;
    //     width: 100%;
    //     background-color: red;
    // }
}

</style>