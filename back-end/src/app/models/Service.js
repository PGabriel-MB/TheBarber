const mongoose = require('../../database/index');

const ServiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    serviceProvider: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }
});

const Service = mongoose.model('service', ServiceSchema);

module.exports = Service;