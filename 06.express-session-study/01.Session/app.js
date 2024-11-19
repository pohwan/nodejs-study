const express = require('express')
const app = express()

const session = require('express-session')
app.use(session({
  secret: 'itheima',
  resave: false,
  saveUninitialized: true
}))

app.use(express.static('./pages'))
app.use(express.urlencoded({ extended: false }))

// 01. Save user info into session.
app.post('/api/login', (req, res) => {
  // 判断用户提交的登录信息是否正确
  if(req.body.username != 'admin' || req.body.password != '000000') {
    return res.send({ status: 1, msg: 'Fail to login'})
  }

  // 注意: 只有成功配置了 express-session middleware, 才可以通过 req 点出来 session 这个属性
  req.session.user = req.body // 用户信息
  req.session.isLogin = true // 用户的登录状态

  res.send({ status: 0, msg: 'Login success'})
})

// 02. Get user info from session
app.get('/api/username', (req, res) => {
  // 从 Session 中获取用户信息，响应给 Client
  if(!req.session.isLogin) {
    return res.send({status: 1, msg: 'fail'})
  }

  res.send({
    status: 0,
    msg: 'success',
    username: req.session.user.username
  })
})

// 03. Clear saved session
// When logout, clear session
app.post('/api/logout', (req, res) => {
  // req.session.destroy() 只会清空当前 user req 这个api 的session，不会清空其他user 的session
  req.session.destroy()
  res.send({
    status: 0,
    msg: 'Success logout'
  })
})

app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1')
})

