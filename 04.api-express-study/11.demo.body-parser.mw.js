const express = require('express')

const app = express()

// 1. import 解析表单数据的 mw: body-parser
const parser = require('body-parser')

// 2. use app.use() 注册 mw
app.use(parser.urlencoded({extended: false}))
// 和 app.use(express.urlencoded({extended: false})) 一样，只是一个是 built-in 一个是 3rd party
// express built-in 的是基于 body-parser 这个 mw 进一步封装出来的

app.post('/user', (req, res) => {
  // default 下如果不配置解析表单数据的 mw, res.body 默认 undefined
  console.log(req.body)
  res.send('ok')
})


app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1')
})