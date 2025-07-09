const service = require('../services/brand.service')
const Response = require('../utils/response')

const response = new Response.Response()

const getBrands = async (req, res) => {
    try {
        const response = await service.getAllBrand()

        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send(response.failure({ message: "Get brands fail in controller !!!" }))
    }
}

const createBrand = async (req, res) => {
    const data = req.body
    const file = req.file

    const dataRequest = {
        ...data,
        image: file.filename
    }

    try {
        const response = await service.createBrand(dataRequest)
        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send(response.failure({ message: "Create brand fail in controller !!!" }))
    }
}

module.exports = {
    getBrands,
    createBrand
}
