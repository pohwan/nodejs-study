// This is article category router module

const express = require('express')
const router = express.Router()

const artCate_handler = require('../router_handler/artcate')

// 1. Import validator middleware
const expressJoi = require('@escook/express-joi')

// 2. Import neccessary validation schema
const { add_cate_schema, delete_cate_schema, get_cate_schema, update_cate_schema } = require('../schema/artcate')

// Get article categories 
router.get('/cates', artCate_handler.getArtCates)

// Add article category
router.post('/addcates', expressJoi(add_cate_schema), artCate_handler.addCates)

// Delete article category by ID
router.get('/deletecate/:id', expressJoi(delete_cate_schema), artCate_handler.deleteCateById)

// Get article category by ID
router.get('/cates/:id', expressJoi(get_cate_schema), artCate_handler.getArtCateById)

// Update article category by ID
router.post('/updatecate', expressJoi(update_cate_schema), artCate_handler.updateCateById)

module.exports = router