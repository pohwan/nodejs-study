// 1. 导入 http 模块
const http = require('http')

// 2. 创建 web 服务器实例
const server = http.createServer()

// 3. 为服务器实例绑定 request 事件，监听客户端的请求
server.on('request', function(req, res) {
  console.log('someone visit our web server.')
})

// 4. 启动服务器
// * port 80 default 是 hide 起来的，如果要用别的 port number，就要特别mention
// server.listen(80, function() {
//   console.log('server running at http://127.0.0.1:80')
// })

server.listen(8080, function() {
  console.log('server running at http://127.0.0.1:8080')
})
