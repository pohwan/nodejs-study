// import db module
const db = require('../db/index')

// import bcrypt module
const bcrypt = require('bcryptjs')

// Get user basic info logic
exports.getUserInfo = (req, res) => {
  // define sql query to check user info
  const sql = 'select id, username, nickname, email, user_pic from ev_users where id=?'

  // 当Authorization 成功后，express-jwt 会有 req.user 包含在里面，把该token 附上的 user infomation 挂在一起 
  db.query(sql, [req.user.id], (err, results) => {
    if(err) {
      return res.cc(err)
    }

    if(results.length !== 1) {
      return res.cc('Fail to get user info!')
    }

    res.send({
      status: 0,
      message: 'Get user info success!',
      data: results[0],
    })
  })
}

// Update user basic info logic
exports.updateUserInfo = (req, res) => {
  // define sql query
  const sql = 'update ev_users set ? where id=?'
  // use db.query() to execute
  db.query(sql, [req.body, req.body.id], (err, results) => {
    if(err) {
      return res.cc(err)
    }

    if(results.affectedRows !== 1) {
      return res.cc('Failed to update user info')
    }

    // success
    res.cc('Update user info successfully', 0)
  })
}

// Update user password logic
exports.updatePassword = (req, res) => {
  const sql = 'select * from ev_users where id=?'
  db.query(sql, [req.user.id], (err, results) => {
    if(err) {
      return res.cc(err)
    }

    if(results.length !== 1) {
      return res.cc('User not found')
    }

    // To check if user's old password is valid
    const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password)
    if(!compareResult) {
      return res.cc('Incorrect old password')
    }

    // Update db
    const sql = 'update ev_users set password=? where id=?'

    // Encrypt new password and update in db
    const newPwd = bcrypt.hashSync(req.body.newPwd, 10);  
    db.query(sql, [newPwd, req.user.id], (err, results) => {
      if(err) {
        return res.cc(err)
      }

      if(results.affectedRows !== 1) {
        return res.cc('Fail to update password!')
      }

      res.cc('Update password successfully!', 0)
    })
  })
}

// Update user avatar logic
exports.updateAvatar = (req, res) => {
  // update db
  const sql = 'update ev_users set user_pic=? where id=?'
  db.query(sql, [req.body.avatar, req.user.id], (err, results) => {
    if(err) {
      return res.cc(err)
    }

    if(results.affectedRows !== 1) {
      return res.cc('Failed to update avatar!')
    }

    res.cc('Update avatar success!', 0)
  })
}