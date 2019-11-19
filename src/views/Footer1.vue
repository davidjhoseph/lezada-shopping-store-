<template>
    <div class="footer">
        <div class="container">
            <div class="row justify-content-between first">
                <div class="col-md-8 col-sm-12">
                    <div class="row links">
                        <div class="col-md-2 text-center text-md-left">
                            <a href="#">ABOUT</a>

                        </div>
                        <div class="col-md-3 text-center text-md-left">
                            <a href="#">Store Location</a>
                            
                        </div>
                        <div class="col-md-2 text-center text-md-left">
                            <a href="#">Contact</a>
                            
                        </div>
                        <div class="col-md-2 text-center text-md-left">
                            <a href="#">Support</a>
                            
                        </div>
                        <div class="col-md-2 text-center text-md-left">
                            <a href="#">Policy</a>
                            
                        </div>
                        <div class="col-md-1 text-center text-md-left">
                            <a href="#">FAQS</a>
                            
                        </div>
                            
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="row justify-content-end icons mr-1">
                        <div class="col-md-2">
                            <a href="twitter.com"><span class="mdi mdi-twitter"></span></a>
                        </div>
                        <div class="col-md-2">
                            <a href="facebook.com"><span class="mdi mdi-facebook"></span></a>
                        </div>
                        <div class="col-md-2">
                            <a href="instagram.com"><span class="mdi mdi-instagram"></span></a>
                        </div>
                        <div class="col-md-2">
                            <a href="youtube.com"><span class="mdi mdi-youtube"></span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-between mt-4 align-items-center">
                <div class="col-md-7 col-sm-12">
                    <div class="link"> © 2019 lezada. All Rights Reserved | <span style="font-weight:bold; color:black">(+00) 123 567990</span> | contact@lezada.com</div>
                </div>
                <div class="col-md-3 col-sm-12 text-right">
                        <img src="https://demo.hasthemes.com/lezada-preview/lezada/assets/images/icons/pay.png">
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
.footer{
    font-size:14px;
    height:350px;
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .first{
        letter-spacing:2px;
        text-transform: uppercase;
    
        .links a{
            color: #777777;
            &:hover{
                color: black;
            }
        }
        
        .icons span{
            cursor: pointer;
            font-size: 18px;
        }
        .icons a{
            color: black;
        }
    }
}
</style>