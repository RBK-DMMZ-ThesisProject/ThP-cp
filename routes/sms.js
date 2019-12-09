const express = require("express");
const smsRouter = express.Router();
const cors = require("cors");
const client = require("twilio")(
  "AC084f99ac4b6c70a1f38ba0d5a6a46dad",
  "6d56a0e4fc0f623e1089a24ae247bfb1"
);

smsRouter.use(cors());

smsRouter.post("/smsMessages", (req, res) => {
  console.log("heloooo");
  res.header("Content-Type", "application/json");
  client.messages
    .create({
      from: "+19738162205",
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
