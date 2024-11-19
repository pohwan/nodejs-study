// 1. Import express
const express = require('express')

// 2. Create web server
const app = express()

// 4. Listen GET & POST method, then send response data to client
app.get('/user', (req, res) => {
  // send a json response back to client
  res.send({name: 'zs', age: 20, gender: 'M'})
})

app.post('/user', (req, res) => {
  // send string response back to client
  res.send('Request success')
})

app.get('/', (req, res) => {
  // req.query = GET method query param, default will be {}
  console.log(req.query)
  res.send(req.query)
})

// :id is dynamic param
app.get('/user/:id', (req, res) => {
  // req.params is dynamic path variable, default will be {}
  console.log(req.params)
  res.send(req.params)
})

// dynamic param can be multiple
app.get('/user/:id/:name', (req, res) => {
  // req.params is dynamic path variable, default will be {}
  console.log(req.params)
  res.send(req.params)
})

// 3. Start web server
app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})