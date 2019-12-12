var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var chatsSchema = new Schema({
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

var Chats = mongoose.model("chat", chatsSchema);

module.exports = Chats;
