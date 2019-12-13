const express = require("express");
const smsRouter = express.Router();
const cors = require("cors");
const client = require("twilio")(
  "AC23e0e92198924bdc7a97fd0e07d26d25",
  "e98e253b573927e3e765dcced41039e3"
);

smsRouter.use(cors());


const send = (pass, num, adminName) => {
  // console.log("Enter send")
  // client.validationRequests
  // .create({friendlyName: adminName, phoneNumber: num})
  // .then(validation_request => {
  //   console.log(validation_request);
  //   console.log("HHIIIIII");
  //     }
  //   );
  client.validationRequests
  .create({friendlyName: adminName, phoneNumber: num})
  .then(validation_request => console.log(validation_request));

  client.messages
    .create({
      from: "+14259472026",
      to: num,
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
