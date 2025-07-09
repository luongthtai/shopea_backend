const authRouter = require('./account.router')
const categoriesRouter = require('./categories.router')
const brandRouter = require('../routers/brand.router')

const initWebRouter = (app) => {
    app.use('/api/v1/auth', authRouter)
    app.use('/api/v1/categories', categoriesRouter)
    app.use('/api/v1/brands', brandRouter)
    app.use((req, res, next) => {
        res.status(404).send({ message: 'Not found !!!' })
    })
}

module.exports = initWebRouter