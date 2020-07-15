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
            newEmailsModel.save();

        res.json({message: 'Your Email has been saved!'});
    }
);

module.exports = router;
