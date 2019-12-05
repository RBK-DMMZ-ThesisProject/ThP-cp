const express = require("express");
const request = require("supertest");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");

app.use(express.static(__dirname + "/"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require("./routes"));
app.listen(8001, () => {
  console.log(`Server running at: http://localhost:8001/`);
});
module.exports = app;
