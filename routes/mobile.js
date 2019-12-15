const express = require("express");
const mRouter = express.Router();
const db = require("../database/db");
const cors = require("cors");
const jwt_decode = require("jwt-decode");
mRouter.use(cors());
const jwt = require("jsonwebtoken");
const config = require('../config');
//Api that adds a new profile to the  ServiceProvider table
mRouter.post("/addNewProfile", (req, res) => {
  db.saveNewProfile(req.body, function (err, user) {
    if (err) {
      res.status(200).json({ msg: 'not saved', err: err });
    }
    res.status(200).json({ msg: "saved" });
  });
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
  const decoded = jwt_decode(req.body.customerID);
  var newReview = new db.CustomerReviews({
    serviceproviderid: req.body.serviceproviderid,
    review: req.body.review,
    customerID: decoded._id
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
  const decoded = jwt_decode(req.body.customerID);
  db.SpHires.find({
    customerID: decoded._id
  }).then(async hiers => {
    var sProviders = [];
    for (var i = 0; i < hiers.length; i++) {
      await db.ServiceProvider.find({
        _id: hiers[i].serviceProviderID
      })
        .select("userName userImg")
        .then(sProvider => {
          sProviders.push({
            userName: sProvider[0].userName,
            userImg: sProvider[0].userImg
          });
        });
    }
    res.json(sProviders);
  });
});

mRouter.post("/customersHistory", (req, res) => {
  //const decoded = jwt_decode(req.body.customerID);
  db.SpHires.find({
    serviceProviderID: req.body.serviceProviderID
  }).then(async hiers => {
    console.log("hiers", hiers);
    var customers = [];
    for (var i = 0; i < hiers.length; i++) {
      await db.User.find({
        _id: hiers[i].customerID
      })
        .select("userName")
        .then(user => {
          console.log("user", user);
          customers.push(user[0].userName);
        });
    }
    console.log("customers", customers);
    res.json(customers);
  });
});
//Api that adds new favorite for specific user
mRouter.post("/addfavorite", (req, res) => {
  //const decoded = jwt_decode(req.body.customerID);
  var newfavorite = new db.Favorites({
    serviceProviderID: req.body.serviceproviderid,
    customerID: req.body.customerID
  });
  newfavorite.save().then(faves => {
    res.json(faves);
  });
});

//Api that returns alist of  the favorites for specific user
mRouter.post("/favorites", (req, res) => {
  const decoded = jwt_decode(req.body.customerID);
  db.Favorites.find({
    customerID: decoded._id
  }).then(async faves => {
    console.log(faves);
    var favorites = [];
    for (var i = 0; i < faves.length; i++) {
      await db.ServiceProvider.find({
        _id: faves[i].serviceProviderID
      })
        .select("userName userImg")
        .then(sProvider => {
          favorites.push({
            userName: sProvider[0].userName,
            userImg: sProvider[0].userImg
          });
        });
    }
    res.json(favorites);
  });
});

//Api that updates the hire state for specific service provider
mRouter.post("/hasProfile", (req, res) => {
  var result = { result: false };
  var decoded = jwt.verify(req.body.userToken, config.JWT_SECRET);
  result.email = decoded.email;
  db.ServiceProvider.find({
    email: decoded.email
  }).then(sProvider => {
    res.json(sProvider);
    if (sProvider.length > 0) {
      result.result = true;
    }
    // res.json(result);
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
