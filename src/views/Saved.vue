<template>
<div class="saved">
    <div class="row">
        <div class="col-md-9" @click="closeSaved()"></div>
        <div class="col-md-3">
            <div v-if="wishlist.length>0" class="savedItems">
                <div class="saveHeader">
                    <h3>Saved</h3>
                    <div @click="closeSaved()" class="plus">+</div>
                </div>
                <div class="savedMain">
                    <saved-box></saved-box>
                </div>
                <div class="buttons">
                    <button>View Wishlist</button>
                </div>
            </div>
            <div v-else class="savedItems">
                <div class="saveHeader">
                    <h3>Saved</h3>
                    <div @click="closeSaved()" class="plus">+</div>
                </div>
                <div>OOps! your Wishlist is currently empty, please scan through our products</div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Savedbox from './Savedbox'
    export default {
        computed: {
            viewsaved() {
            return this.$store.state.viewSaved
            },
            wishlist(){
                return this.$store.state.saved.items 
            } 
        },
        components: {
            savedBox: Savedbox
        },
        methods: {
            closeSaved(){
                this.$store.state.viewSaved = false;
            }
        }
    }
</script>
<style lang="scss" scoped>
.saved {
    position: fixed;
    top: 0;
    width: 100%;
    height:100%;
    background-color: rgba(0,0,0,0.3);
    z-index: 10000;
    .savedItems{
        width:100%;
        height: 1095px;
        background-color: #ffffff;
        padding: 0 30px;
        animation: slide 0.7s ease-in;
        .savedMain{
            height: 500px;
            overflow-y: auto;
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
        .saveHeader{
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
    @keyframes slide {
        0%   {transform: translateX(600px);}
        100% {transform: translateX(0);}
    }
}
</style>