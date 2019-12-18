const express = require("express");
const mRouter = express.Router();
const db = require("../database/db");
const cors = require("cors");
const jwt_decode = require("jwt-decode");
mRouter.use(cors());
const jwt = require("jsonwebtoken");
const config = require("../config");

//Api that adds a new profile to the  ServiceProvider table
mRouter.post("/addNewProfile", (req, res) => {
  db.saveNewProfile(req.body, function (err, user) {
    if (err) {
      res.status(200).json({ msg: "not saved", err: err });
    }
    res.status(200).json({ msg: "saved" });
  });
});

//Api that gets the profil from the ServiceProvider table
mRouter.post("/profil", (req, res) => {
  var response = {};
  if (req.body.token) {
    var decoded = jwt.verify(req.body.token, config.JWT_SECRET);
    db.ServiceProvider.find({ _id: req.body.serviceproviderid }).then(
      profil => {
        response.profile = profil[0];
        db.Favorites.find({
          customerID: decoded._id,
          serviceProviderID: req.body.serviceproviderid
        }).then(favs => {
          if (favs.length !== 0) {
            response.favs = true;
          } else {
            response.favs = false;
          }
          res.json(response);

        });
      }
    );
  } else {
    db.ServiceProvider.find({ _id: req.body.serviceproviderid }).then(
      profil => {
        response.profile = profil[0];
        res.json(response);
      }
    );
  }
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
  var decoded = jwt.verify(req.body.token, config.JWT_SECRET);
  var newReview = new db.CustomerReviews({
    serviceproviderid: req.body.serviceproviderid,
    review: req.body.review,
    customerID: decoded._id,
    rating: req.body.rate
  });
  newReview.save().then(info => {
    res.json(info);
  });
});

//Api that updates the hire state for specific service provider
mRouter.post("/addHiers", (req, res) => {
  var decoded = jwt.verify(req.body.customerID, config.JWT_SECRET);
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
  var decoded = jwt.verify(req.body.customerID, config.JWT_SECRET);
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
  var decoded = jwt.verify(req.body.customerID, config.JWT_SECRET);
  var newfavorite = new db.Favorites({
    serviceProviderID: req.body.serviceproviderid,
    customerID: decoded._id
  });
  newfavorite.save().then(faves => {
    res.json(faves);
  });
});

//Api that delete from favorite for specific user
mRouter.post("/deletefavorite", (req, res) => {
  var decoded = jwt.verify(req.body.customerID, config.JWT_SECRET);
  console.log(decoded);
  db.Favorites.deleteOne({
    serviceProviderID: req.body.serviceproviderid,
    customerID: decoded._id
  }).then(deleted => {
    res.json(deleted);
  });
});

//Api that returns alist of  the favorites for specific user
mRouter.post("/favorites", (req, res) => {
  var decoded = jwt.verify(req.body.customerID, config.JWT_SECRET);
  db.Favorites.find({
    customerID: decoded._id
  }).then(async faves => {
    console.log(faves);
    var favorites = [];
    for (var i = 0; i < faves.length; i++) {
      await db.ServiceProvider.find({
        _id: faves[i].serviceProviderID
      })
        .select("_id userName userImg ServiceCategory")
        .then(sProvider => {
          favorites.push({
            id: sProvider[0]._id,
            userName: sProvider[0].userName,
            userImg: sProvider[0].userImg,
            ServiceCategory: sProvider[0].ServiceCategory
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
    if (sProvider.length > 0) {
      result.result = true;
      result.profileId = sProvider[0]._id;
    }
    res.json(result);
  });
});

module.exports = mRouter;
