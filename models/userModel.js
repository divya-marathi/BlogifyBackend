const mongoose = require("mongoose");

const userSchma = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const userModel =  mongoose.model("user", userSchma);
module.exports = { userModel };
