const express = require("express");
const mRouter = express.Router();
const db = require("../database/db");
const cors = require("cors");
mRouter.use(cors());

//Api that adds a new profile to the  ServiceProvider table
mRouter.post("/addNewProfile", (req, res) => {
  db.saveNewProfile(req.body);
  res.status(200).json({ msg: "saved" });
});

//Api that gets the profil from the ServiceProvider table
mRouter.post("/profil", (req, res) => {
  db.ServiceProvider.find({ _id: req.body.id }).then(profil => {
    res.json(profil);
  });
});

//Api that gets the useres for specific catogery
mRouter.post("/getProfiles", (req, res) => {
  let profil, rate;
  db.ServiceProvider.find({ ServiceCategory: req.body.ServiceCategory })
    .select("_id userName  userImg")
    .then(async profils => {
      console.log(profils);
      profil = profils;
      for (var i = 0; i < profil.length; i++) {
        await db.CustomerReviews.find({
          serviceproviderid: profil[i]._id
        })
          .select("rate")
          .then(ratings => {
            var sum = 0;
            var counter = 0;
            for (var j = 0; j < ratings.length; j++) {
              if (ratings[j].rate) {
                counter++;
                sum += ratings[j].rate;
              }
            }
            // notice not all ratings has rate key
            if (ratings.length !== 0) {
              rate = sum / counter;
              profil[i]["rate"] = rate;
            } else {
              profil[i]["rate"] = 0;
            }
          });
        console.log("hhh", profil[0]["rate"]);
      }
      res.json(profil);
    });
});

//Api that gets the rates for specific service provider
mRouter.post("/getRate", (req, res) => {
  db.CustomerReviews.find({
    serviceproviderid: req.body.serviceproviderid
  })
    .select("rate")
    .then(info => {
      var sum = 0;
      for (var i = 0; i < info.length; i++) {
        sum += info[i].rate;
      }
      res.json(sum / info.length);
    });
});

//Api that gets the reviews for specific service provider
mRouter.post("/getReviews", (req, res) => {
  console.log(req.body.review);
  db.CustomerReviews.find({
    serviceproviderid: req.body.serviceproviderid
  })
    .select("review dataAdded")
    .then(info => {
      res.json(info);
    });
});

//Api that adds new reviews for specific service provider
mRouter.post("/addReviews", (req, res) => {
  console.log(req.body.serviceproviderid);
  var newReview = new db.CustomerReviews({
    serviceproviderid: req.body.serviceproviderid,
    review: req.body.review,
    customerID: req.body.customerID
  });
  newReview.save().then(info => {
    res.json(info);
  });
});

//Api that updates the hire state for specific service provider
mRouter.post("/addHiers", (req, res) => {
  var newHire = new db.SpHires({
    serviceproviderid: req.body.serviceproviderid,
    customerID: req.body.customerID
  });
  newHire.save().then(info => {
    res.json(info);
  });
});

//Api that save new chates for specific service provider
mRouter.post("/addchats", (req, res) => {
  console.log(req.body);
  console.log(req.body.serviceProviderID);
  db.Chats.findOne({
    serviceProviderID: req.body.serviceProviderID
  }).then(chats => {
    if (!chats) {
      var newChat = new db.Chats({
        serviceProviderID: req.body.serviceProviderID,
        customerID: req.body.customerID
      });
      console.log(newChat);
      newChat.save();
    }
  });
});

module.exports = mRouter;