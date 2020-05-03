const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('../src/controllers/authController')(app)
require('../src/controllers/prodController')(app)

app.use(express.static(__dirname + '/client'))

const port = 3333

app.listen(port, () => {
    console.log(`Server has been iniciated, listening on: http://localhost:${port}`)
})