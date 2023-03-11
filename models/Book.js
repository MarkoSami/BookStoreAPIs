const mongoose = require('mongoose');
const Money = require('mongoose-money');
const Author = require('./Author');
const Category = require('./Category');
const Publisher = require('./Publisher');
const Rating = require('./Rating');
const Label = require('./Label');


const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    describtion: {
        type: String,
        default: "No description provided"
    },
    price: {
        type: Money,
        required: true,
        currency: 'USD',
        precision: 2
    },
    authors: [Author],
    cover: {
        type: String,
        required: true
    },
    categories: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Category',
        required: true
    },
    publishDate: {
        type: Date,
        required: true
    },
    publisher: Publisher,
    bestSeller: {
        type: Boolean,
        default: false
    },
    averageRating: {
        type: Number,
        default: 0
    },
    ratings: [Rating],
    discounts: {
        type: [Number],
        default: []
    },
    labels: [Label],
    images: [{
        type: String,
        required: true
    }],
    isbn: {
        type: String,
        default: ""
    },
    coverType: {
        type: String,
        enum: ['Hard cover', 'Paper cover'],
    },
    languages: {
        type: [String],
        default: [],
    },
    printLength: {
        type: Number,
        required: true
    }

});

const bookModel = require('Book', BookSchema);

module.exports = bookModel;