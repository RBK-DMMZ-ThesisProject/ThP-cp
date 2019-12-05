var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var serviceProviderSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  userName: String,
  dateOfBirth: Date,
  email: String,
  userMobileNum: String,
  userImg: String,
  userWorkImg: [],
  ServiceCategory: String,
  ServiceDescription: String,
  ProfileState: Number, //(0 (Default New Profile),1 (under Check),2 (approved)).
  ProfileNotes: String,
  dataAdded: {
    type: Date,
    default: Date.now
  }
});

const ServiceProvider = mongoose.model(
  "serviceprovider",
  serviceProviderSchema
);
let msave = data => {
  var newProvider = ServiceProvider({
    id: data.id,
    userName: data.userName,
    dateOfBirth: data.dateOfBirth,
    email: data.email,
    userMobileNum: data.userMobileNum,
    userImg: data.userImg,
    userWorkImg: data.userWorkImg,
    ServiceCategory: data.ServiceCategory,
    ServiceDescription: data.ServiceDescription,
    ProfileState: 0, //(0 (Default New Profile),1 (under Check),2 (approved)).
    ProfileNotes: ""
  });
  console.log(newProvider);
  newProvider.save(function(err, data) {
    if (err) {
      console.log(err);
    }
  });
};
module.exports.msave = msave;

module.exports.ServiceProvider = ServiceProvider;
