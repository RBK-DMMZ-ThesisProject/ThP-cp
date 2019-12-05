var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var customerReviewsSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  customerID: Number,
  serviceProviderID: Number,
  review: String,
  rate: Number, //from 1-5
  dataAdded: {
    type: Date,
    default: Date.now
  }
});

var CustomerReviews = mongoose.model("customerReview", customerReviewsSchema);

module.exports = CustomerReviews;
