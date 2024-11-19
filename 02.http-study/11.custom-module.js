// 在一个 custom module 里默认情况下，module.export = {}, 外界使用的话，他会 print {}

const age = 20

// 向 module.export object 挂上 username variable
module.exports.username = 'zs'

// 向 module.export object 挂上 sayHello function
module.exports.sayHello = function() {
  console.log('Hello')
}

// 暴露 module 里面的私有成员 export 出去给外界使用
module.exports.age = age

// 让 module.exports 指向一个全新的 object
// 如果我们 import 这个 module, 这个会overwrite 掉上面 defined 的module.exports
module.exports = {
  nickname: 'ls',
  sayHi() {
    console.log('Hi')
  }
}