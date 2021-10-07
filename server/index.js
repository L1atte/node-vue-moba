/*
 * @Author: Latte
 * @Date: 2021-10-07 11:16:32
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-07 22:56:45
 * @FilePath: \server\index.js
 */
const express = require('express')

const app = express()

app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./routes/admin')(app)

app.listen(3000, () => {
  console.log('http://localhost:3000');
})