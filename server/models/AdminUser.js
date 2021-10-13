/*
 * @Author: Latte
 * @Date: 2021-10-12 23:53:06
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-14 00:50:04
 * @FilePath: \server\models\AdminUser.js
 */
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const schema = new mongoose.Schema({
	username: { type: String },
	password: {
		type: String,
		select: false,
		set(val) {
			return bcrypt.hashSync(val, 4);
		},
	},
});

module.exports = mongoose.model("AdminUser", schema);
