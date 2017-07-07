// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './app'
import router from './router'
import VueResource from 'vue-resource'
import './mock/mockServer'
import './mock/data.json'  // 引入加载模块
import './common/stylus/fonts.styl'

Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { app }
})*/

new Vue({
  el: '#app',
  render: h => h(app),
  router
})
