const express = require('express')

const router = express.Router()


// 在这里挂在对应的路由

router.get('/get', (req, res) => {
  // 通过 req.query 获取 client 通过query string, send to server 的 data
  const query = req.query

  // 用 res.send()，向 client response 处理的结果
  res.send({
    status: 0, // 0 - success, 1 - failure
    msg: 'GET req success!',
    data: query
  })
})


router.post('/post', (req, res) => {
  // 通过 req.body 获取 req body 中包含 url-encoded format 的 data
  const body = req.body

  // 用 res.send()，向 client response 处理的结果
  res.send({
    status: 0, // 0 - success, 1 - failure
    msg: 'POST req uccess!',
    data: body
  })
})

router.delete('/delete', (req, res) => {
  res.send({
    status: 0, // 0 - success, 1 - failure
    msg: 'DELETE req success!'
  })
})

module.exports = router