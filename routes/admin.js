//Api for admins operations

const express = require("express");
const router = express.Router();
const db = require("../database/db");
const generatePassword = require('generate-password');
const bcrypt = require("bcryptjs");


// @Description: get admin users from the database
router.get("/getAdmins", (req, res) => {
    db.Admin.find({}).select(
        "adminName _id state "
    ).then(admins => {
        res.json(admins);
    });
});

// @Description: add admin users to the database
router.post("/addAdmin", (req, res) => {
    var userInfo = req.body;
    var password = generatePassword.generate({
        length: 10,
        numbers: true
    });
    // create the hashed password and save 
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) res.json({ msg: 'error while hashing password', error: err })
        userInfo.password = hash;
        var user = new db.Admin(userInfo);
        user.save().then(result => {
            // send password to the user as an sms ????????
            res.json({ msg: 'user saved' });
        })
            .catch(err => res.json({ msg: 'error while saving', error: err }));
    });
});
router.post("/setAdminState", (req, res) => {
    db.Admin.update(
        { _id: req.body.id },
        { $set: { state: req.body.state } }
    ).then(result => {
        res.json({ msg: 'user state updated' });
    }).catch(err => res.json({ msg: 'user state not updated', error: err }));

});

module.exports = router;