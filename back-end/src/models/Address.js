const mongoose = require('../database/index');

const Address = new mongoose.Schema({
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
    }
});

const Address = mongoose.model('address', Address);

module.exports = Address;