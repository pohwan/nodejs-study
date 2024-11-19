// Import db module
const db = require('../db/index')

// Import bcryptjs module (A module that use to encrypt password)
// 1- It's only 1 way encryption. Which means it cannot decrypt back
// 2- A same password multiple times encrypt, will have different result (increase security)

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Import global config file
const config = require('../config')

// Register user logic
exports.regUser = (req, res) => {
  const userInfo = req.body
  
  // check request body is valid
  // if(!userInfo.username || !userInfo.password) {
  //   // return res.send({ status: 1, message: 'Invalid Username or Password.'})
  //   return res.cc('Invalid Username or Password.')
  // }
  

  // define sql query 
  const sqlStr = 'select * from ev_users where username=?'
  db.query(sqlStr, [userInfo.username], (err, results) => {
    if(err) {
      // return res.send({ status: 1, message: err.message})

      // use res.cc which defined in app.js
      return res.cc(err)
    }

    // to check if username has been used
    if(results.length > 0) {
      // return res.send({ status: 1, message: 'Username has been used! Please change to another username!'})
      return res.cc('Username has been used! Please change to another username!')
    }

    // username can be used
    // use bcrypt.hashSync() to encrypt password
    userInfo.password = bcrypt.hashSync(userInfo.password, 10)

    // define INSERT query
    const sql = 'insert into ev_users set ?'

    // use db.query to run query
    db.query(sql, { username: userInfo.username, password: userInfo.password }, (err, results) => {
      if(err) {
        // return res.send({ status: 1, message: err.message })
        return res.cc(err)
      }

      if(results.affectedRows !== 1) {
        // return res.send({ status: 1, message: 'Failed to register user. Please try again later.'})
        return res.cc('Failed to register user. Please try again later.')
      }

      // Success register user
      // res.send({status: 0, message:'Register user successfully!'})
      res.cc('Register user successfully!', 0)
    })
  })
}

// Login logic
exports.login = (req, res) => {
  // receive request body
  const userInfo = req.body
  // define sql query to fine user from table
  const sql = 'select * from ev_users where username=?'

  // execute sql query
  db.query(sql, [userInfo.username], (err, results) => {
    if(err) {
      return res.cc(err)
    }

    // run sql query success
    // but no record found
    if(results.length !== 1) {
      return res.cc('Login failed!')
    }

    // Check if password is correct
    // results variable is Array. If record found, means there is 1 record in the results array.
    const compareResult = bcrypt.compareSync(userInfo.password, results[0].password)
    if(!compareResult) {
      return res.cc('Login failed!')
    }

    // Generate JTW token

    // { ...results[0] } will expand the info of the results.
    // {...results[0], password: '', user_pic: '' }, replacing password and user_pic value to '' when we want to generate JWT token
    const user = {...results[0], password: '', user_pic: '' }

    // Encrypt user info and generate JWT token
    const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn })

    // return jwt token to frontend
    res.send({
      status: 0,
      message: 'Login success!',
      token: 'Bearer ' + tokenStr
    })
  })
}