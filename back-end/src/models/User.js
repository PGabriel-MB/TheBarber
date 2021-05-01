const mongoose = require('../database/index');
const bcrypt = require('bcryptjs');

const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    serviceProvider: {
        type: Boolean,
        default: false,
        select: true
    },
    stars: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    birthDate: {
        type: Date,
        required: true
    },
    providerServices:[{
        type: ObjectId,
        ref: 'service'
    }],
    comments: [{
        type: ObjectId,
        ref: 'comment'
    }],
    password: {
        type: String,
        required: true,
        select: false
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
});
UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

const User = mongoose.model('user', UserSchema);

module.exports = User;