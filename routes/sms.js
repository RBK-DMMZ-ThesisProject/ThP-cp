const express = require("express");
const smsRouter = express.Router();
const cors = require("cors");
const client = require("twilio")(
  process.env.TWILIO_ACCOUT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

smsRouter.use(cors());

smsRouter.post("/smsMessages", (req, res) => {
  console.log("heloooo");
  res.header("Content-Type", "application/json");
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.to,
      body: "Youre Profile was successfully add ^__^"
    })
    .then(() => {
      console.log("succsee");
    })
    .catch(err => {
      console.log(err);
    });
});
module.exports = smsRouter;
