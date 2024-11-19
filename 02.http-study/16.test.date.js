// import dateFormat
const TIME = require('./15.tradisional-dateFormat')

// use imported method
const dt = new Date()
// console.log(dt)

const newDt = TIME.dateFormat(dt)
console.log(newDt)