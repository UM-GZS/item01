<template>
  <div id="app">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
  </div>
</template>

<script>
import Header from 'components/common/header.vue'
import Footer from 'components/common/footer.vue'
export default {
  name: 'App',
  components: {
      Header,
      Footer
  }
}
</script>

<style>
  @import "~assets/css/base.css";
  @import "~assets/css/iconfont.css";
body {
  background: var(--window-background);
}
#app {

}
</style>
