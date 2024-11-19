const fs = require('fs')

// 出现路径拼接错误的问题，是因为提供了 ./ 或 ../ 开头的相对路径
// 如果要解决这个问题，可以提供一个完整的文件存放路径就行 
/* fs.readFile('./Files/1.txt', 'utf-8', function(err, dataStr) {
  if(err) {
    return console.log("File read failed", err.message)
  }
  console.log("File read success", dataStr)
}) */

// 移植性非常差，不利于维护
/* fs.readFile('C:\\Users\\User\\OneDrive\\Desktop\\dev\\nodejs-study\\fs-study\\Files\\1.txt', 'utf-8', function(err, dataStr) {
  if(err) {
    return console.log("File read failed", err.message)
  }
  console.log("File read success", dataStr)
}) */

// __dirname 表示当前文件所处的目录
// console.log(__dirname)
fs.readFile(__dirname + '/Files/1.txt', 'utf-8', function(err, dataStr) {
  if(err) {
    return console.log("File read failed", err.message)
  }
  console.log("File read success", dataStr)
})