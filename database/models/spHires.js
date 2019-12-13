var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var spHiresSchema = new Schema({
  id: {
    type: Number
  },
  customerID: String,
  serviceProviderID: String,
  dataAdded: {
    type: Date,
    default: Date.now
  }
});

var SpHires = mongoose.model("sphire", spHiresSchema);

module.exports = SpHires;
