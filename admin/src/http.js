/*
 * @Author: Latte
 * @Date: 2021-10-07 13:49:04
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-07 13:49:05
 * @FilePath: \node-vue-moba\admin\src\http.js
 */
import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3000/admin/api'
})

export default http