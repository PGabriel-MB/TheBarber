const mongoose = require('../database/index');

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
    }
});

const Service = mongoose.model('service', ServiceSchema);

module.exports = Service;