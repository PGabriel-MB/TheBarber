const mongoose = require('../../database/index');

const CommentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    comment: {
        type: String
    },
    serviceProvider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const Comment = mongoose.model('comment', CommentSchema);

module.exports = Comment;