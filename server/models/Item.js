/*
 * @Author: Latte
 * @Date: 2021-10-07 22:10:37
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-07 22:10:37
 * @FilePath: \server\models\Item.js
 */
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	name: { type: String },
});

module.exports = mongoose.model("Item", schema);