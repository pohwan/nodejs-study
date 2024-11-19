const fs = require('fs')

fs.readFile('./Files/result.txt', 'utf-8', function(err, dataStr) {
  if(err) {
    return console.log("File read failed!" + err.message)
  }

  // console.log("File read successfully!" + dataStr)

  // 1. split data with space
  const arrOld = dataStr.split(" ")
  // 2. loop the data and process
  const arrNew = []
  arrOld.forEach(item => {
    arrNew.push(item.replace('=', ':'))
  })
  // 3. combine new processed array string into a string
  const newStr = arrNew.join('\r\n')
  console.log(newStr)

  // 4. use fs.writeFile() to put newStr into new file
  fs.writeFile('./Files/result-ok.txt', newStr, function(err) {
    if(err) {
      return console.log("File write failed!" + err.message)
    }

    console.log("File write success!")
  })
})