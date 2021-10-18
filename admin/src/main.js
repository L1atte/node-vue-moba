/*
 * @Author: Latte
 * @Date: 2021-10-07 11:16:09
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-17 10:43:07
 * @FilePath: \admin\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import http from "./http";
import "./plugins/element.js";
import "./style.css";

Vue.config.productionTip = false;
Vue.prototype.$http = http;

Vue.mixin({
	computed: {
		uploadUrl() {
			return this.$http.defaults.baseURL + "/upload";
		},
	},
	methods: {
		getAuthHeaders() {
			return {
				Authorization: "Bearer " + sessionStorage.token,
			};
		},
	},
});

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
