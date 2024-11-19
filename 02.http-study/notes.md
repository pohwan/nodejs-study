# 模块化规范

是对代码进行模块化的拆分和组合的时候，需要遵守的规则
- 用什么样的语法格式来引用模块
- 在模块中使用什么样的语法格式向外暴露成员给别人去使用

好处:
- everyone follow the standards, 减少沟通成本
- 方便各个模块之间的相互调用

# Node.js 模块分类
- 内置: Node.js 官方提供的 (fs, path, http etc)
- 自定义: 每一个我们自己写的 js file 都是
- 第三方: 3rd party developed plugin, need to download

# 加载模块
- 用 require() 可以加载内置模块，自定义模块和第三方模块
- refer to 07.test-module.js

```js
// 1. 内置模块
const fs = require('fs')

// 2. 自定义 - 需要给个路径
// When using require() to load custom module. Can ignore .js too
const custom = require('./custom.js')

// 3. 第三方
const moment = require('moment')
```

# 模块作用域
- 模块级别访问限制
- 默认情况下: 在自定义模块中定义的 variable, function etc, 只能在这个module 里面使用, module 以外的限制就是叫模块作用域

好处 
- 防止了全局 variable 污染的问题
- refer to 09.test-modular-scope.js

向外共享模块作用域的成员
- module object: 存储了当前这个module的information (refer to 10.module-object.js)
- module.exports object: export module for external use (refer to 12.test-export-custom-module.js)
- exports object: simplified version for module.exports (refer to 13.export-module.js)

module.exports & exports 的使用误区
- 用require()，得到的永远是 module.exports 的 object 为准
- 防止混乱，不要在同一个 module 里面用 exports & module.exports

Example 1:
```js
exports.username = 'zs'
module.exports.age = {
  gender: 'M',
  age: 22
}

// expected output: 
{
  gender: 'M',
  age: 22
}
```

Example 2:
```js
module.exports.username = 'zs'
exports.age = {
  gender: 'M',
  age: 22
}

// expected output: 
{
  username: 'zs'
}
```

Example 3:
```js
exports.username = 'zs'
module.exports.gender = 'M'

// expected output: module.exports 还是一样指向同个 object，所以不会被overwrite
{
  username: 'zs',
  gender: 'M'
}
```

Example 4:
```js
exports = {
  username: 'zs',
  gender: 'M'
}

module.exports = exports
module.exports.age = 22

// expected output: module.exports 还是一样指向 exports 的 object，所以他会继续增加新的 attribute
{
  username: 'zs',
  gender: 'M',
  age: 22
}
```

# Node.js 中模块化规范
- 遵循了 CommonJS

## CommonJS 规定:
- module -> current module
- module is a object, 他的 exports 属性是对外的接口
- load module by using module.exports. use require() method to load the module