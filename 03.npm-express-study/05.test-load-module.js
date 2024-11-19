// custom module 的话是必须要用 './' 或者 '../' 开头，不然的话 Node js 会辨识为 built in module / 3rd party module
// 用require() 导入 custom module 的时候，Node js 会按顺序加载文件
// 1. 看有没有 exact path
// 2. 补 .js extension 去找文件
// 3. 补 .json extension 去找文件
// 4. 补 .noed extension 去找文件
// 5. 都找不到的话，才会 return error.
const m = require('./test')

console.log(m)