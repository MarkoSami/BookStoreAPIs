const mongoose = require('mongoose');
const User = require('./User');

const ratingSchema = mongoose.Schema({
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    review: {
        type: String,
        maxlength: 150,
        default: ""
    },
    madeBy: {
        type: User,
        requires: true
    },
    date: {
        type: Date,
        require: true
    }
});

const ratingModel = mongoose.model('Rating', ratingSchema)

module.exports = ratingModel;