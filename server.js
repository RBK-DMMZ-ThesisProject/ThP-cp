const express = require("express");
const request = require("supertest");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");

// app.use(express.static(__dirname + "/"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/mobileApi/addNewProfile', (req, res) => {
  db.saveNewProfile(req.body);
  res.status(200).json(req.body);
})
app.use('/mobileApi ', require("./routes/mobile.js"));
app.use(require("./routes"));

const PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('admin/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'admin', 'build', 'index.html'));
  })
}

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
