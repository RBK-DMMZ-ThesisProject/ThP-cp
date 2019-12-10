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

//Api that gets the useres for specific catogery
mRouter.post("/getProfiles", (req, res) => {
  db.ServiceProvider.find({ ServiceCategory: req.body.ServiceCategory })
    .select("_id userName  userImg rate")
    .then(profils => {
      res.json(profils);
    });
});

//Api that gets the useres for specific catogery
mRouter.post("/gitReview", (req, res) => {
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
