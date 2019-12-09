const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, unique: true, lowercase: true },
    password: String,
    firstName: String,
    lastName: String,
    skinType: {},
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    }],
    permission: { type: String, lowercase: true }
});

module.exports = mongoose.model('User', userSchema);