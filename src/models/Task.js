const mongoose = require('../database/index');

const TaskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        require: true
    },
    description: {
        type: String,
        required: false
    },
    completed: {
        type: Boolean,
        required: false,
        default: false
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

const Task = mongoose.model('task', TaskSchema);

module.exports = Task;