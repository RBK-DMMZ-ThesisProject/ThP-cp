var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var chatsSchema = new Schema({
  id: {
    type: Number
  },
  customerID: String,
  serviceProviderID: String,
  msgsID: [String],
  dataAdded: {
    type: Date,
    default: Date.now
  }
});

var Chats = mongoose.model("chat", chatsSchema);

let saveNewChat = nchat => {
  var newChat = new Chats({
    customerID: nchat.customerID,
    serviceProviderID: nchat.serviceProviderID,
    msgsID: nchat.message
  });
  console.log(newChat);
  newChat.save(function(err, data) {
    if (err) {
      console.log("error saving", err);
    }
    console.log("profile saved in db", data);
  });
};

module.exports.saveNewChat = saveNewChat;
module.exports.Chats = Chats;
