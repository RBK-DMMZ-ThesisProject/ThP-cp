const express = require("express");
const router = express.Router();
const db = require("../database/db");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

process.env.SECRET_KEY = "secret";
//API for the log in authintecation
router.post("/adminLogin", (req, res) => {
    db.Admin.findOne({
        email: req.body.email
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const payload = {
                        _id: user._id,
                        userName: user.userName,
                        email: user.email,
                        password: user.password
                    };
                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: "24h"
                    });
                    res.json({ token: token, msg: 'allowed' });
                } else {
                    res.json({ msg: "Wrong password" });
                }
            } else {
                res.json({ msg: "Not allowed" });
            }
        })
        .catch(err => {
            console.log(err);
            res.json({ msg: "err", error: err });
        });
});
module.exports = router;