const express = require('express');
const router = express.Router();
const ProductsModel = require('../models/ProductsModel');

router.post(
    '/products',
    (req, res) => {
        const formData = {
            salonName: req.body.salonName, 
            description: req.body.description,
            salonImage: req.body.salonImage,
            location: req.body.location,
            price: req.body.price,
            review: req.body.review,

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
            price: req.body.price,
            _id: req.body._id
        };

        ProductsModel
        .findOneAndUpdate(
            { _id: formData._id }, 
            { price: formData.price }, 
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

//added .env file
// matched product keys from models and routes
//hope this works!!!


