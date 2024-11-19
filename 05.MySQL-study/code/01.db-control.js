// 01-Connect to db

// 01-1 Import mysql module
const mysql = require('mysql')

// 01-2 connect mysql db
const db = mysql.createPool({
  host: '127.0.0.1', //db IP address
  user: 'root', // account username to login to db
  password: 'admin123', // accooutn password to login to db
  database: 'my_db_01' // which db want to connect
})

// 01-3 Test mysql module is working correctly
// SELECT 1 query is only for testing mysql module
/* db.query('SELECT 1', (err, results) => {
  // if mysql have error
  if(err) {
    return console.log(err.message)
  }

  // able to execute sql query
  console.log(results)
}) */

// 02- Select data from users table
/* const sqlStr = 'select * from users'
db.query(sqlStr, (err, results) => {
  if(err) {
    return console.log(err.message)
  }

  // If use SELECT query, the results will return an Array
  console.log(results)
})
 */

// 03- Insert data to users table
// 03-1. create object that want to insert user data
/* const user = { username: 'Spider-Man', password: 'pcc123' }
// 03-2. 待执行的 SQL query, 英文 ? 代表占位符, 代表待会儿会填充
const sqlStr = 'insert into users(username, password) values(?, ?)'

db.query(sqlStr, [user.username, user.password], (err, results) => {
  if(err) {
    return console.log(err.message)
  }

  // If use INSERT query, the results will return an Object
  // can use affectedRows to identify where the data is inserted success
  if(results.affectedRows === 1) {
    console.log('Success insert data!')
  }
}) */

// 04- Insert data (convenient way)
// 因为如果那个 data 有很多个 field, 03 的方法就不大适合
/* const user = { username: 'Spider-Man2', password: 'pcc4321' }
const sqlStr = 'insert into users set ?'

db.query(sqlStr, user, (err, results) => {
  if(err) {
    return console.log(err.message)
  }

  if(results.affectedRows === 1) {
    console.log('Success insert data!')
  }
}) */

// 05- Update user information
/* const user = { id: 6, username: 'aaa', password: '000' }
const sqlStr = 'update users set username= ? , password= ? where id= ?'

db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
  if(err) {
    return console.log(err.message)
  }
  // If use UPDATE query, the results will return an Object
  // can use affectedRows to identify where the data is inserted success
  if(results.affectedRows === 1) {
    console.log('Success update data!')
  }
}) */

// 05- Update user information (convenient way)
/* const user = { id: 6, username: 'aaaa', password: '0000' }
const sqlStr = 'update users set ? where id= ?'

db.query(sqlStr, [user, user.id], (err, results) => {
  if(err) {
    return console.log(err.message)
  }
  // If use UPDATE query, the results will return an Object
  // can use affectedRows to identify where the data is inserted success
  if(results.affectedRows === 1) {
    console.log('Success update data!')
  }
}) */

// 06 - Delete user
// If only 1 "?", means 1 params, no need to use Array. While more than 1 "?", have to pass in array
/* const sqlStr = 'delete from users where id=?'
db.query(sqlStr, 5, (err, results) => {
  if(err) {
    return console.log(err.message)
  }
  // If use DELETE query, the results will return an Object
  // can use affectedRows to identify where the data is inserted success
  if(results.affectedRows === 1) {
    console.log('Success delete data!')
  }
}) */

// 07 - Delete indicator (标记删除)
// 用 DELETE query 的话会直接把 data 删除，保险起见，推荐使用标记删除形式，来模拟删除的动作
const sqlStr = 'update users set status= ? where id= ?'
db.query(sqlStr, [1, 6], (err, results) => {
  if(err) {
    return console.log(err.message)
  }

  if(results.affectedRows === 1) {
    console.log("Delete indicator success!")
  }
})