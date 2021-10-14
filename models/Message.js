const mongoose = require('mongoose');
const {Schema} = mongoose;

const messageSchema = new Schema({
  message: {
    type: String
  }
}, {timestamps: true});

const Message = mongoose.model('message', messageSchema);

module.exports = Message;