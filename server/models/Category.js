/*
 * @Author: Latte
 * @Date: 2021-10-07 14:15:06
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-27 23:23:43
 * @FilePath: \server\models\Category.js
 */
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	name: { type: String },
	parent: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

// 新增children字段
schema.virtual("children",{
	localField: '_id', // 本地键
	ref: 'Category',
	foreignField: 'parent',// 外键
	justOne: false, 
})

// 新增newsList字段
schema.virtual("newsList",{
	localField: '_id', // 本地键
	ref: 'Article',
	foreignField: 'categories', // 外键
	justOne: false,
})

module.exports = mongoose.model("Category", schema);
