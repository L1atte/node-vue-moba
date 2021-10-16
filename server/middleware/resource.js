/*
 * @Author: Latte
 * @Date: 2021-10-17 02:44:24
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-17 02:48:38
 * @FilePath: \server\middleware\resource.js
 */
// 类命转换中间件
module.exports = (options) => {
	return async (req, res, next) => {
		const modelName = require("inflection").classify(req.params.resource); // 将路由参数转换成类名
		req.Model = require(`../models/${modelName}`);
		next();
	};
};
