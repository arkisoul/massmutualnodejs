const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false },
  deletedAt: { type: Date, default: null },
  address: {
    street: String,
    city: String,
    country: String,
    pincode: String,
  },
  hobbies: [String],
  todos: [{type: mongoose.Types.ObjectId, ref: 'Todo'}]
});

module.exports = mongoose.model('User', userSchema);