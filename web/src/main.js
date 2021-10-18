/*
 * @Author: Latte
 * @Date: 2021-10-07 11:08:16
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-19 00:35:00
 * @FilePath: \web\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/style.scss";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper /* { default options with global component } */);

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
