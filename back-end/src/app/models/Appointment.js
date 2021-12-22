const mongoose = require('../../database/index');


const ObjectId = mongoose.Schema.Types.ObjectId;

const AppointmentSchema = new mongoose.Schema({
    when: {
        type: Date,
        required: true
    },
    where: {
        type: ObjectId,
        ref: 'address',
        required: true
    },
    services: [{
        type: ObjectId,
        ref: 'service'
    }],
    client: {
        type: ObjectId,
        ref: 'user'
    },
    serviceProvider: {
        type: ObjectId,
        ref: 'user'
    }
});

const Appointment = mongoose.model('appointment', AppointmentSchema);

module.exports = Appointment
