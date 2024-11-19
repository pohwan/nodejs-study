const express = require('express')
const app = express()

const joi = require('joi')

const cors = require('cors')
app.use(cors())

// This mdw only can encode application/x-www-form-urlencoded file format 
app.use(express.urlencoded({ extended: false }))

// Create a middleware that print out an Error response
// Must define res.cc before userRouter, else you can't use this res.cc in userRouter
app.use((req, res, next) => {
  // default value for status = 1, means error
  // the err value maybe is an Object or String
  res.cc = function(err, status = 1) {
    res.send({
      status,
      message: err instanceof Error ? err.message : err
    })
  }

  next()
})

// 一定要在route 之前配置解析 Token 的 mdw
const expressJWT = require('express-jwt')
const config = require('./config')

// 除了 /api 的path, 其他的path 都需要携带 Authorization  token 
// 如果没有的话，会显示失败
// 如果是不对的 token，会显示失败  

app.use(expressJWT({secret: config.jwtSecretKey}).unless({path: [/^\/api/]}))

// Import and use Router module
const userRouter = require('./router/user')
app.use('/api', userRouter)

const userInfoRouter = require('./router/userInfo')
app.use('/my', userInfoRouter)

const artcateRouter = require('./router/artcate')
app.use('/my/article', artcateRouter)

// Define Error level mdw
app.use((err, req, res, next) => {
  // Validation failed
  if(err instanceof joi.ValidationError) {
    return res.cc(err)
  }

  if(err.name === 'UnauthorizedError') {
    return res.cc('Fail to authorize')
  }

  // Unknown error
  res.cc(err)
})

app.listen(3007, () => {
  console.log('Express server running at http://127.0.0.1:3007')
})