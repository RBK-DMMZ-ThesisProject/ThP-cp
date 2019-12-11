var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var spHiresSchema = new Schema({
  id: {
    type: Number
  },
  customerID: Number,
  serviceProviderID: Number,
  dataAdded: {
    type: Date,
    default: Date.now
  }
});

var SpHires = mongoose.model("sphire", spHiresSchema);

module.exports = SpHires;
