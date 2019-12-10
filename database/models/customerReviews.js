var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var customerReviewsSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  customerID: Number,
  serviceproviderid: String,
  review: String,
  rate: Number, //from 1-5
  dataAdded: {
    type: Date,
    default: Date.now
  }
});

var CustomerReviews = mongoose.model("customerreview", customerReviewsSchema);

module.exports = CustomerReviews;
