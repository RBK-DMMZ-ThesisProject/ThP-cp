var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MsgesSchema = new Schema({
  id: {
    type: Number
  },
  customerID: String,
  serviceProviderID: String,
  receverID: String,
  senderID: String,
  message: String,
  dataAdded: {
    type: Date,
    default: Date.now
  }
});

var Msges = mongoose.model("msg", MsgesSchema);

let saveNewMsg = msage => {
  var newMassage = new Msges({
    customerID: msage.customerID,
    serviceProviderID: msage.serviceProviderID,
    receverID: msage.receverID,
    message: msage.message,
    senderID: msage.senderID
  });
  console.log(newMassage);
  newMassage.save(function(err, data) {
    if (err) {
      console.log("error saving", err);
    }
    console.log("profile saved in db", data);
  });
};

module.exports.Msges = Msges;
module.exports.saveNewMsg = saveNewMsg;
