const mongoose = require('mongoose');
const { Schema } = mongoose;

const routineSchema = new Schema({
  name: String,
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  }],
  author: {
    id: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    username: String
  }
});

module.exports = mongoose.model('Routine', routineSchema);