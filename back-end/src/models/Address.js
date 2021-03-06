const mongoose = require('../database/index');

const AddressSchema = new mongoose.Schema({
    fullAddress: {
        type: String,
        required: true
    },
    district: {
        type: String, 
    },
    zipCode: {
        type: Number,
        required: true
    },
    complement: {
        type: String,
        required: false,
        maxLength: 200,
    },
    typeAddress: {
        type: String,
        enum: ['RESIDENCIAL', 'COMMERCIAL', 'BOTH']
    }
});

const Address = mongoose.model('address', AddressSchema);

module.exports = Address;