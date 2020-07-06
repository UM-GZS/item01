<template>
    <div id="login">
      <div class="login_body u-f-ajc">
          <div class="login_body_input">
            <p>Sign in</p>
            <form>
              <p>
                <span>Email</span><br />
                <input type="text"/>
              </p>
              <p>
                <span>Password</span><br />
                <input type="password"/>
              </p>
              <p>
                <button type="button"></button>
              </p>
            </form>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Login'
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
  .login_body_input{
    position: relative;
    width: 370px;
    text-align: center;
    height: 440px;
    background: #FFFFFF;
  }
  .login_body_input>p{
    padding: 40px 0px;
  }
  .login_body_input>form>p{
    padding: 15px 0px;
  }
  .login_body_input>form>p>input{
    width: 310px;
    height: 50px;
    background: rgba(66,185,131, 0.1);
  }
</style>
