/*
 * @Author: Latte
 * @Date: 2021-10-11 23:15:00
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-12 00:49:40
 * @FilePath: \server\models\Article.js
 */
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  title: { type: String },
  body: { type: String },
}) 

module.exports = mongoose.model('Article', schema)
