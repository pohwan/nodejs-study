const express = require('express')

const app = express()

// define middleware function
// const mw = function(req, res, next) {
//   console.log('the simplest middleware')
//   // 把流转关系，转交给下一个 middleware or route
//   next()
// }

// // 全局生效 middleware: 每次 client side request 进来 server, 都一定会先经过这个 middleware，再转交给后面的 middleware / route
// // E.g: 我每次 call '/' or '/user' API, 我都一定会print out ' the simplest middleware '
// // 将 mw 注册为全局生效 middleware
// app.use(mw)

// 这是定义全局生效 middleware的简化形式
app.use(function(req, res, next){
  console.log('the simplest middleware')
  next()
})

app.get('/', (req, res) => {
  console.log('use / this route')
  res.send('Home page.')
})

app.get('/user', (req, res) => {
  console.log('use /user this route')
  res.send('User page.')
})

app.listen(80, () => {
  console.log('http://127.0.0.1')
})