const Response = require("../utils/response")
const service = require('../services/categories.service')

const response = new Response.Response()

const createCategory = async (req, res) => {
    const data = req.body
    const file = req.file

    const dataRequest = {
        ...data,
        image: file.filename
    }

    try {
        const response = await service.createCategory(dataRequest)
        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send(response.failure({ message: error.message }))
    }
}

const getAllCategories = async (req, res) => {
    try {
        const response = await service.getAllCategories()

        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send(response.failure({ message: "Get all categories fail in controller !!" }))
    }
}

module.exports = {
    createCategory,
    getAllCategories
}