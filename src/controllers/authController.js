const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/index')

const router = express.Router()

router.post('/user', async (req, res) => {
    const { email } = req.body

    try {
        if (await User.findOne({ email }))
            return res.status(400).send({ error: 'that e-mail already exist' })
            
        const user = await User.create(req.body)

        user.email = undefined

        return res.send({ user })

    } catch (err) {
        return res.status(400).send({ erro: 'Fail in Registration' })
    }
})

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email }).select('+password')

    if (!user)
        return res.status(400).send({erro: 'user not found'})

    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({erro: 'invalid password'})

    user.password = undefined

    res.send({ user })
})

module.exports = app => app.use('/auth', router)