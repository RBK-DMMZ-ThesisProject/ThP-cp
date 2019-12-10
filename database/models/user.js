var mongoose = require("mongoose");
const cors = require("cors");

var Schema = mongoose.Schema;
// role: 0: customer, 1: service provider, 2: admin
var userSchema = new Schema({
  id: {
    type: Number
  },
  userName: String,
  mobileNO: String,
  password: String,
  email: String,
  state: { type: Number, default: 1 },
  role: { type: Number, default: 0 },
  dateAdded: {
    type: Date,
    default: Date.now
  }
});

var User = mongoose.model("user", userSchema);

module.exports = User;
