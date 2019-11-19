<template>
<div class="cart">
    <div class="row">
        <div class="col-md-9" @click="closeCart()"></div>
        <div class="col-md-3">
            <div v-if="cartTotal>0" class="cartItems">
                <div class="cartHeader">
                    <h3>Cart</h3>
                    <div @click="closeCart()" class="plus">+</div>
                </div>
                <div class="cartMain">
                    <cart-box></cart-box>
                </div>
                <div class="subtotal">
                    <div>Subtotal:</div> <div>${{cartTotal}}.00</div>
                </div>
                <div class="buttons">
                    <router-link
                        :to="{name: 'cart'}"
                        exact
                    >
                        <button @click="closeCart">View Cart</button>
                    </router-link>
                    <router-link
                        :to="{name: 'checkout'}"
                        exact
                    >
                        <button>Chekout</button>
                    </router-link>
                </div>
                <div class="ml-3" :class="cartTotal<100? 'redtext' : 'greentext'">{{(cartTotal < 100 )? 'Free Shipping on All Orders Over $100!': 'You have qualified for free shipping'}}</div>
            </div>
            <div v-else class="cartItems">
                 <div class="cartHeader">
                    <h3>Cart</h3>
                    <div @click="closeCart()" class="plus">+</div>
                </div>
                <div>OOps! your Cart is currently empty, please scan through our products</div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Cartbox from './Cartbox'
    export default {
        computed: {
            cartTotal() {
                return this.$store.getters.cartTotal
            },
        },
        components: {
            cartBox: Cartbox
        },
        methods: {
            closeCart(){
                this.$store.state.viewCart = false;
            },
            
           
        }
    }
</script>
<style lang="scss" scoped>
.cart {
    position: fixed;
    top: 0;
    width: 100%;
    height:100%;
    background-color: rgba(0,0,0,0.3);
    z-index: 10000;
    .cartItems{
        width:100%;
        height: 1095px;
        background-color: #ffffff;
        padding: 0 30px;
        animation: slidein 0.7s ease-in;
        .cartMain{
            height: 500px;
            overflow-y: auto;
        }
        .subtotal{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            color: #333333;
            font-size: 18px;
            font-weight: 700;
            border-top: 1px solid lightgray;
            padding: 20px 0;
            border-bottom: 1px solid lightgray;
            line-height: 25px;
        }
        .buttons{
            text-align: center;
            margin: 40px 0;
            button{
                text-transform: uppercase;
                background-color: #333333;
                width: 95%;
                height: 40px;
                color: #ffffff;
                font-weight: 500;
                letter-spacing: 1px;
                margin: 10px auto;
                border: 1px solid #333333;
                transition: background-color 0.3s ease;
                &:hover{
                    background-color: #d3122a;
                    border-color: #d3122a;
                }
                &:focus{
                    outline: 0;
                }
            }
        }
        .redtext{
            color: #777777;
            font-weight: 400;
            font-size: 15px;
            line-height: 24px;
        }
        .greentext{
            color:#98d8ca;
            font-weight: 400;
            font-size: 15px;
            line-height: 24px;
        }
        .cartHeader{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid lightgray;
            h3{
                padding: 30px 0 10px 0;
                font-size: 18px;
                color: #333333;
                font-weight: 700;
            }
            .plus{
                font-size: 40px;
                color: #333333;
                font-weight: 500;
                transform: rotate(45deg);
                cursor: pointer;
                transition: all 0.5s ease;
                &:hover{
                    transform: rotate(135deg)
                }
            }
        }
    }
    @keyframes slidein {
        0%   {transform: translateX(600px);}
        100% {transform: translateX(0);}
    }
}
</style>