class Response {
    success({ message, data }) {
        return {
            status: 1,
            message,
            data
        }
    }

    failure({ message, err_code = undefined }) {
        return { status: 0, message, err_code }
    }
}

module.exports = { Response }