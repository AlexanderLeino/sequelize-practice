require('dotenv').config()
const { urlencoded } = require('express')
const express = require('express')
const sequelize = require('./config/connection')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use(urlencoded({extended: true}))

sequelize.sync({force: false}).then(() => {
    console.log('Sequelize Connected!')
})

app.listen(PORT, () => {
    `We are listening on http://localhost:${PORT}`
})