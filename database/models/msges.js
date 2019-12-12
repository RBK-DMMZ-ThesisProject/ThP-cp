var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MsgesSchema = new Schema({
  id: {
    type: Number
  },
  customerID: String,
  serviceProviderID: String,
  type: Number, //0 for sender 1 for recseiver
  message: String,
  dataAdded: {
    type: Date,
    default: Date.now
  }
});

var Msges = mongoose.model("msg", MsgesSchema);

module.exports = Msges;
