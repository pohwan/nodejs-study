const express = require('express')

const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

// 01. import jsonwebtoken and express-jwt
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')

// 02. define secret key
const secretKey = 'testsecret'

// 04. use JWT decode 
// .unless({ path: [/^\/api\//]}) : exclude the API path which doesn't require authorization
// 只要成功配置了 express-jwt 这个 mdw, 就可以把解析出来的用户信息，挂载到 req.user 属性上
app.use(expressJWT({secret: secretKey}).unless({ path: [/^\/api\//]}))

// login API
app.post('/api/login', (req, res) => {
  console.log(req.body)
  const userInfo = req.body
  
  if(userInfo.username !== 'admin' || userInfo.password != '000000') {
    return res.send({
      status: 400,
      message: 'Fail to login!'
    })
  }

  // 03. After login success, use jwt.sign() to generate JWT token, then send to frontend.
  // jwt.sign() params: 
  // 1. user information object
  // 2. secret key
  // 3. properties, can set token expiry time
  // Do not encode password into jwt token!
  const tokenStr = jwt.sign({username: userInfo.username}, secretKey, { expiresIn: '30s' })
  
  res.send({
    status: 200,
    message: 'Login success',
    token: tokenStr // Return token to frontend
  })
})

app.get('/admin/getInfo', (req, res) => {
  console.log(req.user)

  res.send({
    status: 200,
    message: 'Success get user info',
    data: req.user
  })
})

// 06. Error handling when JWT token expired / fail to generate
app.use((err, req, res, next) => {
  if(err.name == 'UnauthorizedError') {
    return res.send({
      status: 401,
      message: 'Invalid token'
    })
  }

  res.send({
    status: 500,
    message: 'Internal server error'
  })
})


const cors = require('cors')
app.use(cors())

app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1')
})