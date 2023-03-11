const mongoose = require('mongoose');
const Address = require('./Address');
const PhoneNumber = require('./PhoneNumber');
const publisherSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: Address,
    phone: PhoneNumber,
    email: {
        type: String,
        required: true
    },
    website: {
        type: String,
        default: ""
    }

});


const PublisherModel = mongoose.model('Publisher', publisherSchema);

module.exports = PublisherModel;