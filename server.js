const express = require("express");
const request = require("supertest");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
console.log(process.env);
app.use(express.static(__dirname + "/"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/test", (req, res) => {
  res.status(200).send("hello");
});
app.use(cors());
app.use(pino);
app.use("/mobileApi", require("./routes/mobile.js"));
app.use("/auth", require("./routes/auth.js"));
app.use("/smsApi", require("./routes/sms.js"));
app.use(require("./routes"));
app.use("/admins", require("./routes/admin.js"));
const PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("admin/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "admin", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
