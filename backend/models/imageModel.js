const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    originalname: {
        type: String,
        required: true
    },
    caption: {
        type: String
    },
    filename: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Image', ImageSchema);
