/*
 * @Author: Latte
 * @Date: 2021-10-12 23:53:06
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-14 23:43:33
 * @FilePath: \server\models\AdminUser.js
 */
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const schema = new mongoose.Schema({
	username: { type: String, unique: true },
	password: {
		type: String,
		select: false,
		set(val) {
			return bcrypt.hashSync(val, 4);
		},
	},
});

module.exports = mongoose.model("AdminUser", schema);
