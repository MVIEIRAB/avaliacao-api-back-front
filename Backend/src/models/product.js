const mongoose = require('../database/index')

const ProductSchema = new mongoose.Schema({
    sku: {
        type: Number,
        require: true,
        unique: true,
    },

    product: {
        type: String,
        require: true,
        unique: true
    },

    category: {
        type: String,
        required: true,
    }
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
