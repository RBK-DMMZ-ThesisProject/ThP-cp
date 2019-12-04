var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var msgesSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  customerID: Number,
  serviceProviderID: Number,
  messages: [{ text: String, date: { type: Date, default: Date.now } }],
  dataAdded: {
    type: Date,
    default: Date.now
  }
});

var Msges = mongoose.model("msge", msgesSchema);

module.exports = Msges;
