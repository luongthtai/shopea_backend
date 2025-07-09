const categoryModel = require('../models/categories.model')
const Response = require('../utils/response.js')

const response = new Response.Response()

const createCategory = async (data) => {
    try {
        const { image, category_name, category_description } = data

        await categoryModel.create({ category_name, category_description, category_image: `/categories/${image}` })

        return response.success({ message: 'Create category success !!!' })
    } catch (error) {
        return response.failure({ message: error.message })
    }
}

const getAllCategories = async () => {
    try {
        const categories = await categoryModel.find()

        return response.success({ data: categories, message: 'Get all categories !!!' })
    } catch (error) {
        return response.failure({ message: "Get all categories fail !!!" })
    }
}

module.exports = {
    createCategory,
    getAllCategories
}