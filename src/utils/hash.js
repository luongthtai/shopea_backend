const bcrypt = require('bcrypt')
const saltRounds = 10

const hashPassword = async ({ password }) => {
    const salt = bcrypt.genSaltSync(saltRounds)
    const hashPassword = await bcrypt.hashSync(password, salt)

    return hashPassword
}

const comparePassword = async ({ password, user_password }) => {
    const result = await bcrypt.compareSync(password, user_password)

    return result
}

module.exports = { hashPassword, comparePassword }