const express = require('express');
const router = express.Router();
const EmailsModel = require('../models/EmailsModel');

router.post(
    '/register',
    (req, res) => {

        const formData = {
            email: req.body.email, 
        };

            const newEmailsModel = new EmailsModel (formData);
            newEmailsModel.save(
                (err, result) => {
                    if(err) {
                        console.log('error', e)
                    } else {
                        res.json({message: 'Email has been saved!'});
                    }
                }
            );
    }
);

module.exports = router;
