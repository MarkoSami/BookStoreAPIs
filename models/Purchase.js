const mongoose = require('mongoose');
const PaymenMethod = require('./Payment');

const PurchaseSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    books: {
        type: [mongoose.Types.ObjectId],
        ref: 'book',
        required: true
    },
    totalamount: {
        type: Money,
        required: true,
        currency: 'USD',
        precision: 2
    },
    paymentMethod: PaymenMethod
});

const PurchaseModel = mongoose.model('Purchase', PurchaseSchema);
module.exports = PurchaseModel;