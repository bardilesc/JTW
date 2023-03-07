const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
  },
  block: Number,
  admin: Number,
  create_date: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model('user', userSchema);