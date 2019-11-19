<template>

    <div class="cartbox">
        <div v-for="(product,i) in cart" :key="i" class="item border-bottom p-4">
            <div class="pic" :style="{'background-image': 'url(' + product.image + ')'}">
            </div>
            <div class="details">
                <div style="font-size: 20px;">{{product.name}}</div>
                <div style="font-weight: bold" ><span class="quantity">{{product.quantity}} X</span> ${{product.discount? product.price-((product.discount/100)*product.price): product.price}}</div>
            </div>
            <div @click="deleteProduct(product)" class="close">+</div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        cart() {
            return this.$store.state.cart.items
        },
    },
    methods: {
        deleteProduct(product) {
            let item = Object.assign({}, product);
            let cart = this.cart;
            var found = false;
            for(var i=0;i< cart.length; i++){
            if(cart[i].id === item.id){
                found = true;
                break;
            }
            }
            if(found){
            cart.forEach((prod)=>{
                if(prod.id === item.id){
                let index = cart.indexOf(prod);
                cart.splice(index, 1)
                }
            })
            }
        }
    }
}
</script>

<style  scoped lang="scss">
.cartbox{
    width: 100%;
    height: 100px;
    background-color: transparent;
    color: #333333;
    .item{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: relative;
        .details{
            flex:2;
                .quantity{
                    font-size: 12px;
                    color: #7e7e7e;
                }
        }
        .pic{
            width: 30%;
            height: 150px;
            margin-right: 30px;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat
           
        }
        .close{
            transform: rotate(45deg);
            cursor: pointer;
            position: absolute;
            right: 10px;
            top: 10px;
        }
    }
}
</style>