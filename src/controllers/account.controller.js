const service = require('../services/auth.service')
const response = require('../utils/response')

const messsages = new response.Response() // create response

const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const result = await service.login({ email, password })
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send(messsages.failure({ message: error.message }))
    }
}

const register = async (req, res) => {
    const data = req.body

    try {
        const result = await service.register(data)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send(messsages.failure({ message: error.message }))
    }
}

module.exports = {
    login,
    register
}