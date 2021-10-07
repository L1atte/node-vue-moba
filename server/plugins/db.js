/*
 * @Author: Latte
 * @Date: 2021-10-07 14:12:07
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-07 14:14:01
 * @FilePath: \node-vue-moba\server\plugins\db.js
 */
module.exports = app => {
  const mongoose = require('mongoose')
  mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba')
}