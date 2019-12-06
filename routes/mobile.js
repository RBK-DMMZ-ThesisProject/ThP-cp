const express = require("express");
const mRouter = express.Router();
const db = require("../database/db");
const cors = require("cors");
mRouter.use(cors());
//Api that adds a new profile the  ServiceProvider table
mRouter.post("/addNewProfile", (req, res) => {
    console.log('reached', req.body);
    // db.saveNewProfile(req.body);
    res.send('profile saved');
});

module.exports = mRouter;
