const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['credit card', 'debit card', 'PayPal', 'bank transfer'],
        maxlength: 30
    },
    cardNumber: {
        type: String,
        required: true,
        maxlength: 20
    }

});


const PaymentModel = mongoose.model('Payment', PurchaseSchema);
module.exports = PaymentModel;