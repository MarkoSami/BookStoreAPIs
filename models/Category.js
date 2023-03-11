const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        requires: true
    },
    describtion: {
        type: String,
        default: "No description provided"
    },
    subCategories: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Category'
    }
});

const CategoryModel = mongoose.model('Category', categorySchema);

module.exports = categorySchema;