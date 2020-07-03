<template>
  <div id="index">
    <div class="header u-f u-f-jcsb">
      <div class="left">
        <div class="swiper u-f u-f-ajc">
          <div class="swiper_img">
            <img src="~assets/img/index/swiper_1.jpg" />
            <img src="~assets/img/index/swiper_2.jpg" />
          </div>
            <a href="#" class="swiper_dot swiper_dot1">
              <span class="iconfont icon-left-copy"></span>
            </a>
            <a href="#" class="swiper_dot swiper_dot2">
              <span class="iconfont icon-right"></span>
            </a>
            <div class="swiper_dot_dot">
              <a href="#" class="swiper_dot_dot_s"></a>
              <a href="#"></a>
            </div>
        </div>
      </div>
      <div class="right"></div>
    </div>
    <div class="fonter">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Index'
  }
</script>

<style>
  #index {
    padding: 20px 40px;
  }

  .header {
    margin: 0 auto;
    width: 1200px;
    padding: 0px 0px;
  }

  .left {
    width: 800px;
    height: 1200px;
    background: #666666;
  }

  .right {
    width: 380px;
    height: 1200px;
    background: red;
  }

  .swiper {
    position: relative;
    width: 800px;
    height: 200px;
  }

  .swiper_img>img {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 200px;
  }
  .swiper_dot{
    position: absolute;
  }
  .swiper_dot>span{
    font-size: 30px;
    color: rgba(255,255,255,0.9);
  }
  .swiper_dot1{
    top: 84px;
    left: 20px;
  }
  .swiper_dot2{
    top: 84px;
    right: 20px;
  }
  .swiper_dot_dot{
    padding: 0px 2px;
    position: absolute;
    bottom: 6px;
  }
  .swiper_dot_dot>a{
    margin: 0px 2px;
    float: left;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #FFFFFF;
  }
  .swiper_dot_dot>.swiper_dot_dot_s{
    background: #42B983;
  }
</style>
