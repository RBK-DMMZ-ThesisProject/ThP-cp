const express = require("express");
const smsRouter = express.Router();
const cors = require("cors");
const client = require("twilio")(
  "AC7ed2326eddd691bf5a0e898b81920aac",
  "c604964348432ec65408b3bfe7279079"
);

smsRouter.use(cors());


const send = (pass) => {
    client.messages
      .create({
        from: "+12015142340",
        to: "+962790054364",
        body: "You have become an Admin. Your password is " + pass
      })
      .then(() => {
        console.log("success");
      })
      .catch(err => {
        console.log(err);
      });

}


smsRouter.post("/smsMessages", (req, res) => {
  // console.log(req.body.to, "TOOOOO")
  // console.log(typeof(req.body.text), "TEEEXXXTTT")
  res.header("Content-Type", "application/json");
  client.messages
    .create({
      from: "+12015142340",
      to: req.body.to,
      body: req.body.msgText
    })
    .then(() => {
      console.log("success");
    })
    .catch(err => {
      console.log(err);
    });
});




 module.exports.send = send;
module.exports.smsRouter = smsRouter;
