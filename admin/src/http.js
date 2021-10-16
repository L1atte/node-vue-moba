/*
 * @Author: Latte
 * @Date: 2021-10-07 13:49:04
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-17 00:07:16
 * @FilePath: \admin\src\http.js
 */
import axios from "axios";
import Vue from "vue";
import router from "./router";

const http = axios.create({
	baseURL: "http://localhost:3000/admin/api",
});

// Add a request interceptor
http.interceptors.request.use(
	function(config) {
		// Do something before request is sent
		if (sessionStorage.token) {
			config.headers.Authorization = "Bearer " + sessionStorage.token;
		}

		return config;
	},
	function(error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

http.interceptors.response.use(
	(res) => {
		return res;
	},
	(err) => {
		if (err.response.data.message) {
			Vue.prototype.$message({
				type: "error",
				message: err.response.data.message,
			});
			// 路由拦截，如果没登录的话自动跳转登录页
			if (err.response.status === 401) {
				router.push("/login");
			}
		}

		return Promise.reject(err);
	}
);

export default http;
