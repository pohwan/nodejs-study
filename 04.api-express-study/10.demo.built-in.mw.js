const express = require('express')

const app = express()

// built in mw : express.json() -> 解析表单中的 JSON 格式数据 (req body send JSON, 我们需要它去接收 JSON 格式的 body)
app.use(express.json())

// built in mw : express.urlencoded() -> 解析表单中的 url-encoded 格式的数据
// 固定写法，要记得
app.use(express.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
  // 在 server，可以通过 req.body 来接收 client side send 来的 request body
  // default 下如果不配置解析表单数据的 mw, res.body 默认 undefined
  console.log(req.body)
  res.send('ok')
})

app.post('/book', (req, res) => {
  // 在 server，可以使用 req.body 来接收 client side send 来的 request body (JSON 和 url-encoded 格式的数据)
  // default res.body 默认 {} for url-encoded
  console.log(req.body)
  res.send('ok')
})

app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1')
})