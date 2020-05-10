<template>
  <div class="row mt-3">
    <div class="col text-center">
      <div class="banner text-center">
        <div class="row justify-content-center">
          <div class="col-md-5">
            <img
              src="https://demo.hasthemes.com/lezada-preview/lezada/assets/images/banners/cabinet.jpg"
              alt="banner"
            />
          </div>
        </div>
        <div class="links">
          <a href="#" class="mr-5">#summer</a>
          <a href="#" class="mr-5">#shelf</a>
          <a href="#">#sale</a>
        </div>
        <div class="text">
          Up To 40% Off Final Sale Items. Caught
          <br />in the moment!
        </div>
        <button>SHOP NOW</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created: function() {
    this.getTest();
  },
  methods: {
    getTest() {
      axios
        .get("http://localhost:8000/test")
        .then(response => {
          console.log(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped lang="scss">
.banner {
  margin: auto;
  img {
    width: 100%;
  }
  .links {
    margin-top: 50px;
    a {
      color: #7e7e7e;
      font-size: 20px;
    }
  }
  .text {
    font-size: 40px;
    margin-top: 50px;
    letter-spacing: 1px;
    width: 100%;
    padding: 5px;
  }
  button {
    width: 200px;
    background-color: #333;
    color: white;
    height: 50px;
    border: none;
    margin: 30px 0;
    font-weight: 500;
    letter-spacing: 1px;
    transition: all 0.3s ease;
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
</style>