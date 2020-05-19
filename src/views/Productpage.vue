<template>
  <div class="productPage">
    <div class="bannerHeader">
      <div class="banner">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="headerdetails">
                <h1>Shop</h1>
                <span class="links">
                  <router-link :to="{name:'home'}" exact tag="span">
                    <span>Home</span>
                  </router-link>/
                  <router-link :to="{name:'cart'}" exact tag="span">
                    <span>Shop</span>
                  </router-link>/
                  <router-link :to="{name:'product'}" exact tag="span" active-class="active">
                    <span>Shop Product</span>
                  </router-link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="prod">
      <div class="container border-bottom" style="padding-bottom: 100px;">
        <div class="row">
          <div class="col-md-6">
            <div class="pic" :style="{'background-image': 'url(' + product.image + ')'}">
              <div class="icons">
                <div @click="addToSaved(product)" class="element">
                  <i class="material-icons">{{isSaved? 'favorite': 'favorite_border'}}</i>
                </div>
                <i class="material-icons">face</i>
              </div>
              <div class="hot">hot</div>
            </div>
            <div class="imageCollection">
              <div
                @click="changeImage(product,'https://demo.hasthemes.com/lezada-preview/lezada/assets/images/products/furniture-7-1-600x800.jpg')"
                class="image"
                :style="{'background-image': 'url(https://demo.hasthemes.com/lezada-preview/lezada/assets/images/products/furniture-7-1-600x800.jpg)'}"
              ></div>
              <div
                @click="changeImage(product,product.hoveredImage)"
                class="image"
                :style="{'background-image': 'url(' + product.hoveredImage + ')'}"
              ></div>
              <div
                @click="changeImage(product,'https://demo.hasthemes.com/lezada-preview/lezada/assets/images/products/furniture-5-1-600x800.jpg')"
                class="image"
                :style="{'background-image': 'url(https://demo.hasthemes.com/lezada-preview/lezada/assets/images/products/furniture-5-1-600x800.jpg)'}"
              ></div>
              <div
                @click="changeImage(product,'https://demo.hasthemes.com/lezada-preview/lezada/assets/images/products/furniture-5-2-600x800.jpg')"
                class="image"
                :style="{'background-image': 'url(https://demo.hasthemes.com/lezada-preview/lezada/assets/images/products/furniture-5-2-600x800.jpg)'}"
              ></div>
            </div>
          </div>
          <div class="col-md-6 rightSide">
            <div class="name">{{product.name}}</div>
            <div class="price mt-3">
              <span :class="{'slash' : product.discount}" class="mr-2">${{product.price}}.00</span>
              <span
                v-if="product.discount"
              >${{product.price - (product.discount/100*product.price)}}.00</span>
            </div>
            <div class="description">
              Hurley Dry-Fit Chino Short. Men's chino short. Outseam Length: 19 Dri-FIT Technology helps keep you dry and comfortable. Made with sweat-wicking fabric.
              Fitted waist with belt loops. Button waist with zip fly provides a classic look and feel.
              Back welt pockets and coin pocket for storage. Dual side seam pockets. Heat transferred logos. 70% nylon 24% polyester 6% spandex. Imported.
            </div>
            <div class="size">
              <div class="row align-items-center">
                <div class="col-md-3">
                  <span class="title">Size:</span>
                </div>
                <div class="col-md-9">
                  <div class="value">
                    <div>L</div>
                    <div>M</div>
                    <div>S</div>
                    <div>XS</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="row mt-4 align-items-center">
                <div class="col-md-3">
                  <span class="title">Color:</span>
                </div>
                <div class="col-md-9">
                  <div class="value">
                    <div class="circle black"></div>
                    <div class="circle blue"></div>
                    <div class="circle yellow"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="quantity">
              <div class="row mt-4 align-items-center">
                <div class="col-md-3">
                  <span class="title">Quantity:</span>
                </div>
                <div class="col-md-9">
                  <div class="value">
                    <div>
                      <i @click="reduceQuantity(product)" class="material-icons">remove</i>
                    </div>
                    <div class="quant">
                      <input type="number" v-model="product.quantity" />
                    </div>
                    <div>
                      <i @click="product.quantity++" class="material-icons">add</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span class="buttons">
              <button class="addToCart" @click="addToCart(product)">ADD TO CART</button>
              <button class="shuffle">
                <i class="material-icons">shuffle</i>
              </button>
            </span>
            <div class="logos">
              <img
                src="https://demo.hasthemes.com/lezada-preview/lezada/assets/images/brands/brand-1.png"
              />
              <img
                src="https://demo.hasthemes.com/lezada-preview/lezada/assets/images/brands/brand-2.png"
              />
            </div>
            <div class="descrip my-1 mt-3">
              <div class="row align-items-center">
                <div class="col-md-5">
                  <span class="title">SKU:</span>
                </div>
                <div class="col-md-7">
                  <div class="value">12345</div>
                </div>
              </div>
            </div>
            <div class="descrip my-1">
              <div class="row align-items-center">
                <div class="col-md-5">
                  <span class="title">Categories:</span>
                </div>
                <div class="col-md-7">
                  <div class="value">Fashion, Men, Sunglasses</div>
                </div>
              </div>
            </div>
            <div class="descrip my-1">
              <div class="row align-items-center">
                <div class="col-md-5">
                  <span class="title">Tags:</span>
                </div>
                <div class="col-md-7">
                  <div class="value">Fashion, Men</div>
                </div>
              </div>
            </div>
            <div class="descrip my-1">
              <div class="row align-items-center">
                <div class="col-md-5">
                  <span class="title">Share on:</span>
                </div>
                <div class="col-md-7">
                  <div class="value">
                    <span class="social">
                      <a href="twitter.com">
                        <span class="mdi mdi-facebook mr-4"></span>
                      </a>
                      <a href="facebook.com">
                        <span class="mdi mdi-twitter mr-4"></span>
                      </a>
                      <a href="instagram.com">
                        <span class="mdi mdi-google mr-4"></span>
                      </a>
                      <a href="youtube.com">
                        <span class="mdi mdi-whatsapp mr-4"></span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="tabsHolder">
            <div class="row">
              <div
                @click="tabClicked('desc')"
                class="col-md-3 tabs text-center"
                :class="{'activeTab': tab == 'desc'}"
              >Description</div>
              <div
                @click="tabClicked('add')"
                class="col-md-6 tabs text-center"
                :class="{'activeTab': tab == 'add'}"
              >Additional Information</div>
              <div
                @click="tabClicked('rev')"
                class="col-md-3 tabs text-center"
                :class="{'activeTab': tab == 'rev'}"
              >Reviews</div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="tab=='desc'">
        <div class="row justify-content-center descripSection tabDetails tabStuff">
          <div class="col-md-6">
            Hurley Dry-Fit Chino Short. Men’s chino short. Outseam Length: 19 Dri-FIT Technology helps keep you dry and comfortable.
            Made with sweat-wicking fabric. Fitted waist with belt loops. Button waist with zip fly provides a classic look and feel.
            Back welt pockets and coin pocket for storage. Dual side seam pockets. Heat transferred logos. 70% nylon 24% polyester 6% spandex. Imported.
          </div>
        </div>
        <div class="row">
          <div class="col">
            <foot></foot>
          </div>
        </div>
      </div>
      <div v-if="tab=='add'">
        <div class="row justify-content-center addSection tabDetails tabStuff">
          <div class="col-md-4">
            <div class="add add1">
              <span class="title1">Size</span>
              <span>L, M, S, XS</span>
            </div>
            <div class="add">
              <span class="title">Color</span>
              <span>Black, Blue, Brown</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <foot></foot>
          </div>
        </div>
      </div>
      <div v-if="tab=='rev'">
        <div class="row justify-content-center reviewSection tabDetails tabStuff">
          <div class="col-md-6">
            <div class="text-center header">3 reviews for High-waist Trousers</div>
            <div v-for="(review, i) in reviews" :key="i">
              <rev
                :name="review.name"
                :date="review.date"
                :pic="review.pic"
                :details="review.details"
              ></rev>
            </div>
            <div class="addingReview">
              <h3 class="text-center">Add a review</h3>
              <div
                class="text-center"
              >Your email address will not be published. Required fields are marked *</div>
              <div class="form">
                <div class="inputs">
                  <input type="text" placeholder="Name *" />
                  <input type="email" placeholder="Email *" />
                </div>
                <textarea placeholder="Your review *" cols="30" rows="10"></textarea>
                <button class="text-center">SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <foot></foot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import products from "../store/products";
