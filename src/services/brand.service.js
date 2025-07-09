const brandModel = require('../models/brands.model')
const accountModel = require('../models/account.model')
const Response = require('../utils/response')
const hash = require('../utils/hash.js')

const response = new Response.Response()

const getAllBrand = async () => {
    try {
        const brands = await brandModel.find().populate('account', 'name email avatar phone address isActive createdAt')

        const responseData = brands.map(item => {
            return {
                _id: item.id,
                brand_description: item.brand_description,
                start_time: item.start_time,
                end_time: item.end_time,
                rating: item.rating,
                name: item.account.name,
                email: item.account.email,
                avatar: item.account.avatar,
                phone: item.account.phone,
                address: item.account.address,
                isActive: item.account.isActive,
            }
        })

        return response.success({ data: responseData, message: "Get brands success !!!" })
    } catch (error) {
        return response.failure({ message: "Get brands fail in service !!!", err_code: error.message })
    }
}

const createBrand = async (data) => {
    try {
        const { image, brand_name, brand_email, brand_password, mobile, address, time_start, time_end, brand_description } = data

        const checkEmail = await accountModel.findOne({ email: brand_email })

        if (checkEmail) return response.failure({ message: "Email existed !!!", err_code: "email_exist" })

        const hashPassword = await hash.hashPassword({ password: brand_password })

        const createAccount = await accountModel.create({ name: brand_name, email: brand_email, password: hashPassword, avatar: `/avatars/${image}`, phone: mobile, address, roleId: "brand" })

        if (!createAccount) return response.failure({ message: "Create account fail !!!", err_code: "create" })

        await brandModel.create({
            brand_description,
            start_time: time_start,
            end_time: time_end,
            account: createAccount._id
        })

        return response.success({ message: "Create brand success !!!" })
    } catch (error) {
        return response.failure({ message: "Create brand fail in service !!!", err_code: error.message })
    }
}

module.exports = {
    getAllBrand,
    createBrand,
}
