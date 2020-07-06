<template>
  <div id="newlist">
    <div class="right_top">
      <div class="login" v-show="!$store.state.isLogin">
        <p>
          <img src="../../assets/img/index/user.jpg"/>
        </p>
        <p>当前还未登录，暂无消息</p>
        <p>
          <a href="javascript:void(0)" @click="goLogin">现在登录</a>
        </p>
        <p>
          <a href="javascript:void(0)">还没有账号，立即注册</a>
        </p>
      </div>
      <div class="login" v-show="$store.state.isLogin">
        <p>
          <img src="../../assets/img/index/user.jpg"/>
        </p>
        <p>kolboy</p>
        <p style="font-size: 14px;">
          性别：男
        </p>
        <p>
          <a href="javascript:void(0)" style="font-size: 15px;">我的博客</a>
        </p>
      </div>
    </div>
    <div class="right_new">
      <div class="right_new_head u-f-ac">
        <span>推荐阅读</span>
      </div>
      <div class="right_new_content u-f u-f-jcsa u-f-ac" v-for="(item,index) in newDataTwo" :key="index">
        <div class="right_new_content_left">
          <img src="../../assets/img/index/content_1.jpg"/>
        </div>
        <div class="right_new_content_right">
          <p>{{item.title}}</p>
          <span>{{item.time}}</span>
        </div>
      </div>
    </div>
    <div class="right_new">
      <div class="right_new_head u-f-ac">
        <span>热门阅读</span>
      </div>
       <div class="right_new_content u-f u-f-jcsa u-f-ac" v-for="(item,index) in newDataTwo" :key="index">
         <div class="right_new_content_left">
           <img src="../../assets/img/index/content_1.jpg"/>
         </div>
         <div class="right_new_content_right">
           <p>{{item.title}}</p>
           <span>{{item.time}}</span>
         </div>
       </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      newDataOne: Array,
      newDataTwo: Array
    },
    name: 'NewList',
    methods: {
      goLogin() {
        this.$router.push('/login')
      }
    }
  }
</script>

<style>
  #newlist{
    width: 380px;
    height: 1200px;
  }
  .right_top{
    width: 100%;
    height: 300px;
    background: #FFFFFF;
    text-align: center;
    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.2);
  }
  .login>p{
    color: var(--color-text);
    padding-top: 30px;
  }
  .login>p>img{
    width: 80px;
    height: 80px;
    border-radius: 100%;
  }
  .login>p:nth-child(3)>a{
    padding: 10px;
    background: #42B983;
    color: #FFFFFF;
  }
  .login>p:nth-child(4)>a{
    font-size: 12px;
    color: #42B983;
  }
  .right_new{
    margin-top: 15px;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.2);
  }
  .right_new_head{
    width: 100%;
    height: 40px;
    background: #F5F5F5;
    color: var(--color-text);
  }
  .right_new_head>span{
     padding-left: 10px;
  }
  .right_new_content{
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #F4F4F4;
  }
  .right_new_content_left{
    width: 100px;
    height: 70px;
  }
  .right_new_content_right{
    width: 250px;
    height: 80px;
    line-height: 30px;
    color: var(--color-text);
  }
  .right_new_content_left>img{
    width: 100%;
    height: 100%;
  }
  .right_new_content_right>span{
     font-size: 12px;
  }
</style>
