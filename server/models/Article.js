/*
 * @Author: Latte
 * @Date: 2021-10-11 23:15:00
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-27 00:25:20
 * @FilePath: \server\models\Article.js
 */
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  title: { type: String },
  body: { type: String },
},{
  timestamps: true
}) 

module.exports = mongoose.model('Article', schema)
