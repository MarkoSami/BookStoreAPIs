const mongoose = require('mongoose');
const Address = require('./Address');
const PaymentMethod = require('./Payment');

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        maxlength: 20
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 20
    },
    address: {
        type: Address
    },
    phoneNumbers: {
        type: [mongoose.Types.ObjectId],
        ref: 'PhoneNumber'
    },
    wishlist: {
        type: [mongoose.Types.ObjectId],
        ref: 'Book'
    },
    purchases: {
        type: [mongoose.Types.ObjectId],
        required: true,
        ref: 'Purchase'
    },
    paymentMethods: [PaymentMethod]

});

const userModel = mongoose.model('User', userSchema);

/// ___* SHOULD HASH THE USER PASSWORD *_____ \\\ 

module.exports = userModel;