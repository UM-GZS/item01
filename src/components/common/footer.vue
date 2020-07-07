<template>
  <div id="footer">
    <div class="footer_top u-f-ac u-f-ajc">
        <div class="footer_top_a">
          友情链接：
          <a href="https://www.runoob.com/">菜鸟教程</a>
          <a href="https://www.w3cschool.cn/">w3cschoo</a>
          <a href="https://www.itcast.cn/">传智播客</a>
        </div>
        <div class="footer_top_l">逗博客 版权所有</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style>
#footer {
  width: var(--window-width);
  height: 100px;
  background: var(--color-background);
}
.footer_top{
  margin: 0 auto;
  width: 1200px;
  height: 100%;
  flex-wrap: wrap;
  color: var(--color-text);
}
.footer_top_a{
  padding-top: 10px;
  text-align: center;
  width: 100%;
}
.footer_top_a>a{
  margin: 0px 10px;
  color: #42B983;
}
.footer_top_l{
  font-size: 15px;
  width: 100%;
  text-align: center;
}
</style>
