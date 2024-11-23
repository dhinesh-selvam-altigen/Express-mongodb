const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Create User Schema and Model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

const User = mongoose.model('User', userSchema);


module.exports = User;
