const express = require('express')

const app = express()

// 1. 导入自己封装的 mw module
const customBodyParser = require('./14.use.modularized.custom-body-parser')

// 2. 将自定义得到 mw module，注册为全局可用的 mw
app.use(customBodyParser)

app.post('/user', (req, res) => {
  res.send(req.body)
})

app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1')
})