const express = require('express')
const router = express.Router()
const controller = require('../controllers/categories.controller')
const multer = require('../configs/multer')

router.post('/create', multer.uploadCategory.single('image'), controller.createCategory)
router.get('/get', controller.getAllCategories)

module.exports = router