/*
 * @Author: Latte
 * @Date: 2021-10-28 23:15:54
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-28 23:18:35
 * @FilePath: \web\http.js
 */
import axios from "axios";
import Vue from "vue";
import router from './router'

const http = axios.create({
  baseURL: 'http://localhost:3000/web/api'
})

export default http