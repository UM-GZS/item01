<template>
  <div id="header">
      <div class="header_top u-f u-f-jcsb u-f-ajc">
          <h2>逗博客</h2>
          <ul class="header_top_ul">
            <li>
              <router-link to="/index">首页</router-link>
            </li>
            <li>
              <router-link to="/page1">文章</router-link>
            </li>
            <li>
              <router-link to="/page2">图片</router-link>
            </li>
            <li>
              <router-link to="/page3">视频</router-link>
            </li>
            <li>
              <router-link to="/page4">关于</router-link>
            </li>
          </ul>
      </div>
  </div>
</template>

<script>
 export default {
   name: 'Header'
 }
</script>

<style>
#header {
  width: var(--window-width);
  height: 70px;
  background: var(--color-background);
}
.header_top{
  margin: 0 auto;
  width: 1200px;
  height: 100%;

}
.header_top>h2{
  color: var(--color-text);
}
.header_top_ul>li{
  padding: 0px 10px;
  float: left;
  list-style: none;
}
.header_top_ul>li>a{
  color: var(--color-text);
}
.header_top_ul>li .active{
  color: #42B983;
}
</style>
