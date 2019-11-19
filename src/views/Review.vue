<template>
<div class="mb-5">
  <div class="review">
      <div class="row">
          <div class="col-md-1">
              <div :style="{'background-image': 'url(' + pic + ')'}" class="dp"></div>
          </div>
           <div class="col-md-11">
               <div class="row mb-3 align-items-center">
                   <div class="col-md-2 name">{{name}}</div>
                   <div class="col-md-3 date">/ {{date}}</div>
               </div>
               <div class="row">
                   <div class="col detail">{{details}}
                   </div>
               </div>
           </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        pic: {
            type: String,
            required: true
        },
        details: {
            type: String,
            required: true
        }
    }
    // data() {
    //     return {
    //         reviews: Reviews
    //     }
    // }
}
</script>

<style lang="scss" scoped>
.review{
    padding: 50px 0;
    border-bottom: 1px solid lightgray;
    letter-spacing: 1px;
    .dp{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: red;
    }
    .name{
        color: #333;
        font-size: 18px;
        font-weight: 600;
    }
    .date{
        font-size: 14px;
    }
}
</style>