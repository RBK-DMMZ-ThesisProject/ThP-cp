const express = require("express");
const smsRouter = express.Router();
const cors = require("cors");
const client = require("twilio")(
  "ACd1361ffa0ccce1b9fae41dad66e843a3",
  "05f9d68a24cc3185d45e1f95fcb33e8f"
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
      from: "+18329245647",
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
      from: "+18329245647",
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
