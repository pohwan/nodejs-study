// 局部生效中间件: 就是不使用 app.use() 的 mw
const express = require('express')

const app = express()

// 1. Define mw function, 这个局部生效 mdw, 只会发生在 client call '/' api 发生, 不会在 /user 发生(因为我们没有 define)
const mw1 = (req, res, next) => {
  console.log('Use 局部生效 mw1')
  next()
}

const mw2 = (req, res, next) => {
  console.log('Use 局部生效 mw2')
  next()
}

// 2. Create route
// 会先用 mw1 function, 再到 mw2 function
// 可以用 array or 直接写都没问题: mw1, mw2 or [mw1, mw2]
app.get('/', [mw1, mw2], (req, res) => {
  res.send('Home page.')
})

app.get('/user', (req, res) => {
  res.send('User page.')
})

app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1')
})