<template>
  <div class="savedbox">
      <div v-for="(product,i) in saved" :key="i" class="item border-bottom p-4">
        <div class="pic" :style="{'background-image': 'url(' + product.image + ')'}">
        </div>
        <div class="details">
            <div style="font-size: 20px;">{{product.name}}</div>
           <div class="price mt-3"> <span :class="{'slash' : product.discount, 'newp': product.discount}" class="mr-2">${{product.price}}.00</span> <span v-if="product.discount" class="newp">${{product.price - (product.discount/100 * product.price)}}.00</span></div>
        </div>
        <div class="close" @click="deleteProduct(product)">+</div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        saved() {
            return this.$store.state.saved.items
        },
    },
    methods: {
        deleteProduct(product) {
            let item = Object.assign({}, product);
            let saved = this.saved;
            var found = false;
            for(var i=0;i< saved.length; i++){
                if(saved[i].id === item.id){
                    found = true;
                    break;
                }
            }
            if(found){
                saved.forEach((prod)=>{
                    if(prod.id === item.id){
                    let index = saved.indexOf(prod);
                    saved.splice(index, 1)
                    }
                })
            }
        }
    }
}
</script>

<style  scoped lang="scss">
.savedbox{
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
            font-size: 10px;
            .quantity{
                font-size: 12px;
                color: #7e7e7e;
            }
            .price{
                font-size: 14px;
                .slash{
                    text-decoration: line-through;
                    color: #aaaaaa;
                    font-weight: 700;
                }
                .newp{
                    font-weight: 700;
                }
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