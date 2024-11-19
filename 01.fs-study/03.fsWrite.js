const fs = require('fs')

// param 1: file path to save
// param 2: data to write into the file
// param 3 [optional]: content encoding, default is utf-8
// param 4: callback function
fs.writeFile('./Files/2.txt', "Hello Node.js123", function(err) {
  // if write success, err = null
  // else return error message
  console.log(err)
})