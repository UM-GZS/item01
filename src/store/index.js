import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

//2.创建对象
const store = new Vuex.Store({
  state: {
      isLogin: false
  },
  mutations: {
      login(state) {
        state.isLogin = true
      },
      loginout(state) {
        state.isLogin = false
      }
  },
  actions: {

  },
  getters: {

  },
  modules: {

  }
})

//导出store
export default store
