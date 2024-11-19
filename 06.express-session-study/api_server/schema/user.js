const joi = require('joi')

// define username and password schema rules
const username = joi.string().alphanum().min(1).max(10).required()
const password = joi.string().pattern(/^[\S]{6,12}$/).required()

// define id, nickname, email schema rules
const id = joi.number().integer().min(1).required()
const nickname = joi.string().required()
const user_email = joi.string().email().required()

// define avatar schema rules
// dataUri() is base64 data format
const avatar = joi.string().dataUri().required()

// define request body rules for register and login function
exports.reg_login_schema = {
  body: {
    username,
    password
  }
}

// define request body rules for update user info function
exports.update_userInfo_schema = {
  body: {
    id,
    nickname, 
    email: user_email
  }
}

// define request body rules for update password function
exports.update_password_schema = {
  body: {
    oldPwd: password,
    // joi.ref('oldPwd') = must have same value with oldPwd
    // joi.not(joi.ref('oldPwd')) = newPwd not equal to oldPwd
    // concat with password schema validation
    newPwd: joi.not(joi.ref('oldPwd')).concat(password)
  }
}

// define request body rules for update avatar function
exports.update_avatar_schema = {
  body: {
    avatar
  }
}