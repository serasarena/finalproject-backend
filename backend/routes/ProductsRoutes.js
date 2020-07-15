const express = require('express');
const router = express.Router();
const ProductsModel = require('../models/ProductsModel');

router.post(
    '/',
    (req, res) => {
        const formData = {
            brand: req.body.brand, 
            model: req.body.model,
            price: req.body.price,
            quantity: req.body.quantity,
            image: req.body.image,
            description: req.body.description
        };
        console.log(
            'From the user', formData
        );
            const newProductsModel = new ProductsModel (formData);
            newProductsModel.save();

        res.send('Your Product has been saved!');
    }
);

router.post(
    '/update',
    (req, res) => {
        const formData = {
            quantity: req.body.quantity,
            _id: req.body._id
        };

        ProductsModel
        .findOneAndUpdate(
            { _id: formData._id }, 
            { quantity: formData.quantity }, 
            {}, 
            (err, document) => {

                if(err) {
                    console.log(err);
                } else {
                    res.json(
                        {
                            message: 'Product updated',
                            document: document
                        }
                    )
                }
            }
        )
    }
);

router.get(
    '/',
    (req, res)=>{
        ProductsModel.find()
        .then(
            (results) => {
                res.json({products: results})
            }
        )
        .catch( 
            (e)=> {
                console.log('error occured', e)
            }
        );

    }
);

module.exports = router;
