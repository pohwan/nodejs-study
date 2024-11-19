const fs = require('fs')

fs.writeFile('./Files/3.txt', "Hello Node.js", function(err) {
  if(err) {
    return console.log("File write failed!" + err.message)
  }

  console.log("File write successfully!");
})