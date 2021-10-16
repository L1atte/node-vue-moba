/*
 * @Author: Latte
 * @Date: 2021-10-17 02:39:54
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-17 02:49:24
 * @FilePath: \server\middleware\auth.js
 */
// 登录校验中间件
module.exports = (options) => {
	const jwt = require("jsonwebtoken");
	const assert = require("http-assert");
	const AdminUser = require("../models/AdminUser");
  
	return async (req, res, next) => {
		const token = String(req.headers.authorization || "")
			.split(" ")
			.pop();
		assert(token, 401, "请提供jwt token");
		const { id } = jwt.verify(token, req.app.get("secret"));
		assert(id, 401, "无效的jwt token");
		req.user = await AdminUser.findById(id);
		assert(req.user, 401, "请先登录");
		await next();
	};
};
