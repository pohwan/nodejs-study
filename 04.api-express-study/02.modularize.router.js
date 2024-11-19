const express = require('express')

const app = express()

// 1. import route module
const router = require('./03.router')

// 2. register route module
app.use('/api',router)

// app.use() 的作用，就是来注册全局的中间件

app.listen(80, () => {
  console.log('http://127.0.0.1')
})