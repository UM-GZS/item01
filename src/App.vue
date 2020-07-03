<template>
  <div id="app">
        <Header></Header>
        <router-view></router-view>
  </div>
</template>

<script>
import Header from 'components/common/header.vue'
export default {
  name: 'App',
  components: {
      Header
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
