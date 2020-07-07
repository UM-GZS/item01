<template>
  <div id="page2">
    <div class="header_aa u-f u-f-jcsb">
      <div class="left">
        <div class="left_head u-f">
          <span></span>
          <a href="#">首页</a>
          <span>/</span>
          <a href="#">经验分享</a>
        </div>
        <div class="left_body">
          <page-list :newList="newList"></page-list>
        </div>
      </div>
      <new-list :newDataOne="newDataOne" :newDataTwo="newDataTwo" :showLogin="false"></new-list>
    </div>
  </div>
</template>

<script>
  import NewList from '../../components/content/newslist.vue'
  import PageList from '../../components/content/pagelist.vue'
  export default {
    name: 'Page2',
    data() {
      return {
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
        ]
      }
    },
    components: {
      NewList,
      PageList
    }
  }
</script>

<style>
#page2 {
    padding: 20px 40px 0px 40px;
  }
  .header_aa {
    margin: 0 auto;
    width: 1200px;
    margin-bottom: 30px;
  }
  .left {
    width: 800px;
    height: 1200px;
  }
  .left_head{
    width: 100%;
    height: 60px;
    background: #FFFFFF;
    align-items: center;
  }
  .left_head>span:first-child{
    margin: 0px 10px 0px 20px;
    width: 5px;
    height: 26px;
    background: #42B983;
  }
  .left_head>span:nth-child(3){
    color: #a5a5a5;
  }
  .left_head>a{
    margin: 0px 10px;
    color: #42B983;
  }
  .left_body{
    margin-top: 20px;
  }
</style>
