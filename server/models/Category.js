/*
 * @Author: Latte
 * @Date: 2021-10-07 14:15:06
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-07 16:58:24
 * @FilePath: \server\models\Category.js
 */
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	name: { type: String },
	parent: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

module.exports = mongoose.model("Category", schema);
