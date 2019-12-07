const express = require("express");
const mRouter = express.Router();
const db = require("../database/db");
const cors = require("cors");
mRouter.use(cors());
//Api that adds a new przzofile the  ServiceProvider table
mRouter.post("/addNewProfile", (req, res) => {
    db.saveNewProfile(req.body);
    res.status(200).json({ msg: 'saved' });

    //  db.saveNewProfile(req.body);
    // res.json(req.body);
});

module.exports = mRouter;
