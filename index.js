// Modules
const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()
const morgan = require('morgan')

// Init functions/methods
require('./ORM/init')()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

// Listening here
app.listen(PORT, () => {
    console.log(`Server up and running at ${PORT}`)
})