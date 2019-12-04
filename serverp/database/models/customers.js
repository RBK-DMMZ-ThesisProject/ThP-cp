var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var customersSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  userName: String,
  userMobileNum: { type: Number, unique: true },
  dataAdded: {
    type: Date,
    default: Date.now
  }
});

var Customers = mongoose.model("customer", customersSchema);

module.exports = Customers;
