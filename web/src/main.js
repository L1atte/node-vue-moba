/*
 * @Author: Latte
 * @Date: 2021-10-07 11:08:16
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-22 00:32:32
 * @FilePath: \web\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/style.scss";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import "./assets/iconfont/iconfont.css";

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper /* { default options with global component } */);

// 全局挂在组件
import Card from "./components/Card.vue";
Vue.component("m-card", Card);

import ListCard from "./components/ListCard.vue";
Vue.component("m-list-card", ListCard);

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
