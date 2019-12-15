var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var favoritesSchema = new Schema({
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

var Favorites = mongoose.model("favorite", favoritesSchema);

module.exports = Favorites;
