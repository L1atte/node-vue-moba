/*
 * @Author: Latte
 * @Date: 2021-10-12 23:53:06
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-13 00:47:25
 * @FilePath: \server\models\Ad.js
 */
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	name: { type: String },
	items: [
		{
			image: { type: String },
			url: { type: String },
		},
	],
});

module.exports = mongoose.model("Ad", schema);
