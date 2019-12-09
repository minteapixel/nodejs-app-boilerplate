const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    productName: { type: String, unique: true, lowercase: true },
    companyName: { type: String, unique: true, lowercase: true },
    type: String,
    image: String,
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    }], 
    ProductRating: Number
});

module.exports = mongoose.model('Product', productSchema);