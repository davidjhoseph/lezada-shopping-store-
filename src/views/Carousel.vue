<template>
    <div class="home-content">
        <div ref="slider" @mouseenter="showArrows = true" @mouseleave="showArrows = false" class="carousel-holder">
            <div class="carousel second text-center text-md-left px-3">
                <div class="carousel-heading mb-3">HANDMADE</div>
                <div class="mb-5" style="font-size:45px;">
                    Large, <br>
                    Food board
                </div>
                <button class="mt-2"> Shop Now</button>
            </div>
            <div class="carousel first text-center text-md-left px-3"> 
                <div class="carousel-heading mb-3">HANDMADE</div>
                <div class="mb-5" style="font-size:45px;">
                    Large, <br>
                    Food board
                </div>
                <button class="mt-2"> Shop Now</button>
            </div>
             
            <div class="carousel third text-center text-md-left px-3">
                <div class="carousel-heading mb-3">HANDMADE</div>
                <div class="mb-5" style="font-size:45px;">
                    Large, <br>
                    Food board
                </div>
                <button class="mt-2"> Shop Now</button>
            </div>
            <div v-if="showArrows">
                <span  class="mdi mdi-chevron-left leftArrow"></span>
                <span class="mdi mdi-chevron-right rightArrow"></span>
            </div>
        </div>
        
    </div>
    <!-- carousel images
    https://demo.hasthemes.com/lezada-preview/lezada/assets/images/slider/banner-carousel-3.jpg 
    https://demo.hasthemes.com/lezada-preview/lezada/assets/images/slider/banner-carousel-1.jpg
    -->
</template>
<script>
export default {
    data() {
        return {
            showArrows: false,
        }
    },
    // methods: {
    //     showRef() {
    //         this.$refs.slider.style.transform= 'translateX(30%)';
    //     },
    //     showRefLeft() {
    //         this.$refs.slider.style.transform= 'translateX(-30%)';
    //     }
    // }
}
</script>
<style lang="scss" scoped>

.home-content {
    .carousel-holder{
            position: relative;
            display: flex;
            flex-wrap: nowrap;
            // width: 100%;
            .leftArrow{
                position: absolute;
                top: 200px;
                left: 350px;
                font-size: 80px;
                opacity: 0.3;
                cursor: pointer;
            }
            .rightArrow{
                position: absolute;
                top: 200px;
                right: 350px;
                font-size: 80px;
                opacity: 0.3;
                cursor: pointer;

            }
        .carousel {
            padding: 80px;
            width: 100%;
            // margin:0 100px;
            letter-spacing: 2px;
            font-weight: 700;
            // margin: 0 150px;
            height: 450px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            .carousel-heading{
                color:#c5a374;
            }
            button{
                width:200px;
                height:50px;
                background-color:black;
                color: white;
                border: none;
                text-transform: uppercase;
                font-weight: bold;
                transition: all 0.3s ease-in;
                &:hover{
                    background-color: white;
                    color: black;
                    border: 1px solid black;
                }
            }
            
        }
        .first{
            background-image: url(https://demo.hasthemes.com/lezada-preview/lezada/assets/images/slider/banner-carousel-2.jpg);
        }
        .second{
            background-image: url( https://demo.hasthemes.com/lezada-preview/lezada/assets/images/slider/banner-carousel-3.jpg );
        }
        .third{
            background-image: url(https://demo.hasthemes.com/lezada-preview/lezada/assets/images/slider/banner-carousel-1.jpg);
        }
    }
}
</style>