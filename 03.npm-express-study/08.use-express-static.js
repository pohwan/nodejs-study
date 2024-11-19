const express = require('express')

const app = express()

// 在这里需要调用 express.static() 方法，快速的对外提供静态资源
// 可以放多个静态资源，但是如果里面有相同的file, 他会找第一个找到的
// 前缀可以让 path 更加 specific 一些: e.g. 在browser 写: /files/index.html，就能load 出这个的html instead of clock 的 html
app.use('/files', express.static('./files'))
app.use(express.static('./clock'))

app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})