const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tagline: {
        type: String,
        required: true
    },
    schedule: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    files: [{
        type: String,
        required: true
    }],
    moderator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: String,
        required: true
    },
    sub_category: {
        type: String,
        required: true
    },
    rigor_rank: {
        type: Number,
        required: true
    },
    attendees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = mongoose.model('Event', eventSchema)
