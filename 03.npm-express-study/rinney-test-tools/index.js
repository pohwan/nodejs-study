// 这是 package 的入口文件
const date = require('./src/dateFormat')
const escape = require('./src/htmlEscape')

module.exports = {
  ...date, // ... > 展开这个的所有 property 
  ...escape
}