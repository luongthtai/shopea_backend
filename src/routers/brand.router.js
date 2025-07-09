const express = require('express')
const router = express.Router()
const controller = require('../controllers/brand.controller')
const multer = require('../configs/multer')

router.get('/all', controller.getBrands)
router.post('/create', multer.uploadAvatar.single('image'), controller.createBrand)

module.exports = router