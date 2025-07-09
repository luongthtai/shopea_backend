const mongoose = require('mongoose')
const brandsSchema = new mongoose.Schema({
    brand_description: {
        type: String,
        default: ""
    },
    start_time: {
        type: String,
        require: true
    },
    end_time: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        default: 0
    },
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
        require: true
    }
}, {
    timestamps: true,
    versionKey: false
})
module.exports = mongoose.model('brand', brandsSchema)