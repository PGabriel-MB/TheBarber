const mongoose = require('../../database/index');


const ObjectId = mongoose.Schema.Types.ObjectId;

const EstablishmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cnpj: {
        type: String,
        required: true
    },
    services: [{
        type: ObjectId,
        ref: 'services'
    }],
    owner: {
        type: ObjectId,
        ref: 'user'
    }
});

const Establishment = mongoose.model('establishment', EstablishmentSchema);

module.exports = Establishment;
