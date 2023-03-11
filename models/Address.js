const mongoose = require('mongoose');


const addressSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    ZIP: {
        type: String,
        required: true
    }

});


const AddressSchema = mongoose.model('Address', addressSchema);

module.exports = addressSchema;