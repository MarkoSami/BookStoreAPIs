const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    nationality: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: ""
    },
    image: {
        typr: String,
        default: ""
    }
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;