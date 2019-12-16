const express = require("express");
const router = express.Router();
const db = require("../database/db");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

process.env.SECRET_KEY = "secret";
//API for the log in authintecation
router.post("/adminLogin", (req, res) => {
    db.User.findOne({
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

router.post("/userSignUp", (req, res) => {
    db.User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (!user) {
                var userInfo = {
                    userName: req.body.userName,
                    email: req.body.email,
                    mobileNO: req.body.mobileNO,
                };

                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        res.json({ msg: 'Try another password', error: err });
                    }
                    userInfo.password = hash;
                    var user = new db.User(userInfo);
                    user.save().then(user => {
                        const payload = {
                            _id: user._id,
                            userName: user.userName,
                            email: user.email,
                            password: user.password
                        };
                        let token = jwt.sign(payload, process.env.SECRET_KEY, {
                            expiresIn: "24h"
                        });
                        res.json({ token: token, msg: 'Signed up successfully' });
                    }).catch(err => {
                        res.json({ msg: "An Error Ocuured , Please Try again later", error: err });
                    });
                });
            } else {
                res.json({ msg: "Email already exists", error: '' });
            }
        })
        .catch(err => {
            res.json({ msg: "An Error Ocuured , Please Try again later", error: err });
        });

});

module.exports = router;