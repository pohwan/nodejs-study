// 在有 package.json 的前提下，我们可以指定它去 load a.js
// 如果 package.json 被删除，里面也没有 main, 那么 node js 会自动指向 index.js
require('./testm')