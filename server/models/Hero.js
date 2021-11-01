/*
 * @Author: Latte
 * @Date: 2021-10-08 22:37:55
 * @LAstEditors: Latte
 * @LastEditTime: 2021-11-02 00:06:46
 * @FilePath: \server\models\Hero.js
 */
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	name: { type: String },
	avatar: { type: String },
	banner: { type: String },
	title: { type: String },
	categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Category" }],
	scores: {
		difficult: { type: Number },
		skills: { type: Number },
		attack: { type: Number },
		survive: { type: Number },
	},
	skills: [
		{
			icon: { type: String },
			name: { type: String },
			delay: { type: String },
			cost: { type: String },
			description: { type: String },
			tips: { type: String },
		},
	],
	items1: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Item" }], // 顺风出装
	items2: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Item" }], // 逆风出装
	usageTips: { type: String },
	battleTips: { type: String },
	teamTips: { type: String },
	partners: [
		{
			hero: { type: mongoose.SchemaTypes.ObjectId, ref: "Hero" },
			description: { type: String },
		},
	],
});

module.exports = mongoose.model("Hero", schema, "heroes");
