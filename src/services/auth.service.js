const accountModel = require('../models/account.model.js')
const Response = require('../utils/response.js')
const hash = require('../utils/hash.js')
const jwt = require('jsonwebtoken')

const response = new Response.Response()

const login = async (data) => {
    try {
        const { email, password } = data
        const findAccount = await accountModel.findOne({ email })

        if (!findAccount) return response.failure({ message: "Account not found !!!", err_code: "not_found" }) // >>>>>>>> if not exist account

        const checkPassword = await hash.comparePassword({ password: password, user_password: findAccount.password })

        if (!checkPassword) return response.failure({ message: "Password not match !!!", err_code: "password" }) // >>>>>>>> if password not match 

        const token = jwt.sign({ id: findAccount._id, role: findAccount.roleId }, process.env.JWT_SECRET, { expiresIn: '1d' })
        const refreshToken = jwt.sign({ id: findAccount._id, role: findAccount.roleId }, process.env.JWT_SECRET, { expiresIn: '1m' })

        return response.success({
            message: 'Login successfully !!!', data: {
                access_token: token ? `Bearer ${token}` : undefined,
                refresh_token: refreshToken ? `Bearer ${refreshToken}` : undefined,
                role: findAccount.roleId
            }
        })
    } catch (error) {
        return response.failure({ message: error.message })
    }
}

const register = async (data) => {
    try {
        const { username, email, phone, password } = data

        const checkEmail = await accountModel.findOne({ email })

        if (!!checkEmail) return response.failure({ message: 'Email existed !!!', err_code: 'email_exist' })

        const hashPassword = await hash.hashPassword({ password })

        await accountModel.create({ name: username.trim(), email: email.trim(), phone, password: hashPassword })
        return response.success({ message: 'Register successfully !!!' })
    } catch (error) {
        return response.failure({ message: error.message })
    }
}

module.exports = {
    login,
    register
}