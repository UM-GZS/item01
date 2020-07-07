<template>
  <div id="page3">
    <div class="header_ss">
      <div class="body_center u-f u-f-jcsb">
        <div class="body_center_left">
          <div class="body_center_head u-f">
            <span>共有 10 条留言</span>
          </div>
          <div class="body_center_left_box u-f u-f-jcsa">
            <img src="../../assets/img/index/user.jpg"/>
            <div class="box_content">
              <p>kolboy</p>
              <p>2020-07-07 11:22</p>
              <p>如收不到邮件可反馈账号问题，反馈账号问题不需要登录。</p>
            </div>
          </div>
          <div class="body_center_left_box u-f u-f-jcsa">
            <img src="../../assets/img/index/user.jpg"/>
            <div class="box_content">
              <p>kolboy</p>
              <p>2020-07-07 11:22</p>
              <p>如收不到邮件可反馈账号问题，反馈账号问题不需要登录。</p>
            </div>
          </div>
          <div class="body_center_left_box u-f u-f-jcsa">
            <img src="../../assets/img/index/user.jpg"/>
            <div class="box_content">
              <p>kolboy</p>
              <p>2020-07-07 11:22</p>
              <p>如收不到邮件可反馈账号问题，反馈账号问题不需要登录。</p>
            </div>
          </div>
          <div class="body_center_left_box u-f u-f-jcsa">
            <img src="../../assets/img/index/user.jpg"/>
            <div class="box_content">
              <p>kolboy</p>
              <p>2020-07-07 11:22</p>
              <p>如收不到邮件可反馈账号问题，反馈账号问题不需要登录。</p>
            </div>
          </div>
          <div class="body_center_left_box u-f u-f-jcsa">
            <img src="../../assets/img/index/user.jpg"/>
            <div class="box_content">
              <p>kolboy</p>
              <p>2020-07-07 11:22</p>
              <p>如收不到邮件可反馈账号问题，反馈账号问题不需要登录。</p>
            </div>
          </div>
          <div class="body_center_left_box u-f u-f-jcsa">
            <img src="../../assets/img/index/user.jpg"/>
            <div class="box_content">
              <p>kolboy</p>
              <p>2020-07-07 11:22</p>
              <p>如收不到邮件可反馈账号问题，反馈账号问题不需要登录。</p>
            </div>
          </div>
          <div class="body_center_left_box u-f u-f-jcsa">
            <img src="../../assets/img/index/user.jpg"/>
            <div class="box_content">
              <p>kolboy</p>
              <p>2020-07-07 11:22</p>
              <p>如收不到邮件可反馈账号问题，反馈账号问题不需要登录。</p>
            </div>
          </div>
        </div>
        <div class="body_center_right">
            <form>
              <p>
                <span>标题</span>
                <input type="text"/>
              </p>
              <p>
                <span>留言</span>
                <textarea></textarea>
              </p>
              <p>
                <span>姓名</span>
                <input type="text"/>
              </p>
              <p>
                <span>邮箱</span>
                <input type="text"/>
              </p>
              <p>
                <span>联系方式</span>
                <input type="text"/>
              </p>
              <p>
                <span>验证码</span>
                <input type="text"/>
                <a href="#">
                  <img src="~assets/img/index/yzm.jpg"/>
                </a>
              </p>
              <p>
                <a href="#">提交</a>
              </p>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Page3',
    data() {
      return {

      }
    },
    components: {

    }
  }
</script>

<style>
#page3 {
    padding: 20px 40px 0px 40px;
  }
  .header_ss {
    margin: 0 auto;
    width: 1200px;
    margin-bottom: 20px;
  }
 .body_center{
   width: 100%;
   padding: 10px;
 }
 .body_center_left{
   width: 500px;
   background: #FFFFFF;
 }
 .body_center_right{
   text-align: center;
   width: 680px;
   height: 600px;
   background: #FFFFFF;
 }
 .body_center_head{
   width: 100%;
   height: 40px;
   align-items: center;
   background: #42B983;
 }
 .body_center_head>span{
   padding-left: 10px;
   color: #FFFFFF;
   font-size: 13px;
 }
 .body_center_left_box{
   margin-top: 10px;
   width: 100%;
   padding: 10px 0px;
   border-bottom: 1px solid #F4F4F4;
 }
 .body_center_left_box>img{
   margin-left: 10px;
   width: 50px;
   height: 50px;
   border-radius: 100%;
 }
 .box_content{
   width: 400px;
   line-height: 25px;
   color: var(--color-text);
 }
 .box_content>p:nth-child(2){
    font-size: 12px;
 }

 .body_center_right>form>p{
   padding: 15px 0px;
 }
 .body_center_right>form>p>span{
   position: relative;
   right: 10px;
 }
 .body_center_right>form>p:nth-child(5)>span{
   position: relative;
   right: 25px;
 }
.body_center_right>form>p:nth-child(6)>span{
   position: relative;
   top: -25px;
   right: 32px;
 }
 .body_center_right>form>p:nth-child(5)>input{
   position: relative;
   left: -15px;
 }
 .body_center_right>form>p:nth-child(6)>input{
   width: 130px;
   height: 35px;
   position: relative;
   top: -25px;
   left: -22px;
 }
 .body_center_right>form>p:nth-child(6)>a>img{
   width: 180px;
   height: 50px;
   position: relative;
   top: -5px;
   left: -22px;
 }
 .body_center_right>form>p>input{
   padding: 0px 10px;
   width: 340px;
   height: 35px;
   background: rgba(66,185,131, 0.1);
 }
 .body_center_right>form>p>textarea{
   padding: 10px 10px;
   width: 340px;
   height: 100px;
   background: rgba(66,185,131, 0.1);
 }
 .body_center_right>form>p:last-child{
   margin: 10px auto;
   width: 200px;
   background: #42B983;
 }

 .body_center_right>form>p:last-child>a{
   padding: 13px 80px;
   color: #FFFFFF;
 }
</style>
