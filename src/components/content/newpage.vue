<template>
  <div id="newpage">
    <div class="header_s u-f u-f-jcsb">
      <div class="left_s">
        <div class="head_title_s">
          <h2>丽江古城</h2>
           <p class="u-f-ajc">
             <ul>
               <li>发布时间：2018年08月19日</li>
               <li>作者：kolboy</li>
               <li>阅读：432</li>
             </ul>
           </p>
        </div>
        <div class="content_s">
          <p>
            丽江古城在南宋时期就初具规模，已有八、九百年的历史。自明朝时，丽江古城称“大研厢”，因其居丽江坝中心，四面青山环绕，一片碧野之间绿水萦回，形似一块碧玉大砚，故而得名。

            丽江古城是中国以整座古城申报世界文化遗产获得成功的两座古城之一。古城内街道依山傍水，以红色角砾岩铺就，是中国民居中具有鲜明特色和风格的类型之一。

            四方街是丽江古城中心，据说是明代木氏土司按其印玺形状而建。这里曾是茶马古道上最重要的枢纽站，明清以来各方商贾云集，各民族文化在这里交汇生息，是丽江经济文化交流的中心。现在的四方街仍是古城中最繁华的地方，是当地著名的酒吧街、购物街，也是古城内有名的小吃一条街，以经营小锅米线，砂锅饭等当地小吃为主，是古城内最集中的餐饮街之一。

            丽江古城很热闹，心境不同在这里你所感受到的肯定就不同。
          </p>
          <img src="~assets/img/index/pageimg_1.jpeg"/>
          <p>
            丽江古城在南宋时期就初具规模，已有八、九百年的历史。自明朝时，丽江古城称“大研厢”，因其居丽江坝中心，四面青山环绕，一片碧野之间绿水萦回，形似一块碧玉大砚，故而得名。

            丽江古城是中国以整座古城申报世界文化遗产获得成功的两座古城之一。古城内街道依山傍水，以红色角砾岩铺就，是中国民居中具有鲜明特色和风格的类型之一。

            四方街是丽江古城中心，据说是明代木氏土司按其印玺形状而建。这里曾是茶马古道上最重要的枢纽站，明清以来各方商贾云集，各民族文化在这里交汇生息，是丽江经济文化交流的中心。现在的四方街仍是古城中最繁华的地方，是当地著名的酒吧街、购物街，也是古城内有名的小吃一条街，以经营小锅米线，砂锅饭等当地小吃为主，是古城内最集中的餐饮街之一。

            丽江古城很热闹，心境不同在这里你所感受到的肯定就不同。
          </p>
        </div>
      </div>
      <new-list :newDataOne="newDataOne" :newDataTwo="newDataTwo" :showLogin="false"></new-list>
    </div>
  </div>
</template>

<script>
  import NewList from './newslist.vue'
  export default {
    name: 'NewPage',
    data(){
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
      }
    },
    components: {
        NewList
    }
  }
</script>

<style>
  #newpage {
    padding: 20px 40px 0px 40px;
  }
  .header_s {
    margin: 0 auto;
    width: 1200px;
    margin-bottom: 20px;
  }
  .left_s {
    width: 800px;
    height: 1200px;
    background: #FFFFFF;
    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.2);
  }

  .head_title_s{
    line-height: 40px;
    text-align: center;
    width: 100%;
    height: 150px;
    border-bottom: 1px solid #F4F4F4;
  }
  .head_title_s>h2{
    padding-top: 40px;
  }
  .head_title_s>p>ul>li{
    list-style: none;
    font-size: 12px;
    margin-left: 10px;
    float: left;
    color: var(--color-text);
  }
 .content_s{
   width: 100%;
   line-height: 30px;
   padding: 10px 20px;
 }
 .content_s>p{
   width: 95%;
   font-size: 18px;
   margin-bottom: 10px;
 }
</style>
