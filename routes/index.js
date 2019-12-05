const express = require("express");
const router = express.Router();
const db = require("../database/db");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

process.env.SECRET_KEY = "secret";

router.get("/test", async (req, res) => {
  res.json({ message: "pass!" });
});

//Api that gets all the newprofils from the ServiceProvider table
router.get("/newprofils", (req, res) => {
  db.ServiceProvider.find({ ProfileState: 0 }).then(newprofils => {
    var nameArr = [];
    for (var i = 0; i < newprofils.length; i++) {
      var temp = {
        userName: newprofils[i].userName,
        id: newprofils[i].id
      };
      nameArr.push(temp);
    }
    res.json(nameArr);
  });
});

//Api that gets all the underchickprofils from the ServiceProvider table
router.get("/profils", (req, res) => {
  db.ServiceProvider.find({ ProfileState: 1 }).then(profils => {
    var nameArr = [];
    for (var i = 0; i < profils.length; i++) {
      var temp = {
        userName: profils[i].userName,
        id: profils[i].id
      };
      nameArr.push(temp);
    }
    res.json(nameArr);
  });
});

//Api that gets all the acceptedprofils from the ServiceProvider table
router.get("/acceptedProfils", (req, res) => {
  db.ServiceProvider.find({ ProfileState: 2 }).then(profils => {
    var nameArr = [];
    for (var i = 0; i < profils.length; i++) {
      var temp = {
        userName: profils[i].userName,
        id: profils[i].id
      };
      nameArr.push(temp);
    }
    res.json(nameArr);
  });
});
//Api that gets the profil from the ServiceProvider table
router.get("/profil", (req, res) => {
  db.ServiceProvider.find({ id: req.body.data }).then(profil => {
    res.json(profil);
  });
});

//Api that updates the state in the  ServiceProvider table
router.post("/updateState", (req, res) => {
  console.log(req.body.id);
  db.ServiceProvider.update(
    { id: req.body.id },
    { $set: { ProfileState: 2 } }
  ).then(profile => {
    res.json(profile);
  });
});
//Api that updates the ProfileNotes in the  ServiceProvider
router.post("/updateProfileNotes", (req, res) => {
  console.log(req.body.id);
  db.ServiceProvider.update(
    { id: req.body.id },
    { $set: { ProfileNotes: req.body.ProfileNotes } }
  ).then(profile => {
    res.json(profile);
  });
});

//Api that adds a new profile the  ServiceProvider table
router.post("/addNewProfile", (req, res) => {
  db.ServiceProvider.msave(req.body);
});

// //API for the log in authintecation
router.post("/adminLogin", (req, res) => {
  db.Admin.findOne({
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
          res.send(token);
        } else {
          res.json({ error: "wrong password " });
        }
      } else {
        res.json({ error: "user  not exist" });
      }
    })
    .catch("error");
});

// //Api that gits all the information from the favorites table dependding on the data sent
// router.get("/favorites", (req, res) => {
//   db.Favorites.find({ serviceProviderID: req.data }).then(items => {
//     res.json(items);
//   });
// });

// //Api that gits all the information from the CustomerReviews table dependding on the data sent
// router.get("/reviews", (req, res) => {
//   db.CustomerReviews.find({ id: req.data }).then(items => {
//     res.json(items);
//   });
// });

// //Api that saves information in the CustomerReviews table dependding on the data sent
// router.post("/reviews", (req, res) => {
//   db.CustomerReviews.save(req.data);
// });

// //Api that saves  information in the ServiceProvider table dependding on the data sent
// router.post("/newHandy", (req, res) => {
//   db.ServiceProvider.save(req.data);
// });

// //Api that saves  information in the Customers table dependding on the data sent
// router.post("/newCustomer", (req, res) => {
//   db.Customers.save(req.data);
// });

// //Api that gets  information from the Customers table dependding on the data sent
// router.get("/customer", (req, res) => {
//   db.Customers.find(req.data);
// });

// //Api that saves  information in the Msges table dependding on the data sent
// router.post("/newCustomer", (req, res) => {
//   db.Msges.save(req.data);
// });

// //Api that gets  information from the Msges table dependding on the data sent
// router.get("/customer", (req, res) => {
//   db.Msges.find(req.data);
// });

module.exports = router;
