const express = require('express')

const app = express()

// mw 是会跟着code的顺序去发生
// 1. Define 1st mw
app.use((req, res, next) => {
  console.log('Use 1st mw')
  next()
})

// 2. Define 2nd mw
app.use((req, res, next) => {
  console.log('Use 2nd mw')
  next()
})

// 3. Define a route
app.get('/user', (req, res) => {
  res.send('User page')
})

app.listen(80, () => {
  console.log('http://127.0.0.1')
})