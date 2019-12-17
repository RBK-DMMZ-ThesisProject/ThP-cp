const express = require("express");
const pRouter = express.Router();
const db = require("../database/db");
const cors = require("cors");
const secret = require("../config.js");
pRouter.use(cors());
const stripe = require("stripe")(secret.STRIPE_SECRET);

pRouter.post("/doPayment/", (req, res) => {
    return stripe.charges
        .create({
            amount: req.body.amount, // Unit: cents
            currency: "eur",
            source: req.body.tokenId,
            description: "Test payment"
        })
        .then(result => res.status(200).json(result));
});
module.exports = pRouter;
