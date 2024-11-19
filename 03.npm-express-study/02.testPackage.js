// index.js 是一个入口
// const testTools = require('./rinney-test-tools/index')

// 如果没有 defined /index, 还是可以正常运作，因为在 rinney-test-tools 的package.json里面，已经 define index.js 在 main里面
const testTools = require('./rinney-test-tools')

// dateFormat()
const dateStr = testTools.dateFormat(new Date())
console.log(dateStr)
console.log('------------')

// htmlEscape()
const htmlStr = '<h1 title="abc">This is H1 <span>123&nbsp;</span></h1>'
const str = testTools.htmlEscape(htmlStr)
console.log(str)
console.log('------------')

// htmlUnescape()
const str2 = testTools.htmlUnescape(str)
console.log(str2)