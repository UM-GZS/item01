<template>
  <div id="index">
    <div class="header u-f u-f-jcsb">
      <div class="left">
        <div class="swiper u-f u-f-ajc">
          <div class="swiper_img" v-for="(item,index) in swiperList" :key="index">
            <img :src="item.imgUrl" v-show="index == swiperIndex" @mouseenter="stop" @mouseleave="go" />
          </div>
          <a href="javascript:void(0)" class="swiper_dot swiper_dot1" @click="autoPlay(1)">
            <span class="iconfont icon-left-copy"></span>
          </a>
          <a href="javascript:void(0)" class="swiper_dot swiper_dot2" @click="autoPlay(0)">
            <span class="iconfont icon-right"></span>
          </a>
          <div class="swiper_dot_dot">
            <a href="#" v-for="(item,index) in swiperList.length" :class="{'swiper_dot_dot_s':index == swiperIndex}"
              :key="index" @mouseover="change(index)"></a>
          </div>
        </div>
        <div class="new">
          <div class="new_title">
            <span>【今日推荐】</span>
            <span>旅游胜地</span>
          </div>
          <div class="new_content">
            <p>丽江古城在南宋时期就初具规模，已有八、九百年的历史。自明朝时，丽江古城称“大研厢”，因其居丽江坝中心，四面青山环绕，一片碧野之间绿水萦回，形似一块碧玉大砚，故而得名。
              丽江古城是中国以整座古城申报世界文化遗产获得成功的两座古城之一。古城...</p>
          </div>
        </div>
        <div class="content">
          <span>最新发布</span>
          <page-list :newList="newList"></page-list>
        </div>
      </div>
       <new-list :newDataOne="newDataOne" :newDataTwo="newDataTwo" :showLogin="true"></new-list>
    </div>
  </div>
</template>

<script>
import NewList from '../../components/content/newslist.vue'
import PageList from '../../components/content/pagelist.vue'
  export default {
    name: 'Index',
    data() {
      return {
        isLogin: false,
        newDataOne: [
          {
            title: "丽江古城",
            time: "2020-07-04"
          },
          {
            title: "丽江古城",
            time: "2020-07-04"
          },
          {
            title: "丽江古城",
            time: "2020-07-04"
          },
          {
            title: "丽江古城",
            time: "2020-07-04"
          }
        ],
        newDataTwo: [
          {
            title: "丽江古城",
            time: "2020-07-04"
          },
          {
            title: "丽江古城",
            time: "2020-07-04"
          },
          {
            title: "丽江古城",
            time: "2020-07-04"
          },
          {
            title: "丽江古城",
            time: "2020-07-04"
          }
        ],
        newList: [
          {
            imgUrl: require("../../assets/img/index/content_1.jpg"),
            title: "旅游胜地",
            content: "大理府城建于明洪武十五年（公元1382年），是明太祖朱元璋派沐英平定云南后，在大理国故都阳苴咩城内修建。原大理府城南城墙在五华楼一线，后向南扩建。原城墙四方各长1500米，城的四方和四角有门楼和角楼。",
            time: "2020-07-05 09:59",
            user: "kolboy",
            pl: 23,
            look: 142,
            good: 10,
          },
          {
            imgUrl: require("../../assets/img/index/content_1.jpg"),
            title: "旅游胜地",
            content: "大理府城建于明洪武十五年（公元1382年），是明太祖朱元璋派沐英平定云南后，在大理国故都阳苴咩城内修建。原大理府城南城墙在五华楼一线，后向南扩建。原城墙四方各长1500米，城的四方和四角有门楼和角楼。",
            time: "2020-07-05 09:59",
            user: "kolboy",
            pl: 23,
            look: 142,
            good: 10,
          },
          {
            imgUrl: require("../../assets/img/index/content_1.jpg"),
            title: "旅游胜地",
            content: "大理府城建于明洪武十五年（公元1382年），是明太祖朱元璋派沐英平定云南后，在大理国故都阳苴咩城内修建。原大理府城南城墙在五华楼一线，后向南扩建。原城墙四方各长1500米，城的四方和四角有门楼和角楼。",
            time: "2020-07-05 09:59",
            user: "kolboy",
            pl: 23,
            look: 142,
            good: 10,
          },
          {
            imgUrl: require("../../assets/img/index/content_1.jpg"),
            title: "旅游胜地",
            content: "大理府城建于明洪武十五年（公元1382年），是明太祖朱元璋派沐英平定云南后，在大理国故都阳苴咩城内修建。原大理府城南城墙在五华楼一线，后向南扩建。原城墙四方各长1500米，城的四方和四角有门楼和角楼。",
            time: "2020-07-05 09:59",
            user: "kolboy",
            pl: 23,
            look: 142,
            good: 10,
          },
          {
            imgUrl: require("../../assets/img/index/content_1.jpg"),
            title: "旅游胜地",
            content: "大理府城建于明洪武十五年（公元1382年），是明太祖朱元璋派沐英平定云南后，在大理国故都阳苴咩城内修建。原大理府城南城墙在五华楼一线，后向南扩建。原城墙四方各长1500米，城的四方和四角有门楼和角楼。",
            time: "2020-07-05 09:59",
            user: "kolboy",
            pl: 23,
            look: 142,
            good: 10,
          }
        ],
        swiperList: [{
            imgUrl: require("../../assets/img/index/swiper_1.jpg"),
            clickUrl: "#",
          },
          {
            imgUrl: require("../../assets/img/index/swiper_2.jpg"),
            clickUrl: "#",
          },
          {
            imgUrl: require("../../assets/img/index/swiper_3.jpg"),
            clickUrl: "#",
          }
        ],
        swiperIndex: 0,
        timer: ''
      }
    },
    components: {
      NewList,
      PageList
    },
    created() {
      this.$nextTick(() => {
        this.timer = setInterval(() => {
          this.autoPlay(0)
        }, 4000)
      })
    },
    methods: {
      goLogin() {
        this.$store.commit('login')
      },
      autoPlay(i) {
        switch (i) {
          case 1:
            this.swiperIndex--
            if (this.swiperIndex < 0) {
              this.swiperIndex = this.swiperList.length - 1
            }
            break;
          case 0:
            this.swiperIndex++
            if (this.swiperIndex > this.swiperList.length - 1) {
              this.swiperIndex = 0
            }
            break;
        }
      },
      go() {
        this.timer = setInterval(() => {
          this.autoPlay(0)
        }, 4000)
      },
      stop() {
        clearInterval(this.timer)
        this.timer = null
      },
      change(index) {
        this.swiperIndex = index
      }
    }
  }
