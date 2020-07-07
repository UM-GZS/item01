<template>
  <div id="pagelist">
      <div class="content_body u-f u-f-jcsa" v-for="(item,index) in newList" :key="index">
        <div class="content_body_left">
          <img :src="item.imgUrl"/>
        </div>
        <div class="content_body_right">
          <span>{{item.title}}</span>
          <div class="content_body_right_tag">
            <ul>
              <li>
                <i class="iconfont icon-shizhong"></i>
                <span>{{item.time}}</span>
              </li>
              <li>
                <i class="iconfont icon-yonghu"></i>
                <span>{{item.user}}</span>
              </li>
              <li>
                <i class="iconfont icon-pinglun"></i>
                <span>{{item.pl}}</span>
              </li>
              <li>
                <i class="iconfont icon-liulan"></i>
                <span>{{item.look}}</span>
              </li>
              <li>
                <i class="iconfont icon-zan"></i>
                <span>{{item.good}}</span>
              </li>
            </ul>
          </div>
        <div class="content_body_right_content" @click="goNew">
          <p>{{item.content}}</p>
        </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'PageList',
    props: {
      newList: Array
    },
    data() {
      return {

      }
    },
    methods: {
      goNew() {
        this.$router.push('/newpage')
      }
    }
  }
</script>

<style>
  #pagelist{

  }
  .content_body{
    padding: 10px 0px;
    width: 100%;
    background: #FFFFFF;
    border-bottom: 1px solid #F4F4F4;
    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.2);
  }
  .content_body_left{
    width: 200px;
    height: 140px;
    background: #666666;
  }
  .content_body_left>img{
    width: 100%;
    height: 100%;
  }
  .content_body_right{
    width: 570px;
    height: 140px;
  }
  .content_body_right_tag{
    width: 550px;
    height: 20px;
    padding-top: 10px;
  }
  .content_body_right_tag>ul>li{
    color: var(--color-text);
    font-size: 12px;
    list-style: none;
    float: left;
    margin-left: 15px;
  }
  .content_body_right_tag>ul>li>i{
    margin-right: 2px;
    font-size: 12px;
  }
  .content_body_right_tag>ul>li:first-child{
    margin-left: 0px;
  }
  .content_body_right_tag>ul>li:last-child{
    float: right;
  }
  .content_body_right_content{
    margin-top: 10px;
    line-height: 20px;
    width: 550px;
    font-size: 14px;
    color: var(--color-text);
  }
</style>
