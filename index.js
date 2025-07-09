const express = require('express')
const app = express()

const path = require('path')
require('dotenv').config();
const cors = require('cors')

const db = require('./src/configs/db')
const initialRouter = require('./src/routers/router')

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use(express.static(path.join(__dirname, './src/public')))

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

const port = 8080

db() // connect database
initialRouter(app) // create app router

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
