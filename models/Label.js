const mongoose = require('mongoose');

const labelSchmea = mongoose.Schema({
    content: {
        type: String,
        maxlength: 15,
        required: true
    },
    color: {
        type: String,
        default: "#FFFFFF"
    }
}); 