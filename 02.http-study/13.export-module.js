// console.log(exports)
// console.log(module.exports)

// // 证明这两个对象是指向同一个对象
// console.log(exports === module.exports)

const username = 'zs'
module.exports.username = username
exports.age = 20
exports.sayHello = function () {
  console.log("hello everyone!")
}

// 最终向外共享的结果永远都是 module.exports 所指向的对象