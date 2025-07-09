const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        required: true,
        unique: true,
    },
    category_image: {
        type: String,
        required: true,
    },
    category_description: {
        type: String,
        default: "",
    },
}, {
    timestamps: true,
    versionKey: false
})
module.exports = mongoose.model('category', categorySchema)