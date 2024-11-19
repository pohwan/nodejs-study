const qs = require('querystring')

const bodyParser = (req, res, next) => {
  // 定义中间件具体的业务逻辑
  
  // 定义一个 str string, 专门用来存储从Client send 来的 request
  let str = ''

  req.on('data', (chunk) => {
    str += chunk
  })

  // 监听 res 的 end 事件
  req.on('end', () => {
    // 在 str 中存放的是完整的 req body data
    // console.log(str)

    // TODO：把string format 的 req body data, 解析成 object format
    const body = qs.parse(str)
    req.body = body
    next()
  })
}

module.exports = bodyParser