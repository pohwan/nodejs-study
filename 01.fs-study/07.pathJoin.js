const path = require('path')
const fs = require('fs')

// ../ 会抵消前面的路径
/* const pathStr = path.join('/a', '/b/c', '../../', '/d', 'e')
console.log(pathStr) */

// fs.readFile(__dirname + '/Files/1.txt')

fs.readFile(path.join(__dirname, '/Files/1.txt'), 'utf-8', function(err, dataStr) {
  if(err) {
    return console.log(err.message)
  }

  console.log(dataStr)
})
