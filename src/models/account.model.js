const mongoose = require('mongoose')
const accountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    avatar: {
        type: String,
        default: 'avatarDefault.png'
    },
    phone: {
        type: String,
        default: '',
    },
    address: {
        type: String,
        default: '',
    },
    gender: {
        type: String,
        default: '',
    },
    birthDate: {
        type: Date,
        default: '',
    },
    password: {
        type: String,
        required: true,
    },
    roleId: {
        type: String,
        default: 'user'
    },
    isActive: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true,
    versionKey: false
})
module.exports = mongoose.model('account', accountSchema)