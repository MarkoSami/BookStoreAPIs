const mongoose = require('mongoose');


const phoneNumberSchema = new mongoose.Schema({
    number: {
        type: String,
        required: true
    },
    countryCode: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    }
});

const PhoneModel = mongoose.model('PhoneNumber', phoneNumberSchema);


module.exports = PhoneModel;