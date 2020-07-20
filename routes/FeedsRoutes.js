const express = require('express');
const router = express.Router();
const FeedsModel = require('../models/FeedsModel');

router.post(
    '/',
    (req, res) => {
        const formData = {
            text: req.body.text, 
            username: req.body.username,
            hashtags: req.body.hashtags,
            image: req.body.image,
            likes: req.body.likes
        };
        console.log(
            'From the user', formData
        );
            const newFeedModel = new FeedsModel (formData);
            newFeedModel.save();

        res.send('Your POST has been received.');
    }
);

router.get(
    '/',
    (req, res)=>{
        FeedsModel
        .find()
        .then(
            (results) => {
                res.json(results)
            }
        )
        .catch(
            (e)=> {
                console.log('error occured', e)
            }
        );
    }
);

router.post(
    'feeds/like',
    (req, res) => {

        const formData = {
            hashtags: req.body.hashtags, 
            text: req.body.text,
            username: req.body.username,
            likes: req.body.likes, 
            image: req.body.image, 
        };

        FeedsModel.findOne(
            {username: formData.username});
            (err, document) => {
                if (!document) {
                    res.send("I am not a logged-in user");
                }
                else {
                    (isMatch) => {
                        if(isMatch === true) {
                            const newLikesArray = {
                                id: document.id,
                                username: document.username
                            };
                        res.send ("I am a logged-in user");
                    }
                }
            }
        }

        FeedsModel.updateOne(
            {username: "JohnWick"},
            {likes: newLikesArray});
        
        const FeedsModel = new FeedsModel (formData);
        FeedsModel.save(FeedsSchema.virtual);
    
        res.send('You liked this post');
    }
);

module.exports = router;
