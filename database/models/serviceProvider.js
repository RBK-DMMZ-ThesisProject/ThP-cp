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
  userWorkImg: Array,
  ServiceCategory: String,
  rating: Number, //from 1-5
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
let saveNewProfile = data => {
  var newProvider = new ServiceProvider({
    userName: data.firstName + " " + data.familyName,
    dateOfBirth: new Date(data.birthdate),
    email: data.email,
    userMobileNum: data.phoneNum,
    userImg: data.avatarSource,
    userWorkImg: [data.sampleWorkImg],
    ServiceCategory: data.category,
    ServiceDescription: data.serverDesription,
    ProfileState: 0, //(0 (Default New Profile),1 (under Check),2 (approved)).
    ProfileNotes: ""
  });
  console.log(newProvider);
  newProvider.save(function(err, data) {
    if (err) {
      console.log("error saving", err);
    }
    console.log("profile saved in db", data);
  });
};
module.exports.saveNewProfile = saveNewProfile;
module.exports.ServiceProvider = ServiceProvider;
