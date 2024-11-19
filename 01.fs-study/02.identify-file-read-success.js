const fs = require('fs')

fs.readFile('./Files/11.txt', 'utf-8', function(err, dataStr) {
  if(err) {
    return console.log("File read failed!" + err.message);
  }

  console.log("File read success!" + dataStr);
})