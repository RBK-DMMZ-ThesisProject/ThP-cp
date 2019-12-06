const express = require("express");
const mRouter = express.Router();
const db = require("../database/db");
const cors = require("cors");
mRouter.use(cors());
//Api that adds a new profile the  ServiceProvider table
mRouter.post("/addNewProfile", (req, res) => {
    var data = { "avatarSource": "avatar", "birthdate": "2019-12-06T11:46:43.195Z", "category": "Carpenter", "email": "Zihna-19@hotmail.com ", "familyName": "Dggghh", "firstName": "Dfgg", "phoneNum": "2345", "sampleWorkImg": "sw", "serverDesription": "Dhbbnn" }
    db.saveNewProfile(data);
    res.status(200).send('hello');

    //  db.saveNewProfile(req.body);
    // res.json(req.body);
});

module.exports = mRouter;
