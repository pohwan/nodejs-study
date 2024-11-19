const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  // 定义一个string, 包含中文内容

  const str = `您请求的 URl 地址是 ${req.url}, 请求的 method 为 ${req.method}`

  // 调用 res.setHeader() 来设置 Content-Type 解决中文乱码问题
  // 固定的写法，需要记一下
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  // res.end 将内容响应回客户端
  res.end(str)
})

server.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})