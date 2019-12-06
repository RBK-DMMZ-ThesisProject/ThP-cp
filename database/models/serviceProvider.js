var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var counter = 4;
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
  counter++;
  var newProvider = new ServiceProvider({
    id: counter,
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
  newProvider.save(function (err, data) {
    if (err) {
      console.log('error saving', err);
    }
    console.log('profile saved in db', data);
  });
};
module.exports.saveNewProfile = saveNewProfile;
module.exports.ServiceProvider = ServiceProvider;
