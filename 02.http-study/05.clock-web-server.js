// 1.1 导入 http 模块
const http = require('http')

// 1.2 导入 fs 模块
const fs = require('fs')

// 1.3 导入 path 模块
const path = require('path')

// 2.1 创建 web server
const server = http.createServer()

// 2.2 监听 web server 的request 事件
server.on('request', (req, res) => {

  // 3.1 获取到客户端请求的 url 地址
  // 例: /clock/index.html
  // /clock/index.css
  // /clock/index.js
  const url = req.url

  // 3.2 把请求的 url 地址映射为具体文件的存放路径
  // 有个问题，当请求路径为 /, 会获得 404, 必须要完整路径才可以显示内容
  // const fpath = path.join(__dirname, url)

  // 5.1 预定一个空白的文件存放路径
  let fpath = ''
  if(url === '/') {
    // 5.2 如果请求的路径为 / , 则手动指定文件的存放路径
    fpath = path.join(__dirname, './clock/index.html')
  }else {
    // 5.3 如果请求的路径不为 /, 动态拼接文件的存放路径 (例: /clock/index.html)
    fpath = path.join(__dirname, '/clock', url)
  }

  // 4.1 根据映射过来的文件路径读取文件内容
  fs.readFile(fpath, 'utf-8', (err, dataStr) => {
    // 4.2 读取失败，向客户端响应固定的“错误信息”
    if(err) {
      res.end('404 not found!')
    }
    res.end(dataStr)
  })
})

// 2.3 启动 server
server.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})