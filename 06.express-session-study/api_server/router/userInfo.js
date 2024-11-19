const express = require('express')
const router = express.Router()
const userInfo_handler = require('../router_handler/userInfo')

const expressJoi = require('@escook/express-joi')
const { update_userInfo_schema, update_password_schema, update_avatar_schema } = require('../schema/user')

// get user basic info router
router.get('/userInfo', userInfo_handler.getUserInfo)

// update user basic info router
router.post('/userInfo', expressJoi(update_userInfo_schema), userInfo_handler.updateUserInfo)

// update password router
router.post('/updatepwd', expressJoi(update_password_schema), userInfo_handler.updatePassword)

// update user avatar router
router.post('/update/avatar', expressJoi(update_avatar_schema), userInfo_handler.updateAvatar)

module.exports = router