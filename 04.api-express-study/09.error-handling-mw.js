const express = require('express')

const app = express()

// Without error handling middleware, the system will break down if there's issue.
// With error handling middleware, the system able to return error message even though there's issue happens.

app.get('/', (req, res) => {
  // 1. return error
  throw new Error('Internal Server Error')
  res.send('Home page.')
})

// 2. Defined error handling mdw, catch all the error thrown from the whole project to prevent system break down.
// 3. 所有 error handling mdw 必须要在所有 route function 之后
app.use((err, req, res, next) => {
  console.log('Error! ' + err.message)
  res.send('Error: ' + err.message)
})

app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1')
})