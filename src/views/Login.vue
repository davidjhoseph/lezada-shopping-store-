<template>
  <div class="login">
    <div class="bannerHeader">
      <div class="banner">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="headerdetails">
                <h1>Login</h1>
                <span class="links">
                  <router-link :to="{name:'home'}" exact tag="span">
                    <span>Home</span>
                  </router-link>/
                  <router-link :to="{name:'login',}" active-class="active" exact tag="span">
                    <span>Login</span>
                  </router-link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="details">
      <div class="loginBox">
        <div class="text-center">
          <h4>Login</h4>
        </div>
        <div class="text-center">Please login using account detail below.</div>
        <div class="formBox">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div class="d-flex align-items-center justify-content-between">
            <button>Sign in</button>
            <a href="#">Forgot your password?</a>
          </div>
          <router-link :to="{name:'register'}" tag="div">
            <div class="reg">Create Account</div>
          </router-link>
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import Footer from "./Footer1";

export default {
  components: {
    foot: Footer
  }
};
</script>

<style lang="scss" scoped>
.login {
  .bannerHeader {
    padding-top: 70px;
    .active {
      color: #333333;
    }
    .banner {
      width: 100%;
      height: 260px;
      background-image: url(https://demo.hasthemes.com/lezada-preview/lezada/assets/images/breadcrumb-bg/background-heading-page.png);
      background-size: cover;
      background-position: center center;
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
  .details {
    height: 650px;
    position: relative;
    .loginBox {
      background-color: #f3f3f3;
      padding: 50px 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .formBox {
        background-color: #f7f7f7;
        padding: 60px 50px;
        width: 90%;
        margin: 0 auto;
        margin-top: 40px;
        input {
          width: 100%;
          padding: 10px 0;
          padding-left: 10px;
          border: none;
          margin-bottom: 30px;
        }
        button {
          text-transform: uppercase;
          font-size: 14px;
          width: 80px;
          background-color: #333;
          color: white;
          height: 40px;
          border: none;
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
        a {
          font-size: 14px;
          color: inherit;
        }
        .reg {
          margin-top: 10px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>