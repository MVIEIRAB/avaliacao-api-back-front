const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('../src/controllers/authController')(app)
require('../src/controllers/prodController')(app)

app.use(express.static(__dirname + '/SPA'))

app.listen(3333, () => {
    console.log('Server has been iniciated.')
})

