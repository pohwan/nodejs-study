const express = require('express')
const router = express.Router()

// Import user.js from router handler
const user_handler = require('../router_handler/user')

// 1. Import validator middleware
const expressJoi = require('@escook/express-joi')

// 2. Import neccessary validation schema
const { reg_login_schema } = require('../schema/user')

// Register new user
router.post('/reguser', expressJoi(reg_login_schema), user_handler.regUser)

// Login
router.post('/login', expressJoi(reg_login_schema), user_handler.login)

module.exports = router