/*
 * @Author: Latte
 * @Date: 2021-10-07 11:16:09
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-07 14:44:30
 * @FilePath: \node-vue-moba\admin\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from './http';
import './plugins/element.js'

Vue.config.productionTip = false
Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
