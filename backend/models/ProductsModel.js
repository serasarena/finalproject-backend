const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema (
    {
        salon: {
            type: String,
            required: true
        }, 
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
        },
        style: {
            type: String, 
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        review: {
            type: Number,
            required: true
        }
    }
);

const ProductsModel = mongoose.model('products', ProductsSchema);
module.exports = ProductsModel; 