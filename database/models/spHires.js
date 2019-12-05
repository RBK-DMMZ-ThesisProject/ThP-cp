var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var spHiresSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  customerID: Number,
  serviceProviderID: Number,
  dataAdded: {
    type: Date,
    default: Date.now
  }
});

var SpHires = mongoose.model("spHire", spHiresSchema);

module.exports = SpHires;
