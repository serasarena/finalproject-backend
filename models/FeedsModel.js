const mongoose = require('mongoose');

const FeedsSchema = new mongoose.Schema (
    {
        text: {
            type: String,
            required: true
        }, 
        username: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'username',
            required: true
        },
        hashtags: {
            type: Array,
        },
        image: {
            type: String,
        },
        date: {
            type: Date,
            default: Date.now
        }, 
        likes: {
            type: Array,
            required: true
        }
    },
    {timestamps: true,
        toObject: {virtuals:true},
        toJSON: {virtuals: true}
    }
);

FeedsSchema.virtual('likeCount',
{
    ref: 'likes',
    localField: '_id',
    foreignField: 'postId',
    count: true
});

const FeedsModel = mongoose.model('feeds', FeedsSchema);
module.exports = FeedsModel; 