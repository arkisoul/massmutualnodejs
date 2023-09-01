const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  todo: { type: String, required: true },
  user: { type: mongoose.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Todo', todoSchema)