</script>

<style>
  #index {
    padding: 20px 40px 0px 40px;
  }

  .header {
    margin: 0 auto;
    width: 1200px;
    margin-bottom: 40px;
  }

  .left {
    width: 800px;
    height: 1200px;
  }

  .right {
    width: 380px;
    height: 1200px;
  }

  .swiper {
    position: relative;
    overflow: hidden;
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

  .swiper_dot {
    position: absolute;
  }

  .swiper_dot>span {
    font-size: 30px;
    color: rgba(255, 255, 255, 0.9);
  }

  .swiper_dot1 {
    top: 84px;
    left: 20px;
  }

  .swiper_dot2 {
    top: 84px;
    right: 20px;
  }

  .swiper_dot_dot {
    padding: 0px 2px;
    position: absolute;
    bottom: 6px;
  }

  .swiper_dot_dot>a {
    margin: 0px 2px;
    float: left;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #FFFFFF;
  }

  .swiper_dot_dot>.swiper_dot_dot_s {
    background: #42B983;
  }

  .new {
    margin-top: 10px;
    clear: both;
    width: 100%;
    height: 150px;
    line-height: 24px;
    background: var(--color-background);
    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.2);
  }
  .new_title{
    padding: 0px 10px;
    padding-top: 20px;
    font-weight: 800;
  }
  .new_title>span:first-child{
    color: #A94442;
    font-size: 20px;
  }
  .new_title>span:last-child{
    color: var(--color-text);
    font-size: 18px;
  }
  .new_content{
    padding: 0px 10px;
    font-size: 15px;
    color: var(--color-text);
  }
  .content{
    margin-top: 10px;
    padding: 10px 0px;
    width: 100%;
  }
  .content>span{
    font-size: 18px;
    color: var(--color-text);
    margin-bottom: 10px;
    display: block;
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
