const express = require('express')

const Product = require('../models/product.js')

const router = express.Router()

router.post('/create', async (req, res) => {
    const { sku, product, category } = req.body

    try {
        if (await Product.findOne({ product }))
            return res.status(400).send({ error: 'that product already exist' })

        const sku = await Product.create(req.body)

        return res.send({ sku })

    } catch (err) {
        return res.status(400).send({ erro: 'Fail in Registration' })
    }
})

router.get('/list', async (req, res) => {
    try {
        const sku = await Product.find()
        return res.send({ sku })
    } catch (error) {
        console.log(error)
    }
})

router.get('/list/:sku', async (req, res) => {
    try {
        const { sku } = req.params
        const list = await Product.findOne({ sku })
        return res.json(list)

    } catch (error) {
        console.log(error)
    }
})

router.put('/change/:sku', async (req, res) => {
    const sku = req.params.sku
    Product.findOne({sku: sku}, async (err, foundObject) => {
        if (err) {
            console.log(err)
            res.status(500).send()
        } else {
            if (!foundObject) {
                res.status(404).send()
            } else {
                if (req.body.product) {
                    foundObject.product = req.body.product
                }

                if (req.body.category) {
                    foundObject.category = req.body.category
                }

                foundObject.save((err, updatedObject) => {
                    if (err) {
                        console.log(err)
                        res.status(500).send()
                    } else {
                        res.send(updatedObject)
                    }
                } )
            }
        }
    })
})

module.exports = app => app.use('/product', router)