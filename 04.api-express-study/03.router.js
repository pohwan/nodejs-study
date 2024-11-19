// 这是路由模块 (route module)
// 1. import express
const express = require('express')

// 2. create route object
const router = express.Router()

// 3. 挂在具体路由
router.get('/user/list', (req, res) => {
  res.send('GET user list.')
})

router.post('/user/add', (req, res) => {
  res.send('Add new user.')
})

// 4. 向外 export 路由对象
module.exports = router