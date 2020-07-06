<template>
    <div id="login">
      <div class="login_body u-f-ajc">
          <div class="login_body_box">
            <div class="login_body_input" v-show="signIn">
              <p>Sign in</p>
              <form>
                <p>
                  <span>Name</span><br />
                  <input type="text"/>
                </p>
                <p>
                  <span>Password</span><br />
                  <input type="password"/>
                </p>
                <p  class="login_a">
                  <a href="javascript:void(0)" @click="signInGo()">还没有账号，现在注册</a>
                </p>
                <p>
                  <a href="#">登录</a>
                </p>
              </form>
            </div>
            <div class="login_body_input" v-show="!signIn">
              <p>Sign up</p>
              <form>
                <p>
                  <span>Name</span><br />
                  <input type="text"/>
                </p>
                <p>
                  <span>Email</span><br />
                  <input type="text"/>
                </p>
                <p>
                  <span>Password</span><br />
                  <input type="password"/>
                </p>
                <p  class="login_a">
                  <a href="javascript:void(0)" @click="signInGo()">有账号，直接登录</a>
                </p>
                <p>
                  <a href="#">登录</a>
                </p>
              </form>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        signIn: true
      }
    },
    methods: {
      signInGo() {
        this.signIn = !this.signIn
      }
    }
  }
</script>

<style>
  #login{
    padding: 20px 40px 0px 40px;
  }
  .login_body{
    margin: 0 auto;
    width: 1200px;
    height: 800px;
    background: url(../../assets/img/index/banner.jpg) no-repeat 100% ;
  }
  .login_body_box{
    position: relative;
    width: 370px;
    text-align: center;
    background: #FFFFFF;
    padding: 15px 10px;
  }
  .login_body_input>p{
    padding: 10px 0px;
    color: rgba(66,185,131, 0.8);
  }
  .login_body_input>form>p{
    padding: 15px 0px;
  }
  .login_body_input>form>p>input{
    padding: 0px 10px;
    width: 310px;
    height: 50px;
    background: rgba(66,185,131, 0.1);
  }
  .login_body_input>form>p>span{
    float: left;
    margin: 0px 0px 5px 20px;
    color: rgba(66,185,131, 0.8);
  }
  .login_body_input>form>p:last-child{
    margin-top: 20px;
  }
  .login_body_input>form .login_a>a{
    font-size: 12px;
    float: right;
    margin-right: 20px;
    color: rgba(66,185,131, 0.8);
  }
  .login_body_input>form>p:last-child>a{
    padding: 10px 80px;
    background: #42B983;
    color: #FFFFFF;
  }
</style>
