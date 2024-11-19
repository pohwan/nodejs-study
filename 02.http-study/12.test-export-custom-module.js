// 在外界使用 require 方法导入 custom module 的时候，得到的成员就是 module.export = {}
const m = require('./11.custom-module')

console.log(m)