const express = require('express')

const app = express()

// 配置解析表单数据的 mw
app.use(express.urlencoded({extended: false}))

// 必须在配置 cors 中间件之前，配置 JSONP 的接口 (否则JSONP会被 cors 处理)
app.get('/api/jsonp', (req, res) => {
  // TODO: 定义 JSONP 接口具体的实现过程
  // 1. 得到 fucntion name
  const funcName = req.query.callback

  // 2. define 要发送到 client 的 data
  const data = { name: 'zs', age: 20 }

  // 3. 拼接出一个 function 的调用
  const scriptStr = `${funcName}(${JSON.stringify(data)})`

  // 4. 把拼接的 string response to client
  res.send(scriptStr)
})

// 一定要在 router 之前 import cors mw, 从而解决 cors 问题
const cors = require('cors')
app.use(cors())

// Import apiRouter
const router = require('./16.apiRouter')

// 把 apiRouter 注册到 app 上
app.use('/api', router)

app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1')
})