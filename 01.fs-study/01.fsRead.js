// 1. import fs
const fs = require('fs');

// 2. use fs.readFile() to get file
// param 1: file path
// param 2: file encoding format. default is utf-8
// param 3: callback function
fs.readFile('./Files/12.txt', 'utf-8', function(err, dataStr) {
  // if file read success = null;
  // else return error message, dataStr = undefined
  console.log(err);
  console.log('-----------')
  // return result if file read success
  console.log(dataStr)
});