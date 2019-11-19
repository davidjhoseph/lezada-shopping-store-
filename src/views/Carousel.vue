<template>
    <div class="home-content">
        <div class="row justify-content-center">
            <div class="col-md-5">
                <div class="flipper text-center text-md-left px-3">
                    <div>
                        <div class="flipper-heading mb-3">HANDMADE</div>
                        <div class="mb-5" style="font-size:45px;">
                            Large, <br>
                            Food board
                        </div>
                        <button class="mt-2"> Shop Now</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

.home-content {
    .flipper {
        display: flex;
        align-items: center;
        height: 700px;
        background-image: url(https://demo.hasthemes.com/lezada-preview/lezada/assets/images/slider/banner-carousel-2.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        letter-spacing: 2px;
        font-weight: 700;
        .flipper-heading{
            color:#c5a374;
        }
        button{
            width:200px;
            height:50px;
            background-color:black;
            color: white;
            border: none;
            text-transform: uppercase;
            font-weight: bold
        }
        
    }
   
}
</style>