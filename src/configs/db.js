const mongoose = require(`mongoose`)

const connection = async () => {
    const url = process.env.MONGODB_URI

    try {
        await mongoose.connect(url).then(() => console.log('Connect success !!!'))
    } catch (error) {
        console.log('Connect fail !!!')
    }
}

module.exports = connection