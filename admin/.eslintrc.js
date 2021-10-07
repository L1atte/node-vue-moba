/*
 * @Author: Latte
 * @Date: 2021-10-07 11:16:09
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-07 14:31:06
 * @FilePath: \node-vue-moba\admin\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-unused-vars": [1, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
  }
}
