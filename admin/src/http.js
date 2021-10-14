/*
 * @Author: Latte
 * @Date: 2021-10-07 13:49:04
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-15 00:36:23
 * @FilePath: \admin\src\http.js
 */
import axios from "axios";
import Vue from "vue";

const http = axios.create({
	baseURL: "http://localhost:3000/admin/api",
});

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
		}

		return Promise.reject(err);
	}
);

export default http;