import Reviews from "../store/reviews";
import ReviewStore from "./Review";
import Footer from "./Footer1";

export default {
  data() {
    return {
      productId: null,
      tab: "desc",
      products: [],
      reviews: Reviews
    };
  },
  components: {
    rev: ReviewStore,
    foot: Footer
  },
  mounted() {
    this.productId = this.$route.params.productId;
    this.initialize();
  },
  computed: {
    getProducts() {
      return this.$store.state.products;
    },
    product() {
      let prod = this.products.filter(item => item.id == this.productId);
      return prod[0];
    },
    saved() {
      return this.$store.state.saved.items;
    },
    isSaved() {
      return this.saved.find(item => item.id == this.product[0].id);
    }
  },
  methods: {
    initialize() {
      this.$store.dispatch("getProducts").then(() => {
        this.addQuantity();
      });

      //this.addQuantity();
    },
    addToSaved(product) {
      this.$store.commit("addToSaved", product);
    },
    addQuantity() {
      let newProduct = [];
      this.getProducts.forEach(item => {
        newProduct.push({
          ...item,
          quantity: 1
        });
      });
      this.products = newProduct;
      //   console.log(this.$store.state.products);
    },
    tabClicked(tab) {
      this.tab = tab;
    },
    // populate(){
    //     items = [];
    //     this.getProducts.filter(item=>{})
    // },
    reduceQuantity(product) {
      if (product.quantity > 1) {
        product.quantity--;
      }
    },
    addToCart(product) {
      this.$store.commit("addProductToCart", product);
      // let toast = this.$toasted.show( product.name + " " + "has been added to cart", {
      // theme: "toasted-primary",
      // position: "bottom-right",
      // duration : 1500
      // });
    },
    changeImage(product, img) {
      product.image = img;
    }
  }
};
</script>

