const express = require("express");
const mRouter = express.Router();
const db = require("../database/db");
const cors = require("cors");
const jwt_decode = require("jwt-decode");
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
  let profil;
  let rates = [];
  db.ServiceProvider.find({ ServiceCategory: req.body.ServiceCategory })
    .select("_id userName  userImg")
    .then(async profils => {
      profil = profils;
      for (var i = 0; i < profil.length; i++) {
        await db.CustomerReviews.find({
          serviceproviderid: profil[i]._id
        })
          .select("rate")
          .then(ratings => {
            console.log(ratings);
            var sum = 0;
            var counter = 0;
            for (var j = 0; j < ratings.length; j++) {
              if (ratings[j].rate) {
                counter++;
                sum += ratings[j].rate;
              }
            }
            if (ratings.length !== 0) {
              rate = sum / counter;
            } else {
              rate = 0;
            }
            rates.push(rate);
          });
      }
      res.json({ profil: profil, rates: rates });
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
  const decoded = jwt_decode(req.body.customerID);
  var newHire = new db.SpHires({
    serviceProviderID: req.body.serviceproviderid,
    customerID: decoded._id
  });
  newHire.save().then(info => {
    res.json(info);
  });
});

//Api that updates the hire state for specific service provider
mRouter.post("/hiersHistory", (req, res) => {
  //const decoded = jwt_decode(req.body.customerID);
  db.SpHires.find({
    customerID: req.body.customerID
  }).then(async hiers => {
    var sProviders = [];
    for (var i = 0; i < hiers.length; i++) {
      await db.ServiceProvider.find({
        _id: hiers[i].serviceProviderID
      })
        .select("userName")
        .then(sProvider => {
          console.log(sProvider);
          sProviders.push(sProvider[0].userName);
        });
    }
    //console.log(sProviders);
    res.json(sProviders);
  });
});
//Api that updates the hire state for specific service provider
mRouter.post("/hasProfile", (req, res) => {
  var result = { result: false };
  db.ServiceProvider.find({
    email: req.body.email
  }).then(sProvider => {
    if (sProvider.length) {
      result = { result: true };
    }
    res.json(result);
  });
});

//Api that save new chates for specific service provider
// mRouter.post("/addchats", (req, res) => {
//   console.log(req.body);
//   db.Chats.find({
//     serviceProviderID: req.body.serviceProviderID
//   }).then(chats => {
//     if (!chats) {
//       db.Chats.saveNewMsg(req.body);
//       db.Chats.saveNewChat(req.body);
//     } else {
//       db.Chats.saveNewMsg(req.body); //i want to return the msg id
//       for (var i = 0; i < chats.length; i++) {
//         if (chats[i].customerID === req.body.customerID) {
//         }
//       }
//     }
//   });
// });

module.exports = mRouter;
