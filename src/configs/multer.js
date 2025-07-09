const multer = require("multer");

const storageCategory = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/categories')
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + file.originalname)
    }
})

const storageBrand = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/brands')
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + file.originalname)
    }
})

const storageAvatar = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/avatars')
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + file.originalname)
    }
})

const uploadCategory = multer({ storage: storageCategory })
const uploadBrand = multer({ storage: storageBrand })
const uploadAvatar = multer({ storage: storageAvatar })

module.exports = { uploadCategory, uploadBrand, uploadAvatar }