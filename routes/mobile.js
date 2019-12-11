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
router.post("/profil", (req, res) => {
  db.ServiceProvider.find({ _id: req.query.id }).then(profil => {
    res.json(profil);
  });
});

//Api that gets the useres for specific catogery
mRouter.post("/getProfiles", (req, res) => {
  db.ServiceProvider.find({ ServiceCategory: req.body.ServiceCategory })
    .select("_id userName  userImg rate")
    .then(profils => {
      res.json(profils);
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
module.exports = mRouter;

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
// mRouter.post("/addchats", (req, res) => {
//   console.log(req.body.serviceProviderID);
//   db.Chats.findOne({
//     serviceProviderID: req.body.serviceProviderID
//   }).then(chats => {
//     if (!chats) {
//       var newChat = new db.Chats({
//         serviceProviderID: req.body.serviceProviderID,
//         customerID: req.body.customerID,
//         messages: [
//           { text: req.body.messages.text, sendBuy: req.body.messages.sendBuy }
//         ]
//       });
//       newChat.save();
//     } else {
//       for (var i = 0; i < chats.length; i++) {
//         if (chats[i].customerID === req.body.customerID) {
//           chats[i].messages.push({
//             text: req.body.messages.text,
//             sendBuy: req.body.messages.sendBuy
//           });
//         } else {
//           var newChat = new db.Chats({
//             serviceProviderID: req.body.serviceProviderID,
//             customerID: req.body.customerID,
//             messages: [
//               {
//                 text: req.body.messages.text,
//                 sendBuy: req.body.messages.sendBuy
//               }
//             ]
//           });
//           newChat.save();
//         }
//       }
//     }
//   });
// });

module.exports = mRouter;