<style lang="scss" scoped>
.productPage {
  .active {
    color: #333333;
  }
  .bannerHeader {
    padding-top: 70px;
    .banner {
      width: 100%;
      height: 260px;
      background-image: url(https://demo.hasthemes.com/lezada-preview/lezada/assets/images/breadcrumb-bg/background-heading-page.png);
      background-size: cover;
      background-position: center;
      .headerdetails {
        height: 260px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-transform: uppercase;
        letter-spacing: 1px;
        h1 {
          font-size: 50px;
          margin-bottom: 20px;
        }
        .links {
          color: #999999;
          text-decoration: none;
          font-weight: 500;
          span {
            cursor: pointer;
          }
        }
      }
    }
  }
  .prod {
    padding: 100px 0 50px 0;
    .imageCollection {
      width: 100%;
      height: 150px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-top: 30px;
      // background-color: red;
      .image {
        width: 23%;
        height: 100%;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        &:focus {
          border: 1px solid black;
        }
      }
    }
    .pic {
      width: 100%;
      height: 835px;
      margin-bottom: 20px;
      background-size: cover;
      background-repeat: no-repeat;
      position: relative;
      .hot {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 20px;
        left: 20px;
        background-color: #c61932;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        color: white;
        font-weight: bold;
      }
      .icons {
        position: absolute;
        right: 20px;
        top: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        i {
          margin-bottom: 10px;
          font-size: 35px;
          color: #7e7e7e;
          cursor: pointer;
        }
      }
    }
    .rightSide {
      padding-left: 30px;
      .name {
        font-size: 30px;
      }
      .price {
        font-size: 20px;
        font-weight: 600;
        .slash {
          text-decoration: line-through;
          color: #aaaaaa;
        }
      }
      .description {
        color: #777777;
        font-size: 18px;
        text-align: justify;
        padding: 30px 0;
      }
      .size,
      .quantity,
      .color {
        .title {
          font-size: 20px;
          margin-right: 100px;
          color: #333;
          font-weight: 500;
        }
      }
      .size {
        .value {
          color: #ababab;
          width: 60%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          height: 50px;
          font-size: 20px;
          .social {
            a {
              color: #ababab;
            }
          }
        }
      }
      .color {
        .value {
          width: 35%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          height: 50px;
          .circle {
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
          .black {
            background-color: #333;
          }
          .blue {
            background-color: #1e73be;
          }
          .yellow {
            background-color: #dd9933;
          }
        }
      }
      .quantity {
        .value {
          width: 50%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          height: 50px;
          border-bottom: 3px solid #ccc;
          i {
            cursor: pointer;
          }
          .quant {
            font-size: 20px;
            input {
              border: none;
              margin-bottom: 10px;
              width: 100px;
              text-align: center;
              &:focus {
                outline: none;
              }
            }
            input::-webkit-inner-spin-button,
            input::-webkit-outer-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
          }
        }
      }
      .buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 15px 0;
        .addToCart {
          width: 200px;
          background-color: #333;
          color: white;
          height: 50px;
          border: none;
          margin: 30px 0;
          font-weight: 500;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          margin-right: 20px;
          &:hover {
            color: #333;
            background-color: white;
            border: 1px solid #333;
          }
          &:focus {
            outline: none;
          }
        }
        .shuffle {
          width: 50px;
          background-color: white;
          color: #d8d8d8;
          height: 50px;
          border: 1px solid #d8d8d8;
          margin: 30px 0;
          font-weight: 500;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          &:hover {
            color: white;
            background-color: #333;
            border: 1px solid #333;
          }
          &:focus {
            outline: none;
          }
        }
      }
      .logos {
        width: 100%;
        height: 150px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-bottom: 40px;
        border-bottom: 1px solid lightgray;
        img {
          width: 25%;
          margin-top: 30px;
        }
      }
      .descrip {
        .title {
          font-size: 18px;
          margin-right: 100px;
          color: #333;
          font-weight: 600;
        }
        .value {
          color: #ababab;
          width: 70%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          height: 50px;
          font-size: 16px;
          .social {
            a {
              color: #ababab;
            }
          }
        }
      }
    }
  }
  .reviewSection {
    min-height: 1250px;
  }

  .tabsHolder {
    margin: 80px 0 70px 0;
    .tabs {
      font-size: 28px;
      color: #ababab;
      cursor: pointer;
    }
    .activeTab {
      color: #333;
    }
  }
  .tabStuff {
    width: 100%;
    height: 20px;
  }
  .tabDetails {
    font-size: 18px;
    color: #777777;
    margin-bottom: 200px;

    // width: 100%;
    .add {
      padding: 10px 0;
      border-bottom: 1px solid #ededed;
      border-top: 1px solid #ededed;
      .title {
        color: #333;
        margin-right: 280px;
      }
      .title1 {
        color: #333;
        margin-right: 320px;
      }
    }
    .add1 {
      border-bottom: none;
    }
  }
  .header {
    font-size: 25px;
    color: #333;
  }
  .addingReview {
    h3 {
      color: #333;
      margin-bottom: 20px;
    }
    .form {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 530px;
      justify-content: space-around;
      .inputs {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        input {
          border: none;
          margin: 30px 0 50px 0;
          border-bottom: 2px solid #cccccc;
          width: 48%;
          padding: 20px 0;
          transition: all 0.7s ease;
          font-size: 16px;
          &:hover {
            border-bottom: 2px solid #333;
          }
          &:focus {
            outline: none;
            border-bottom: 2px solid #333;
          }
        }
      }
      textarea {
        border: none;
        border-bottom: 2px solid #cccccc;
        transition: all 0.7s ease;
        font-size: 16px;
        &:hover {
          border-bottom: 2px solid #333;
        }
        &:focus {
          outline: none;
          border-bottom: 2px solid #333;
        }
      }
      button {
        width: 150px;
        background-color: #333;
        color: white;
        height: 50px;
        border: none;
        margin: 30px 0;
        font-weight: 500;
        letter-spacing: 1px;
        transition: all 0.3s ease;
        margin-right: 20px;
        margin: auto;
        &:hover {
          color: #333;
          background-color: white;
          border: 1px solid #333;
        }
        &:focus {
          outline: none;
        }
      }
    }
  }
}
</style>