const mongoose = require('../../database/index');

const AddressSchema = new mongoose.Schema({
    fullAddress: {
        type: String,
        required: true
    },
    district: {
        type: String, 
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    complement: {
        type: String,
        required: false,
        maxLength: 200,
    },
    typeAddress: {
        type: String,
        enum: ['RESIDENTIAL', 'BUSINESS', 'BOTH']
    },
    serviceProvider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
});

const Address = mongoose.model('address', AddressSchema);

module.exports = Address;