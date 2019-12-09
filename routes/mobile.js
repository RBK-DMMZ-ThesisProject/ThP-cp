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
mRouter.get("/getProfiles", (req, res) => {
  db.ServiceProvider.find({ ServiceCategory: req.body.body })
    .select("_id userName  userImg ")
    .then(profils => {
      res.send(profils);
    });
});
module.exports = mRouter;
