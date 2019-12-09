const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema ({
    text: String,
    commentRating: Number,
    author: {
        id: {
            type: mongoose.Schema.ObjectId,
            ref: "User"
        },
        name: String,
        skinType: String
    }
});

module.exports = mongoose.model('Review', reviewSchema);