var mongoose = require("mongoose");
const cors = require("cors");

var Schema = mongoose.Schema;

var adminSchema = new Schema({
  id: {
    type: Number
  },
  adminName: String,
  mobileNO: Number,
  password: String,
  email: String,
  state: { type: Number, default: 1 },
  dataAdded: {
    type: Date,
    default: Date.now
  }
});

var Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;
